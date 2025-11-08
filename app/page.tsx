"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  AlertCircle, 
  Shield, 
  Newspaper, 
  Scale, 
  CheckCircle2,
  ChevronDown,
  Send
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    feedback: "",
    interest: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        
        // Salvează în localStorage pentru a preveni spam
        localStorage.setItem('feedback_submitted', 'true');
        localStorage.setItem('feedback_email', formData.email);
        
        // Reset formular
        setFormData({
          name: "",
          email: "",
          role: "",
          feedback: "",
          interest: [],
        });
      } else {
        alert(data.error || 'A apărut o eroare. Te rugăm să încerci din nou.');
      }
    } catch (error) {
      console.error('Eroare:', error);
      alert('A apărut o eroare la trimiterea formularului. Verifică conexiunea la internet.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleInterest = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interest: prev.interest.includes(value)
        ? prev.interest.filter(i => i !== value)
        : [...prev.interest, value]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">HT</span>
            </div>
            <span className="font-bold text-xl">Handbal Transparent</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#problema" className="text-slate-600 hover:text-blue-600 transition">Problema</a>
            <a href="#solutie" className="text-slate-600 hover:text-blue-600 transition">Soluția</a>
            <a href="#feedback" className="text-slate-600 hover:text-blue-600 transition">Feedback</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">În dezvoltare - Ajută-ne cu feedback-ul tău</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Prima platformă de <span className="text-blue-600">transparență</span> în handbalul juvenil
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Un ecosistem complet pentru semnalarea neregulilor, informare corectă și suport juridic în sportul juvenil românesc
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-blue-700" onClick={() => document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' })}>
              Oferă Feedback
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('solutie')?.scrollIntoView({ behavior: 'smooth' })}>
              Află Mai Multe
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Problemele sunt reale
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12">
              Sportul juvenil românesc se confruntă cu provocări serioase
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Corupție la selecții",
                  description: "Criterii subiective, interese personale, lipsa transparenței în procesul de selecție a sportivilor juniori"
                },
                {
                  title: "Abuz verbal și fizic",
                  description: "Comportament neadecvat din partea antrenorilor, presiune psihologică excesivă asupra copiilor"
                },
                {
                  title: "Condiții nesigure",
                  description: "Spaţii de antrenament improprii, echipament inadecvat, lipsa măsurilor de siguranță"
                },
                {
                  title: "Lipsă de responsabilitate",
                  description: "Nereguli nesancționate, lipsa canalelor de raportare, teamă de repercusiuni"
                }
              ].map((problem, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{problem.title}</h3>
                  <p className="text-slate-600">{problem.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-slate-700 text-center">
                <strong>Majoritatea părinților și sportivilor</strong> nu știu unde să raporteze problemele sau se tem de consecințe. Este nevoie de o platformă sigură, transparentă și cu impact real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solutie" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Soluția: O platformă completă
            </h2>
            <p className="text-xl text-slate-600 text-center mb-16">
              Trei piloni pentru un handbal juvenil mai curat
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Pilon 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Raportare Sigură</h3>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Raportare anonimă sau cu identitate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Upload dovezi (video, foto, documente)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Moderare profesională înainte de publicare</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Protecție împotriva acțiunilor în instanță</span>
                  </li>
                </ul>
              </div>

              {/* Pilon 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Newspaper className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Știri Verificate</h3>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Articole săptămânale despre handbalul juvenil</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analize și investigații independente</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Update-uri despre cazurile raportate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Resurse educaționale pentru părinți</span>
                  </li>
                </ul>
              </div>

              {/* Pilon 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Suport Juridic</h3>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consultanță juridică specializată în drept sportiv</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ghiduri despre drepturile sportivilor juniori</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>FAQ despre aspecte legale în sport</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Acces la experți din domeniul juridic</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Moderare și Protecție</h3>
              <p className="text-slate-700 max-w-3xl mx-auto">
                Toate raportările trec printr-un proces strict de verificare. Moderăm conținutul pentru a elimina informații false, a proteja identități și a respecta legea. <strong>Blur automat pe chipuri în imagini, anonimizare date, arhivare securizată.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section id="feedback" className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ajută-ne să construim platforma potrivită
              </h2>
              <p className="text-xl text-slate-600">
                Înainte de lansare, avem nevoie de ajutorul tău. Ce funcționalități sunt esențiale pentru tine?
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Mulțumim pentru feedback!</h3>
                <p className="text-green-700">Vom lua în considerare toate sugestiile tale. Te vom contacta când platforma va fi gata de lansare.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Numele tău (opțional)</label>
                  <Input
                    type="text"
                    placeholder="Ex: Ion Popescu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
                  <Input
                    type="email"
                    placeholder="email@exemplu.ro"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <p className="text-xs text-slate-500 mt-1">Pentru a te notifica când lansăm platforma</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tu ești <span className="text-red-500">*</span></label>
                  <select
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="">Selectează...</option>
                    <option value="parinte">Părinte (copil la handbal)</option>
                    <option value="antrenor">Antrenor</option>
                    <option value="fost-sportiv">Fost sportiv</option>
                    <option value="suporter">Suporter/Fan</option>
                    <option value="jurnalist">Jurnalist sportiv</option>
                    <option value="oficial">Oficial club/federație</option>
                    <option value="avocat">Avocat specializat în drept sportiv</option>
                    <option value="altul">Altul</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Ce funcționalități sunt esențiale pentru tine? (selectează toate)</label>
                  <div className="space-y-2">
                    {[
                      { value: "raportare-anonima", label: "Raportare anonimă" },
                      { value: "upload-dovezi", label: "Upload video/foto dovezi" },
                      { value: "consultanta-juridica", label: "Consultanță juridică gratuită" },
                      { value: "stiri-handbal", label: "Știri verificate handbal juvenil" },
                      { value: "comunitate", label: "Comunitate părinți/antrenori" },
                      { value: "moderare", label: "Moderare profesională obligatorie" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interest.includes(option.value)}
                          onChange={() => toggleInterest(option.value)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Feedback sau sugestii</label>
                  <Textarea
                    placeholder="Ce probleme ai întâlnit în handbalul juvenil? Ce ai vrea să vezi pe platformă? Orice altceva..."
                    rows={5}
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Se trimite...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Trimite Feedback
                    </>
                  )}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  Datele tale sunt protejate conform GDPR. Nu le vom partaja cu terți.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Întrebări frecvente
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Când va fi lansată platforma?",
                  a: "Colectăm acum feedback pentru a construi exact ce aveți nevoie. Lansarea este planificată pentru anul 2026, după validarea conceptului și finalizarea dezvoltării."
                },
                {
                  q: "Este cu adevărat anonimă raportarea?",
                  a: "Da. Vei putea alege să raportezi complet anonim (fără să introduci date personale) sau să îți lași datele de contact pentru follow-up. În ambele cazuri, identitatea ta nu va fi publică."
                },
                {
                  q: "Cum va funcționa moderarea?",
                  a: "Fiecare raportare va fi analizată de un echipă de moderatori înainte de publicare. Verificăm autenticitatea dovezilor, eliminăm informații care ar putea identifica minori, aplicăm blur pe chipuri și asigurăm conformitatea cu legea."
                },
                {
                  q: "Cine va oferi consultanța juridică?",
                  a: "Colaborăm cu experți din domeniul juridic, inclusiv profesioniști cu experiență în dreptul sportiv și protecția minorilor. Consultanța va fi gratuită pentru cazurile validate."
                },
                {
                  q: "Platforma va fi gratuită?",
                  a: "Da, pentru utilizatori. Raportarea, accesul la știri și consultanța juridică de bază vor fi gratuite. Sustenabilitatea va veni din donații, granturi și eventual parteneriate."
                },
                {
                  q: "Ce se întâmplă după ce raportez ceva?",
                  a: "Raportarea intră în moderare (1-3 zile). Dacă este validată, va fi publicată (cu informații anonimizate). Vei primi notificări despre status. În cazuri grave, vom contacta autoritățile competente."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition"
                  >
                    <span className="font-medium pr-4">{faq.q}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                        expandedFaq === idx ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-4 pb-4 text-slate-600">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">HT</span>
              </div>
              <span className="font-bold text-xl">Handbal Transparent</span>
            </div>
            <p className="text-slate-400 mb-6">
              Construim împreună un viitor mai transparent pentru sportul juvenil românesc
            </p>
            <div className="text-sm text-slate-500">
              <p>© 2025 Handbal Transparent. Toate drepturile rezervate.</p>
              <p className="mt-2">Proiect în dezvoltare. Contactează-ne: contact@handbal-transparent.ro</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
