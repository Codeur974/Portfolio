import { Client } from "@notionhq/client";

// Initialiser le client Notion avec la clé API depuis les variables d'environnement Netlify
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const handler = async (event) => {
  // Autoriser uniquement les requêtes POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    // Parser les données du formulaire
    const formData = JSON.parse(event.body);

    // Ajouter le lead dans Notion
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        // Nom / Entreprise
        Name: {
          title: [
            {
              text: {
                content: formData.name,
              },
            },
          ],
        },
        // Email
        Email: {
          email: formData.email,
        },
        // Téléphone (peut être vide)
        ...(formData.phone && {
          Phone: {
            phone_number: formData.phone,
          },
        }),
        // Type de projet
        "Type de projet": {
          select: {
            name: formData.project_type,
          },
        },
        // Budget
        Budget: {
          select: {
            name: formData.budget,
          },
        },
        // Délai
        "Délai souhaité": {
          select: {
            name: formData.deadline,
          },
        },
        // Description
        Description: {
          rich_text: [
            {
              text: {
                content: formData.message,
              },
            },
          ],
        },
        // Statut (par défaut : Nouveau)
        Statut: {
          select: {
            name: "Nouveau",
          },
        },
        // Date de contact
        "Date de contact": {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    console.log("Lead ajouté à Notion :", response.id);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // À adapter selon ton domaine en prod
      },
      body: JSON.stringify({
        success: true,
        message: "Lead ajouté à Notion avec succès",
        id: response.id,
      }),
    };
  } catch (error) {
    console.error("Erreur Notion :", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
};
