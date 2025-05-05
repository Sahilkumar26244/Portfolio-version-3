import React from 'react';
import { Send } from 'lucide-react';

function TestimonialSection({testimonials, darkMode}) {
  return (
    <div>
      <section 
        id="testimonials" 
        className={`py-8 sm:py-12 md:py-16 px-3 sm:px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Client Testimonials
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
            <p className={`text-sm sm:text-base max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Here's what my clients have to say about working with me.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`p-4 sm:p-6 rounded-lg flex flex-col ${
                  darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                }`}
              >
                {/* Star rating and testimonial text */}
                <div className="flex-grow">
                  <div className="mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
                    ))}
                  </div>
                  <p className={`mb-4 sm:mb-6 italic text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    "{testimonial.text}"
                  </p>
                </div>
                
                {/* Client profile - fixed position */}
                <div className="h-16 sm:h-20 lg:h-24"> {/* Responsive fixed height container */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className={`font-bold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {testimonial.name}
                      </p>
                      <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Message form */}
                <div>
                  <label 
                    htmlFor={`message-${index}`} 
                    className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea 
                    id={`message-${index}`} 
                    rows={3} 
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm rounded-lg ${
                      darkMode 
                      ? 'bg-gray-900 border-gray-700 text-white focus:border-blue-500' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                    } border focus:ring-blue-500 outline-none transition-colors`}
                    placeholder="Your message"
                  ></textarea>
                  <button 
                    type="submit" 
                    className="w-full px-4 sm:px-6 py-2 sm:py-3 mt-3 sm:mt-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 sm:gap-2"
                  >
                    <span>Send Message</span>
                    <Send size={16} className="hidden sm:inline" />
                    <Send size={14} className="sm:hidden" />
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

export default TestimonialSection