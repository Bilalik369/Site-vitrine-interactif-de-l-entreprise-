import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Users, 
  Award, 
  Code, 
  Globe, 
  Zap,
  Shield,
  Lightbulb,
  Coffee
} from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alexandre Dubois',
      role: 'CEO & Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: 'Expert en développement full-stack avec 8 ans d\'expérience.',
      skills: ['React', 'Node.js', 'Python', 'AWS']
    },
    {
      name: 'Marie Laurent',
      role: 'Designer UI/UX',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      bio: 'Passionnée par l\'expérience utilisateur et le design moderne.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
      name: 'Thomas Moreau',
      role: 'Mobile Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'Spécialiste des applications mobiles natives et cross-platform.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      name: 'Sophie Martin',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      bio: 'Experte en infrastructure cloud et automatisation.',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, en nous assurant que nos solutions répondent aux plus hauts standards de qualité.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre passion pour la technologie nous pousse à créer des solutions innovantes et à rester à la pointe des dernières tendances.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous croyons en la puissance du travail d\'équipe et de la collaboration avec nos clients pour atteindre les meilleurs résultats.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous explorons constamment de nouvelles technologies et approches pour offrir des solutions créatives et efficaces.'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Fondation de 404.js',
      description: 'Création de l\'entreprise avec une vision claire : démocratiser l\'accès aux solutions digitales de qualité.'
    },
    {
      year: '2020',
      title: 'Premier projet majeur',
      description: 'Développement d\'une plateforme e-commerce complète pour un client de renom, marquant le début de notre croissance.'
    },
    {
      year: '2021',
      title: 'Expansion de l\'équipe',
      description: 'Recrutement de nouveaux talents et ouverture de nouveaux domaines d\'expertise (mobile, DevOps).'
    },
    {
      year: '2022',
      title: 'Reconnaissance',
      description: 'Obtention de plusieurs certifications et récompenses dans le domaine du développement web et mobile.'
    },
    {
      year: '2023',
      title: 'Innovation & IA',
      description: 'Intégration de l\'intelligence artificielle dans nos solutions et développement de projets innovants.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À propos de <span className="text-yellow-400">404.js</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Nous sommes une équipe passionnée de développeurs, designers et experts 
              qui transformons vos idées en solutions digitales innovantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Chez 404.js, notre mission est de démocratiser l'accès aux solutions 
                digitales de qualité. Nous croyons que chaque entreprise, quelle que 
                soit sa taille, mérite d'avoir accès à des technologies modernes et 
                innovantes.
              </p>
              <p className="text-lg text-gray-600">
                Nous nous engageons à créer des solutions sur mesure qui répondent 
                parfaitement aux besoins de nos clients, en utilisant les dernières 
                technologies et en suivant les meilleures pratiques du développement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-lg">
                <Globe className="h-16 w-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
                <p className="text-gray-700">
                  Devenir le partenaire digital de référence pour les entreprises 
                  qui souhaitent innover et se transformer numériquement, en créant 
                  des solutions qui impactent positivement leur croissance et leur 
                  succès.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail et nos relations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des experts passionnés qui donnent vie à vos projets
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Histoire
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un parcours marqué par l'innovation et la croissance
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Projets Réalisés</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Clients Satisfaits</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Années d'Expérience</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Client</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 