import { useEffect } from 'react';
import { InteractiveSpiral } from './components/InteractiveSpiral';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  // Intersection Observer to toggle entry reveal animation classes automatically on scroll
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.12, // triggers when 12% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we can unobserve to conserve compositor calculations
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    reveals.forEach((el) => {
      // Add base reveal class styles dynamically
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* 1. Dynamic Canvas Background Particles */}
      <InteractiveSpiral />

      {/* 2. Brand navigation header */}
      <Header />

      {/* Main landing zones container */}
      <main style={{ position: 'relative', width: '100%' }}>
        {/* Hero Landing */}
        <div className="reveal-on-scroll">
          <Hero />
        </div>

        {/* Services Showcase */}
        <div className="reveal-on-scroll">
          <Services />
        </div>

        {/* Portfolio Gallery */}
        <div className="reveal-on-scroll">
          <Portfolio />
        </div>

        {/* Process roadmap timeline */}
        <div className="reveal-on-scroll">
          <Process />
        </div>

        {/* Contact engagement zone */}
        <div className="reveal-on-scroll">
          <Contact />
        </div>
      </main>

      {/* 3. Footer and newsletters */}
      <Footer />
    </>
  );
}

export default App;
