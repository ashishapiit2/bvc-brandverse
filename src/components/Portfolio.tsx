import React, { useState } from 'react';
import { ArrowUpRight, Filter, Globe, Palette, Heart } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'social' | 'web' | 'design' | 'ai' | 'ecommerce';
  desc: string;
  tag: string;
  stat: string;
  color: string;
}

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'social' | 'web' | 'design' | 'ai' | 'ecommerce'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Veloce Hyper Growth Campaign',
      category: 'social',
      desc: 'Precision targeted visual ad funnel yielding exponential click-through boosts.',
      tag: 'Social Media',
      stat: '+340% ROI',
      color: 'linear-gradient(135deg, #E28717 0%, #D97706 100%)',
    },
    {
      id: 2,
      title: 'Acme FinTech Dashboard',
      category: 'web',
      desc: 'High-performance real-time data visualizer with sub-second LCP speeds.',
      tag: 'Web Development',
      stat: '0.4s LCP',
      color: 'linear-gradient(135deg, #0B1F3F 0%, #1A365D 100%)',
    },
    {
      id: 3,
      title: 'Zenith Premium Rebranding',
      category: 'design',
      desc: 'High-end aesthetic brand guidelines, squircle design elements, and custom typography.',
      tag: 'Graphic Design',
      stat: 'Brand Book',
      color: 'linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)',
    },
    {
      id: 4,
      title: 'Global Commerce Platform',
      category: 'web',
      desc: 'A highly responsive, internationalized shopping system with fully accessible forms.',
      tag: 'Web Development',
      stat: '100% Core Vitals',
      color: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
    },
    {
      id: 5,
      title: 'Apex Agency Lead Magnet',
      category: 'social',
      desc: 'Social feed engagement strategies coupled with influencer outreach networks.',
      tag: 'Social Media',
      stat: '5M+ Reach',
      color: 'linear-gradient(135deg, #BE185D 0%, #EC4899 100%)',
    },
    {
      id: 6,
      title: 'Lumina Luxury Vector Kits',
      category: 'design',
      desc: 'Bespoke geometric designs, vector layouts, and physical packaging assets.',
      tag: 'Graphic Design',
      stat: '12 Kits',
      color: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
    },
    {
      id: 7,
      title: 'AutoCRM Agent Orchestrator',
      category: 'ai',
      desc: 'Autonomous AI agents automating business customer support and Salesforce lead qualification.',
      tag: 'AI Automation',
      stat: '+85% Speed',
      color: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
    },
    {
      id: 8,
      title: 'Apex Market Insights Bot',
      category: 'ai',
      desc: 'Real-time Stripe & Analytics data interpreter generating automated weekly executive reports.',
      tag: 'AI Automation',
      stat: 'Saved 20h/w',
      color: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
    },
    {
      id: 9,
      title: 'Aura Premium Apparels',
      category: 'ecommerce',
      desc: 'Headless Shopify store with tailored brand assets and custom checkout experience.',
      tag: 'E-commerce',
      stat: '+42% Sales',
      color: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    },
    {
      id: 10,
      title: 'Nova Smart Home Hub',
      category: 'ecommerce',
      desc: 'Internationalized multi-currency Next.js storefront integrated with automated support tickets.',
      tag: 'E-commerce',
      stat: 'Global Sync',
      color: 'linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      style={{
        paddingBlock: '120px',
        background: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ width: '100%', maxWidth: 'var(--container-width)', margin: '0 auto', paddingInline: '24px' }}>
        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'flex-start',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-orange)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            <Filter size={14} /> Proven Success
          </div>
          <h2 style={{ textAlign: 'left', maxWidth: '600px' }}>
            Our Premium <span className="gradient-text-orange">Portfolio Universe</span>
          </h2>
        </div>

        {/* Filter buttons */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { id: 'all', name: 'Show All' },
            { id: 'social', name: 'Social Media Campaigns' },
            { id: 'web', name: 'Enterprise Web Dev' },
            { id: 'design', name: 'Graphic Designing' },
            { id: 'ai', name: 'AI Automation' },
            { id: 'ecommerce', name: 'E-commerce' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              style={{
                padding: '8px 20px',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: filter === btn.id ? 'var(--color-orange)' : 'var(--border-color)',
                background: filter === btn.id ? 'var(--color-orange-glow)' : 'var(--bg-surface)',
                color: filter === btn.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {btn.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="glass-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '420px',
                position: 'relative',
              }}
            >
              {/* Colored Card Header representing project vector */}
              <div
                style={{
                  height: '200px',
                  background: p.color,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                }}
              >
                {/* Floating metric indicator badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  {p.stat}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  {p.category === 'web' ? (
                    <Globe size={40} style={{ color: '#FFFFFF', opacity: 0.9 }} />
                  ) : p.category === 'design' ? (
                    <Palette size={40} style={{ color: '#FFFFFF', opacity: 0.9 }} />
                  ) : (
                    <Heart size={40} style={{ color: '#FFFFFF', opacity: 0.9 }} />
                  )}
                  <span
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      letterSpacing: '-0.01em',
                      textAlign: 'center',
                    }}
                  >
                    {p.title}
                  </span>
                </div>
              </div>

              {/* Card info body */}
              <div
                style={{
                  padding: '24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--color-orange)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {p.tag}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
                </div>

                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginTop: '12px',
                    transition: 'gap var(--transition-fast)',
                  }}
                  className="card-arrow"
                >
                  Inquire About Project
                  <ArrowUpRight size={16} style={{ color: 'var(--color-orange)' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .glass-card:hover .card-arrow {
          gap: 12px !important;
        }
      `}</style>
    </section>
  );
};
