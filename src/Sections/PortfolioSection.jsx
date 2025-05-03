import React from 'react';
import { ChevronRight } from 'lucide-react';


function PortfolioSection({projects, darkMode}) {
  return (
    <div>
    <section 
          id="portfolio" 
          className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Portfolio
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Explore some of my recent projects and see the quality of work I deliver to clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                    darkMode ? 'hover:shadow-blue-900/20' : ''
                  }`}
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-blue-400 text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <button className="text-white flex items-center gap-2 text-sm font-medium group">
                      View Details
                      <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default PortfolioSection