import React, { useState } from 'react';
import { Heart, MessageCircle, Play, Server, Code, Sparkles, Palette, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'social' | 'web' | 'design'>('social');

  // 1. Social Media States
  const [selectedPostTheme, setSelectedPostTheme] = useState<'creative' | 'tech' | 'growth'>('creative');
  const [likes, setLikes] = useState({ creative: 1250, tech: 890, growth: 2310 });
  const [liked, setLiked] = useState({ creative: false, tech: false, growth: false });

  // 2. Enterprise Website Dev States
  const [optimizeStatus, setOptimizeStatus] = useState<'idle' | 'running' | 'done'>('idle');
  const [consoleLines, setConsoleLines] = useState<string[]>([
    '// Waiting for optimization initiation...',
    'const status = "Awaiting deployment optimization";'
  ]);
  const [metrics, setMetrics] = useState({ lcp: 74, inp: 65, cls: 82 });

  // 3. Graphic Design States
  const [palette, setPalette] = useState<'bvc' | 'midnight' | 'sunset' | 'neon'>('bvc');
  const [elementCount, setElementCount] = useState(4);
  const [shapeStyle, setShapeStyle] = useState<'rounded' | 'squircle' | 'sharp'>('squircle');

  const triggerSocialLike = (theme: 'creative' | 'tech' | 'growth') => {
    if (liked[theme]) {
      setLikes({ ...likes, [theme]: likes[theme] - 1 });
      setLiked({ ...liked, [theme]: false });
    } else {
      setLikes({ ...likes, [theme]: likes[theme] + 1 });
      setLiked({ ...liked, [theme]: true });
      // Spark confetti inside feed mockup!
      confetti({
        particleCount: 50,
        spread: 40,
        origin: { x: 0.5, y: 0.7 },
        colors: ['#E28717', '#0B1F3F', '#F59E0B']
      });
    }
  };

  const handleOptimization = () => {
    if (optimizeStatus !== 'idle') return;
    
    setOptimizeStatus('running');
    setConsoleLines(['> Initiating server optimize task...', '> Scanning Largest Contentful Paint (LCP) candidates...']);
    
    setTimeout(() => {
      setConsoleLines(prev => [...prev, '> Optimizing layout shifts (CLS) to 0...']);
      setMetrics(prev => ({ ...prev, cls: 98 }));
    }, 800);

    setTimeout(() => {
      setConsoleLines(prev => [...prev, '> Injecting fetch priority on hero assets...']);
      setMetrics(prev => ({ ...prev, lcp: 97 }));
    }, 1600);

    setTimeout(() => {
      setConsoleLines(prev => [...prev, '> Deferring offscreen layouts with content-visibility...']);
      setMetrics(prev => ({ ...prev, inp: 99 }));
    }, 2400);

    setTimeout(() => {
      setConsoleLines(prev => [...prev, '✔ Server builds optimized successfully!', 'const speedScore = 100;']);
      setOptimizeStatus('done');
      
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { x: 0.75, y: 0.5 },
        colors: ['#10B981', '#E28717']
      });
    }, 3200);
  };

  const resetOptimization = () => {
    setOptimizeStatus('idle');
    setConsoleLines([
      '// Waiting for optimization initiation...',
      'const status = "Awaiting deployment optimization";'
    ]);
    setMetrics({ lcp: 74, inp: 65, cls: 82 });
  };

  // Color schemas for design demo
  const colorSchemes = {
    bvc: {
      bg: 'var(--color-navy)',
      accent: 'var(--color-orange)',
      accent2: '#F59E0B',
      shapes: ['#E28717', '#0B1F3F', '#F59E0B', '#1E3A8A']
    },
    midnight: {
      bg: '#0F172A',
      accent: '#38BDF8',
      accent2: '#818CF8',
      shapes: ['#38BDF8', '#818CF8', '#1E293B', '#475569']
    },
    sunset: {
      bg: '#450A0A',
      accent: '#F43F5E',
      accent2: '#FB923C',
      shapes: ['#F43F5E', '#FB923C', '#FEF08A', '#881337']
    },
    neon: {
      bg: '#090514',
      accent: '#D946EF',
      accent2: '#10B981',
      shapes: ['#D946EF', '#10B981', '#8B5CF6', '#06B6D4']
    }
  };

  return (
    <section
      id="services"
      style={{
        paddingBlock: '120px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ width: '100%', maxWidth: 'var(--container-width)', margin: '0 auto', paddingInline: '24px' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '16px' }}>
            Interactive <span className="gradient-text-orange">Services Hub</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            We provide full-funnel digital services, engineered with extreme performance and premium visual assets. Interact with the tabs below to explore our core specializations.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { id: 'social', name: 'Social Media Marketing', icon: <Heart size={16} /> },
            { id: 'web', name: 'Enterprise Web Dev', icon: <Code size={16} /> },
            { id: 'design', name: 'Graphic Designing', icon: <Palette size={16} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all var(--transition-fast)',
                background: activeTab === tab.id ? 'var(--color-orange)' : 'var(--bg-surface-glass)',
                color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-primary)',
                border: '1px solid',
                borderColor: activeTab === tab.id ? 'var(--color-orange)' : 'var(--border-color)',
                boxShadow: activeTab === tab.id ? 'var(--shadow-glow)' : 'none',
              }}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Contents Frame */}
        <div
          className="glass-card services-frame"
          style={{
            padding: '40px',
            borderRadius: '24px',
            minHeight: '520px',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* ================= SOCIAL TAB ================= */}
          {activeTab === 'social' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }} className="grid-2col">
              {/* Left: Interactive smartphone mockup */}
              <div
                style={{
                  margin: '0 auto',
                  width: '290px',
                  height: '500px',
                  borderRadius: '36px',
                  border: '10px solid #1E293B',
                  background: '#0F172A',
                  position: 'relative',
                  boxShadow: 'var(--shadow-lg), 0 25px 50px -12px rgba(0,0,0,0.5)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Camera Notch */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '110px',
                    height: '22px',
                    background: '#1E293B',
                    borderBottomLeftRadius: '14px',
                    borderBottomRightRadius: '14px',
                    zIndex: 2,
                  }}
                />

                {/* Simulated Phone Feed Header */}
                <div
                  style={{
                    padding: '24px 16px 8px 16px',
                    borderBottom: '1px solid #1E293B',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#0F172A',
                  }}
                >
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F1F5F9', fontFamily: 'var(--font-sans)' }}>
                    BVC Feed
                  </span>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
                </div>

                {/* Simulated Feed Body */}
                <div style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Post Image Container */}
                  <div
                    style={{
                      height: '240px',
                      borderRadius: '16px',
                      background: selectedPostTheme === 'creative' 
                        ? 'linear-gradient(135deg, #E28717 0%, #78350F 100%)'
                        : selectedPostTheme === 'tech'
                        ? 'linear-gradient(135deg, #0B1F3F 0%, #1E3A8A 100%)'
                        : 'linear-gradient(135deg, #10B981 0%, #064E3B 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      padding: '16px',
                      position: 'relative',
                      textAlign: 'center',
                      transition: 'all 0.5s ease',
                    }}
                  >
                    <Sparkles size={36} style={{ color: '#FFFFFF', marginBottom: '12px', opacity: 0.9 }} />
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 800 }}>
                      {selectedPostTheme === 'creative' 
                        ? 'CREATIVE REVOLUTION'
                        : selectedPostTheme === 'tech'
                        ? 'FUTURE-PROOF TECH'
                        : 'EXPONENTAL GROWTH'}
                    </h4>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', marginTop: '6px' }}>
                      {selectedPostTheme === 'creative' 
                        ? 'High-fidelity graphics that stand out from the grid.'
                        : selectedPostTheme === 'tech'
                        ? 'Fast React + NextJS products that retain users.'
                        : 'Precision growth ads & social funnels that scale ROI.'}
                    </p>
                  </div>

                  {/* Actions (Like/Comment) */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingInline: '4px' }}>
                    <button
                      onClick={() => triggerSocialLike(selectedPostTheme)}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', color: liked[selectedPostTheme] ? '#EF4444' : '#94A3B8' }}
                    >
                      <Heart size={20} fill={liked[selectedPostTheme] ? '#EF4444' : 'none'} style={{ transition: 'all 0.2s' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                        {likes[selectedPostTheme]}
                      </span>
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8' }}>
                      <MessageCircle size={20} />
                      <span style={{ fontSize: '0.85rem' }}>
                        {selectedPostTheme === 'creative' ? '45' : selectedPostTheme === 'tech' ? '28' : '112'}
                      </span>
                    </div>
                  </div>

                  {/* Comments section */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingInline: '4px' }}>
                    <p style={{ fontSize: '0.75rem', color: '#F1F5F9' }}>
                      <strong>bvc_universe</strong> Scaling brand outreach to new coordinates... ⚡🚀
                    </p>
                    <p style={{ fontSize: '0.7rem', color: '#64748B' }}>
                      View all comments
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Pitch & Control Dashboard */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles style={{ color: 'var(--color-orange)' }} />
                  Social Media Strategy & Marketing
                </h3>
                <p>
                  Social media isn't just about sharing; it's about engineering engagement loops. We design fully customized growth architectures, viral content maps, and performance marketing funnels.
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <strong>Simulate a dynamic campaign:</strong> Click the buttons below to switch the smartphone feed theme and like the post to see viral engagement confetti in action!
                </p>

                {/* Campaign Selectors */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                  {[
                    { id: 'creative', label: 'Branding Campaign', color: 'var(--color-orange)' },
                    { id: 'tech', label: 'Tech Launch Campaign', color: 'var(--color-navy)' },
                    { id: 'growth', label: 'Hyper Growth Campaign', color: '#10B981' }
                  ].map(btn => (
                    <button
                      key={btn.id}
                      onClick={() => setSelectedPostTheme(btn.id as any)}
                      style={{
                        padding: '10px 16px',
                        borderRadius: '10px',
                        border: '2px solid',
                        borderColor: selectedPostTheme === btn.id ? btn.color : 'var(--border-color)',
                        background: selectedPostTheme === btn.id ? `${btn.color}15` : 'transparent',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: selectedPostTheme === btn.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      }}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                <div style={{ borderLeft: '3px solid var(--color-orange)', paddingLeft: '16px', marginTop: '12px' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
                    "BVC boosted our customer acquisition metrics by 340% within our first 3 months of campaign deployment."
                  </p>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginTop: '6px' }}>
                    — Clara Jenkins, VP of Marketing at Veloce Group
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ================= WEB DEVELOPMENT TAB ================= */}
          {activeTab === 'web' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }} className="grid-2col">
              {/* Left: Text & Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Server style={{ color: 'var(--color-orange)' }} />
                  Enterprise Website Development
                </h3>
                <p>
                  We compile enterprise architectures (React, Vite, NextJS, TypeScript) optimized to fulfill extreme Core Web Vitals targets. No layouts shifts. Sub-second Largest Contentful Paint timings. Fully accessible semantic layouts.
                </p>
                
                {/* Simulated Server Console Trigger */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Deploy server performance tests:</span>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {optimizeStatus === 'idle' ? (
                      <button onClick={handleOptimization} className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.9rem' }}>
                        <Play size={14} /> Run Build Optimizer
                      </button>
                    ) : optimizeStatus === 'running' ? (
                      <button disabled className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.9rem', background: '#94A3B8', boxShadow: 'none' }}>
                        <Zap size={14} className="animate-spin-slow" /> Optimizing Assets...
                      </button>
                    ) : (
                      <button onClick={resetOptimization} className="btn-secondary" style={{ padding: '10px 18px', fontSize: '0.9rem' }}>
                        Reset Simulation
                      </button>
                    )}
                  </div>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                    <Zap size={16} style={{ color: '#10B981' }} /> Compositor-thread transform animations (60 FPS smooth)
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                    <Zap size={16} style={{ color: '#10B981' }} /> Standard accessibility (WCAG AA compliant models)
                  </li>
                </ul>
              </div>

              {/* Right: Live build monitor widget */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  background: '#0B1528',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid rgba(248, 250, 252, 0.1)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                {/* Console Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#64748B' }}>
                    development-compiler.log
                  </span>
                </div>

                {/* Console Log Terminal */}
                <div
                  style={{
                    height: '140px',
                    background: '#050B14',
                    borderRadius: '8px',
                    padding: '12px',
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    color: '#10B981',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {consoleLines.map((line, idx) => (
                    <div key={idx} style={{ color: line.startsWith('✔') ? '#10B981' : line.startsWith('>') ? '#F59E0B' : '#94A3B8' }}>
                      {line}
                    </div>
                  ))}
                </div>

                {/* Performance Speed Indicators (Gauges) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'monospace', color: '#94A3B8' }}>
                    Lighthouse Core Web Vitals:
                  </span>
                  {[
                    { key: 'lcp', label: 'Largest Contentful Paint (LCP)', value: metrics.lcp, color: metrics.lcp > 90 ? '#10B981' : '#F59E0B' },
                    { key: 'inp', label: 'Interaction to Next Paint (INP)', value: metrics.inp, color: metrics.inp > 90 ? '#10B981' : '#F59E0B' },
                    { key: 'cls', label: 'Cumulative Layout Shift (CLS)', value: metrics.cls, color: metrics.cls > 90 ? '#10B981' : '#F59E0B' },
                  ].map(gauge => (
                    <div key={gauge.key} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                        <span>{gauge.label}</span>
                        <span style={{ color: gauge.color, fontWeight: 'bold' }}>{gauge.value}%</span>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${gauge.value}%`,
                            background: gauge.color,
                            transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= GRAPHIC DESIGN TAB ================= */}
          {activeTab === 'design' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }} className="grid-2col">
              {/* Left: Interactive Canvas Customizer */}
              <div
                style={{
                  height: '360px',
                  borderRadius: '20px',
                  background: colorSchemes[palette].bg,
                  transition: 'background var(--transition-smooth)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                {/* Decorative background grid pattern */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    opacity: 0.5,
                  }}
                />

                {/* Live Rendered Interactive Geometric Layout */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {Array.from({ length: elementCount }).map((_, idx) => {
                    const baseSize = 80 - idx * 10;
                    const rotate = idx * 25;
                    const shapeColor = colorSchemes[palette].shapes[idx % colorSchemes[palette].shapes.length];
                    
                    return (
                      <div
                        key={idx}
                        style={{
                          width: `${baseSize}px`,
                          height: `${baseSize}px`,
                          background: shapeColor,
                          transform: `rotate(${rotate}deg)`,
                          borderRadius: shapeStyle === 'squircle' 
                            ? '24px 8px 24px 8px' 
                            : shapeStyle === 'rounded' 
                            ? '50%' 
                            : '0',
                          transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          fontFamily: 'monospace',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                        }}
                      >
                        BVC
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Graphic Pitch & Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Palette style={{ color: 'var(--color-orange)' }} />
                  Graphic Designing & Creative Assets
                </h3>
                <p>
                  We shape iconic brand universes. From brand design tokens, detailed guidebooks, bespoke vector assets to full-funnel layouts, we construct standard-setting interfaces.
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <strong>Interactive layout studio:</strong> Adjust the switches below to select different harmonious branding palettes and element counts to re-render the custom asset!
                </p>

                {/* Dynamic design panel toggles */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginTop: '8px' }}>
                  {/* Palette Selector */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Harmonious Palette:</span>
                    <select
                      value={palette}
                      onChange={(e) => setPalette(e.target.value as any)}
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        border: '2px solid var(--border-color)',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="bvc">BVC Orange & Navy (Default)</option>
                      <option value="midnight">Midnight Frost</option>
                      <option value="sunset">Sunset Boulevard</option>
                      <option value="neon">Neon Cyberpunk</option>
                    </select>
                  </div>

                  {/* Shapes Style Selector */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Curves Geometry:</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {['rounded', 'squircle', 'sharp'].map((style) => (
                        <button
                          key={style}
                          onClick={() => setShapeStyle(style as any)}
                          style={{
                            flex: 1,
                            padding: '8px',
                            borderRadius: '8px',
                            border: '2px solid',
                            borderColor: shapeStyle === style ? 'var(--color-orange)' : 'var(--border-color)',
                            background: shapeStyle === style ? 'var(--color-orange-glow)' : 'transparent',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'capitalize',
                          }}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Element Layers:</span>
                  <input
                    type="range"
                    min="2"
                    max="6"
                    value={elementCount}
                    onChange={(e) => setElementCount(parseInt(e.target.value))}
                    style={{
                      flex: 1,
                      accentColor: 'var(--color-orange)',
                      cursor: 'pointer',
                    }}
                  />
                  <span style={{ fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: 'bold' }}>{elementCount}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .grid-2col {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
          .services-frame {
            padding: 56px !important;
          }
        }
      `}</style>
    </section>
  );
};
