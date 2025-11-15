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

    // Mapper les valeurs du formulaire aux options Notion
    const mapBudget = (budget) => {
      const budgetMap = {
        "Moins de 800€": "< 1000€",
        "800€ - 1500€": "1000–3000€",
        "1500€ - 2500€": "1000–3000€",
        "2500€ - 3500€": "3000–6000€",
        "Plus de 3500€": "6000€+",
        "À discuter": "< 1000€"
      };
      return budgetMap[budget] || "< 1000€";
    };

    const mapDelai = (deadline) => {
      const delaiMap = {
        "Urgent (moins d'1 mois)": "Urgent (-1 mois)",
        "1 à 2 mois": "1–3 mois",
        "2 à 3 mois": "1–3 mois",
        "Plus de 3 mois": "+3 mois",
        "Flexible": "+3 mois"
      };
      return delaiMap[deadline] || "1–3 mois";
    };

    const mapTypeProjet = (projectType) => {
      const typeMap = {
        "Site vitrine": "Site vitrine",
        "E-commerce": "E-commerce",
        "Application web sur mesure": "Web app",
        "Refonte de site existant": "Refonte",
        "Maintenance / Correction de bugs": "Autre",
        "Optimisation SEO": "Autre",
        "Autre": "Autre"
      };
      return typeMap[projectType] || "Autre";
    };

    // Ajouter le lead dans Notion
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        // Client / Projet (Title)
        "Client / Projet": {
          title: [
            {
              text: {
                content: `${formData.name} – ${mapTypeProjet(formData.project_type)}`,
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
          Téléphone: {
            phone_number: formData.phone,
          },
        }),
        // Type de projet
        "Type de projet": {
          select: {
            name: mapTypeProjet(formData.project_type),
          },
        },
        // Budget
        Budget: {
          select: {
            name: mapBudget(formData.budget),
          },
        },
        // Délai
        Délai: {
          select: {
            name: mapDelai(formData.deadline),
          },
        },
        // Notes (Description du projet)
        Notes: {
          rich_text: [
            {
              text: {
                content: formData.message,
              },
            },
          ],
        },
        // Source
        Source: {
          select: {
            name: "Formulaire site",
          },
        },
        // Statut (par défaut : Nouveau)
        Statut: {
          select: {
            name: "Nouveau",
          },
        },
        // Date 1er contact
        "Date 1er contact": {
          date: {
            start: new Date().toISOString(),
          },
        },
        // Prochain rappel (aujourd'hui + 3 jours)
        "Prochain rappel": {
          date: {
            start: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
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
