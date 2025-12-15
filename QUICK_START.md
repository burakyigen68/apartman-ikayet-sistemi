# ⚡ Hızlı Başlangıç Kılavuzu

## 🚀 GitHub'a Yükleme (Git Kurulu Değilse)

### Git Kurulumu

1. [Git İndirme Sayfası](https://git-scm.com/download/win) adresinden Git'i indirin
2. Kurulumu tamamlayın (varsayılan ayarlar yeterli)
3. PowerShell'i **yönetici olarak** yeniden başlatın

### GitHub'a Yükleme Adımları

#### 1. GitHub'da Repository Oluşturun

1. [GitHub.com](https://github.com) → Giriş yapın
2. Sağ üstteki **"+"** → **"New repository"**
3. Repository adı: `apartman-sikayet-sistemi`
4. **Public** veya **Private** seçin
5. ⚠️ **"Initialize with README" işaretlemeyin**
6. **"Create repository"** tıklayın

#### 2. PowerShell'de Komutları Çalıştırın

```powershell
# Proje klasörüne gidin
cd "C:\Users\Cağrı Burak\Desktop\Yeni klasör (4)"

# Git repository başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "İlk commit: Apartman şikayet sistemi"

# GitHub repository URL'ini ekle (KULLANICI_ADINIZ'ı değiştirin)
git remote add origin https://github.com/KULLANICI_ADINIZ/apartman-sikayet-sistemi.git

# Branch adını main yap
git branch -M main

# GitHub'a push et
git push -u origin main
```

**Not:** İlk push'ta GitHub kullanıcı adı ve şifre/token istenecek.

#### 3. Personal Access Token (Gerekirse)

Şifre çalışmazsa:

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)"
3. Token'a isim verin: `vercel-deployment`
4. `repo` scope'unu işaretleyin
5. "Generate token" → Token'ı kopyalayın
6. Push yaparken şifre yerine token kullanın

## 🌐 Vercel'de Yayınlama

### 1. Vercel Hesabı

1. [Vercel.com](https://vercel.com) → "Sign Up"
2. **GitHub ile giriş yapın** (önerilir)

### 2. Projeyi Import Edin

1. Vercel Dashboard → **"Add New..."** → **"Project"**
2. GitHub repository'nizi seçin
3. **"Import"** tıklayın

### 3. Proje Ayarları (Otomatik Algılanır)

Vercel otomatik olarak şunları algılar:
- **Framework:** React
- **Root Directory:** `./`
- **Build Command:** `cd frontend && npm install && npm run build`
- **Output Directory:** `frontend/build`

### 4. Deploy

1. **"Deploy"** butonuna tıklayın
2. 2-3 dakika bekleyin
3. Deployment tamamlandığında URL alacaksınız: `https://apartman-sikayet-sistemi.vercel.app`

## ✅ Kontrol

1. Vercel'den aldığınız URL'e gidin
2. Uygulamanın çalıştığını kontrol edin
3. Şikayet oluşturmayı test edin

## 🔄 Güncelleme

Değişiklik yaptıktan sonra:

```powershell
git add .
git commit -m "Güncelleme açıklaması"
git push origin main
```

Vercel otomatik olarak yeniden deploy edecektir!

## 📞 Sorun mu Yaşıyorsunuz?

- **Build hatası:** Vercel Dashboard → Deployments → Logs'u kontrol edin
- **API çalışmıyor:** Browser Console'da hataları kontrol edin
- **Git push hatası:** Personal Access Token kullanın




