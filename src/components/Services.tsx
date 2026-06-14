import React, { useState } from 'react';
import { Heart, MessageCircle, Play, Server, Code, Sparkles, Palette, Zap, Bot, Cpu, Terminal, ShoppingBag, CreditCard, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'social' | 'web' | 'design' | 'ai' | 'ecommerce'>('ai');

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

  // 4. AI & Automation States
  const [aiAgentGoal, setAiAgentGoal] = useState<'leads' | 'support' | 'report'>('leads');
  const [aiEngine, setAiEngine] = useState<'gemini' | 'deepseek' | 'claude'>('gemini');
  const [aiAutonomy, setAiAutonomy] = useState<number>(4);
  const [aiStatus, setAiStatus] = useState<'idle' | 'running' | 'done'>('idle');
  const [aiConsoleLines, setAiConsoleLines] = useState<string[]>([
    '// Configure your agent and click "Deploy AI Agent"...',
  ]);
  const [activeTimeouts, setActiveTimeouts] = useState<any[]>([]);

  // 5. E-commerce States
  const [ecoTheme, setEcoTheme] = useState<'orange' | 'emerald' | 'indigo'>('orange');
  const [ecoPlatform, setEcoPlatform] = useState<'shopify' | 'nextjs' | 'woo'>('shopify');
  const [ecoSupport, setEcoSupport] = useState<'chat' | 'returns' | 'omni'>('chat');
  const [ecoStatus, setEcoStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [ecoConsoleLines, setEcoConsoleLines] = useState<string[]>([
    '// Configure branding & press "Run Storefront Test"...',
  ]);
  const [ecoTimeouts, setEcoTimeouts] = useState<any[]>([]);

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

  const getEngineName = (eng: 'gemini' | 'deepseek' | 'claude') => {
    if (eng === 'gemini') return 'Gemini 2.5 Flash';
    if (eng === 'deepseek') return 'DeepSeek R1 (Reasoning)';
    return 'Claude 3.5 Sonnet';
  };

  const getAgentGoalName = (goal: 'leads' | 'support' | 'report') => {
    if (goal === 'leads') return 'Lead Qualification Agent';
    if (goal === 'support') return '24/7 Customer Support Agent';
    return 'Automated Weekly Report Agent';
  };

  const runAiSimulation = () => {
    if (aiStatus === 'running') return;
    
    // Clear any existing timeouts first
    activeTimeouts.forEach(t => clearTimeout(t));
    const newTimeouts: any[] = [];

    setAiStatus('running');
    
    let steps: string[] = [];
    if (aiAgentGoal === 'leads') {
      steps = [
        `[1/6] 🤖 Initializing Lead Qualifier Agent using ${getEngineName(aiEngine)}...`,
        `[2/6] 📥 Monitoring Contact Form stream: Capturing new lead submission...`,
        `[3/6] 🧠 Reasoning: Query: "Need custom CRM built fast". Priority: High. Intent: Web Development.`,
        `[4/6] ⚙️ Tool Execution: Searching Salesforce database for duplicate CRM accounts...`,
        `[5/6] 📝 CRM Update: Created new Lead Profile & Opportunity "Brandverse Web Build" (Score: 94/100).`,
        `[6/6] ✉️ Action: Drafted customized response via Gmail and pinged #sales-alerts on Slack!`,
        `✔ AI Agent Task Completed successfully! Autonomy level ${aiAutonomy}/5 executed.`
      ];
    } else if (aiAgentGoal === 'support') {
      steps = [
        `[1/6] 🤖 Initializing Customer Support Agent using ${getEngineName(aiEngine)}...`,
        `[2/6] 📥 Ticket Recieved: "Can I upgrade my subscription plan immediately?"`,
        `[3/6] 🧠 Reasoning: User requests checkout links for upgrade. Account: Pro Tier.`,
        `[4/6] ⚙️ Tool Execution: Fetching Stripe product metadata & client subscription status...`,
        `[5/6] 💳 Payment Sync: Generated custom Checkout session URL for Enterprise upgrade.`,
        `[6/6] 💬 Conversation: Sent upgrade link. Response latency: 850ms. Ticket marked solved.`,
        `✔ AI Agent Task Completed successfully! Autonomy level ${aiAutonomy}/5 executed.`
      ];
    } else {
      steps = [
        `[1/6] 🤖 Initializing Analytics Reporter Agent using ${getEngineName(aiEngine)}...`,
        `[2/6] 📥 Trigger: Scheduled Sunday Weekly Revenue & Growth report generation.`,
        `[3/6] 🧠 Reasoning: Aggregate weekly metrics. Calculate WoW conversions & SEO metrics.`,
        `[4/6] ⚙️ Tool Execution: Querying Stripe dashboard API & Google Analytics search API...`,
        `[5/6] 📊 Analysis: Revenue: $48.2k (+12% WoW). Traffic: 18.5k visits (+6% WoW).`,
        `[6/6] 📁 Action: Compiled PDF report, emailed to C-Suite, and pinned to Slack #board-room.`,
        `✔ AI Agent Task Completed successfully! Autonomy level ${aiAutonomy}/5 executed.`
      ];
    }

    setAiConsoleLines([`> Starting ${getAgentGoalName(aiAgentGoal)} simulation...`]);

    steps.forEach((step, index) => {
      const t = setTimeout(() => {
        setAiConsoleLines(prev => [...prev, step]);
        if (index === steps.length - 1) {
          setAiStatus('done');
          confetti({
            particleCount: 80,
            spread: 50,
            origin: { x: 0.35, y: 0.6 },
            colors: ['#E28717', '#10B981', '#3B82F6']
          });
        }
      }, (index + 1) * 800);
      newTimeouts.push(t);
    });

    setActiveTimeouts(newTimeouts);
  };

  const resetAiSimulation = () => {
    activeTimeouts.forEach(t => clearTimeout(t));
    setActiveTimeouts([]);
    setAiStatus('idle');
    setAiConsoleLines([
      '// Configure your agent and click "Deploy AI Agent"...',
    ]);
  };

  const getEcoThemeColor = (th: 'orange' | 'emerald' | 'indigo') => {
    if (th === 'orange') return 'var(--color-orange)';
    if (th === 'emerald') return '#10B981';
    return '#6366F1';
  };

  const getEcoThemeGlow = (th: 'orange' | 'emerald' | 'indigo') => {
    if (th === 'orange') return 'rgba(226, 135, 23, 0.2)';
    if (th === 'emerald') return 'rgba(16, 185, 129, 0.2)';
    return 'rgba(99, 102, 241, 0.2)';
  };

  const getEcoPlatformName = (pf: 'shopify' | 'nextjs' | 'woo') => {
    if (pf === 'shopify') return 'Shopify Headless Storefront';
    if (pf === 'nextjs') return 'Custom Next.js & React App';
    return 'WooCommerce High-Scale Engine';
  };

  const runEcoSimulation = () => {
    if (ecoStatus === 'processing') return;

    ecoTimeouts.forEach(t => clearTimeout(t));
    const newTimeouts: any[] = [];
    setEcoStatus('processing');

    const steps = [
      `[1/5] 🛡️ Opening secure transaction session on Stripe gateway...`,
      `[2/5] 🔑 Authenticating API keys & verifying secure checkout tokens...`,
      `[3/5] 📦 Platform sync: Processing cart item (BVC Smart Mug) on ${getEcoPlatformName(ecoPlatform)}...`,
      `[4/5] ✉️ Order Placed! Automated invoice compiled and emailed to customer.`,
      `[5/5] 💬 Support Tier active: Post-purchase support agent spawned (${ecoSupport === 'chat' ? 'Live Chat Agent' : ecoSupport === 'returns' ? 'Auto-Returns Bot' : 'Omnichannel Assist'}).`,
      `✔ Purchase simulated successfully! Transaction complete.`
    ];

    setEcoConsoleLines(['> Initiating secure e-commerce sandbox transaction...']);

    steps.forEach((step, index) => {
      const t = setTimeout(() => {
        setEcoConsoleLines(prev => [...prev, step]);
        if (index === steps.length - 1) {
          setEcoStatus('success');
          confetti({
            particleCount: 85,
            spread: 60,
            origin: { x: 0.35, y: 0.6 },
            colors: ['#E28717', '#10B981', '#6366F1']
          });
        }
      }, (index + 1) * 800);
      newTimeouts.push(t);
    });

    setEcoTimeouts(newTimeouts);
  };

  const resetEcoSimulation = () => {
    ecoTimeouts.forEach(t => clearTimeout(t));
    setEcoTimeouts([]);
    setEcoStatus('idle');
    setEcoConsoleLines([
      '// Configure branding & press "Run Storefront Test"...',
    ]);
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
            { id: 'ai', name: 'AI & Automation Agents', icon: <Bot size={16} /> },
            { id: 'ecommerce', name: 'E-commerce & Branding', icon: <ShoppingBag size={16} /> },
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

          {/* ================= AI & AUTOMATION TAB ================= */}
          {activeTab === 'ai' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }} className="grid-2col">
              {/* Left Column: Interactive Agent Console */}
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
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Terminal size={12} /> agent-orchestrator.sh
                  </span>
                </div>

                {/* Console Log Terminal */}
                <div
                  style={{
                    height: '240px',
                    background: '#050B14',
                    borderRadius: '8px',
                    padding: '16px',
                    fontFamily: 'monospace',
                    fontSize: '0.825rem',
                    color: '#F8FAFC',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {aiConsoleLines.map((line, idx) => {
                    let color = '#94A3B8'; // default grey
                    if (line.startsWith('✔')) {
                      color = '#10B981'; // green for success
                    } else if (line.startsWith('>')) {
                      color = '#3B82F6'; // blue for starting command
                    } else if (line.includes('🤖') || line.includes('🧠')) {
                      color = '#A78BFA'; // purple for agent action
                    } else if (line.includes('⚙️') || line.includes('📝') || line.includes('📥')) {
                      color = '#F59E0B'; // orange/amber for system steps
                    }

                    return (
                      <div key={idx} style={{ color, display: 'flex', gap: '10px' }}>
                        <span style={{ color: '#334155', userSelect: 'none', minWidth: '20px' }}>{idx + 1}</span>
                        <span>{line}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Performance stats inside agent simulator */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ background: '#0F1E36', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>Resolution Speed</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-orange)', marginTop: '4px', fontFamily: 'monospace' }}>
                      {aiStatus === 'running' ? '⏱️ Processing...' : aiStatus === 'done' ? '⚡ 0.85s' : '0.00s'}
                    </div>
                  </div>
                  <div style={{ background: '#0F1E36', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>Execution Cost</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#10B981', marginTop: '4px', fontFamily: 'monospace' }}>
                      {aiStatus === 'running' ? '🪙 Calculating...' : aiStatus === 'done' ? '✓ $0.004' : '$0.000'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Config Panel & Description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Bot style={{ color: 'var(--color-orange)' }} />
                  AI & Workflow Automation Agents
                </h3>
                <p>
                  We design, build, and deploy custom autonomous AI agents and intelligent integrations that work 24/7 on autopilot. Automate repetitive tasks, scale operations, and reduce manual workloads by up to 85%.
                </p>

                {/* Control Studio Form */}
                <div style={{ background: 'var(--bg-surface-glass)', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '14px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Select Agent Goal */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>1. Select Business Goal:</span>
                    <select
                      value={aiAgentGoal}
                      onChange={(e) => setAiAgentGoal(e.target.value as any)}
                      disabled={aiStatus === 'running'}
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        border: '2px solid var(--border-color)',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        outline: 'none',
                        cursor: 'pointer',
                        opacity: aiStatus === 'running' ? 0.6 : 1,
                      }}
                    >
                      <option value="leads">Lead Qualification & CRM Sync</option>
                      <option value="support">24/7 Customer Support Ticket Solver</option>
                      <option value="report">Automated Weekly Analytics Reporter</option>
                    </select>
                  </div>

                  {/* Model & Autonomy Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {/* Model Engine Selector */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>2. Model Engine:</span>
                      <select
                        value={aiEngine}
                        onChange={(e) => setAiEngine(e.target.value as any)}
                        disabled={aiStatus === 'running'}
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                          border: '2px solid var(--border-color)',
                          background: 'var(--bg-surface)',
                          color: 'var(--text-primary)',
                          fontSize: '0.85rem',
                          outline: 'none',
                          cursor: 'pointer',
                          opacity: aiStatus === 'running' ? 0.6 : 1,
                        }}
                      >
                        <option value="gemini">Gemini 2.5 Flash</option>
                        <option value="deepseek">DeepSeek R1 (Reasoning)</option>
                        <option value="claude">Claude 3.5 Sonnet</option>
                      </select>
                    </div>

                    {/* Autonomy Level Slider */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>3. Autonomy:</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '100%' }}>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={aiAutonomy}
                          onChange={(e) => setAiAutonomy(parseInt(e.target.value))}
                          disabled={aiStatus === 'running'}
                          style={{
                            flex: 1,
                            accentColor: 'var(--color-orange)',
                            cursor: 'pointer',
                            opacity: aiStatus === 'running' ? 0.6 : 1,
                          }}
                        />
                        <span style={{ fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: 'bold' }}>{aiAutonomy}/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                    {aiStatus === 'idle' ? (
                      <button onClick={runAiSimulation} className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.9rem', flex: 1 }}>
                        <Cpu size={14} /> Deploy AI Agent
                      </button>
                    ) : aiStatus === 'running' ? (
                      <button disabled className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.9rem', flex: 1, background: '#94A3B8', boxShadow: 'none' }}>
                        <Zap size={14} className="animate-spin-slow" /> Executing Graph Tools...
                      </button>
                    ) : (
                      <button onClick={resetAiSimulation} className="btn-secondary" style={{ padding: '10px 18px', fontSize: '0.9rem', flex: 1 }}>
                        Reset Simulation
                      </button>
                    )}
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid var(--color-orange)', paddingLeft: '16px', marginTop: '6px' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '0.925rem' }}>
                    "Deploying BVC's lead agent transformed our intake. Leads are pre-qualified and opportunities are created in Salesforce before our team even opens their email."
                  </p>
                  <span style={{ fontSize: '0.775rem', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                    — Julian Vance, COO of NexaScale Logistics
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ================= E-COMMERCE & BRANDING TAB ================= */}
          {activeTab === 'ecommerce' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }} className="grid-2col">
              {/* Left Column: Storefront Mockup & Checkout Console */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {/* Product Preview Card */}
                <div
                  style={{
                    background: '#0B1528',
                    padding: '24px',
                    borderRadius: '20px',
                    border: '1px solid rgba(248, 250, 252, 0.1)',
                    boxShadow: 'var(--shadow-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Decorative background glow based on selected theme */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-60px',
                      right: '-60px',
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      background: getEcoThemeColor(ecoTheme),
                      filter: 'blur(80px)',
                      opacity: 0.15,
                      transition: 'background 0.5s ease',
                    }}
                  />

                  {/* Header Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', background: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)' }}>
                      Storefront Preview
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                      <ShieldCheck size={14} /> SECURE GATEWAY
                    </span>
                  </div>

                  {/* Product Details Row */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {/* Simulated Image Placeholder */}
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${getEcoThemeColor(ecoTheme)} 0%, #0F172A 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.5s ease',
                      }}
                    >
                      <ShoppingBag size={32} style={{ color: '#FFFFFF', opacity: 0.8 }} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F8FAFC' }}>BVC Smart Hydration Bottle</h4>
                      <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '4px' }}>Vacuum insulated, LED temperature display, automatic sync.</p>
                    </div>
                  </div>

                  {/* Price and Brand Styled Buy Button */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'block' }}>Total Price</span>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#F8FAFC', fontFamily: 'monospace' }}>$39.99</span>
                    </div>

                    <button
                      onClick={runEcoSimulation}
                      disabled={ecoStatus === 'processing'}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        background: getEcoThemeColor(ecoTheme),
                        boxShadow: `0 4px 14px ${getEcoThemeGlow(ecoTheme)}`,
                        border: 'none',
                        cursor: ecoStatus === 'processing' ? 'not-allowed' : 'pointer',
                        opacity: ecoStatus === 'processing' ? 0.6 : 1,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <CreditCard size={16} />
                      {ecoStatus === 'processing' ? 'Processing Transaction...' : ecoStatus === 'success' ? 'Simulate Another Purchase' : 'Simulate Purchase'}
                    </button>
                  </div>
                </div>

                {/* Secure Gateway Terminal logs */}
                <div
                  style={{
                    background: '#050B14',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    padding: '14px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.7rem', color: '#475569', fontFamily: 'monospace' }}>stripe-gateway-api.log</span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: ecoStatus === 'processing' ? '#F59E0B' : ecoStatus === 'success' ? '#10B981' : '#64748B' }} />
                  </div>
                  <div
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.775rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      color: '#94A3B8',
                      maxHeight: '110px',
                      overflowY: 'auto',
                    }}
                  >
                    {ecoConsoleLines.map((line, idx) => (
                      <div key={idx} style={{ color: line.startsWith('✔') ? '#10B981' : line.startsWith('>') ? '#3B82F6' : '#E2E8F0' }}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Platform Configuration & Description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShoppingBag style={{ color: 'var(--color-orange)' }} />
                  E-commerce Development, Branding & Support
                </h3>
                <p>
                  We build high-converting e-commerce experiences that fuse luxury brand identities with sub-second page performance. Integrated with secure Stripe/Shopify gateways and automated customer help centers.
                </p>

                {/* Control Panel Card */}
                <div style={{ background: 'var(--bg-surface-glass)', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '14px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Select Branding Theme */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>1. Brand Identity Theme:</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {[
                        { id: 'orange', name: 'BVC Orange', hex: 'var(--color-orange)' },
                        { id: 'emerald', name: 'Emerald Mint', hex: '#10B981' },
                        { id: 'indigo', name: 'Cobalt Royal', hex: '#6366F1' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          disabled={ecoStatus === 'processing'}
                          onClick={() => setEcoTheme(t.id as any)}
                          style={{
                            flex: 1,
                            padding: '8px',
                            borderRadius: '8px',
                            border: '2px solid',
                            borderColor: ecoTheme === t.id ? t.hex : 'var(--border-color)',
                            background: ecoTheme === t.id ? `${t.hex}15` : 'transparent',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            opacity: ecoStatus === 'processing' ? 0.6 : 1,
                          }}
                        >
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: t.hex }} />
                          {t.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {/* Platform Selector */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>2. Storefront Engine:</span>
                      <select
                        value={ecoPlatform}
                        onChange={(e) => setEcoPlatform(e.target.value as any)}
                        disabled={ecoStatus === 'processing'}
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                          border: '2px solid var(--border-color)',
                          background: 'var(--bg-surface)',
                          color: 'var(--text-primary)',
                          fontSize: '0.85rem',
                          outline: 'none',
                          cursor: 'pointer',
                          opacity: ecoStatus === 'processing' ? 0.6 : 1,
                        }}
                      >
                        <option value="shopify">Shopify Headless API</option>
                        <option value="nextjs">Next.js Headless React</option>
                        <option value="woo">High-Scale WooCommerce</option>
                      </select>
                    </div>

                    {/* Support Automation Tier */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>3. Support Automation:</span>
                      <select
                        value={ecoSupport}
                        onChange={(e) => setEcoSupport(e.target.value as any)}
                        disabled={ecoStatus === 'processing'}
                        style={{
                          padding: '10px',
                          borderRadius: '8px',
                          border: '2px solid var(--border-color)',
                          background: 'var(--bg-surface)',
                          color: 'var(--text-primary)',
                          fontSize: '0.85rem',
                          outline: 'none',
                          cursor: 'pointer',
                          opacity: ecoStatus === 'processing' ? 0.6 : 1,
                        }}
                      >
                        <option value="chat">24/7 Live Chat Bot</option>
                        <option value="returns">Automated Returns Portal</option>
                        <option value="omni">Omnichannel Zendesk Sync</option>
                      </select>
                    </div>
                  </div>

                  {/* Deploy & Reset */}
                  <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                    {ecoStatus === 'idle' ? (
                      <button onClick={runEcoSimulation} className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.9rem', flex: 1 }}>
                        <ShoppingBag size={14} /> Run Storefront Test
                      </button>
                    ) : ecoStatus === 'processing' ? (
                      <button disabled className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.9rem', flex: 1, background: '#94A3B8', boxShadow: 'none' }}>
                        <Zap size={14} className="animate-spin-slow" /> Connecting API Nodes...
                      </button>
                    ) : (
                      <button onClick={resetEcoSimulation} className="btn-secondary" style={{ padding: '10px 18px', fontSize: '0.9rem', flex: 1 }}>
                        Reset Store Simulation
                      </button>
                    )}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div style={{ borderLeft: '3px solid var(--color-orange)', paddingLeft: '16px', marginTop: '6px' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '0.925rem' }}>
                    "BVC launched our custom Next.js storefront in 6 weeks. The conversion rate leaped from 1.8% to 4.2% instantly."
                  </p>
                  <span style={{ fontSize: '0.775rem', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                    — Marcus Aureli, Founder of Aura Essentials
                  </span>
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
