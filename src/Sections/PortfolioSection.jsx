import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


function PortfolioSection({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  
  // Define diverse project types
  const projects = [
    {
      title: "Modern Fashion Store",
      category: "E-commerce Website",
      type: "ecommerce",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Corporate Landing Page",
      category: "Static Website",
      type: "static",
      description: "Clean and professional static website for a financial services company with optimized performance.",
      image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRpbmclMjBwYWdlfGVufDB8fDB8fHww"
    },
    {
      title: "Product Launch Countdown",
      category: "Interactive Website",
      type: "interactive",
      description: "Engaging single-page application featuring interactive elements and animated transitions.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Portfolio Dashboard",
      category: "SPA Dashboard",
      type: "dashboard",
      description: "Dynamic dashboard built with React featuring real-time data visualization and user authentication.",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Recipe Finder App",
      category: "Web Application",
      type: "application",
      description: "Feature-rich web application with search functionality, user accounts, and responsive design.",
      image: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBraXRjaGVufGVufDB8fDB8fHww"
    },
    {
      title: "Travel Blog",
      category: "Blog Website",
      type: "blog",
      description: "Content-focused blog with custom CMS integration, comment system, and SEO optimization.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww"
    }
  ];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);
  
  // Filter categories
  const categories = [
    { name: 'All Projects', value: 'all' },
    { name: 'E-commerce', value: 'ecommerce' },
    { name: 'Static Sites', value: 'static' },
    { name: 'Interactive', value: 'interactive' },
    { name: 'Dashboards', value: 'dashboard' },
    { name: 'Applications', value: 'application' },
    { name: 'Blogs', value: 'blog' }
  ];
  
  useEffect(() => {
    // Set up intersection observer for scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the section is visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div>
      <section 
        id="portfolio" 
        ref={sectionRef}
        className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-500`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`mb-10 text-center transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 ease-out`}>
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-500`}>
              My Portfolio
            </h2>
            <div className={`w-20 h-1 bg-blue-600 mx-auto mb-6 transform ${isVisible ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-700 delay-100`}></div>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 delay-200`}>
              Explore some of my recent projects and see the quality of work I deliver to clients.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center mb-10 gap-2 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 delay-300`}>
            {categories.map((category, index) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.value 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
                style={{ transitionDelay: `${300 + (index * 50)}ms` }}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-500 ${
                  darkMode ? 'bg-gray-900 hover:shadow-blue-900/30 hover:shadow-lg' : 'bg-white hover:shadow-xl'
                } transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'} `}
                style={{ transitionDelay: `${400 + (index * 100)}ms` }}
              >
                <div className="overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-sm font-medium mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    {project.description}
                  </p>
                  <button className="text-white flex items-center gap-2 text-sm font-medium group/btn transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                    View Details
                    <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-150">
                  {project.type}
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className={`mt-12 text-center transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 delay-800`}>
            <Link to="/allProjects" >
            <button className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioSection