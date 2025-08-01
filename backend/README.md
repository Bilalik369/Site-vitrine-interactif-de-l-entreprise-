# Backend API - 404.js

API REST pour le site vitrine 404.js avec gestion du blog et base de données MongoDB.

## 🚀 Installation et Configuration

### Prérequis
- Node.js (v16 ou supérieur)
- MongoDB (local ou Atlas)
- npm ou yarn

### 1. Installation des dépendances
```bash
npm install
```

### 2. Configuration de l'environnement
Créer un fichier `.env` à la racine du dossier backend :
```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/404js-blog
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### 3. Test de la connexion à la base de données
```bash
npm run test:db
```

### 4. Ajout de données de test
```bash
npm run seed
```

### 5. Démarrage du serveur
```bash
# Mode développement (avec nodemon)
npm run dev

# Mode production
npm start
```

## 📡 API Endpoints

### Health Check
- `GET /api/health` - Vérifier l'état du serveur

### Blog
- `GET /api/blog` - Récupérer tous les articles
- `POST /api/blog` - Créer un nouvel article
- `GET /api/blog/:id` - Récupérer un article par ID
- `PUT /api/blog/:id` - Modifier un article
- `DELETE /api/blog/:id` - Supprimer un article

## 🗄️ Structure de la Base de Données

### Collection: blogs
```javascript
{
  _id: ObjectId,
  title: String (required, max 100 chars),
  content: String (required),
  category: String (required),
  author: String (default: "404.js Team"),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 Configuration

### Variables d'Environnement
- `PORT` - Port du serveur (défaut: 5000)
- `MONGO_URL` - URL de connexion MongoDB
- `NODE_ENV` - Environnement (development/production)
- `CORS_ORIGIN` - Origine autorisée pour CORS

### CORS
Le serveur est configuré pour accepter les requêtes depuis le frontend React (port 5173).

## 📊 Scripts Disponibles

- `npm start` - Démarrer le serveur en mode production
- `npm run dev` - Démarrer le serveur en mode développement avec nodemon
- `npm run seed` - Ajouter des données de test à la base de données
- `npm run test:db` - Tester la connexion à la base de données

## 🛠️ Fonctionnalités

### Validation des Données
- Validation automatique des champs requis
- Messages d'erreur détaillés
- Gestion des erreurs de validation

### Logging
- Logs détaillés des requêtes
- Logs des opérations de base de données
- Gestion des erreurs avec messages informatifs

### Sécurité
- CORS configuré pour le frontend
- Validation des entrées utilisateur
- Gestion sécurisée des erreurs

## 🔍 Dépannage

### Problème de connexion MongoDB
1. Vérifier que MongoDB est démarré
2. Vérifier l'URL de connexion dans `.env`
3. Tester la connexion avec `npm run test:db`

### Erreurs CORS
1. Vérifier que `CORS_ORIGIN` pointe vers le bon port frontend
2. Redémarrer le serveur après modification

### Erreurs de validation
1. Vérifier que tous les champs requis sont fournis
2. Vérifier les types de données

## 📝 Exemples d'Utilisation

### Créer un article
```bash
curl -X POST http://localhost:5000/api/blog \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mon article",
    "content": "Contenu de l'article",
    "category": "Développement Web",
    "author": "John Doe"
  }'
```

### Récupérer tous les articles
```bash
curl http://localhost:5000/api/blog
```

## 🚀 Déploiement

### Variables d'environnement de production
```env
PORT=5000
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/404js-blog
NODE_ENV=production
CORS_ORIGIN=https://votre-domaine.com
```

### PM2 (recommandé pour la production)
```bash
npm install -g pm2
pm2 start server.js --name "404js-api"
pm2 save
pm2 startup
``` 