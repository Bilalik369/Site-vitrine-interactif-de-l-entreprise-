import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Search, 
  Filter, 
  Code, 
  Smartphone, 
  ShoppingCart, 
  Users, 
  Wrench,
  Palette,
  ArrowRight,
  Check,
  Star,
  Clock,
  DollarSign,
  X
} from 'lucide-react';
import { 
  selectAllServices, 
  selectFilteredServices, 
  selectServiceCategories,
  setServiceFilter,
  clearServiceFilter 
} from '../store/slices/servicesSlice';

const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector(selectFilteredServices);
  const categories = useSelector(selectServiceCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  const handleSearch = (value) => {
    setSearchTerm(value);
    dispatch(setServiceFilter({ searchTerm: value }));
  };

  const handleCategoryFilter = (category) => {
    const newCategory = selectedCategory === category ? '' : category;
    setSelectedCategory(newCategory);
    dispatch(setServiceFilter({ category: newCategory }));
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    dispatch(clearServiceFilter());
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

  const categoryIcons = {
    web: Code,
    mobile: Smartphone,
    ecommerce: ShoppingCart,
    consulting: Users,
    maintenance: Wrench,
    design: Palette
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
              Nos <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Des solutions complètes et personnalisées pour tous vos besoins digitaux
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
                placeholder="Rechercher un service..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = categoryIcons[category];
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span className="capitalize">{category}</span>
                  </button>
                );
              })}
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

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {services.length > 0 ? (
              <motion.div
                key={`${searchTerm}-${selectedCategory}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          {service.price}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Technologies incluses :
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedService(service)}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
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
                  Aucun service trouvé
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

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{selectedService.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedService.title}
                      </h2>
                      <p className="text-blue-600 font-medium">
                        {selectedService.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <p className="text-gray-600 mb-6">
                  {selectedService.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Technologies et fonctionnalités :
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Demander un devis
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
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

      {/* Why Choose Us */}
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
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des avantages qui font la différence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qualité Premium
              </h3>
              <p className="text-gray-600">
                Nous utilisons les meilleures technologies et suivons les standards 
                les plus élevés pour garantir des solutions de qualité.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Délais Respectés
              </h3>
              <p className="text-gray-600">
                Nous nous engageons à respecter les délais convenus et à vous tenir 
                informé de l'avancement de votre projet.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Prix Transparents
              </h3>
              <p className="text-gray-600">
                Des tarifs clairs et transparents, sans surprise. Nous vous proposons 
                des solutions adaptées à votre budget.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 