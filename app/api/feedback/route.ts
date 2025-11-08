import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validare simplă
    if (!data.email || !data.role) {
      return NextResponse.json(
        { error: 'Email și rol sunt obligatorii' },
        { status: 400 }
      );
    }

    // TODO: Integrare Resend după ce ai API key
    // Deocamdată doar logăm datele
    console.log('Feedback primit:', {
      email: data.email,
      name: data.name || 'Anonim',
      role: data.role,
      interest: data.interest,
      feedback: data.feedback,
      timestamp: new Date().toISOString()
    });

    /* 
    UNCOMMENT după ce instalezi Resend și setezi API key:
    
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'Handbal Transparent <noreply@handbal-transparent.ro>',
      to: process.env.CONTACT_EMAIL || 'contact@handbal-transparent.ro',
      replyTo: data.email,
      subject: `📋 Feedback nou: ${data.role}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1f2937; }
              .value { color: #4b5563; margin-top: 5px; }
              .interest-list { list-style: none; padding: 0; }
              .interest-list li:before { content: "✓ "; color: #10b981; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">📋 Feedback Nou - Handbal Transparent</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Nume:</div>
                  <div class="value">${data.name || 'Anonim'}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">🎯 Rol:</div>
                  <div class="value">${getRoleLabel(data.role)}</div>
                </div>
                
                ${data.interest && data.interest.length > 0 ? `
                <div class="field">
                  <div class="label">⭐ Funcționalități prioritare:</div>
                  <ul class="interest-list">
                    ${data.interest.map((item: string) => `
                      <li>${getInterestLabel(item)}</li>
                    `).join('')}
                  </ul>
                </div>
                ` : ''}
                
                ${data.feedback ? `
                <div class="field">
                  <div class="label">💬 Feedback:</div>
                  <div class="value" style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
                    ${data.feedback.replace(/\n/g, '<br>')}
                  </div>
                </div>
                ` : ''}
                
                <div class="field" style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <div class="label">🕐 Primit la:</div>
                  <div class="value">${new Date().toLocaleString('ro-RO')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    
    // Email de confirmare către utilizator (opțional)
    await resend.emails.send({
      from: 'Handbal Transparent <noreply@handbal-transparent.ro>',
      to: data.email,
      subject: 'Mulțumim pentru feedback! 🙏',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2563eb; color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px 20px; border-radius: 0 0 8px 8px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">🎯 Mulțumim ${data.name ? data.name.split(' ')[0] : ''}!</h1>
              </div>
              <div class="content">
                <p>Feedback-ul tău este extrem de valoros pentru noi.</p>
                
                <p>Lucrăm intens la construirea platformei Handbal Transparent și opiniile tale ne ajută să creăm exact instrumentele de care comunitatea handbalului juvenil are nevoie.</p>
                
                <p><strong>Ce urmează?</strong></p>
                <ul>
                  <li>Analizăm toate răspunsurile primite</li>
                  <li>Prioritizăm funcționalitățile cele mai solicitate</li>
                  <li>Te vom notifica când platforma va fi gata de lansare</li>
                </ul>
                
                <p>Între timp, dacă mai ai idei sau sugestii, nu ezita să ne scrii la <a href="mailto:contact@handbal-transparent.ro">contact@handbal-transparent.ro</a>.</p>
                
                <p style="margin-top: 30px;">Cu respect,<br><strong>Echipa Handbal Transparent</strong></p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    */

    // Răspuns de succes
    return NextResponse.json({
      success: true,
      message: 'Feedback trimis cu succes!'
    });

  } catch (error) {
    console.error('Eroare procesare feedback:', error);
    return NextResponse.json(
      { error: 'A apărut o eroare. Te rugăm să încerci din nou.' },
      { status: 500 }
    );
  }
}

// // Helper functions pentru labels în română
// function getRoleLabel(role: string): string {
//   const labels: { [key: string]: string } = {
//     'parinte': 'Părinte (copil la handbal)',
//     'antrenor': 'Antrenor',
//     'fost-sportiv': 'Fost sportiv',
//     'suporter': 'Suporter/Fan',
//     'jurnalist': 'Jurnalist sportiv',
//     'oficial': 'Oficial club/federație',
//     'avocat': 'Avocat specializat în drept sportiv',
//     'altul': 'Altul'
//   };
//   return labels[role] || role;
// }
//
// function getInterestLabel(interest: string): string {
//   const labels: { [key: string]: string } = {
//     'raportare-anonima': 'Raportare anonimă',
//     'upload-dovezi': 'Upload video/foto dovezi',
//     'consultanta-juridica': 'Consultanță juridică gratuită',
//     'stiri-handbal': 'Știri verificate handbal juvenil',
//     'comunitate': 'Comunitate părinți/antrenori',
//     'moderare': 'Moderare profesională obligatorie'
//   };
//   return labels[interest] || interest;
// }
