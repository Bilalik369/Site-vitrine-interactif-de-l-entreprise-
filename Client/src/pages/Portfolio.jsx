import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Github, 
  Calendar,
  Users,
  Code,
  ArrowRight,
  X,
  Star
} from 'lucide-react';
import { 
  selectAllProjects, 
  selectFilteredProjects, 
  selectProjectCategories,
  setPortfolioFilter,
  clearPortfolioFilter 
} from '../store/slices/portfolioSlice';

const Portfolio = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectFilteredProjects);
  const categories = useSelector(selectProjectCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSearch = (value) => {
    setSearchTerm(value);
    dispatch(setPortfolioFilter({ searchTerm: value }));
  };

  const handleCategoryFilter = (category) => {
    const newCategory = selectedCategory === category ? '' : category;
    setSelectedCategory(newCategory);
    dispatch(setPortfolioFilter({ category: newCategory }));
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    dispatch(clearPortfolioFilter());
  };

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

  const categoryLabels = {
    web: 'Développement Web',
    mobile: 'Applications Mobiles',
    ecommerce: 'E-commerce',
    api: 'APIs & Backend'
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
              Notre <span className="text-yellow-400">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Découvrez nos réalisations et laissez-vous inspirer par nos projets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {categoryLabels[category] || category}
                </button>
              ))}
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedCategory) && (
              <button
                onClick={handleClearFilters}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Effacer les filtres
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {projects.length > 0 ? (
              <motion.div
                key={`${searchTerm}-${selectedCategory}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Star className="h-6 w-6 text-yellow-400 fill-current" />
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                          {categoryLabels[project.category] || project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{project.client}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                        >
                          Détails
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun projet trouvé
                </h3>
                <p className="text-gray-600 mb-4">
                  Essayez de modifier vos critères de recherche
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Effacer les filtres
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600">{selectedProject.description}</p>
                  </div>
                  {selectedProject.featured && (
                    <Star className="h-8 w-8 text-yellow-400 fill-current" />
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Informations du projet
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Client :</span>
                        <span className="font-medium">{selectedProject.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Durée :</span>
                        <span className="font-medium">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Catégorie :</span>
                        <span className="font-medium">
                          {categoryLabels[selectedProject.category] || selectedProject.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Technologies utilisées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Voir le projet
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code source
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à créer votre projet ?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Inspiré par nos réalisations ? Contactez-nous pour discuter de votre projet 
              et obtenir un devis personnalisé.
            </p>
            <a
              href="/contact"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center"
            >
              Démarrer votre projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 