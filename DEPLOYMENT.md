# 🚀 GitHub ve Vercel Deployment Kılavuzu

Bu kılavuz, projeyi GitHub'a yükleyip Vercel'de yayınlamak için adım adım talimatlar içerir.

## 📋 Ön Gereksinimler

- GitHub hesabı
- Vercel hesabı (ücretsiz)
- Git kurulu

## 🔧 Adım 1: Git Repository Oluşturma

### 1.1 Projeyi Git ile başlatın

```bash
# Git repository'yi başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit'i yap
git commit -m "İlk commit: Apartman şikayet sistemi"
```

### 1.2 GitHub'da yeni repository oluşturun

1. GitHub.com'a gidin ve giriş yapın
2. Sağ üst köşedeki "+" butonuna tıklayın
3. "New repository" seçeneğini seçin
4. Repository adını girin (örn: `apartman-sikayet-sistemi`)
5. Public veya Private seçin
6. **"Initialize this repository with a README" seçeneğini işaretlemeyin** (zaten README var)
7. "Create repository" butonuna tıklayın

### 1.3 GitHub'a push edin

GitHub'da repository oluşturduktan sonra, size gösterilen komutları kullanın:

```bash
# GitHub repository URL'inizi ekleyin (örnek)
git remote add origin https://github.com/KULLANICI_ADINIZ/apartman-sikayet-sistemi.git

# Branch adını main olarak ayarlayın
git branch -M main

# GitHub'a push edin
git push -u origin main
```

## 🌐 Adım 2: Vercel'de Deployment

### 2.1 Vercel hesabı oluşturma

1. [Vercel.com](https://vercel.com) adresine gidin
2. "Sign Up" butonuna tıklayın
3. GitHub hesabınızla giriş yapın (önerilir)

### 2.2 Projeyi Vercel'e import etme

1. Vercel dashboard'una gidin
2. "Add New..." butonuna tıklayın
3. "Project" seçeneğini seçin
4. GitHub repository'nizi seçin
5. "Import" butonuna tıklayın

### 2.3 Proje Ayarları

Vercel otomatik olarak projeyi algılayacaktır. Ayarları kontrol edin:

- **Framework Preset:** Other (veya otomatik algılanan)
- **Root Directory:** `./` (kök dizin)
- **Build Command:** `cd frontend && npm install && npm run build`
- **Output Directory:** `frontend/build`
- **Install Command:** `npm install && cd frontend && npm install`

### 2.4 Environment Variables (Opsiyonel)

Şu an için environment variable gerekmez, ancak ileride veritabanı eklemek isterseniz:

1. Project Settings > Environment Variables
2. Gerekli değişkenleri ekleyin

### 2.5 Deploy

1. "Deploy" butonuna tıklayın
2. Vercel projeyi build edip deploy edecek (birkaç dakika sürebilir)
3. Deployment tamamlandığında size bir URL verilecek (örn: `https://apartman-sikayet-sistemi.vercel.app`)

## ✅ Adım 3: Deployment Sonrası Kontrol

### 3.1 Uygulamayı Test Edin

1. Vercel'den aldığınız URL'e gidin
2. Kullanıcı görünümünde şikayet oluşturmayı deneyin
3. Yönetici görünümünde şikayetleri görüntülemeyi deneyin

### 3.2 Otomatik Deployment

Vercel, GitHub repository'nize her push yaptığınızda otomatik olarak yeniden deploy edecektir.

## 🔄 Güncelleme Yapmak İçin

```bash
# Değişiklikleri yapın
# ...

# Değişiklikleri commit edin
git add .
git commit -m "Yeni özellik eklendi"

# GitHub'a push edin
git push origin main
```

Vercel otomatik olarak yeni deployment başlatacaktır.

## ⚠️ Önemli Notlar

### Veri Kalıcılığı

**Şu anki sistemde veriler kalıcı değildir!** Vercel serverless functions her istekte sıfırlanır. Production için:

1. **MongoDB Atlas** (ücretsiz tier mevcut)
2. **PostgreSQL** (Vercel Postgres veya Supabase)
3. **Firebase Firestore**

gibi bir veritabanı kullanmanız önerilir.

### CORS Ayarları

Vercel'de CORS ayarları otomatik olarak yapılandırılmıştır. Ekstra bir ayar gerekmez.

### API Endpoints

Vercel'de API endpoint'leri `/api/` prefix'i ile çalışır:
- Production: `https://your-app.vercel.app/api/complaints`
- Development: `http://localhost:5000/api/complaints`

## 🐛 Sorun Giderme

### Build Hatası

- `package.json` dosyalarının doğru olduğundan emin olun
- Node.js versiyonunu kontrol edin (Vercel Settings > Node.js Version)

### API Çalışmıyor

- Vercel'de Functions sekmesinde hataları kontrol edin
- Browser console'da hataları kontrol edin
- Network tab'ında API isteklerini kontrol edin

### Frontend Çalışmıyor

- Build loglarını kontrol edin
- `frontend/build` klasörünün oluştuğundan emin olun

## 📞 Destek

Sorun yaşarsanız:
- Vercel dokümantasyonu: https://vercel.com/docs
- GitHub Issues: Repository'nizde issue açın




