import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Send, Github, Linkedin, Twitter, ExternalLink, Sun, Moon } from 'lucide-react';
import HeroSection from '../Sections/HeroSection';
import AboutSection from '../Sections/AboutSection';
import MyServices from '../Sections/MyServices';
import PortfolioSection from '../Sections/PortfolioSection';
import TestimonialSection from '../Sections/TestimonialSection';

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
        
        <HeroSection darkMode={darkMode} scrollToSection={scrollToSection} />
        {/* About Section */}

        <AboutSection darkMode={darkMode} skills={skills} scrollToSection={scrollToSection} />
        
        {/* Services Section */}
        <MyServices services={services} darkMode={darkMode} />
        
        {/* Portfolio Section */}
        <PortfolioSection projects={projects} darkMode={darkMode} />
        
        {/* Testimonials Section */}
        <TestimonialSection testimonials={testimonials} darkMode={darkMode} />


          {/* Contact Section */}
          {/* Contact Section */}
<section 
id="contact" 
className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
>
<div className="container mx-auto max-w-6xl">
  <div className="mb-12 text-center">
    <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      Get In Touch
    </h2>
    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
    <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
      Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
    </p>
  </div>
  
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Contact Information */}
    <div className="lg:w-2/5">
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Contact Information
        </h3>
        
        <div className="space-y-6">
          {/* Contact Items */}
          <div className="flex items-start">
            <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
              <a href="mailto:johndoe@example.com" className={`text-lg font-medium ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}`}>
                johndoe@example.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
              <a href="tel:+1234567890" className={`text-lg font-medium ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'}`}>
                +1 (234) 567-890
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Location</p>
              <p className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mt-8">
          <p className={`font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Follow Me
          </p>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    {/* Contact Form */}
    <div className="lg:w-3/5">
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Send Me a Message
        </h3>
        
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                } border focus:ring-blue-500 outline-none transition-colors`}
                placeholder="Your name"
              />
            </div>
            <div>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                } border focus:ring-blue-500 outline-none transition-colors`}
                placeholder="Your email"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label 
              htmlFor="subject" 
              className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Subject
            </label>
            <input 
              type="text" 
              id="subject" 
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } border focus:ring-blue-500 outline-none transition-colors`}
              placeholder="Message subject"
            />
          </div>
          
          <div className="mb-6">
            <label 
              htmlFor="message" 
              className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Message
            </label>
            <textarea 
              id="message" 
              rows={6} 
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } border focus:ring-blue-500 outline-none transition-colors`}
              placeholder="Your message"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
  
  {/* Map */}
  <div className="mt-12 rounded-lg overflow-hidden h-80 w-full">
    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
      <div className={`text-center ${darkMode ? 'text-gray-700' : 'text-gray-600'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        <p className="text-lg font-medium">Interactive Map</p>
        <p className="text-sm">(Map would be loaded here)</p>
      </div>
    </div>
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