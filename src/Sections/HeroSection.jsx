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
        className={`pt-28 pb-16 px-4 md:pt-32 md:pb-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className={`md:w-1/2 mb-8 md:mb-0 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 ease-out`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className={`${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-500`}>Hi, I'm </span>
                <span className="text-blue-600 transition-colors duration-500">John Doe</span>
              </h1>
              <h2 className={`text-2xl md:text-3xl font-semibold mb-6 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-100 ease-out`}>
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                  Freelance Web Developer
                </span>
              </h2>
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} transition-all duration-700 delay-200 ease-out transition-colors`}>
                I craft beautiful, functional websites and applications that help businesses grow and succeed online.
              </p>
              <div className={`flex space-x-4 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 delay-300 ease-out`}>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`px-6 py-3 font-medium rounded-lg border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    darkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className={`md:w-1/2 flex justify-center transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} transition-all duration-700 delay-400 ease-out`}>
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-600 transition-transform duration-500 hover:scale-105 hover:shadow-xl">
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