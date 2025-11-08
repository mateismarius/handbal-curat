# 🏗️ MVP Development Roadmap - Handbal Transparent

**Start doar după validare pozitivă: 100+ emails + 60%+ interes**

---

## 🎯 Faze Dezvoltare

### **FAZA 0: Pre-Development (1 săptămână)**

**Legal & Compliance:**
- [ ] Consultă avocat specializat în media/online
- [ ] Draft Termeni și Condiții
- [ ] Draft Politică Confidențialitate (GDPR compliant)
- [ ] Disclaimer legal pentru raportări
- [ ] Înregistrare ONG/Asociație (opțional dar recomandat pentru credibilitate)

**Echipă:**
- [ ] Recrutare 2-3 moderatori voluntari (foști sportivi/antrenori de încredere)
- [ ] Identificare 1-2 avocați pentru parteneriat consultanță
- [ ] (Opțional) 1 jurnalist sportiv pentru content

**Content Prep:**
- [ ] Scrie 5-10 articole draft despre probleme handbal juvenil
- [ ] Creează ghid "Drepturile Sportivului Junior"
- [ ] FAQ juridic despre contracte, transferuri, abuzuri

---

## 🛠️ Stack Tehnologic Recomandat

### **Opțiunea 1: Full Custom (Recommended pentru long-term)**

```
Frontend:
- Next.js 15 (SSR pentru SEO)
- React 18
- TypeScript
- Tailwind CSS + shadcn/ui
- React Hook Form (formulare)
- TanStack Query (data fetching)

Backend:
- Laravel 12
- Filament 4 (admin panel moderare)
- PostgreSQL (database)
- Laravel Sanctum (auth)
- Spatie Media Library (upload fișiere)

Infrastructure:
- Hetzner VPS (40 RON/lună)
- Cloudflare R2 (storage video/poze)
- Cloudflare CDN (global access)
- Resend.com (email notifications)
- Plausible Analytics (privacy-focused)

CI/CD:
- GitHub Actions
- Deploy: Forge sau Ploi
```

**Timeline:** 8-12 săptămâni (part-time)  
**Cost:** ~200-300 RON/lună operational

---

### **Opțiunea 2: No-Code MVP (Fast validation)**

```
Stack:
- Airtable (database + CRM)
- Fillout.com (formulare cu upload)
- Softr.io sau Pory (site public)
- Make.com (automatizări)
- Cloudinary (media storage)
- Ghost CMS (blog știri)

Workflow:
1. Raportare → Fillout form → Airtable
2. Moderare → Airtable interface
3. Aprobare → Auto-publish pe Softr
4. Email notifications → Make.com
```

**Timeline:** 2-3 săptămâni  
**Cost:** ~300-500 RON/lună

**Decizie:** Start cu no-code dacă vrei validare rapidă (<6 luni),  
apoi migrare la custom când ajungi la 500+ utilizatori.

---

## 📋 Funcționalități MVP (Prioritizate)

### **P0 - CRITICAL (Lansare imposibilă fără ele)**

#### 1. **Sistem Raportare**
- [ ] Formular raportare (anonim sau cu identitate)
- [ ] Upload fișiere (max 100MB video, 10MB imagini, 5MB docs)
- [ ] Categorii: Corupție, Violență/Abuz, Discriminare, Condiții nesigure, Altele
- [ ] Câmpuri: Descriere, Locație (opțional), Data incident, Părți implicate
- [ ] Confirmation email după submit

#### 2. **Panel Moderare (Filament)**
- [ ] Dashboard: Raportări pending, în revizie, aprobate, respinse
- [ ] Workflow: New → In Review → Approved/Rejected
- [ ] Blur automat chipuri în imagini (AWS Rekognition sau manual)
- [ ] Note interne moderatori
- [ ] Arhivă securizată toate submisiile

#### 3. **Feed Public Raportări**
- [ ] Listare raportări aprobate (paginat)
- [ ] Filtre: Categorie, Dată, Locație
- [ ] Vizualizare individual raportare (fără date sensibile)
- [ ] Share social media
- [ ] Status updates (ex: "În investigare", "Rezolvat")

#### 4. **Blog Știri**
- [ ] 2-3 articole/săptămână handbal juvenil
- [ ] Editor Markdown sau WYSIWYG
- [ ] Categorii, tags, autor
- [ ] RSS feed

---

### **P1 - HIGH (Lansare posibilă, dar limitată)**

#### 5. **Suport Legal**
- [ ] Pagină FAQ juridic (25-30 Q&A)
- [ ] Formular "Consultanță Juridică"
- [ ] Triaj automat → forward către avocat partener
- [ ] Resurse descărcabile (ghiduri PDF)

#### 6. **Autentificare (Simplă)**
- [ ] Înregistrare email + parolă
- [ ] Login cu Google (opțional)
- [ ] "Raportările mele" (dacă user autentificat)
- [ ] Notificări email când raportare schimbă status

#### 7. **SEO & Performance**
- [ ] Meta tags optimizate
- [ ] Sitemap XML
- [ ] robots.txt
- [ ] Open Graph images
- [ ] Structured data (JSON-LD)
- [ ] Core Web Vitals optimized

---

### **P2 - MEDIUM (Nice to have, după lansare)**

- [ ] Comentarii pe raportări (moderat)
- [ ] Upvote/downvote sistem
- [ ] Newsletter săptămânal
- [ ] Filtre avansate (cronologie, gravitate)
- [ ] Export raportări (CSV pentru jurnaliști)
- [ ] API pentru dezvoltatori

---

### **P3 - LOW (Future, după 6-12 luni)**

- [ ] Forum comunitate
- [ ] App mobile (React Native)
- [ ] Chat live cu moderatori
- [ ] Integrare whatsapp bot
- [ ] Multi-limbă (EN, HU pentru Harghita/Covasna)
- [ ] Dashboard statistici publice (charts)

---

## 🗓️ Timeline Realistic (Part-Time 15-20h/săptămână)

### **Săptămâna 1-2: Foundation**
- Setup repo, CI/CD
- Database schema design
- Auth sistem
- Filament admin setup

### **Săptămâna 3-4: Core Features**
- Formular raportare + upload
- Workflow moderare
- Email notifications

### **Săptămâna 5-6: Public Site**
- Feed raportări publice
- Blog sistem
- Homepage redesign (post-feedback)

### **Săptămâna 7-8: Legal & Content**
- FAQ juridic
- Formular consultanță
- T&C, Privacy Policy pages
- 5-10 articole pre-published

### **Săptămâna 9-10: Polish & Test**
- SEO optimization
- Mobile responsive test
- Load testing
- Security audit
- Bug fixes

### **Săptămâna 11-12: Beta Launch**
- Invite 20-30 early adopters
- Feedback loop
- Iteration
- Soft launch (grupuri Facebook închise)

### **Săptămâna 13: Public Launch**
- Press release
- Social media campaign
- Email blast către lista de așteptare

---

## 💾 Database Schema (PostgreSQL)

```sql
-- Users
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    role ENUM('user', 'moderator', 'admin'),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Reports
CREATE TABLE reports (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id) NULL, -- NULL dacă anonim
    category ENUM('corruption', 'abuse', 'discrimination', 'unsafe', 'other'),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255),
    incident_date DATE,
    status ENUM('pending', 'in_review', 'approved', 'rejected'),
    moderator_notes TEXT,
    is_anonymous BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    published_at TIMESTAMP
);

-- Media (pentru dovezi)
CREATE TABLE report_media (
    id UUID PRIMARY KEY,
    report_id UUID REFERENCES reports(id) ON DELETE CASCADE,
    type ENUM('image', 'video', 'document'),
    filename VARCHAR(255),
    url TEXT,
    size_bytes INTEGER,
    mime_type VARCHAR(100),
    is_blurred BOOLEAN DEFAULT false,
    created_at TIMESTAMP
);

-- Articles (blog)
CREATE TABLE articles (
    id UUID PRIMARY KEY,
    author_id UUID REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE,
    excerpt TEXT,
    content TEXT,
    featured_image TEXT,
    category VARCHAR(100),
    tags TEXT[],
    status ENUM('draft', 'published'),
    published_at TIMESTAMP,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Legal consultations
CREATE TABLE consultations (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id) NULL,
    name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    description TEXT NOT NULL,
    status ENUM('new', 'assigned', 'in_progress', 'completed'),
    assigned_to VARCHAR(255), -- avocat
    notes TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Activity Log (pentru audit trail)
CREATE TABLE activity_logs (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    action VARCHAR(100),
    description TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP
);
```

---

## 🔐 Security & Privacy Checklist

- [ ] **HTTPS obligatoriu** (SSL cert via Cloudflare)
- [ ] **CSRF protection** (Laravel default)
- [ ] **XSS prevention** (escaped output)
- [ ] **SQL Injection prevention** (Eloquent ORM)
- [ ] **Rate limiting** (100 req/min per IP)
- [ ] **File upload validation** (mime type, size, virus scan)
- [ ] **Password hashing** (bcrypt)
- [ ] **2FA pentru moderatori** (Google Authenticator)
- [ ] **Audit trail** (log toate acțiunile moderatori)
- [ ] **GDPR compliance:**
  - [ ] Cookie consent banner
  - [ ] Data export (user request)
  - [ ] Data deletion (user request)
  - [ ] Privacy policy (GDPR template)

---

## 📊 KPIs Post-Launch

**Săptămâna 1-4:**
- Target: 50+ raportări
- Target: 10+ articole publicate
- Target: 5+ consultații juridice
- Target: 1,000+ vizitatori unici

**Luna 2-3:**
- Target: 200+ raportări (20% aprobate)
- Target: 2,000+ monthly active users
- Target: 3+ articole presă despre platformă
- Target: 1-2 cazuri rezolvate demonstrabil

**Luna 4-6:**
- Target: 500+ raportări cumulate
- Target: Partnership oficial cu 1 club/federație
- Target: 5,000+ monthly active users
- Target: 10+ cazuri cu impact real

---

## 💰 Buget MVP

### **Opțiunea Custom Development (DIY):**
```
One-time:
- Domeniu .ro: 50 RON/an
- SSL Cert: 0 RON (Cloudflare gratis)
- Logo design: 200 RON (Fiverr)

Lunar:
- Hetzner VPS: 40 RON
- Cloudflare R2: ~20 RON
- Resend email: 0-50 RON (free tier suficient)
- Plausible Analytics: $9 (~40 RON)
- Total: ~150 RON/lună

TOTAL PRIMUL AN: ~2,000 RON
```

### **Opțiunea No-Code:**
```
Lunar:
- Airtable: $20 (~90 RON)
- Softr: $49 (~220 RON)
- Fillout: $19 (~85 RON)
- Make.com: $9 (~40 RON)
- Cloudinary: 0 RON (free tier)
- Ghost: $9 (~40 RON)
Total: ~475 RON/lună

TOTAL PRIMUL AN: ~6,000 RON
```

**Recomandare:** Start no-code pentru validare, migrare custom după 6 luni.

---

## 🎓 Resurse Învățare (Dacă nu știi stack-ul)

**Laravel + Filament:**
- Laracasts.com (subscription $15/lună)
- Filament Daily (YouTube)
- FilamentPHP.com docs

**Next.js:**
- Next.js official tutorial (gratis)
- Frontend Masters (subscription)

**PostgreSQL:**
- PostgreSQL Tutorial (gratis online)

**Total timp învățare:** 2-4 săptămâni dacă pornești de la zero.

---

## ⚠️ Riscuri & Mitigări

| Risc | Probabilitate | Impact | Mitigare |
|------|---------------|---------|----------|
| Acțiuni în instanță | Medie | Înalt | Moderare strictă, T&C clare, asigurare |
| Spam/abuse raportări | Înalt | Mediu | Rate limiting, CAPTCHA, moderare |
| Lipsă moderatori | Medie | Înalt | Recrutare early, automatizare parțială |
| Costuri scaling | Scăzută | Mediu | Start cu infra ieftină, optimizare |
| Lipsă adopție | Scăzută | Critic | Validare pre-launch (feedback pozitiv) |

---

## ✅ Go/No-Go Decizie

**STOP dezvoltarea dacă:**
- Feedback sub 50 răspunsuri în 3 săptămâni
- Sub 40% interes real utilizare
- Zero jurnaliști interesați
- Nu găsești 2 moderatori voluntari
- Avocat recomandă împotriva proiectului

**START dezvoltarea dacă:**
- 100+ email-uri colectate
- 60%+ interes folosire platformă
- 10+ early adopters commitați
- 2+ moderatori recrutați
- Feedback legal pozitiv

---

## 📞 Next Steps IMEDIATE (După Validare Pozitivă)

1. **Săptămâna 1:**
   - [ ] Email către toți cei din lista așteptare: "Am validat, începem dezvoltarea"
   - [ ] Update landing page: "În dezvoltare - early access în martie 2025"
   - [ ] Setup GitHub repo privat
   - [ ] Contact avocat pentru consultanță legală

2. **Săptămâna 2:**
   - [ ] Recrutare moderatori (anunț în grupuri)
   - [ ] Contact avocați sportivi pentru parteneriat
   - [ ] Setup infrastructure (server, domenii, etc.)

3. **Săptămâna 3:**
   - [ ] Începe coding (setup Laravel + Next.js)
   - [ ] Weekly updates către early adopters
   - [ ] Start writing articole blog pre-launch

---

**Reminder:** Nu perfecta produsul - lansează cu 80% și iterează cu feedback real! 🚀
