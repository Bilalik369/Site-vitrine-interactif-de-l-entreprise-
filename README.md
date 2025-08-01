# Site Vitrine Interactif 404.js

Un site vitrine moderne et interactif pour l'entreprise 404.js, développé avec React, Redux et des technologies modernes.

## 🚀 Fonctionnalités

### Pages Principales
- **Accueil** : Présentation générale avec hero section, statistiques, services, portfolio et blog
- **À propos** : Mission, valeurs, équipe et histoire de l'entreprise
- **Services** : Catalogue des services avec filtres et détails
- **Portfolio** : Galerie de projets avec filtres par catégorie
- **Blog** : CRUD complet des articles avec filtres et recherche
- **Contact** : Formulaire interactif avec validation

### Fonctionnalités Techniques
- ✅ **Redux Toolkit** : Gestion d'état centralisée
- ✅ **React Router** : Navigation fluide entre les pages
- ✅ **Framer Motion** : Animations modernes et fluides
- ✅ **Tailwind CSS** : Design responsive et moderne
- ✅ **CRUD Blog** : Création, lecture, modification, suppression d'articles
- ✅ **Filtres HOF** : Utilisation de map, filter, reduce
- ✅ **ES6+** : Fonctions fléchées, destructuring, template literals
- ✅ **API REST** : Communication avec le backend MongoDB

## 🛠️ Technologies Utilisées

### Frontend
- **React 18** : Bibliothèque UI
- **Redux Toolkit** : Gestion d'état
- **React Router DOM** : Routing
- **Framer Motion** : Animations
- **Tailwind CSS** : Styling
- **Axios** : Requêtes HTTP
- **Lucide React** : Icônes
- **Vite** : Build tool

### Backend
- **Node.js** : Runtime JavaScript
- **Express.js** : Framework web
- **MongoDB** : Base de données
- **Mongoose** : ODM MongoDB
- **CORS** : Cross-origin resource sharing

## 📁 Structure du Projet

```
Site-vitrine-interactif-de-l-entreprise-/
├── backend/                    # API Backend
│   ├── controllers/           # Contrôleurs API
│   ├── lib/                   # Configuration DB
│   ├── models/                # Modèles Mongoose
│   ├── route/                 # Routes API
│   └── server.js              # Serveur Express
└── Client/                    # Application Frontend
    ├── src/
    │   ├── components/        # Composants réutilisables
    │   │   └── layout/        # Navbar, Footer
    │   ├── pages/             # Pages de l'application
    │   ├── store/             # Configuration Redux
    │   │   └── slices/        # Slices Redux
    │   ├── App.jsx            # Composant principal
    │   └── main.jsx           # Point d'entrée
    ├── package.json           # Dépendances frontend
    └── vite.config.js         # Configuration Vite
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (v16 ou supérieur)
- MongoDB (local ou Atlas)
- npm ou yarn

### Backend

1. **Naviguer vers le dossier backend**
```bash
cd backend
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
Créer un fichier `.env` :
```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/404js-blog
```

4. **Démarrer le serveur**
```bash
npm start
```

Le serveur sera accessible sur `http://localhost:5000`

### Frontend

1. **Naviguer vers le dossier Client**
```bash
cd Client
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer l'application**
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📊 Fonctionnalités Détaillées

### Redux Store
Le store Redux est organisé en 4 slices :

1. **blogSlice** : Gestion des articles de blog
   - CRUD complet (Create, Read, Update, Delete)
   - Filtres par catégorie et recherche
   - Gestion des états de chargement et erreurs

2. **servicesSlice** : Gestion des services
   - Liste des services avec filtres
   - Catégorisation et recherche

3. **portfolioSlice** : Gestion du portfolio
   - Projets avec filtres par catégorie
   - Détails des projets et technologies

4. **contactSlice** : Gestion du formulaire de contact
   - Validation des champs
   - Gestion des états de soumission

### HOF (Higher Order Functions)
Utilisation intensive des fonctions d'ordre supérieur :

```javascript
// Filtrage des articles
const filteredPosts = posts.filter(post => 
  post.title.toLowerCase().includes(searchTerm.toLowerCase())
);

// Mapping des services
const serviceCategories = services.map(service => service.category);

// Réduction pour les statistiques
const totalProjects = projects.reduce((acc, project) => acc + 1, 0);
```

### ES6+ Features
- **Destructuring** : `const { title, content } = post;`
- **Template Literals** : `` `Article: ${post.title}` ``
- **Arrow Functions** : `const handleClick = () => {}`
- **Spread Operator** : `{ ...state, newData }`
- **Optional Chaining** : `post?.author?.name`

### Animations Framer Motion
- Animations d'entrée pour les pages
- Transitions fluides entre les composants
- Effets de hover et interactions
- Animations de scroll

## 🎨 Design et UX

### Responsive Design
- Mobile-first approach
- Breakpoints : sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation adaptative (hamburger menu sur mobile)

### Animations
- Fade-in animations pour les sections
- Hover effects sur les cartes
- Smooth scrolling
- Loading states avec spinners

### Accessibilité
- Navigation au clavier
- Contrastes appropriés
- Alt text pour les images
- Focus indicators

## 🔧 Configuration

### Variables d'Environnement Backend
```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/404js-blog
NODE_ENV=development
```

### Configuration Vite
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
```

## 📝 API Endpoints

### Blog
- `GET /api/blog` - Récupérer tous les articles
- `POST /api/blog` - Créer un nouvel article
- `GET /api/blog/:id` - Récupérer un article par ID
- `PUT /api/blog/:id` - Modifier un article
- `DELETE /api/blog/:id` - Supprimer un article

## 🧪 Tests

### Tests Frontend
```bash
cd Client
npm run test
```

### Tests Backend
```bash
cd backend
npm test
```

## 📦 Build et Déploiement

### Build Frontend
```bash
cd Client
npm run build
```

### Build Backend
```bash
cd backend
npm run build
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Équipe

- **404.js Team** - Développement et design

## 📞 Contact

- Email : contact@404js.com
- Site web : https://404js.com
- GitHub : https://github.com/404js

---

**Note** : Ce projet est un exemple de site vitrine moderne utilisant les meilleures pratiques de développement React et Redux. 