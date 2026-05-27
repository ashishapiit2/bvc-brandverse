import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Monitor scroll for glass effect styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor dark mode settings
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const computedStyle = getComputedStyle(document.documentElement);
    const hasDarkScheme = computedStyle.getPropertyValue('color-scheme').includes('dark');
    
    setIsDarkMode(hasDarkScheme || systemPrefersDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentScheme = getComputedStyle(root).getPropertyValue('color-scheme').trim();
    
    if (currentScheme.includes('dark')) {
      root.style.colorScheme = 'light';
      setIsDarkMode(false);
    } else {
      root.style.colorScheme = 'dark';
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--header-height)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingInline: '24px',
        transition: 'background var(--transition-smooth), border var(--transition-smooth), box-shadow var(--transition-smooth)',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        background: isScrolled ? 'var(--bg-surface-glass)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px) saturate(120%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(120%)' : 'none',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--container-width)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* SVG Replica of BVC Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }} aria-label="BVC Brandverse Home">
          {/* Logo Icon: Spiral + BVC nested */}
          <svg
            width="46"
            height="46"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0, aspectRatio: '1/1' }}
          >
            {/* Dot spiral replica */}
            <circle cx="58" cy="18" r="1.5" fill="var(--color-orange)" />
            <circle cx="53" cy="16" r="2.0" fill="var(--color-orange)" />
            <circle cx="47" cy="15" r="2.8" fill="var(--color-orange)" />
            <circle cx="40" cy="16" r="3.5" fill="var(--color-orange)" />
            <circle cx="34" cy="20" r="4.5" fill="var(--color-orange)" />
            <circle cx="29" cy="25" r="5.5" fill="var(--color-orange)" />
            <circle cx="26" cy="33" r="6.5" fill="var(--color-orange)" />
            <circle cx="25" cy="42" r="7.5" fill="var(--color-orange)" />
            <circle cx="27" cy="51" r="6.5" fill="var(--color-orange)" />
            <circle cx="32" cy="59" r="5.5" fill="var(--color-orange)" />
            <circle cx="38" cy="65" r="4.5" fill="var(--color-orange)" />
            <circle cx="46" cy="67" r="3.5" fill="var(--color-orange)" />
            <circle cx="53" cy="65" r="2.5" fill="var(--color-orange)" />
            <circle cx="58" cy="60" r="1.8" fill="var(--color-orange)" />
            
            {/* Logo text "BVC" */}
            <text
              x="38"
              y="48"
              fontFamily="var(--font-sans)"
              fontWeight="900"
              fontSize="28"
              fill="var(--text-primary)"
              style={{ letterSpacing: '-0.03em' }}
            >
              BVC
            </text>
          </svg>

          {/* Logo Text Label: Beautiful horizontal space expansion */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15, flexShrink: 0 }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 900,
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Brandverse
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.72rem',
                color: 'var(--color-orange)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              Communications
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
          }}
          className="desktop-nav"
        >
          <ul style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    transition: 'color var(--transition-fast)',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Dark Mode toggle */}
          <button
            onClick={toggleTheme}
            style={{
              padding: '8px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-surface)',
              transition: 'background var(--transition-fast), border-color var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-orange)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            aria-label="Toggle visual theme"
          >
            {isDarkMode ? (
              <Sun size={20} style={{ color: 'var(--color-orange)' }} />
            ) : (
              <Moon size={20} style={{ color: 'var(--color-navy)' }} />
            )}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="btn-primary"
            style={{
              display: 'none',
              padding: '10px 20px',
              fontSize: '0.95rem',
            }}
          >
            Get In Touch
            <ArrowRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'flex',
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-surface)',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            width: '100%',
            height: 'calc(100vh - var(--header-height))',
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-color)',
            zIndex: 49,
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 24px',
            gap: '32px',
            animation: 'fadeIn 0.3s ease-out',
          }}
        >
          <nav>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      display: 'block',
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '1.1rem',
            }}
          >
            Get In Touch
            <ArrowRight size={18} />
          </a>
        </div>
      )}

      {/* CSS overrides inside style tag to support simple responsive desktop menu selectors */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          header .btn-primary {
            display: inline-flex !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};
