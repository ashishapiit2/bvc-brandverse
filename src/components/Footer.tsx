import React from 'react';
import { Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing! Keep an eye on your inbox for our latest updates.');
  };

  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--container-width)',
          margin: '0 auto',
          paddingInline: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '60px',
        }}
      >
        {/* Left Column: Brand details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }} aria-label="BVC Brandverse Home">
            {/* Logo Icon: Spiral + BVC nested */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0, aspectRatio: '1/1' }}
            >
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
              
              <text x="38" y="48" fontFamily="var(--font-sans)" fontWeight="900" fontSize="28" fill="var(--text-primary)" style={{ letterSpacing: '-0.03em' }}>BVC</text>
            </svg>

            {/* Logo Text Label: Beautiful horizontal space expansion */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15, flexShrink: 0 }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 900,
                  fontSize: '1.15rem',
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
                  fontSize: '0.68rem',
                  color: 'var(--color-orange)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                Communications
              </span>
            </div>
          </a>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Expanding your brand's digital universe. We build highly impactful, interactive, and high-performance solutions for leading modern enterprises.
          </p>
          {/* Social icons */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
            {[
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: '#' },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>, href: '#' },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, href: '#' },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="presentation"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>, href: '#' },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  transition: 'background var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-orange)';
                  e.currentTarget.style.borderColor = 'var(--color-orange)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-primary)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
                aria-label="Social Link"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Column 1: Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Quick Links</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: 'About Us', href: '#' },
              { name: 'Our Services', href: '#services' },
              { name: 'Portfolio Workspace', href: '#portfolio' },
              { name: 'Methodology Process', href: '#process' },
              { name: 'Get In Touch', href: '#contact' },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column 2: Services */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Our Services</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Social Media Marketing',
              'Enterprise Website Dev',
              'Graphic Designing & Brand Identity',
              'AI & Automation Agents',
              'E-commerce & Branding',
              'Performance Analytics & SEO',
              'UI/UX Prototyping',
            ].map((service, idx) => (
              <li key={idx}>
                <a
                  href="#services"
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Newsletter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Universe Updates</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Subscribe to our newsletters for leading growth marketing strategies and enterprise web tips.
          </p>
          <form onSubmit={handleSubscribe} style={{ position: 'relative' }}>
            <input
              type="email"
              placeholder="Your email address..."
              required
              style={{
                width: '100%',
                padding: '14px 50px 14px 16px',
                background: 'var(--bg-primary)',
                border: '2px solid var(--border-color)',
                borderRadius: '12px',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                outline: 'none',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-orange)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            />
            <button
              type="submit"
              style={{
                position: 'absolute',
                right: '4px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'var(--color-orange)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Subscribe"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--container-width)',
          margin: '0 auto',
          paddingInline: '24px',
          paddingTop: '32px',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
        }}
      >
        <p>© {currentYear} BVC Brandverse Communications. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Privacy Policy</a>
          <a href="#" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
