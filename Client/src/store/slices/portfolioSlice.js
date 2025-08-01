import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    projects: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Plateforme e-commerce complète avec gestion des stocks, paiements et analytics.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'ecommerce',
        client: 'TechStore',
        duration: '3 mois',
        url: 'https://techstore-demo.com',
        github: 'https://github.com/404js/techstore',
        featured: true
      },
      {
        id: 2,
        title: 'Application Mobile Fitness',
        description: 'Application mobile de suivi fitness avec synchronisation cloud et analytics.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
        technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
        category: 'mobile',
        client: 'FitLife',
        duration: '4 mois',
        url: 'https://fitlife-app.com',
        github: 'https://github.com/404js/fitlife',
        featured: true
      },
      {
        id: 3,
        title: 'Dashboard Analytics',
        description: 'Dashboard d\'analytics en temps réel avec visualisations interactives.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
        technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
        category: 'web',
        client: 'DataCorp',
        duration: '2 mois',
        url: 'https://analytics-demo.com',
        github: 'https://github.com/404js/analytics-dashboard',
        featured: false
      },
      {
        id: 4,
        title: 'Site Vitrine Restaurant',
        description: 'Site vitrine moderne pour restaurant avec réservation en ligne.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
        technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
        category: 'web',
        client: 'Le Gourmet',
        duration: '1 mois',
        url: 'https://legourmet-restaurant.com',
        github: 'https://github.com/404js/restaurant-site',
        featured: false
      },
      {
        id: 5,
        title: 'API RESTful',
        description: 'API RESTful complète avec authentification JWT et documentation Swagger.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500',
        technologies: ['Express.js', 'JWT', 'MongoDB', 'Swagger'],
        category: 'api',
        client: 'StartupXYZ',
        duration: '2 mois',
        url: 'https://api-startupxyz.com',
        github: 'https://github.com/404js/api-restful',
        featured: false
      },
      {
        id: 6,
        title: 'PWA News App',
        description: 'Application PWA de news avec synchronisation hors ligne.',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500',
        technologies: ['React', 'Service Workers', 'IndexedDB', 'PWA'],
        category: 'web',
        client: 'NewsDaily',
        duration: '3 mois',
        url: 'https://newsdaily-pwa.com',
        github: 'https://github.com/404js/news-pwa',
        featured: true
      }
    ],
    selectedProject: null,
    filter: {
      category: '',
      searchTerm: ''
    }
  },
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    setPortfolioFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    clearPortfolioFilter: (state) => {
      state.filter = { category: '', searchTerm: '' };
    }
  }
});

export const { setSelectedProject, setPortfolioFilter, clearPortfolioFilter } = portfolioSlice.actions;

// Selectors
export const selectAllProjects = (state) => state.portfolio.projects;
export const selectSelectedProject = (state) => state.portfolio.selectedProject;
export const selectPortfolioFilter = (state) => state.portfolio.filter;

// Selector avec filtres (HOF)
export const selectFilteredProjects = (state) => {
  const { projects, filter } = state.portfolio;
  return projects.filter(project => {
    const matchesCategory = !filter.category || project.category === filter.category;
    const matchesSearch = !filter.searchTerm || 
      project.title.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(filter.searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
};

export const selectFeaturedProjects = (state) => {
  const projects = selectAllProjects(state);
  return projects.filter(project => project.featured);
};

export const selectProjectCategories = (state) => {
  const projects = selectAllProjects(state);
  return [...new Set(projects.map(project => project.category))];
};

export default portfolioSlice.reducer; 