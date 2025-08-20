import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  ShoppingCart,
  Cloud,
  Brain,
  Cpu,
  Search,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "Web Development",
      description: "Custom web applications and websites built with cutting-edge technologies for optimal performance and user experience.",
      features: [
        "Custom Web Applications",
        "Responsive Design", 
        "Performance Optimization",
        "SEO Ready",
        "Secure & Scalable",
        "Modern Frameworks"
      ],
      technologies: ["React", "Node.js", "Next.js", "TypeScript", "MongoDB", "PostgreSQL"],
      link: "/services/web-development",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <ShoppingCart className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with Shopify integration, payment processing, and inventory management.",
      features: [
        "Shopify Development",
        "Custom E-commerce Platforms",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking",
        "Multi-vendor Support"
      ],
      technologies: ["Shopify", "Shopify Plus", "WooCommerce", "Stripe", "Razorpay", "Square"],
      link: "/services/ecommerce-solutions",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Cloud className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "Cloud Services",
      description: "AWS cloud solutions including migration, infrastructure setup, and ongoing management for scalable applications.",
      features: [
        "AWS Cloud Migration",
        "Infrastructure Setup",
        "DevOps Implementation",
        "Auto-scaling Solutions",
        "Monitoring & Logging",
        "Security Implementation"
      ],
      technologies: ["AWS", "EC2", "S3", "RDS", "Lambda", "CloudFormation"],
      link: "/services/cloud-services",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Brain className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "AI Consulting",
      description: "Strategic AI consulting to help businesses identify opportunities and implement AI solutions effectively.",
      features: [
        "AI Strategy Development",
        "Use Case Identification",
        "Technology Assessment",
        "Implementation Roadmap",
        "ROI Analysis",
        "Change Management"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "AWS AI", "Google AI"],
      link: "/services/ai-consulting",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Cpu className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "AI Development",
      description: "Custom AI solutions including machine learning models, chatbots, and intelligent automation systems.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Chatbot Development",
        "Predictive Analytics",
        "AI Integration"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Langchain", "Vector Databases"],
      link: "/services/ai-development",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Search className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive conversions.",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "PPC Campaigns",
        "Content Strategy",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Mailchimp", "HubSpot"],
      link: "/services/digital-marketing",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our design team creates wireframes and prototypes to visualize the solution before development begins."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers build your solution using best practices while our QA team ensures quality and performance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support, maintenance, and optimization services."
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            We offer comprehensive technology solutions to help your business thrive in the digital world. 
            From web development to AI solutions, we've got you covered.
          </p>
          <Link 
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="bg-blue-100 p-3 sm:p-4 rounded-2xl flex-shrink-0">
                      <div className="text-blue-600">
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>

                      <div className="mb-4 sm:mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4 sm:mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link 
                          to={service.link}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Link>
                        <Link 
                          to="/contact"
                          className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors duration-200 text-center text-sm sm:text-base"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-4 sm:mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a custom solution that drives results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your Project
            </Link>
            <Link 
              to="/portfolio"
              className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/10 transition-colors duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;