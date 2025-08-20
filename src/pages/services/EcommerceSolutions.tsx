import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, CheckCircle, CreditCard, Package, BarChart3, Users } from 'lucide-react';

const EcommerceSolutions = () => {
  const features = [
    {
      icon: <CreditCard className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Payment Integration",
      description: "Secure payment gateways with multiple payment options"
    },
    {
      icon: <Package className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Inventory Management",
      description: "Real-time inventory tracking and automated stock management"
    },
    {
      icon: <BarChart3 className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting for business insights"
    },
    {
      icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Customer Management",
      description: "Advanced customer relationship management tools"
    }
  ];

  const services = [
    "Shopify Store Development",
    "Shopify Plus Enterprise Solutions",
    "Custom E-commerce Platforms",
    "Payment Gateway Integration",
    "Inventory Management Systems",
    "Order Management & Fulfillment",
    "Multi-vendor Marketplace Development",
    "E-commerce Mobile Apps",
    "Third-party Integrations",
    "Performance Optimization",
    "SEO for E-commerce",
    "Ongoing Maintenance & Support"
  ];

  const shopifyFeatures = [
    "Custom Shopify Theme Development",
    "Shopify App Development",
    "Shopify Plus Migration",
    "Multi-store Management",
    "Advanced Checkout Customization",
    "Shopify API Integration",
    "Automated Workflows",
    "International Expansion Setup"
  ];

  const technologies = [
    { 
      name: "Shopify", 
      category: "Platform",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
    },
    { 
      name: "Shopify Plus", 
      category: "Enterprise",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
    },
    { 
      name: "React", 
      category: "Frontend",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    { 
      name: "Node.js", 
      category: "Backend",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    { 
      name: "Stripe", 
      category: "Payment",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
    },
    { 
      name: "Razorpay", 
      category: "Payment",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
    },
    { 
      name: "WooCommerce", 
      category: "Platform",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/WooCommerce_logo.svg"
    },
    { 
      name: "PayPal", 
      category: "Payment",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-xl">
                  <ShoppingCart className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold text-sm sm:text-base">E-commerce Solutions</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Shopify & E-commerce <span className="text-blue-600">Development</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Build powerful e-commerce stores with Shopify and custom platforms. We create 
                scalable online stores that drive sales and provide exceptional shopping experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
                <Link 
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Start Your Store
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link 
                  to="/portfolio"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 text-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="E-commerce Development"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete E-commerce Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build and grow a successful online business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopify Expertise Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Shopify Expertise
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                As certified Shopify partners, we specialize in creating high-converting 
                Shopify stores that scale with your business growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {shopifyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Shopify Plus Partner</h3>
                <p className="text-green-100 text-sm sm:text-base">
                  Certified to handle enterprise-level Shopify Plus implementations
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Shopify Development"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our E-commerce Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Comprehensive e-commerce solutions from concept to launch and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              E-commerce Technologies
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              We use the best e-commerce platforms and tools to build your online store
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                <div className="h-8 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="max-h-6 sm:max-h-10 max-w-16 sm:max-w-24 object-contain"
                  />
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{tech.name}</h3>
                <span className="text-xs sm:text-sm text-blue-600 bg-blue-100 px-2 sm:px-3 py-1 rounded-full">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Let's build a high-converting e-commerce store that drives sales and grows your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your Store
            </Link>
            <Link 
              to="/services"
              className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/10 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceSolutions;