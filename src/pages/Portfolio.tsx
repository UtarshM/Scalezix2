import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Development', 'E-commerce', 'UI/UX Design'];

  const projects = [
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "A comprehensive healthcare app connecting patients with doctors, featuring appointment booking and telemedicine capabilities.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "WebRTC", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "SaaS Analytics Dashboard",
      category: "Web Development",
      description: "A powerful analytics dashboard for SaaS companies with real-time data visualization and custom reporting features.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Restaurant Management System",
      category: "Web Development",
      description: "Complete restaurant management solution with POS system, inventory management, and customer relationship features.",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Angular", "Express.js", "MySQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Modern real estate platform with property listings, virtual tours, and advanced search capabilities.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description: "Comprehensive fitness app with workout tracking, nutrition planning, and social features for fitness enthusiasts.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Fashion E-commerce Store",
      category: "E-commerce",
      description: "Luxury fashion e-commerce platform with AR try-on features, personalized recommendations, and seamless checkout.",
      image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "React", "AR.js", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Banking App UI/UX",
      category: "UI/UX Design",
      description: "Complete UI/UX design for a modern banking application with focus on security, usability, and accessibility.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Learning Management System",
      category: "Web Development",
      description: "Comprehensive LMS platform with course creation, student management, and interactive learning features.",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our recent projects and see how we've helped businesses transform their digital presence 
            with innovative solutions and cutting-edge technology.
          </p>
          <Link 
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Highlighting some of our most successful and innovative projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a 
                      href={project.liveUrl}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a 
                      href={project.liveUrl}
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 flex items-center gap-2"
                    >
                      View Live <ExternalLink className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="text-gray-500 hover:text-gray-700 font-semibold transition-colors duration-200 flex items-center gap-2"
                    >
                      Source Code <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All Projects
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Browse through our complete portfolio of successful projects
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                    activeFilter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a 
                      href={project.liveUrl}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <a 
                      href={project.liveUrl}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                    >
                      View Live
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors duration-200"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's create something amazing together. Contact us to discuss your project requirements and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link 
              to="/services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;