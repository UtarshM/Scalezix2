import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'Web Development', 
          path: '/services/web-development',
          description: 'Custom web applications and websites',
          icon: '💻'
        },
        { 
          name: 'E-commerce Solutions', 
          path: '/services/ecommerce-solutions',
          description: 'Shopify and custom e-commerce platforms',
          icon: '🛒'
        },
        { 
          name: 'Cloud Services', 
          path: '/services/cloud-services',
          description: 'AWS cloud migration and management',
          icon: '☁️'
        },
        { 
          name: 'AI Consulting', 
          path: '/services/ai-consulting',
          description: 'Strategic AI consulting and planning',
          icon: '🧠'
        },
        { 
          name: 'AI Development', 
          path: '/services/ai-development',
          description: 'Custom AI solutions and automation',
          icon: '🤖'
        },
        { 
          name: 'Digital Marketing', 
          path: '/services/digital-marketing',
          description: 'SEO, PPC, and social media marketing',
          icon: '📈'
        }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/Screenshot_2025-07-06_at_11.40.08_AM-removebg-preview.png" 
              alt="ScaleziX" 
              className="h-8 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group flex items-center">
                {item.hasDropdown ? (
                  <div 
                    className="relative flex items-center"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`font-medium transition-all duration-200 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50 ${
                        location.pathname === item.path || location.pathname.startsWith('/services/')
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                    {isServicesOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50 opacity-0 translate-y-2 animate-fadeIn drop-shadow-lg">
                        <div className="px-6 py-2 border-b border-gray-100 mb-2">
                          <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide text-center">
                            Our Services
                          </h3>
                        </div>
                        {/* Modern Card Grid Layout - 6 services in one line, more compact and elegant */}
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 px-6">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.path}
                              className="group block p-4 bg-gray-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200 text-center shadow-sm hover:shadow-lg transform hover:scale-105 border border-transparent hover:border-blue-200"
                            >
                              <div className="flex flex-col items-center gap-2">
                                <div className="text-3xl mb-1">{dropdownItem.icon}</div>
                                <div>
                                  <div className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors duration-200 text-sm leading-tight">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 ${
                      location.pathname === item.path 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+918200010241"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 8200010241</span>
            </a>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 rounded-b-2xl shadow-xl">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 font-medium transition-colors duration-200 rounded-lg mx-2 ${
                    location.pathname === item.path 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="grid grid-cols-2 gap-2 px-4 pb-2">
                    {item.dropdownItems?.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        to={dropdownItem.path}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-lg">{dropdownItem.icon}</span>
                        <span className="text-xs leading-tight">{dropdownItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 border-t border-gray-100 mt-4 space-y-3">
              <a 
                href="tel:+918200010241"
                className="flex items-center gap-2 text-gray-700 px-2 py-2 rounded-lg hover:bg-gray-50"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 8200010241</span>
              </a>
              <Link 
                to="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;