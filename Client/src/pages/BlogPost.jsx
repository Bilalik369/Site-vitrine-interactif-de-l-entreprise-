import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  Share2,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';
import { 
  fetchBlogPosts,
  selectAllPosts,
  selectBlogLoading,
  selectBlogError
} from '../store/slices/blogSlice';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const loading = useSelector(selectBlogLoading);
  const error = useSelector(selectBlogError);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchBlogPosts());
    }
  }, [dispatch, posts.length]);

  const post = posts.find(p => p._id === id);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const shareUrl = window.location.href;
  const shareText = post ? `${post.title} - 404.js Blog` : '';

  const shareLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: Facebook,
      color: 'text-blue-600'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      icon: Twitter,
      color: 'text-blue-400'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      icon: Linkedin,
      color: 'text-blue-700'
    }
  ];

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de l'article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Erreur: {error}</p>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Article non trouvé
          </h1>
          <p className="text-gray-600 mb-4">
            L'article que vous recherchez n'existe pas ou a été supprimé.
          </p>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  // Trouver les articles similaires (même catégorie)
  const relatedPosts = posts
    .filter(p => p._id !== post._id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="pt-16">
      {/* Article Header */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au blog
            </Link>

            <div className="mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
              {post.updatedAt !== post.createdAt && (
                <div className="flex items-center space-x-2">
                  <span>• Modifié le {formatDate(post.updatedAt)}</span>
                </div>
              )}
            </div>

            {/* Share buttons */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Partager :</span>
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} hover:opacity-80 transition-opacity`}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Articles similaires
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez d'autres articles dans la même catégorie
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost._id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {relatedPost.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {relatedPost.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.content.substring(0, 150)}...
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{relatedPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(relatedPost.createdAt)}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${relatedPost._id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                    >
                      Lire plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

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
              Besoin d'aide pour votre projet ?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Nos experts sont là pour vous accompagner dans la réalisation 
              de vos projets digitaux.
            </p>
            <Link
              to="/contact"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center"
            >
              Nous contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 