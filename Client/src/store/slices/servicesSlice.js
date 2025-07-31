import { createSlice } from '@reduxjs/toolkit';

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [
      {
        id: 1,
        title: 'Développement Web',
        description: 'Création de sites web modernes et responsives avec les dernières technologies.',
        icon: '🌐',
        features: ['React/Next.js', 'Node.js/Express', 'Bases de données', 'APIs RESTful'],
        price: 'À partir de 2000€',
        category: 'web'
      },
      {
        id: 2,
        title: 'Applications Mobiles',
        description: 'Développement d\'applications mobiles natives et cross-platform.',
        icon: '📱',
        features: ['React Native', 'Flutter', 'iOS/Android', 'PWA'],
        price: 'À partir de 3000€',
        category: 'mobile'
      },
      {
        id: 3,
        title: 'E-commerce',
        description: 'Solutions e-commerce complètes et personnalisées.',
        icon: '🛒',
        features: ['WooCommerce', 'Shopify', 'Paiements sécurisés', 'Gestion des stocks'],
        price: 'À partir de 2500€',
        category: 'ecommerce'
      },
      {
        id: 4,
        title: 'Consultation IT',
        description: 'Accompagnement et conseils en transformation digitale.',
        icon: '💼',
        features: ['Audit technique', 'Architecture cloud', 'DevOps', 'Formation'],
        price: 'À partir de 150€/h',
        category: 'consulting'
      },
      {
        id: 5,
        title: 'Maintenance & Support',
        description: 'Services de maintenance préventive et support technique.',
        icon: '🔧',
        features: ['Monitoring 24/7', 'Sauvegardes', 'Mises à jour', 'Support prioritaire'],
        price: 'À partir de 500€/mois',
        category: 'maintenance'
      },
      {
        id: 6,
        title: 'Design UI/UX',
        description: 'Création d\'interfaces utilisateur modernes et intuitives.',
        icon: '🎨',
        features: ['Wireframes', 'Prototypes', 'Design System', 'Tests utilisateurs'],
        price: 'À partir de 1800€',
        category: 'design'
      }
    ],
    selectedService: null,
    filter: {
      category: '',
      searchTerm: ''
    }
  },
  reducers: {
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
    setServiceFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    clearServiceFilter: (state) => {
      state.filter = { category: '', searchTerm: '' };
    }
  }
});

export const { setSelectedService, setServiceFilter, clearServiceFilter } = servicesSlice.actions;

// Selectors
export const selectAllServices = (state) => state.services.services;
export const selectSelectedService = (state) => state.services.selectedService;
export const selectServiceFilter = (state) => state.services.filter;

// Selector avec filtres (HOF)
export const selectFilteredServices = (state) => {
  const { services, filter } = state.services;
  return services.filter(service => {
    const matchesCategory = !filter.category || service.category === filter.category;
    const matchesSearch = !filter.searchTerm || 
      service.title.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(filter.searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
};

export const selectServiceCategories = (state) => {
  const services = selectAllServices(state);
  return [...new Set(services.map(service => service.category))];
};

export default servicesSlice.reducer; 