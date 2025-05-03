import React from 'react'

function MyServices({services,darkMode}) {
  return (
    <div>
    <section 
          id="services" 
          className={`py-16 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Services
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I offer a range of services to help businesses establish a strong online presence and achieve their digital goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg transition-all duration-300 ${
                    darkMode 
                    ? 'bg-gray-800 hover:shadow-lg hover:shadow-blue-900/20' 
                    : 'bg-white hover:shadow-xl'
                  }`}
                >
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default MyServices