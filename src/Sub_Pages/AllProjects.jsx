import React, { useState, useEffect } from 'react';
import { Eye, Download, ArrowLeft, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

function AllProjects({ darkMode, navigateBack }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Full projects dataset with more detailed information
  const allProjects = [
    {
      id: 1,
      title: "Modern Fashion Store",
      category: "E-commerce Website",
      type: "ecommerce",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout. Built with React, Redux, and integrated with Stripe payment processing.",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      url: "https://example.com/fashion-store",
      completed: "January 2025",
      client: "StyleHub Inc."
    },
    {
      id: 2,
      title: "Corporate Landing Page",
      category: "Static Website",
      type: "static",
      description: "Clean and professional static website for a financial services company with optimized performance. Features custom animations, contact forms, and responsive design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Netlify"],
      image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRpbmclMjBwYWdlfGVufDB8fDB8fHww",
      url: "https://example.com/corporate",
      completed: "November 2024",
      client: "FinServe Group"
    },
    {
      id: 3,
      title: "Product Launch Countdown",
      category: "Interactive Website",
      type: "interactive",
      description: "Engaging single-page application featuring interactive elements and animated transitions. Includes email subscription, social sharing, and responsive design.",
      technologies: ["React", "Three.js", "GSAP", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      url: "https://example.com/product-launch",
      completed: "December 2024",
      client: "TechLaunch LLC"
    },
    {
      id: 4,
      title: "Portfolio Dashboard",
      category: "SPA Dashboard",
      type: "dashboard",
      description: "Dynamic dashboard built with React featuring real-time data visualization and user authentication. Includes dark/light mode and customizable widgets.",
      technologies: ["React", "D3.js", "Firebase", "Material UI"],
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D",
      url: "https://example.com/dashboard",
      completed: "October 2024",
      client: "DataViz Solutions"
    },
    {
      id: 5,
      title: "Recipe Finder App",
      category: "Web Application",
      type: "application",
      description: "Feature-rich web application with search functionality, user accounts, and responsive design. Includes recipe saving, rating system, and social sharing.",
      technologies: ["Vue.js", "Vuex", "Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBraXRjaGVufGVufDB8fDB8fHww",
      url: "https://example.com/recipe-finder",
      completed: "September 2024",
      client: "FoodTech Inc."
    },
    {
      id: 6,
      title: "Travel Blog",
      category: "Blog Website",
      type: "blog",
      description: "Content-focused blog with custom CMS integration, comment system, and SEO optimization. Features lazy loading images and responsive design.",
      technologies: ["Next.js", "Sanity CMS", "Vercel", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww",
      url: "https://example.com/travel-blog",
      completed: "August 2024",
      client: "Wanderlust Media"
    },
    {
      id: 7,
      title: "Real Estate Listings",
      category: "E-commerce Website",
      type: "ecommerce",
      description: "Property listing website with advanced search filters, interactive maps, and inquiry forms. Features virtual tours and responsive design.",
      technologies: ["React", "Next.js", "Google Maps API", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
      url: "https://example.com/real-estate",
      completed: "March 2025",
      client: "HomeQuest Properties"
    },
    {
      id: 8,
      title: "Online Learning Platform",
      category: "Web Application",
      type: "application",
      description: "Educational platform with course enrollment, progress tracking, and certificate generation. Features video streaming and interactive quizzes.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
      image: "https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhcm5pbmclMjBwbGF0Zm9ybXxlbnwwfHwwfHx8MA%3D%3D",
      url: "https://example.com/learning",
      completed: "February 2025",
      client: "EduTech Solutions"
    },
    {
      id: 9,
      title: "Charity Organization",
      category: "Static Website",
      type: "static",
      description: "Informational website for a non-profit organization with donation integration, event calendar, and volunteer signup. Features accessibility optimization.",
      technologies: ["WordPress", "PHP", "MySQL", "Stripe", "GSAP"],
      image: "https://plus.unsplash.com/premium_photo-1661962927450-d5f7c9267ca2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhcml0eSUyMG9yZ2FuaXNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      url: "https://example.com/charity",
      completed: "April 2025",
      client: "Global Helpers Foundation"
    }
  ];
  
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
  
  // Filter projects based on active filter and search term
  const filteredProjects = allProjects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.type === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function to simulate screenshot download
  const downloadScreenshot = (project) => {
    // In a real implementation, this would download an actual image
    // For now, we'll just show an alert
    alert(`Downloading screenshot of ${project.title}`);
    
    // This simulates creating and downloading an image
    // In a real implementation, you would use canvas to capture the element or fetch a pre-saved image
    const link = document.createElement('a');
    link.href = project.image;
    link.download = `${project.title.replace(/\s+/g, '-').toLowerCase()}-screenshot.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`}>
      {/* Header with back button */}
      <header className={`sticky top-0 z-10 py-3 sm:py-4 px-4 sm:px-6 ${darkMode ? 'bg-gray-900 shadow-gray-800/50' : 'bg-white'} shadow-md transition-colors duration-500`}>
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4 sm:justify-between">
            <Link to='/' >
            <button
              onClick={navigateBack}
              className={`p-1.5 sm:p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            </button>
            </Link>
            <h1 className={`text-lg sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              All Projects
            </h1>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <div className={`relative flex-grow sm:w-64 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-500' 
                    : 'bg-gray-100 border-gray-200 text-gray-700 placeholder-gray-400'
                } border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
              />
              <Search size={16} className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`p-1.5 sm:p-2 rounded-lg border transition-colors duration-300 flex items-center gap-1 sm:gap-2 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' 
                  : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter size={16} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              <span className="hidden md:inline text-sm sm:text-base">Filter</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Filters */}
      <div className={`${
        showFilters ? 'max-h-20 sm:max-h-24 py-3 sm:py-4 opacity-100 border-b' : 'max-h-0 py-0 opacity-0 border-b-0'
      } ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} overflow-hidden transition-all duration-300`}>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 overflow-x-auto">
          <div className="flex gap-1.5 sm:gap-2 pb-1">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeFilter === category.value 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : `${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <main className="container mx-auto max-w-6xl px-3 sm:px-4 py-6 sm:py-8">
        {/* Results count */}
        <div className={`mb-4 sm:mb-6 text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative rounded-lg overflow-hidden shadow-md transform transition-all duration-500 ease-out ${
                darkMode ? 'bg-gray-800 hover:shadow-blue-900/20' : 'bg-white hover:shadow-xl'
              } ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-blue-600 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  {project.type}
                </div>
              </div>
              
              <div className="p-3 sm:p-4">
                <h3 className={`font-bold text-base sm:text-lg mb-0.5 sm:mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-xs sm:text-sm mb-2 sm:mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.category} • {project.completed}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span 
                      className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <p className={`text-xs sm:text-sm h-12 sm:h-16 overflow-hidden mb-3 sm:mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description.substring(0, 100)}...
                </p>
                
                <div className="flex gap-1.5 sm:gap-2">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white py-1.5 sm:py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-xs sm:text-sm"
                  >
                    <Eye size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>View Site</span>
                  </a>
                  <button 
                    onClick={() => downloadScreenshot(project)}
                    className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-xs sm:text-sm ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Download size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="sr-only md:not-sr-only">Screenshot</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className={`text-center py-8 sm:py-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-base sm:text-lg mb-1 sm:mb-2">No projects found matching your criteria</p>
            <p className="text-sm sm:text-base">Try adjusting your search or filters</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default AllProjects;