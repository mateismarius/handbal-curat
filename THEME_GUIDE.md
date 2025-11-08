# 🎨 Ghid Rapid Schimbare Temă - shadcn/ui

## ✅ Ai dreptate!

shadcn/ui folosește **CSS Variables în `globals.css`**, NU tailwind.config!

## 🔧 Cum să Schimbi Tema (3 minute):

### Pasul 1: Deschide `app/globals.css`

### Pasul 2: Găsește secțiunea `@layer base`

Vei vedea 5 variante de teme comentate:
- ⭐ **SLATE** (activ acum) - Modern, profesional
- 🪵 **STONE** - Warm, prietenos
- ⚙️ **ZINC** - Modern, tech-y
- ⚫ **GRAY** - Neutru pur
- ⚪ **NEUTRAL** - Ultra-minimal

### Pasul 3: Decomentează tema dorită

**Exemplu - Schimbare la STONE:**

```css
/* Comentează SLATE (adaugă slash-asterisk) */
/*
:root {
  --background: 0 0% 100%;
  ... (toată secțiunea SLATE)
}
*/

/* Decomentează STONE (șterge slash-asterisk) */
:root {
  --background: 0 0% 100%;
  --foreground: 20 14.3% 4.1%;
  ... (toată secțiunea STONE)
}
```

### Pasul 4: Salvează + Refresh browser

Hot reload ar trebui să aplice imediat!

## 🎯 Recomandarea Mea:

**RĂMÂI CU SLATE** pentru Handbal Transparent:
- Profesional fără să fie prea rece
- Perfect pentru platformă serioasă (legal, transparență)
- Complementează albastru handbal

**Schimbă în STONE** doar dacă:
- Vrei tonalitate mai caldă
- Focus pe comunitate vs. instituțional
- Target părinți > autorități

## 📝 Note Importante:

1. **NU schimba `--primary`** - e albastrul handbal (221 83% 53%)
2. **Dark mode** e separat în secțiunea `.dark`
3. Toate componentele shadcn/ui folosesc automat aceste variabile
4. **Zero rebuild** necesar - CSS variables = instant update

## 🚀 Next.js 15 (nu 16 încă):

Proiectul folosește:
- Next.js **15.0.0** (latest stable)
- Tailwind CSS **3.4.0** (cu config clasic)
- shadcn/ui (CSS variables method)

Next.js 16 nu e lansat încă. Next.js 15 + Tailwind v4 (beta) ar elimina tailwind.config.js, dar nu e production-ready.

## ✅ Totul e Setat Corect!

Proiectul folosește deja metoda corectă shadcn/ui. Dacă vrei să testezi alte teme, doar decomentează în `globals.css`!

---

**P.S.** Dacă vrei să creezi o temă custom (branduri specifice), pot să-ți arăt cum să generezi HSL values din hex colors!
