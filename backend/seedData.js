import mongoose from 'mongoose';
import { config } from './config.js';
import Blog from './models/Blog.js';

const sampleBlogPosts = [
  {
    title: "Les tendances du développement web en 2024",
    content: "Le développement web continue d'évoluer rapidement avec l'émergence de nouvelles technologies. React 18, Next.js 14, et les nouvelles fonctionnalités de JavaScript ES2024 sont au cœur de cette évolution. Les développeurs doivent rester à jour avec ces changements pour créer des applications modernes et performantes. L'importance de l'optimisation des performances et de l'accessibilité ne cesse de croître, faisant de ces compétences des éléments essentiels pour tout développeur web professionnel.",
    category: "Développement Web",
    author: "404.js Team"
  },
  {
    title: "Comment optimiser les performances de votre application React",
    content: "L'optimisation des performances est cruciale pour offrir une expérience utilisateur fluide. Dans cet article, nous explorons les meilleures pratiques pour optimiser vos applications React : la mémorisation avec React.memo et useMemo, le lazy loading des composants, l'optimisation des images, et l'utilisation de React.lazy pour le code splitting. Ces techniques peuvent considérablement améliorer les temps de chargement et la réactivité de votre application.",
    category: "Technologies",
    author: "404.js Team"
  },
  {
    title: "Guide complet du développement mobile avec React Native",
    content: "React Native continue de dominer le développement mobile cross-platform. Ce guide complet couvre tout ce que vous devez savoir : configuration de l'environnement, structure de projet, navigation, gestion d'état avec Redux, intégration d'APIs, et déploiement sur les stores. Nous abordons également les défis courants et leurs solutions, ainsi que les bonnes pratiques pour créer des applications mobiles performantes et maintenables.",
    category: "Applications Mobiles",
    author: "404.js Team"
  },
  {
    title: "Créer une boutique e-commerce moderne avec Next.js",
    content: "Next.js offre des fonctionnalités puissantes pour créer des boutiques e-commerce performantes. Cet article détaille la mise en place d'une architecture e-commerce complète : gestion des produits, panier d'achat, système de paiement avec Stripe, gestion des commandes, et optimisation SEO. Nous explorons également l'utilisation de Prisma pour la gestion de base de données et l'intégration de systèmes de gestion de contenu headless.",
    category: "E-commerce",
    author: "404.js Team"
  },
  {
    title: "Les principes fondamentaux du design UI/UX",
    content: "Un bon design UI/UX est essentiel pour le succès de toute application. Cet article présente les principes fondamentaux : hiérarchie visuelle, contraste et lisibilité, cohérence des composants, feedback utilisateur, et accessibilité. Nous discutons également des outils modernes comme Figma, les systèmes de design, et l'importance des tests utilisateurs pour créer des interfaces intuitives et engageantes.",
    category: "Design",
    author: "404.js Team"
  },
  {
    title: "Sécuriser votre application web : bonnes pratiques",
    content: "La sécurité web est plus importante que jamais. Cet article couvre les aspects essentiels de la sécurisation d'une application web : authentification JWT, protection CSRF, validation des données, chiffrement HTTPS, et gestion sécurisée des sessions. Nous abordons également les vulnérabilités courantes comme les injections SQL, XSS, et les attaques par force brute, ainsi que les mesures préventives appropriées.",
    category: "Conseils",
    author: "404.js Team"
  }
];

const seedDatabase = async () => {
  try {
    // Connect to database
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Connected to database');
    
    // Clear existing data
    await Blog.deleteMany({});
    console.log('🗑️ Cleared existing blog posts');
    
    // Insert sample data
    const createdPosts = await Blog.insertMany(sampleBlogPosts);
    console.log(`✅ Created ${createdPosts.length} sample blog posts`);
    
    // Display created posts
    createdPosts.forEach(post => {
      console.log(`📝 - ${post.title} (${post.category})`);
    });
    
    console.log('\n🎉 Database seeded successfully!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase(); 