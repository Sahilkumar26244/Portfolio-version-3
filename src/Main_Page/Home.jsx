import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Send,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Sun,
  Moon,
} from "lucide-react";
import HeroSection from "../Sections/HeroSection";
import AboutSection from "../Sections/AboutSection";
import MyServices from "../Sections/MyServices";
import PortfolioSection from "../Sections/PortfolioSection";
import TestimonialSection from "../Sections/TestimonialSection";
import ContactSection from "../Sections/ContactSection";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "E-commerce Website",
      category: "Web Development",
      image:
        "https://media.istockphoto.com/id/1164357236/photo/developing-programmer-reading-computer-codes-development-website-design-and-coding.webp?a=1&b=1&s=612x612&w=0&k=20&c=SSJ8cTPt-Cq3zqhmUq18-KlvA5lrO3w1BGLojqnRTx4=",
      description:
        "A full-stack e-commerce platform with React, Node.js, and MongoDB.",
    },
    {
      title: "Mobile Banking App",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww",
      description:
        "Intuitive mobile banking interface designed for optimal user experience.",
    },
    {
      title: "Travel Blog",
      category: "Web Development",
      image:
        "https://plus.unsplash.com/premium_photo-1683141023289-49fdc6fa7506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Travel blog with CMS integration and responsive design.",
    },
    {
      title: "Fitness Tracker",
      category: "Mobile App",
      image:
        "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
      description: "React Native app for tracking workouts and nutrition.",
    },
    {
      title: "Restaurant Ordering System",
      category: "Web Application",
      image:
        "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
      description:
        "Online ordering system for restaurants with real-time order tracking.",
    },
    {
      title: "Portfolio Dashboard",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Custom dashboard for creative professionals to showcase their work.",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "Creating custom websites with modern technologies like React, Next.js, and Vue.",
      icon: <ExternalLink className="w-10 h-10" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and engaging user interfaces and experiences.",
      icon: <Sun className="w-10 h-10" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile applications with React Native.",
      icon: <Send className="w-10 h-10" />,
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      position: "CEO at TechStart",
      text: "Working with this developer was a game-changer for our company. They delivered our project on time and exceeded our expectations.",
      avatar:
        "https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcGyGG1qPMyxl3rw4TCVwbJLZTPabFg4twsVFDy-ixs=",
    },
    {
      name: "Sarah Miller",
      position: "Marketing Director",
      text: "The attention to detail and creative approach brought our vision to life perfectly. I highly recommend their services!",
      avatar:
        "https://media.istockphoto.com/id/1369915787/photo/young-woman-in-office-working-on-laptop-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=yDojZmptkNMxNDHEr1ifbTlT_QsUfEwtmr_rUrJA88E=",
    },
    {
      name: "Michael Chen",
      position: "Startup Founder",
      text: "Exceptional work quality and communication throughout the project. Our website has received numerous compliments since the redesign.",
      avatar:
        "https://media.istockphoto.com/id/2148603139/photo/confident-young-businesswoman-with-curly-hair-wearing-a-suit-smiles-seated-at-boardroom-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=VTYSXzshtu9TliaIuLtYrPWx5GTY73iDC7NsuBnhcAs=",
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 80 },
    { name: "Tailwind CSS", level: 85 },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Header/Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        } ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
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
                      ? "text-blue-600"
                      : darkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-gray-700 text-yellow-400"
                    : "bg-gray-200 text-gray-700"
                }`}
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
                {mobileMenuOpen ? (
                  <X
                    className={darkMode ? "text-white" : "text-gray-900"}
                    size={24}
                  />
                ) : (
                  <Menu
                    className={darkMode ? "text-white" : "text-gray-900"}
                    size={24}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden py-4 px-4 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === item.id
                      ? "bg-blue-100 text-blue-600"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
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

        <AboutSection
          darkMode={darkMode}
          skills={skills}
          scrollToSection={scrollToSection}
        />

        {/* Services Section */}
        <MyServices services={services} darkMode={darkMode} />

        {/* Portfolio Section */}
        <PortfolioSection projects={projects} darkMode={darkMode} />

        {/* Testimonials Section */}
        <TestimonialSection testimonials={testimonials} darkMode={darkMode} />

        {/* Contact Section */}
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <footer
        className={`py-8 ${
          darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"
        }`}
      >
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
            <p className="text-sm">
              © {new Date().getFullYear()} DevPortfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
