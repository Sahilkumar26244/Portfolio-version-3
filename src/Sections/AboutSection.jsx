import React, { useState, useEffect, useRef } from 'react'

function AboutSection({darkMode, skills, scrollToSection}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
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
        id="about" 
        ref={sectionRef}
        className={`py-10 md:py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-500`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`mb-8 md:mb-12 text-center transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 ease-out`}>
            <h2 className={`text-2xl md:text-3xl font-bold mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-500`}>
              About Me
            </h2>
            <div className={`w-16 md:w-20 h-1 bg-blue-600 mx-auto transform ${isVisible ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-700 delay-100`}></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center">
            <div className={`w-full lg:w-2/5 mb-6 lg:mb-0 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} transition-all duration-700 delay-200 ease-out flex justify-center lg:justify-start`}>
              <div className="relative">
                <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww" 
                    alt="About Me" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className={`absolute bottom-3 right-3 md:bottom-4 md:right-4 p-3 md:p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-300`}>
                  <p className="text-blue-600 font-bold text-sm md:text-base">5+ Years</p>
                  <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                    Professional Experience
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`w-full lg:w-3/5 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} transition-all duration-700 delay-300 ease-out`}>
              <h3 className={`text-xl md:text-2xl font-semibold mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-500`}>
                Who I Am
              </h3>
              <p className={`mb-4 md:mb-6 text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 delay-400`}>
                I'm a passionate web developer and designer with over 5 years of experience creating 
                digital solutions for clients across various industries. My journey in web development 
                began with curiosity and has evolved into expertise in building modern, 
                responsive websites and applications.
              </p>
              <p className={`mb-6 md:mb-8 text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 delay-500`}>
                I specialize in React, JavaScript, and modern frontend frameworks, with a strong 
                foundation in UI/UX design principles. My approach combines technical excellence 
                with creative problem-solving to deliver projects that exceed expectations.
              </p>
              
              <div className={`mb-6 md:mb-8 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 delay-600`}>
                <h4 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-500`}>
                  My Skills
                </h4>
                <div className="space-y-3 md:space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className={`transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-500`} style={{ transitionDelay: `${700 + (index * 100)}ms` }}>
                      <div className="flex justify-between mb-1">
                        <span className={`text-sm md:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm md:text-base font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full h-1.5 md:h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transition-colors duration-500`}>
                        <div 
                          className="h-1.5 md:h-2 rounded-full bg-blue-600 transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${800 + (index * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 delay-800`}>
                <a 
                  href="#"
                  className="px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Resume download would start here');
                  }}
                >
                  Download CV
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-lg border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    darkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  } transition-colors duration-500 text-center`}
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection