import React from 'react';
import { ArrowDown, Sparkles, Code, Globe, Palette } from 'lucide-react';

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
            Enterprise Web, AI, E-commerce & Creative Solutions
          </div>

          <h1 style={{ textAlign: 'left' }}>
            <span className="gradient-text-navy">Expanding Your </span>
            <br />
            <span style={{ color: 'var(--color-orange)' }}>Brand's Universe.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 1rem + 0.5vw, 1.3rem)',
              lineHeight: 1.6,
              maxWidth: '600px',
              color: 'var(--text-secondary)',
            }}
          >
            At BVC Brandverse Communications, we synthesize high-performance enterprise code, viral social media marketing, and premium graphics into a unified brand growth engine.
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
            title: '15M+ Reach',
            desc: 'Targeted brand impressions managed globally.',
          },
          {
            icon: <Code size={24} style={{ color: 'var(--color-orange)' }} />,
            title: '4.9x Speedups',
            desc: 'Sub-second performance load for core enterprise sites.',
          },
          {
            icon: <Palette size={24} style={{ color: 'var(--color-orange)' }} />,
            title: '250+ Creatives',
            desc: 'High-end aesthetic brand guides and designs.',
          },
          {
            icon: <Sparkles size={24} style={{ color: 'var(--color-orange)' }} />,
            title: '98% Retention',
            desc: 'Uncompromising developer support & partnership.',
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
