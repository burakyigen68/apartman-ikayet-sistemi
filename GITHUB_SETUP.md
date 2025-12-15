# 📦 GitHub'a Yükleme Adımları

## Hızlı Başlangıç

### 1. Git Repository Başlatma

PowerShell veya Terminal'de proje klasöründe şu komutları çalıştırın:

```bash
# Git repository'yi başlat
git init

# Tüm dosyaları staging area'ya ekle
git add .

# İlk commit'i yap
git commit -m "İlk commit: Apartman şikayet sistemi"
```

### 2. GitHub'da Repository Oluşturma

1. [GitHub.com](https://github.com) adresine gidin ve giriş yapın
2. Sağ üst köşedeki **"+"** butonuna tıklayın
3. **"New repository"** seçeneğini seçin
4. Repository bilgilerini doldurun:
   - **Repository name:** `apartman-sikayet-sistemi` (veya istediğiniz isim)
   - **Description:** "Apartman şikayet yönetim sistemi"
   - **Public** veya **Private** seçin
   - ⚠️ **"Initialize this repository with a README" seçeneğini işaretlemeyin** (zaten README var)
5. **"Create repository"** butonuna tıklayın

### 3. GitHub'a Push Etme

GitHub'da repository oluşturduktan sonra, size gösterilen komutları kullanın:

```bash
# GitHub repository URL'inizi ekleyin (KULLANICI_ADINIZ'ı değiştirin)
git remote add origin https://github.com/KULLANICI_ADINIZ/apartman-sikayet-sistemi.git

# Branch adını main olarak ayarlayın
git branch -M main

# GitHub'a push edin
git push -u origin main
```

**Not:** İlk push'ta GitHub kullanıcı adı ve şifreniz istenebilir. Personal Access Token kullanmanız gerekebilir.

### 4. Personal Access Token Oluşturma (Gerekirse)

Eğer şifre ile push yapamıyorsanız:

1. GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
2. "Generate new token" butonuna tıklayın
3. Token'a bir isim verin (örn: "vercel-deployment")
4. `repo` scope'unu işaretleyin
5. "Generate token" butonuna tıklayın
6. Token'ı kopyalayın (bir daha gösterilmeyecek!)
7. Push yaparken şifre yerine bu token'ı kullanın

## ✅ Kontrol

GitHub repository sayfanızda tüm dosyaların göründüğünü kontrol edin.

## 🔄 Sonraki Adım

GitHub'a yükledikten sonra [DEPLOYMENT.md](./DEPLOYMENT.md) dosyasındaki Vercel deployment adımlarını takip edin.




