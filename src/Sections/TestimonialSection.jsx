import React from 'react';
import { Send } from 'lucide-react';

function TestimonialSection({testimonials, darkMode}) {
  return (
    <div>
    <section 
      id="testimonials" 
      className={`py-16 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Here's what my clients have to say about working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg flex flex-col ${
                darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
              }`}
            >
              {/* Star rating and testimonial text */}
              <div className="flex-grow">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className={`mb-6 italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonial.text}"
                </p>
              </div>
              
              {/* Client profile - fixed position */}
              <div className="h-24"> {/* Fixed height container */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Message form */}
              <div>
                <label 
                  htmlFor={`message-${index}`} 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea 
                  id={`message-${index}`} 
                  rows={3} 
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                    ? 'bg-gray-900 border-gray-700 text-white focus:border-blue-500' 
                    : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
                  } border focus:ring-blue-500 outline-none transition-colors`}
                  placeholder="Your message"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-3 mt-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
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