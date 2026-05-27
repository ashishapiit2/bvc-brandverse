import React from 'react';
import { Eye, Shield, Cpu, Award } from 'lucide-react';

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const Process: React.FC = () => {
  const steps: Step[] = [
    {
      num: '01',
      title: 'Universe Discovery',
      desc: 'We map your existing digital coords. We analyze competitors, audience parameters, and load speeds.',
      icon: <Eye size={20} />,
    },
    {
      num: '02',
      title: 'High-Fidelity Design',
      desc: 'We sketch clean brand layouts, vector hierarchies, color systems, and interactive UI frameworks.',
      icon: <Shield size={20} />,
    },
    {
      num: '03',
      title: 'Sub-Second Development',
      desc: 'We construct compile-ready systems in TypeScript, optimizing layouts shifts and compositor paint layers.',
      icon: <Cpu size={20} />,
    },
    {
      num: '04',
      title: 'Successful Launch',
      desc: 'We push optimized bundles to edge servers, launch viral campaign loops, and track engagement real-time.',
      icon: <Award size={20} />,
    },
  ];

  return (
    <section
      id="process"
      style={{
        paddingBlock: '120px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ width: '100%', maxWidth: 'var(--container-width)', margin: '0 auto', paddingInline: '24px' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ marginBottom: '16px' }}>
            Our Brandverse <span className="gradient-text-orange">Methodology</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            How we translate your targets into high-performance web engineering and high-yielding social strategies.
          </p>
        </div>

        {/* Timeline grid representing dot trail */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
            position: 'relative',
          }}
          className="timeline-grid"
        >
          {/* Connecting line for desktop timeline */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              height: '2px',
              background: 'linear-gradient(90deg, var(--color-orange-glow) 0%, var(--border-color) 100%)',
              zIndex: 1,
              display: 'none',
            }}
            className="timeline-line"
          />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Step indicator circle matching BVC orange spiral */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--color-orange)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-sans)',
                  boxShadow: 'var(--shadow-glow)',
                  position: 'relative',
                }}
              >
                {step.num}
                {/* Floating outer mini dot resembling the spiral layout */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: 'var(--color-orange-hover)',
                    border: '2px solid var(--bg-surface)',
                  }}
                />
              </div>

              {/* Step Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                {step.icon}
                Phase {step.num}
              </div>

              {/* Title & Desc */}
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .timeline-line {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};
