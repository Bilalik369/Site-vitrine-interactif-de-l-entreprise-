import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Clock,
  Award,
  ChevronDown,
  Play,
  Globe,
  Rocket
} from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 1,
      icon: '🌐',
      title: 'Développement Web',
      description: 'Sites web modernes et applications web performantes avec les dernières technologies.',
      price: 'À partir de 2000€',
      features: ['React/Vue.js', 'Node.js', 'Responsive Design', 'SEO Optimisé']
    },
    {
      id: 2,
      icon: '📱',
      title: 'Applications Mobiles',
      description: 'Applications natives et cross-platform pour iOS et Android.',
      price: 'À partir de 5000€',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'UX/UI Design']
    },
    {
      id: 3,
      icon: '🛒',
      title: 'E-commerce',
      description: 'Solutions e-commerce complètes pour développer votre business en ligne.',
      price: 'À partir de 3500€',
      features: ['Shopify', 'WooCommerce', 'Paiement sécurisé', 'Gestion stock']
    },
    {
      id: 4,
      icon: '🎨',
      title: 'UX/UI Design',
      description: 'Design d\'interface utilisateur moderne et expérience utilisateur optimisée.',
      price: 'À partir de 1500€',
      features: ['Figma', 'Adobe XD', 'Prototypage', 'Design System']
    },
    {
      id: 5,
      icon: '☁️',
      title: 'Solutions Cloud',
      description: 'Architecture cloud scalable et infrastructure moderne.',
      price: 'À partir de 2500€',
      features: ['AWS', 'Google Cloud', 'Azure', 'DevOps']
    },
    {
      id: 6,
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Support technique 24/7 et maintenance continue de vos applications.',
      price: 'À partir de 500€/mois',
      features: ['Support 24/7', 'Mises à jour', 'Monitoring', 'Backup']
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'E-commerce Fashion',
      description: 'Plateforme e-commerce moderne avec plus de 10,000 produits et paiement sécurisé.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'E-commerce',
      metrics: '+250% ventes'
    },
    {
      id: 2,
      title: 'App Mobile Fitness',
      description: 'Application mobile de coaching sportif avec suivi personnalisé.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'AI'],
      category: 'Mobile',
      metrics: '50K+ utilisateurs'
    },
    {
      id: 3,
      title: 'SaaS Analytics',
      description: 'Plateforme SaaS d\'analytics avec tableaux de bord temps réel.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'Python', 'PostgreSQL'],
      category: 'SaaS',
      metrics: '99.9% uptime'
    }
  ];

  const recentPosts = [
    {
      _id: 1,
      title: 'Les tendances du développement web en 2024',
      content: 'Découvrez les technologies et frameworks qui domineront le développement web cette année...',
      category: 'Développement',
      author: 'Alex Martin',
      readTime: '5 min',
      date: '15 Mars 2024'
    },
    {
      _id: 2,
      title: 'Optimisation des performances web',
      content: 'Guide complet pour améliorer les performances de votre site web et réduire les temps de chargement...',
      category: 'Performance',
      author: 'Sarah Wilson',
      readTime: '8 min',
      date: '12 Mars 2024'
    },
    {
      _id: 3,
      title: 'SEO moderne : Guide 2024',
      content: 'Stratégies SEO avancées pour améliorer votre visibilité sur les moteurs de recherche...',
      category: 'SEO',
      author: 'David Chen',
      readTime: '6 min',
      date: '10 Mars 2024'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projets Réalisés', icon: CheckCircle, color: 'text-emerald-500' },
    { number: '100%', label: 'Clients Satisfaits', icon: Star, color: 'text-yellow-500' },
    { number: '8+', label: 'Années d\'Expérience', icon: TrendingUp, color: 'text-blue-500' },
    { number: '24/7', label: 'Support Client', icon: Users, color: 'text-purple-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <motion.div 
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium backdrop-blur-sm border border-blue-400/30">
                <Rocket className="w-4 h-4 mr-2" />
                Solutions digitales innovantes
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Transformez vos idées en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                réalité digitale
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
            >
              Nous créons des expériences digitales exceptionnelles qui propulsent 
              votre entreprise vers le succès. Solutions web, mobile et cloud de nouvelle génération.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/portfolio"
                  className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">Voir nos réalisations</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Démarrer un projet
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-white/60"
              >
                <span className="text-sm mb-2">Découvrir</span>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-300`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold text-lg mb-4 block">NOS SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions Complètes pour Votre{' '}
              <span className="text-blue-600">Succès Digital</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              De la conception à la mise en ligne, nous vous accompagnons à chaque étape 
              de votre transformation digitale avec expertise et innovation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-500"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold text-lg mb-4 block">NOS RÉALISATIONS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Projets qui Ont Marqué la{' '}
              <span className="text-blue-600">Différence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs 
              avec des solutions innovantes et sur mesure.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                      {project.metrics}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to="/portfolio"
                    className="group/link inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Voir le projet
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-blue-400 font-semibold text-lg mb-4 block">NOTRE BLOG</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Tendances{' '}
              <span className="text-blue-400">Tech</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Restez à la pointe de l'innovation avec nos articles sur les dernières 
              tendances du développement et du design digital.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {recentPosts.map((post, index) => (
              <motion.div
                key={post._id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/30 text-blue-200 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-blue-200 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-blue-100 mb-6 leading-relaxed line-clamp-3">
                  {post.content.substring(0, 120)}...
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{post.author}</div>
                      <div className="text-blue-200 text-xs">{post.date}</div>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post._id}`}
                    className="group/link text-blue-300 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link
              to="/blog"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              Voir tous les articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-xl"
          style={{ animationDelay: '1s' }}
        />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Zap className="w-16 h-16 mx-auto text-yellow-400 mb-6" />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Prêt à Révolutionner Votre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Présence Digitale ?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Rejoignez plus de 150 entreprises qui nous font confiance pour transformer 
              leurs idées en succès digitaux. Votre projet mérite une approche exceptionnelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">Démarrer mon projet</span>
                  <Rocket className="ml-3 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/portfolio"
                  className="group text-white font-semibold flex items-center hover:text-yellow-300 transition-colors text-lg"
                >
                  <Play className="mr-2 h-6 w-6 p-1 border-2 border-white rounded-full group-hover:border-yellow-300" />
                  Voir nos réalisations
                </Link>
              </motion.div>
            </div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-8 text-blue-200"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Garantie satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Livraison rapide</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Qualité premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium">Support international</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Une Question ? Un Projet en Tête ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est là pour vous accompagner. 
              Discutons de votre vision et transformons-la en réalité.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Parler à un expert
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <a
                  href="mailto:contact@votreagence.com"
                  className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-colors duration-200 inline-flex items-center"
                >
                  <Code className="mr-2 h-5 w-5" />
                  contact@votreagence.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 