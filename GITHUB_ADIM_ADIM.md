# 📦 GitHub'a Proje Yükleme - Adım Adım Kılavuz

## 🎯 Ön Hazırlık

### Adım 1: Git Kurulumu (Eğer Kurulu Değilse)

1. **Git İndirme:**
   - Tarayıcınızda şu adrese gidin: https://git-scm.com/download/win
   - "Download for Windows" butonuna tıklayın
   - İndirilen `.exe` dosyasını çalıştırın

2. **Git Kurulumu:**
   - Kurulum sırasında **varsayılan ayarları** kullanın (Next, Next, Install)
   - Kurulum tamamlandığında "Finish" butonuna tıklayın

3. **PowerShell'i Yeniden Başlatın:**
   - Mevcut PowerShell penceresini kapatın
   - Yeni bir PowerShell penceresi açın (yönetici olarak açmanız gerekmez)

4. **Git Kurulumunu Kontrol Edin:**
   ```powershell
   git --version
   ```
   - Eğer `git version 2.x.x` gibi bir çıktı görürseniz, Git başarıyla kurulmuştur ✅

---

## 📝 GitHub'a Yükleme Adımları

### Adım 2: GitHub'da Repository Oluşturma

1. **GitHub'a Giriş Yapın:**
   - Tarayıcınızda https://github.com adresine gidin
   - Eğer hesabınız yoksa "Sign up" ile yeni hesap oluşturun
   - Eğer hesabınız varsa "Sign in" ile giriş yapın

2. **Yeni Repository Oluşturun:**
   - Sağ üst köşedeki **"+"** (artı) işaretine tıklayın
   - Açılan menüden **"New repository"** seçeneğine tıklayın

3. **Repository Bilgilerini Doldurun:**
   - **Repository name:** `apartman-sikayet-sistemi` (veya istediğiniz isim)
   - **Description (opsiyonel):** "Apartman şikayet yönetim sistemi"
   - **Public** veya **Private** seçin:
     - **Public:** Herkes görebilir (önerilir, ücretsiz)
     - **Private:** Sadece siz görebilirsiniz
   - ⚠️ **ÖNEMLİ:** "Add a README file" seçeneğini **İŞARETLEMEYİN** (zaten README var)
   - ⚠️ **ÖNEMLİ:** "Add .gitignore" seçeneğini **İŞARETLEMEYİN** (zaten .gitignore var)
   - ⚠️ **ÖNEMLİ:** "Choose a license" seçeneğini **BOŞ BIRAKIN**

4. **Repository'yi Oluşturun:**
   - Yeşil **"Create repository"** butonuna tıklayın
   - Repository oluşturulduktan sonra bir sayfa açılacak

5. **Repository URL'ini Kopyalayın:**
   - Sayfada "Quick setup" bölümünde bir URL göreceksiniz
   - URL şu şekilde olacak: `https://github.com/KULLANICI_ADINIZ/apartman-sikayet-sistemi.git`
   - Bu URL'yi not alın veya kopyalayın (daha sonra kullanacağız)

---

### Adım 3: PowerShell'de Komutları Çalıştırma

**PowerShell'i proje klasöründe açın:**
- Windows Explorer'da proje klasörünü açın: `C:\Users\Cağrı Burak\Desktop\Yeni klasör (4)`
- Klasör içinde **sağ tıklayın** → **"Open in Terminal"** veya **"PowerShell'i burada aç"** seçeneğini seçin
- VEYA PowerShell'i açıp şu komutu çalıştırın:
  ```powershell
  cd "C:\Users\Cağrı Burak\Desktop\Yeni klasör (4)"
  ```

**Şimdi sırayla şu komutları çalıştırın:**

#### 3.1 Git Repository Başlatma
```powershell
git init
```
**Beklenen çıktı:** `Initialized empty Git repository in C:/Users/Cağrı Burak/Desktop/Yeni klasör (4)/.git/`

#### 3.2 Tüm Dosyaları Ekleme
```powershell
git add .
```
**Beklenen çıktı:** (Hiçbir hata mesajı görünmemeli, komut sessizce tamamlanmalı)

#### 3.3 İlk Commit Yapma
```powershell
git commit -m "İlk commit: Apartman şikayet sistemi"
```
**Beklenen çıktı:** `[main (root-commit) xxxxxxx] İlk commit: Apartman şikayet sistemi` ve dosya listesi

**Not:** İlk commit'te Git kullanıcı bilgilerinizi sorabilir. Eğer sorarsa:
```powershell
git config --global user.name "Adınız Soyadınız"
git config --global user.email "email@example.com"
```
Sonra tekrar `git commit` komutunu çalıştırın.

#### 3.4 GitHub Repository'yi Bağlama
```powershell
git remote add origin https://github.com/KULLANICI_ADINIZ/apartman-sikayet-sistemi.git
```
**ÖNEMLİ:** `KULLANICI_ADINIZ` kısmını GitHub kullanıcı adınızla değiştirin!

**Örnek:**
```powershell
git remote add origin https://github.com/cagriburak/apartman-sikayet-sistemi.git
```

#### 3.5 Branch Adını Main Yapma
```powershell
git branch -M main
```
**Beklenen çıktı:** (Hiçbir çıktı görünmemeli, komut başarılı olmalı)

#### 3.6 GitHub'a Push Etme
```powershell
git push -u origin main
```

**Bu adımda iki durum olabilir:**

**Durum A: Kullanıcı Adı ve Şifre İstenirse**
- GitHub kullanıcı adınızı girin
- Şifre yerine **Personal Access Token** kullanmanız gerekebilir (aşağıdaki Adım 4'e bakın)

**Durum B: Başarılı Push**
- `Enumerating objects: XX, done.` gibi mesajlar görürsünüz
- `To https://github.com/...` mesajı görürsünüz
- `* [new branch] main -> main` mesajı görürsünüz
- ✅ **Başarılı!** Projeniz GitHub'a yüklendi!

---

### Adım 4: Personal Access Token (Eğer Şifre Çalışmazsa)

GitHub artık şifre ile push kabul etmiyor. Token kullanmanız gerekiyor:

1. **Token Oluşturma:**
   - GitHub'da sağ üst köşedeki profil resminize tıklayın
   - **"Settings"** seçeneğine tıklayın
   - Sol menüden **"Developer settings"** seçeneğine tıklayın
   - **"Personal access tokens"** → **"Tokens (classic)"** seçeneğine tıklayın
   - **"Generate new token"** → **"Generate new token (classic)"** seçeneğine tıklayın

2. **Token Ayarları:**
   - **Note:** Token'a bir isim verin (örn: "apartman-projesi")
   - **Expiration:** Süre seçin (90 days önerilir)
   - **Scopes:** Aşağıdaki kutucukları işaretleyin:
     - ✅ `repo` (tüm repo izinleri)
   - En altta **"Generate token"** butonuna tıklayın

3. **Token'ı Kopyalayın:**
   - ⚠️ **ÖNEMLİ:** Token'ı hemen kopyalayın! Bir daha gösterilmeyecek!
   - Token şu şekilde görünecek: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

4. **Token ile Push Yapın:**
   ```powershell
   git push -u origin main
   ```
   - **Username:** GitHub kullanıcı adınızı girin
   - **Password:** Token'ı yapıştırın (şifre değil, token!)

---

## ✅ Kontrol

1. **GitHub'da Kontrol:**
   - Tarayıcınızda GitHub repository sayfanıza gidin
   - Tüm dosyaların göründüğünü kontrol edin:
     - `server.js`
     - `package.json`
     - `frontend/` klasörü
     - `api/` klasörü
     - `README.md`
     - vb.

2. **PowerShell'de Kontrol:**
   ```powershell
   git status
   ```
   - `Your branch is up to date with 'origin/main'` mesajını görmelisiniz

---

## 🔄 Sonraki Adımlar

### Güncelleme Yapmak İçin:

Projede değişiklik yaptıktan sonra:

```powershell
# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Güncelleme açıklaması"

# GitHub'a push et
git push origin main
```

### Vercel'de Yayınlama:

GitHub'a yükledikten sonra:
1. [Vercel.com](https://vercel.com) adresine gidin
2. GitHub ile giriş yapın
3. "Add New..." → "Project" → Repository'nizi seçin
4. "Deploy" butonuna tıklayın

Detaylı bilgi için: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🐛 Sorun Giderme

### "git: command not found" Hatası
- Git kurulu değil, Adım 1'i tekrar yapın

### "fatal: not a git repository" Hatası
- `git init` komutunu çalıştırın

### "remote origin already exists" Hatası
- Şu komutu çalıştırın:
  ```powershell
  git remote remove origin
  ```
- Sonra tekrar `git remote add origin ...` komutunu çalıştırın

### "Authentication failed" Hatası
- Personal Access Token kullanın (Adım 4)

### "Permission denied" Hatası
- Token'ınızın `repo` iznine sahip olduğundan emin olun

---

## 📞 Yardım

Sorun yaşarsanız:
- GitHub dokümantasyonu: https://docs.github.com
- Git dokümantasyonu: https://git-scm.com/doc




