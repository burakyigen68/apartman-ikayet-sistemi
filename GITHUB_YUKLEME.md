# 🚀 GitHub'a Proje Yükleme - Basit Kılavuz

## ⚠️ ÖNCE GİT KURUN!

### Git Kurulumu (5 dakika)

1. **Git İndir:**
   - Tarayıcıda şu adrese git: https://git-scm.com/download/win
   - "Download for Windows" butonuna tıkla
   - İndirilen dosyayı çalıştır

2. **Kurulum:**
   - Kurulum sırasında sadece "Next" butonlarına tıkla (varsayılan ayarlar yeterli)
   - Kurulum bitince "Finish" tıkla

3. **PowerShell'i Kapat ve Yeniden Aç:**
   - Mevcut PowerShell penceresini kapat
   - Yeni bir PowerShell penceresi aç

4. **Kontrol Et:**
   ```powershell
   git --version
   ```
   - Eğer `git version 2.x.x` görürsen, Git kurulmuş demektir ✅

---

## 📦 GITHUB'A YÜKLEME (3 ADIM)

### ADIM 1: GitHub'da Repository Oluştur

1. **GitHub'a Git:**
   - https://github.com adresine git
   - Giriş yap (hesabın yoksa "Sign up" ile oluştur)

2. **Yeni Repository Oluştur:**
   - Sağ üstteki **"+"** işaretine tıkla
   - **"New repository"** seçeneğine tıkla

3. **Bilgileri Doldur:**
   - **Repository name:** `apartman-sikayet-sistemi`
   - **Public** veya **Private** seç (Public önerilir)
   - ⚠️ **"Add a README file" İŞARETLEME!**
   - ⚠️ **"Add .gitignore" İŞARETLEME!**
   - **"Create repository"** butonuna tıkla

4. **URL'yi Kopyala:**
   - Açılan sayfada şu şekilde bir URL göreceksin:
   - `https://github.com/KULLANICI_ADINIZ/apartman-sikayet-sistemi.git`
   - Bu URL'yi kopyala (daha sonra kullanacağız)

---

### ADIM 2: PowerShell'de Komutları Çalıştır

**PowerShell'i proje klasöründe aç:**
- Windows Explorer'da proje klasörünü aç: `C:\Users\Cağrı Burak\Desktop\Yeni klasör (4)`
- Klasör içinde **sağ tıkla** → **"Open in Terminal"** veya **"PowerShell'i burada aç"**

**Şu komutları sırayla çalıştır:**

```powershell
# 1. Git başlat
git init

# 2. Dosyaları ekle
git add .

# 3. İlk kayıt (commit)
git commit -m "İlk commit: Apartman şikayet sistemi"
```

**Eğer 3. adımda hata verirse (kullanıcı bilgileri sorulursa):**
```powershell
git config --global user.name "Adınız Soyadınız"
git config --global user.email "email@example.com"
```
Sonra tekrar:
```powershell
git commit -m "İlk commit: Apartman şikayet sistemi"
```

**Devam:**
```powershell
# 4. GitHub'ı bağla (KULLANICI_ADINIZ'ı değiştir!)
git remote add origin https://github.com/KULLANICI_ADINIZ/apartman-sikayet-sistemi.git

# 5. Branch adını main yap
git branch -M main

# 6. GitHub'a gönder
git push -u origin main
```

**6. adımda şifre/token istenecek:**
- Kullanıcı adını gir
- Şifre yerine **Personal Access Token** kullan (aşağıdaki ADIM 3'e bak)

---

### ADIM 3: Personal Access Token Oluştur

GitHub artık şifre kabul etmiyor, token gerekiyor:

1. **GitHub'da Token Oluştur:**
   - GitHub'da sağ üstteki profil resmine tıkla
   - **"Settings"** tıkla
   - Sol menüden **"Developer settings"** tıkla
   - **"Personal access tokens"** → **"Tokens (classic)"** tıkla
   - **"Generate new token"** → **"Generate new token (classic)"** tıkla

2. **Token Ayarları:**
   - **Note:** `apartman-projesi` yaz
   - **Expiration:** `90 days` seç
   - **Scopes:** `repo` kutucuğunu işaretle ✅
   - En altta **"Generate token"** tıkla

3. **Token'ı Kopyala:**
   - ⚠️ **HEMEN KOPYALA!** Bir daha gösterilmeyecek!
   - Token şöyle görünecek: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

4. **Token ile Push Yap:**
   - PowerShell'de `git push -u origin main` komutunu çalıştır
   - **Username:** GitHub kullanıcı adını gir
   - **Password:** Token'ı yapıştır (şifre değil!)

---

## ✅ BAŞARILI!

Eğer şu mesajı görürsen başarılı demektir:
```
Enumerating objects: XX, done.
To https://github.com/...
 * [new branch] main -> main
```

**GitHub'da kontrol et:**
- Tarayıcıda repository sayfana git
- Tüm dosyaların göründüğünü kontrol et

---

## 🔄 GÜNCELLEME YAPMAK İÇİN

Projede değişiklik yaptıktan sonra:

```powershell
git add .
git commit -m "Güncelleme açıklaması"
git push origin main
```

---

## 🐛 SORUN MU VAR?

### "git: command not found"
→ Git kurulu değil, ADIM 1'i yap

### "Authentication failed"
→ Token kullan (ADIM 3)

### "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/KULLANICI_ADINIZ/apartman-sikayet-sistemi.git
```

---

## 📝 ÖZET

1. ✅ Git kur (https://git-scm.com/download/win)
2. ✅ GitHub'da repository oluştur
3. ✅ PowerShell'de 6 komut çalıştır
4. ✅ Token oluştur ve push yap

**Hepsi bu kadar!** 🎉




