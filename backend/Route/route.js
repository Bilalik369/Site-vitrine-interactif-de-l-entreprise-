// backend/Route/route.js

const express = require('express');
const router = express.Router();

// Contrôleurs fictifs à remplacer par ta logique réelle
// Tu pourras les déplacer dans un dossier controllers/ si tu veux organiser ton code

// === Accueil ===
router.get('/home', (req, res) => {
  res.json({ message: "Bienvenue sur le site vitrine de 404.js !" });
});

// === À propos ===
router.get('/about', (req, res) => {
  res.json({
    mission: "Accompagner la transformation digitale.",
    valeurs: ["Innovation", "Transparence", "Excellence"],
    equipe: [
      { nom: "Alice", poste: "CEO" },
      { nom: "Bob", poste: "Développeur" }
    ]
  });
});

// === Services ===
router.get('/services', (req, res) => {
  res.json([
    { id: 1, nom: "Développement Web", description: "Sites modernes et performants" },
    { id: 2, nom: "UI/UX Design", description: "Expérience utilisateur optimale" }
  ]);
});

// === Portfolio ===
router.get('/portfolio', (req, res) => {
  res.json([
    { id: 1, titre: "Projet Alpha", details: "Refonte e-commerce", image: "alpha.jpg" },
    { id: 2, titre: "Projet Beta", details: "Application mobile", image: "beta.jpg" }
  ]);
});

// === Blog CRUD ===
let articles = [
  { id: 1, titre: "Bienvenue", contenu: "Premier article", categorie: "Actu" }
];

// Lire tous les articles
router.get('/blog', (req, res) => {
  const { categorie, keyword } = req.query;
  let result = articles;

  // Filtres dynamiques (HOF)
  if (categorie) {
    result = result.filter(a => a.categorie === categorie);
  }
  if (keyword) {
    result = result.filter(a => a.titre.includes(keyword) || a.contenu.includes(keyword));
  }
  res.json(result.sort((a, b) => b.id - a.id)); // Articles récents d'abord
});

// Lire un article
router.get('/blog/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ error: "Article non trouvé" });
  res.json(article);
});

// Créer un article
router.post('/blog', (req, res) => {
  const { titre, contenu, categorie } = req.body;
  const newArticle = {
    id: articles.length ? articles[articles.length - 1].id + 1 : 1,
    titre,
    contenu,
    categorie
  };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// Modifier un article
router.put('/blog/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ error: "Article non trouvé" });
  const { titre, contenu, categorie } = req.body;
  article.titre = titre ?? article.titre;
  article.contenu = contenu ?? article.contenu;
  article.categorie = categorie ?? article.categorie;
  res.json(article);
});

// Supprimer un article
router.delete('/blog/:id', (req, res) => {
  const index = articles.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Article non trouvé" });
  articles.splice(index, 1);
  res.json({ message: "Article supprimé" });
});

// === Contact ===
router.post('/contact', (req, res) => {
  // Ici tu pourrais envoyer un email ou stocker le message
  res.json({ message: "Message reçu, merci pour votre contact !" });
});

module.exports = router;