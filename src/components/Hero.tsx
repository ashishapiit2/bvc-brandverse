import React from 'react';
import { ArrowDown, Sparkles, Globe, Palette, Users, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + 40px)',
        paddingBottom: '80px',
        paddingInline: '24px',
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--container-width)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '60px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left: Text & CTAs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '24px',
          }}
        >
          {/* Sparkle badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'var(--bg-surface-glass)',
              border: '1px solid var(--border-color)',
              color: 'var(--color-orange)',
              fontSize: '0.875rem',
              fontWeight: 600,
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <Sparkles size={14} />
            360° Digital Marketing, AI Automation, Social Media & Event Management Solutions
          </div>

          <h1 style={{ textAlign: 'left' }}>
            <span className="gradient-text-navy">Expanding Your </span>
            <br />
            <span style={{ color: 'var(--color-orange)' }}>Brand's Universe.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 0.95rem + 0.5vw, 1.15rem)',
              lineHeight: 1.6,
              maxWidth: '700px',
              color: 'var(--text-secondary)',
            }}
          >
            Brandverse Communications is a leading communication and marketing agency specializing in social media management, digital marketing, creative design, IEC material development, branding, content creation, and end-to-end event management services. We help government organizations, corporate brands, NGOs, and businesses build meaningful connections through impactful campaigns, innovative storytelling, and audience-focused communication strategies.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              width: '100%',
              marginTop: '12px',
            }}
          >
            <a href="#services" className="btn-primary">
              Explore Our Services
              <ArrowDown size={16} />
            </a>
            <a href="#portfolio" className="btn-secondary">
              View Work
            </a>
          </div>
        </div>

        {/* Right: Handcrafted Animated SVG Logo Spiral Centerpiece */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
          className="hero-art"
        >
          {/* Subtle spinning glow orb behind the spiral */}
          <div
            style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--color-orange-glow) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
            className="animate-breathe"
          />

          {/* Interactive Logo Art */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              cursor: 'pointer',
              transition: 'transform var(--transition-elastic)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08) rotate(15deg)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
          >
            <svg
              width="360"
              height="360"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-breathe"
              style={{ aspectRatio: '1 / 1', width: '100%', maxWidth: '360px', height: 'auto', display: 'block' }}
            >
              {/* Spinning Group: Outer circles spiral spins slowly */}
              <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
                {/* Outer decorative ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="var(--border-color)"
                  strokeWidth="0.5"
                  strokeDasharray="4 6"
                />
                
                {/* Giant BVC Spiral circles */}
                <circle cx="58" cy="18" r="2.0" fill="var(--color-orange)" />
                <circle cx="53" cy="16" r="2.5" fill="var(--color-orange)" />
                <circle cx="47" cy="15" r="3.2" fill="var(--color-orange)" />
                <circle cx="40" cy="16" r="4.0" fill="var(--color-orange)" />
                <circle cx="34" cy="20" r="5.0" fill="var(--color-orange)" />
                <circle cx="29" cy="25" r="6.2" fill="var(--color-orange)" />
                <circle cx="26" cy="33" r="7.4" fill="var(--color-orange)" />
                <circle cx="25" cy="42" r="8.5" fill="var(--color-orange)" />
                <circle cx="27" cy="51" r="7.4" fill="var(--color-orange)" />
                <circle cx="32" cy="59" r="6.2" fill="var(--color-orange)" />
                <circle cx="38" cy="65" r="5.0" fill="var(--color-orange)" />
                <circle cx="46" cy="67" r="4.0" fill="var(--color-orange)" />
                <circle cx="53" cy="65" r="3.0" fill="var(--color-orange)" />
                <circle cx="58" cy="60" r="2.2" fill="var(--color-orange)" />
              </g>

              {/* Static BVC Initials: Remains centered, stable, upright, and perfectly readable */}
              <text
                x="50"
                y="57"
                fontFamily="var(--font-sans)"
                fontWeight="900"
                fontSize="22"
                fill="var(--text-primary)"
                textAnchor="middle"
                style={{ letterSpacing: '-0.02em' }}
              >
                BVC
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Real-time Indicator Cards */}
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--container-width)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          marginTop: '80px',
        }}
      >
        {[
          {
            icon: <Globe size={24} style={{ color: 'var(--color-orange)' }} />,
            title: '20M+ Audience Reached',
            desc: 'Through social media campaigns, awareness initiatives, and digital outreach.',
          },
          {
            icon: <Palette size={24} style={{ color: 'var(--color-orange)' }} />,
            title: '1000+ Creatives Delivered',
            desc: 'Including IEC materials, branding assets, videos, reports, and campaign collaterals.',
          },
          {
            icon: <Users size={24} style={{ color: 'var(--color-orange)' }} />,
            title: '100+ Happy Clients',
            desc: 'Trusted by government institutions, development organizations, and corporate brands.',
          },
          {
            icon: <Calendar size={24} style={{ color: 'var(--color-orange)' }} />,
            title: '50+ Events Executed',
            desc: 'From government conferences and workshops to exhibitions and corporate launches.',
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              borderRadius: '16px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {card.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{card.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive media overrides inside style tag */}
      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
};
