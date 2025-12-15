// Ana sunucu dosyası - Express server kurulumu
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware'ler - CORS ve JSON parse için
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Şikayet verilerini tutmak için basit bir array (gerçek uygulamada veritabanı kullanılmalı)
let complaints = [];
let complaintIdCounter = 1;

// Tüm şikayetleri getir (Yönetici için)
app.get('/api/complaints', (req, res) => {
  res.json(complaints);
});

// Kullanıcının şikayetlerini getir (kullanıcı ID'sine göre)
app.get('/api/complaints/user/:userId', (req, res) => {
  const userId = req.params.userId;
  const userComplaints = complaints.filter(c => c.userId === userId);
  res.json(userComplaints);
});

// Yeni şikayet oluştur
app.post('/api/complaints', (req, res) => {
  const { userId, userName, title, description, apartmentNumber } = req.body;
  
  // Yeni şikayet objesi oluştur
  const newComplaint = {
    id: complaintIdCounter++,
    userId,
    userName,
    title,
    description,
    apartmentNumber,
    status: 'beklemede', // Durumlar: beklemede, personele_atandi, cozuluyor, cozuldu
    assignedTo: null, // Personel adı
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    notes: [] // Yönetici notları
  };
  
  complaints.push(newComplaint);
  res.status(201).json(newComplaint);
});

// Şikayet durumunu güncelle (Yönetici işlemi)
app.put('/api/complaints/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { status, assignedTo, note } = req.body;
  
  const complaint = complaints.find(c => c.id === id);
  if (!complaint) {
    return res.status(404).json({ error: 'Şikayet bulunamadı' });
  }
  
  // Durum güncelleme
  if (status) {
    complaint.status = status;
  }
  
  // Personel atama
  if (assignedTo) {
    complaint.assignedTo = assignedTo;
  }
  
  // Not ekleme
  if (note) {
    complaint.notes.push({
      text: note,
      date: new Date().toISOString()
    });
  }
  
  complaint.updatedAt = new Date().toISOString();
  res.json(complaint);
});

// Şikayet detayını getir
app.get('/api/complaints/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const complaint = complaints.find(c => c.id === id);
  
  if (!complaint) {
    return res.status(404).json({ error: 'Şikayet bulunamadı' });
  }
  
  res.json(complaint);
});

// Frontend dosyalarını serve et (production için)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}

// Vercel için export (serverless function olarak çalışması için)
module.exports = app;

// Sadece development modunda sunucuyu başlat (Vercel otomatik yönetir)
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
  });
}

