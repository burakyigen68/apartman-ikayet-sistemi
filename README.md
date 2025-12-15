# 🏢 Apartman Şikayet Yönetim Sistemi

Modern ve kullanıcı dostu bir apartman şikayet yönetim sistemi. Kullanıcılar şikayet oluşturabilir, yöneticiler şikayetleri görüntüleyip personele atayabilir ve kullanıcılar şikayet durumlarını takip edebilir.

## ✨ Özellikler

- **Kullanıcı Özellikleri:**
  - Yeni şikayet oluşturma
  - Şikayetleri görüntüleme
  - Şikayet durumunu takip etme
  - Yönetici notlarını görüntüleme

- **Yönetici Özellikleri:**
  - Tüm şikayetleri görüntüleme
  - Şikayet durumunu güncelleme
  - Şikayetleri personele atama
  - Kullanıcılara not ekleme
  - Şikayetleri duruma göre filtreleme
  - İstatistikleri görüntüleme

## 🚀 Kurulum

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm run install-all
```

2. **Backend sunucusunu başlatın:**
```bash
npm start
```
veya geliştirme modu için:
```bash
npm run dev
```

3. **Frontend'i başlatın (yeni bir terminal penceresinde):**
```bash
cd frontend
npm start
```

4. Tarayıcınızda `http://localhost:3000` adresine gidin.

## 📁 Proje Yapısı

```
apartman-sikayet-sistemi/
├── server.js              # Backend API sunucusu (development)
├── api/
│   └── index.js           # Vercel serverless function (production)
├── package.json           # Backend bağımlılıkları
├── frontend/
│   ├── src/
│   │   ├── App.js         # Ana uygulama bileşeni
│   │   ├── components/
│   │   │   ├── UserView.js    # Kullanıcı görünümü
│   │   │   └── AdminView.js   # Yönetici görünümü
│   │   └── index.js       # React giriş noktası
│   └── package.json       # Frontend bağımlılıkları
├── vercel.json            # Vercel deployment yapılandırması
└── README.md
```

## 🔌 API Endpoints

- `GET /api/complaints` - Tüm şikayetleri getir
- `GET /api/complaints/user/:userId` - Kullanıcının şikayetlerini getir
- `GET /api/complaints/:id` - Belirli bir şikayeti getir
- `POST /api/complaints` - Yeni şikayet oluştur
- `PUT /api/complaints/:id` - Şikayet durumunu güncelle

## 📝 Kullanım

### Kullanıcı Görünümü
1. "Kullanıcı Görünümü" sekmesine geçin
2. "Yeni Şikayet Oluştur" butonuna tıklayın
3. Şikayet başlığı ve açıklamasını girin
4. "Şikayeti Gönder" butonuna tıklayın
5. Şikayetlerinizi ve durumlarını görüntüleyin

### Yönetici Görünümü
1. "Yönetici Görünümü" sekmesine geçin
2. Şikayetleri görüntüleyin ve filtreleyin
3. Bir şikayete tıklayarak detayları açın
4. Durumu güncelleyin, personele atayın ve not ekleyin
5. "Güncelle" butonuna tıklayın

## 🎨 Teknolojiler

- **Backend:** Node.js, Express.js
- **Frontend:** React.js
- **HTTP İstemcisi:** Axios
- **Stil:** CSS3 (Modern gradient ve animasyonlar)
- **Deployment:** Vercel

## 🚀 GitHub ve Vercel Deployment

Projeyi GitHub'a yükleyip Vercel'de yayınlamak için:

### Hızlı Başlangıç

1. **GitHub'a yükleme:**
   - Detaylı adımlar için: **[QUICK_START.md](./QUICK_START.md)** veya **[GITHUB_SETUP.md](./GITHUB_SETUP.md)**

2. **Vercel'de deploy:**
   - Detaylı adımlar için: **[DEPLOYMENT.md](./DEPLOYMENT.md)**

### Özet

```bash
# Git repository başlat
git init
git add .
git commit -m "İlk commit"

# GitHub'a push
git remote add origin https://github.com/KULLANICI_ADINIZ/apartman-sikayet-sistemi.git
git branch -M main
git push -u origin main
```

Sonra Vercel.com'da GitHub repository'nizi import edin, otomatik deploy edilecektir!

## 📌 Önemli Notlar

- Bu uygulama demo amaçlıdır ve veriler bellekte tutulmaktadır. Gerçek bir uygulamada veritabanı kullanılmalıdır.
- Vercel serverless functions'da veriler her istekte sıfırlanır. Production için MongoDB, PostgreSQL veya Firebase gibi bir veritabanı eklenmelidir.
- Güvenlik için authentication ve authorization eklenmelidir.
- Production için environment variables kullanılmalıdır.

## 👨‍💻 Geliştirme

Geliştirme modunda çalıştırmak için:
```bash
# Backend (nodemon ile otomatik yeniden başlatma)
npm run dev

# Frontend (hot reload)
cd frontend
npm start
```

## 📄 Lisans

ISC
