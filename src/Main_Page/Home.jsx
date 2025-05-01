import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Send, Github, Linkedin, Twitter, ExternalLink, Sun, Moon } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
    {
      title: 'E-commerce Website',
      category: 'Web Development',
      image: 'https://media.istockphoto.com/id/1164357236/photo/developing-programmer-reading-computer-codes-development-website-design-and-coding.webp?a=1&b=1&s=612x612&w=0&k=20&c=SSJ8cTPt-Cq3zqhmUq18-KlvA5lrO3w1BGLojqnRTx4=',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB.'
    },
    {
      title: 'Mobile Banking App',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww',
      description: 'Intuitive mobile banking interface designed for optimal user experience.'
    },
    {
      title: 'Travel Blog',
      category: 'Web Development',
      image: 'https://plus.unsplash.com/premium_photo-1683141023289-49fdc6fa7506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Travel blog with CMS integration and responsive design.'
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile App',
      image: 'https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D',
      description: 'React Native app for tracking workouts and nutrition.'
    },
    {
      title: 'Restaurant Ordering System',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
      description: 'Online ordering system for restaurants with real-time order tracking.'
    },
    {
      title: 'Portfolio Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D',
      description: 'Custom dashboard for creative professionals to showcase their work.'
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Creating custom websites with modern technologies like React, Next.js, and Vue.',
      icon: <ExternalLink className="w-10 h-10" />
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces and experiences.',
      icon: <Sun className="w-10 h-10" />
    },
    {
      title: 'Mobile App Development',
      description: 'Building cross-platform mobile applications with React Native.',
      icon: <Send className="w-10 h-10" />
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      position: 'CEO at TechStart',
      text: 'Working with this developer was a game-changer for our company. They delivered our project on time and exceeded our expectations.',
      avatar: 'https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcGyGG1qPMyxl3rw4TCVwbJLZTPabFg4twsVFDy-ixs='
    },
    {
      name: 'Sarah Miller',
      position: 'Marketing Director',
      text: 'The attention to detail and creative approach brought our vision to life perfectly. I highly recommend their services!',
      avatar: 'https://media.istockphoto.com/id/1369915787/photo/young-woman-in-office-working-on-laptop-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=yDojZmptkNMxNDHEr1ifbTlT_QsUfEwtmr_rUrJA88E='
    },
    {
      name: 'Michael Chen',
      position: 'Startup Founder',
      text: 'Exceptional work quality and communication throughout the project. Our website has received numerous compliments since the redesign.',
      avatar: 'https://media.istockphoto.com/id/2148603139/photo/confident-young-businesswoman-with-curly-hair-wearing-a-suit-smiles-seated-at-boardroom-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=VTYSXzshtu9TliaIuLtYrPWx5GTY73iDC7NsuBnhcAs='
    }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Tailwind CSS', level: 85 }
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header/Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''} ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="text-blue-600">Dev</span>Portfolio
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                    activeSection === item.id
                    ? 'text-blue-600'
                    : darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode} 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 rounded-md focus:outline-none" 
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? 
                  <X className={darkMode ? 'text-white' : 'text-gray-900'} size={24} /> : 
                  <Menu className={darkMode ? 'text-white' : 'text-gray-900'} size={24} />
                }
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === item.id
                    ? 'bg-blue-100 text-blue-600'
                    : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          id="home" 
          className={`pt-28 pb-16 px-4 md:pt-32 md:pb-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
                  <span className="text-blue-600">John Doe</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Freelance Web Developer
                  </span>
                </h2>
                <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  I craft beautiful, functional websites and applications that help businesses grow and succeed online.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View My Work
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`px-6 py-3 font-medium rounded-lg border ${
                      darkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-600">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Developer Profile" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section 
          id="about" 
          className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                About Me
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/5 mb-8 lg:mb-0">
                <div className="relative">
                  <div className="w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww" 
                      alt="About Me" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className={`absolute bottom-4 right-4 p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
                    <p className="text-blue-600 font-bold">5+ Years</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Professional Experience
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/5">
                <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Who I Am
                </h3>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm a passionate web developer and designer with over 5 years of experience creating 
                  digital solutions for clients across various industries. My journey in web development 
                  began with curiosity and has evolved into expertise in building modern, 
                  responsive websites and applications.
                </p>
                <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I specialize in React, JavaScript, and modern frontend frameworks, with a strong 
                  foundation in UI/UX design principles. My approach combines technical excellence 
                  with creative problem-solving to deliver projects that exceed expectations.
                </p>
                
                <div className="mb-8">
                  <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    My Skills
                  </h4>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {skill.name}
                          </span>
                          <span className={`font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div 
                            className="h-2 rounded-full bg-blue-600"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href="#"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Resume download would start here');
                    }}
                  >
                    Download CV
                  </a>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`px-6 py-3 font-medium rounded-lg border ${
                      darkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    } transition-colors`}
                  >
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
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
        
        {/* Portfolio Section */}
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
        
        {/* Testimonials Section */}
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
          className={`p-6 rounded-lg flex flex-col justify-between ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}
          style={{ minHeight: '300px' }} // Ensures consistent height for all boxes
        >
          <div>
            <div className="mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className={`mb-6 italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              "{testimonial.text}"
            </p>
          </div>
          <div className="flex items-center mb-4">
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
          <div className="mt-auto">
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
      </main>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">
                <span className="text-blue-600">Dev</span>Portfolio
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm">© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}