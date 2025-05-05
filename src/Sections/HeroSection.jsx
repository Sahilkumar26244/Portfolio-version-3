import React, { useState, useEffect } from 'react'

function HeroSection({darkMode, scrollToSection}) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mounts (for animations)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      <section 
        id="home" 
        className={`pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-3 sm:px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className={`md:w-1/2 mb-6 sm:mb-8 md:mb-0 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 ease-out`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-500`}>Hi, I'm </span>
                <span className="text-blue-600 transition-colors duration-500">John Doe</span>
              </h1>
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-100 ease-out`}>
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                  Freelance Web Developer
                </span>
              </h2>
              <p className={`text-sm sm:text-base md:text-lg mb-6 sm:mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} transition-all duration-700 delay-200 ease-out transition-colors`}>
                I craft beautiful, functional websites and applications that help businesses grow and succeed online.
              </p>
              <div className={`flex space-x-3 sm:space-x-4 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 delay-300 ease-out`}>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-xs sm:text-sm md:text-base font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-medium rounded-lg border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    darkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className={`md:w-1/2 flex justify-center transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} transition-all duration-700 delay-400 ease-out`}>
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 sm:border-4 border-blue-600 transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww" 
                  alt="Developer Profile" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection