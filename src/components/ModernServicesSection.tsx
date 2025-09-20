import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  TrendingUp, 
  Brain, 
  Cloud, 
  Bot, 
  Settings,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Target,
  Cpu
} from 'lucide-react';

const ModernServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const webGrowthServices = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Website Development",
      description: "E-commerce platforms, SaaS applications, and custom web solutions built with cutting-edge technologies.",
      features: ["E-commerce Platforms", "SaaS Applications", "Custom Web Apps"],
      link: "/services/web-development",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing Services",
      description: "Performance advertising campaigns, SEO optimization, and comprehensive social media management.",
      features: ["Performance Advertising", "SEO Optimization", "Social Media Management"],
      link: "/services/digital-marketing",
      gradient: "from-purple-500 to-pink-400"
    }
  ];

  const aiModelServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Model Fine-tuning",
      description: "Advanced Large Language Models and domain-specific AI models tailored to your business needs.",
      features: ["Large Language Models", "Domain-Specific AI", "Custom Training"],
      link: "/services/ai-development",
      gradient: "from-emerald-500 to-teal-400"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Deployment",
      description: "Scalable infrastructure solutions across AWS, Google Cloud Platform, and Microsoft Azure.",
      features: ["AWS Infrastructure", "Google Cloud Platform", "Microsoft Azure"],
      link: "/services/cloud-services",
      gradient: "from-orange-500 to-red-400"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "API Integrations",
      description: "Intelligent chatbots and workflow automation systems that streamline your operations.",
      features: ["Intelligent Chatbots", "Workflow Automation", "Custom APIs"],
      link: "/services/ai-consulting",
      gradient: "from-indigo-500 to-purple-400"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "AI Infrastructure Management",
      description: "Real-time monitoring and auto-scaling solutions for optimal AI system performance.",
      features: ["Real-time Monitoring", "Auto-scaling Solutions", "Performance Optimization"],
      link: "/services/ai-development",
      gradient: "from-pink-500 to-rose-400"
    }
  ];

  const ServiceCard = ({ service, index, delay }: { service: any, index: number, delay: number }) => (
    <div 
      className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
      
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`} />
      
      {/* Icon container */}
      <div className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        <div className="text-white group-hover:animate-pulse">
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {service.description}
      </p>

      {/* Features */}
      <div className="space-y-2 mb-8">
        {service.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full group-hover:animate-pulse`} />
            {feature}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link 
        to={service.link}
        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105`}
      >
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float opacity-50" />
        <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-pink-400 rounded-full animate-float-delayed opacity-30" />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-500/10 rounded-lg rotate-45 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            <span className="text-blue-400 font-semibold text-lg tracking-wide uppercase">Our Services</span>
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Cutting-Edge Solutions
          </h2>
          
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '200ms' }}>
            Empowering businesses with next-generation technology solutions and AI-driven innovations
          </p>
        </div>

        {/* Web & Growth Section */}
        <div className="mb-20">
          <div className={`flex items-center gap-4 mb-12 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-blue-400" />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Web & Growth
              </h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {webGrowthServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                index={index} 
                delay={600 + index * 200} 
              />
            ))}
          </div>
        </div>

        {/* AI & Model Deployment Section */}
        <div>
          <div className={`flex items-center gap-4 mb-12 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '1000ms' }}>
            <div className="flex items-center gap-3">
              <Cpu className="w-8 h-8 text-purple-400" />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI & Model Deployment
              </h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiModelServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                index={index} 
                delay={1200 + index * 150} 
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '1800ms' }}>
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-800/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge solutions can accelerate your growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                Get Started Today
              </Link>
              <Link 
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-gray-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Target className="w-5 h-5" />
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ModernServicesSection;