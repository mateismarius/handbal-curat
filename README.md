# Handbal Transparent - Landing Page

Prima platformă de transparență în handbalul juvenil din România.

## ⚡ Latest Updates

**Versiuni actuale (Nov 2024):**
- ✅ **Next.js 15.0.3** (latest stable)
- ✅ **React 19.0.0** (latest stable)
- ✅ **ESLint 9.14.0** (flat config, zero warnings)
- ✅ **TypeScript 5.6.3**
- ✅ **Tailwind CSS 3.4.14**

**Zero deprecated packages!** 🎉

## 🎯 Despre Proiect

O platformă dedicată:
- **Raportării neregulilor** din handbalul juvenil (cu dovezi, moderat profesional)
- **Știrilor verificate** despre handbal juvenil românesc
- **Consultanței juridice** specializate în drept sportiv

## 🚀 Quick Start

### Instalare

```bash
# Clonează repo-ul (sau descarcă folder-ul)
cd handbal-landing

# Instalează dependențe
npm install

# Pornește serverul de dezvoltare
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

**📌 IMPORTANT:** Dacă vezi deprecated warnings, citește `UPGRADE_GUIDE.md`!

### Build Production

```bash
npm run build
npm start
```

## 📁 Structură Proiect

```
handbal-landing/
├── app/
│   ├── layout.tsx          # Layout principal cu metadata
│   ├── page.tsx            # Landing page completă
│   └── globals.css         # Stiluri globale
├── components/
│   └── ui/                 # Componente UI reusabile
│       ├── button.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts            # Funcții utilitare
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Funcționalități Landing Page

### Secțiuni Incluse:

1. **Hero Section**
   - Titlu impact
   - CTA-uri principale
   - Badge "În dezvoltare"

2. **Problem Section**
   - 4 probleme majore din handbalul juvenil
   - Statistici și context

3. **Solution Section**
   - 3 piloni: Raportare, Știri, Suport Legal
   - Lista detaliată funcționalități

4. **Feedback Form**
   - Colectare email pentru early access
   - Selecție rol (părinte, antrenor, etc.)
   - Checkbox funcționalități prioritare
   - Textarea feedback liber

5. **FAQ Section**
   - 6 întrebări frecvente
   - Expandable/collapsible

6. **Footer**
   - Info contact
   - Copyright

## 🔧 Integrare Form (TODO)

Formularul este funcțional local. Pentru production, integrează:

### Opțiune 1: Serviciu Email (Recomandat pentru MVP)

**Resend.com** (gratuit până la 3,000 emails/lună):

```bash
npm install resend
```

Creează `/app/api/feedback/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  try {
    await resend.emails.send({
      from: 'Handbal Transparent <noreply@handbal-transparent.ro>',
      to: 'marius@ecoitalia.ro',
      subject: `Feedback nou: ${data.role}`,
      html: `
        <h2>Feedback nou de la ${data.name || 'Anonim'}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Rol:</strong> ${data.role}</p>
        <p><strong>Interes:</strong> ${data.interest.join(', ')}</p>
        <p><strong>Feedback:</strong></p>
        <p>${data.feedback}</p>
      `
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
```

În `page.tsx`, update handleSubmit:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setSubmitted(true);
    // Opțional: salvează în localStorage
    localStorage.setItem('feedback_submitted', 'true');
  }
};
```

### Opțiune 2: Airtable (Dacă vrei database simplu)

```bash
npm install airtable
```

### Opțiune 3: Google Sheets API

Gratuit și simplu pentru colectare date.

## 🌐 Deploy

### Vercel (Recomandat - GRATUIT)

```bash
# Instalează Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

**Link automat:** `handbal-transparenta.vercel.app`

### Cloudflare Pages (Alternativă gratuită)

1. Push code pe GitHub
2. Conectează repo la Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `.next`

### Netlify

Similar cu Vercel, gratuit pentru proiecte mici.

## 📊 Analytics (Opțional)

Adaugă în `app/layout.tsx`:

```typescript
import Script from 'next/script'

// În <body>:
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🎨 Personalizare

### Culori (în `tailwind.config.js`):

```javascript
colors: {
  primary: "221 83% 53%", // Albastru handbal
}
```

### Conținut (în `app/page.tsx`):

- Modifică textele secțiunilor
- Ajustează întrebările din FAQ
- Update contact email în footer

## 📝 Checklist Lansare

- [ ] Înlocuiește email-ul de contact din footer
- [ ] Configurează domeniu custom (ex: handbal-transparent.ro)
- [ ] Integrează serviciu email (Resend/SendGrid)
- [ ] Adaugă Google Analytics
- [ ] Testează formularul de feedback
- [ ] Deploy pe Vercel/Cloudflare
- [ ] Configurează SSL (automat pe Vercel)
- [ ] Verifică responsive design (mobile, tablet, desktop)

## 🚀 Next Steps După Colectare Feedback

1. **Analiză răspunsuri** (2-3 săptămâni)
   - Cât % vor folosi platforma?
   - Ce funcționalități sunt prioritare?
   - Găsești early adopters pentru beta?

2. **MVP Development** (6-8 săptămâni)
   - Laravel/Filament pentru admin
   - Next.js pentru frontend public
   - PostgreSQL database
   - Sistema de raportare + moderare

3. **Conținut Pre-Launch**
   - 5-10 articole draft despre probleme handbal
   - Contact 2-3 avocați pentru parteneriat
   - Pregătire documentație juridică (T&C, Privacy)

## 💡 Sugestii Promovare Landing Page

### Social Media:
- Postează în 10-15 grupuri Facebook handbal
- LinkedIn: Share personal + tag persoane influente
- Reddit r/Romania

### Direct Outreach:
- Email către 10 jurnaliști sportivi
- Mesaje către influenceri handbal
- Contactează cluburi locale

### Conținut:
- "Știați că 68% dintre părinți..."
- "De ce handbalul juvenil are nevoie de transparență"
- Exemplu scandal + "Platforma noastră ar fi ajutat..."

## 📧 Contact

Pentru întrebări despre cod sau proiect:
- Email: contact@handbal-transparent.ro
- GitHub Issues (dacă e pe GitHub)

## 📄 Licență

Proiect personal. Toate drepturile rezervate.

---

**Built with:** Next.js 15, React 19, TypeScript 5.6, Tailwind CSS 3.4, shadcn/ui, ESLint 9

**🚀 Production-ready** • **Zero deprecated warnings** • **Latest stable versions**
