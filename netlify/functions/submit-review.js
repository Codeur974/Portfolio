const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Vérifier la méthode HTTP
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Méthode non autorisée' }),
    };
  }

  try {
    const reviewData = JSON.parse(event.body);

    // Validation basique
    if (!reviewData.name || !reviewData.email || !reviewData.text || !reviewData.rating) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Données manquantes' }),
      };
    }

    // Honeypot anti-spam (ajoutera un champ caché dans le form)
    if (reviewData.website) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Spam détecté' }),
      };
    }

    // Configuration de l'email (utilise les variables d'environnement Netlify)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Contenu de l'email
    const emailHtml = `
      <h2>Nouvel avis client à modérer</h2>
      <p><strong>Nom:</strong> ${reviewData.name}</p>
      <p><strong>Email:</strong> ${reviewData.email}</p>
      <p><strong>Entreprise:</strong> ${reviewData.company || 'Non renseigné'}</p>
      <p><strong>Poste:</strong> ${reviewData.role || 'Non renseigné'}</p>
      <p><strong>Service:</strong> ${reviewData.service || 'Non renseigné'}</p>
      <p><strong>Note:</strong> ${'⭐'.repeat(reviewData.rating)} (${reviewData.rating}/5)</p>
      <p><strong>Avis:</strong></p>
      <blockquote style="background: #f4f4f4; padding: 15px; border-left: 4px solid #0077ED;">
        ${reviewData.text}
      </blockquote>
      <hr>
      <p><em>Date de soumission: ${new Date().toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}</em></p>
      <hr>
      <h3>Actions</h3>
      <p>Pour publier cet avis, ajoutez-le manuellement au fichier <code>src/data/testimonials.json</code></p>
    `;

    // Envoi de l'email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `📝 Nouvel avis client - ${reviewData.name}`,
      html: emailHtml,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Avis soumis avec succès',
        success: true,
      }),
    };
  } catch (error) {
    console.error('Erreur:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Erreur lors de la soumission',
        error: error.message,
      }),
    };
  }
};
