import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, Clock, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'web',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate server submit delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger beautiful double confetti explosion!
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#E28717', '#0B1F3F', '#F59E0B'],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#E28717', '#0B1F3F', '#F59E0B'],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      service: 'web',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      style={{
        paddingBlock: '120px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div style={{ width: '100%', maxWidth: 'var(--container-width)', margin: '0 auto', paddingInline: '24px' }}>
        {/* Grid framework */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '60px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: Contact Info & Office coords */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h2 style={{ marginBottom: '16px' }}>
                Join the <span className="gradient-text-orange">Brandverse</span>
              </h2>
              <p>
                Ready to expand your enterprise performance coordinates? Drop us a line. Our specialist developers and content strategists respond within 12 standard business hours.
              </p>
            </div>

            {/* Info details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  icon: <MapPin size={20} style={{ color: 'var(--color-orange)' }} />,
                  title: 'Global Headquarters',
                  text: 'Level 18, Brandverse Towers, San Francisco, CA 94105',
                },
                {
                  icon: <Mail size={20} style={{ color: 'var(--color-orange)' }} />,
                  title: 'Electronic Outpost',
                  text: 'hello@bvcbrandverse.com',
                },
                {
                  icon: <Phone size={20} style={{ color: 'var(--color-orange)' }} />,
                  title: 'Audio Uplink',
                  text: '+1 (555) 019-2834',
                },
                {
                  icon: <Clock size={20} style={{ color: 'var(--color-orange)' }} />,
                  title: 'Operating Hours',
                  text: 'Monday — Friday: 9:00 AM – 6:00 PM PST',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '2px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form Cards */}
          <div className="glass-card" style={{ padding: '40px', borderRadius: '24px' }}>
            {submitted ? (
              // Success Screen
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingBlock: '40px',
                  gap: '20px',
                  animation: 'scaleUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10B981',
                  }}
                >
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Coordinates Recieved!</h3>
                  <p style={{ maxWidth: '400px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Welcome to the Brandverse, <strong>{formData.name}</strong>. Our developers have compiled your inquiry. Check your inbox for our initial alignment brief.
                  </p>
                </div>
                <button onClick={resetForm} className="btn-secondary" style={{ marginTop: '12px' }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              // Inquiry Form
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Submit an Project Brief</h3>

                {/* Name */}
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder=" "
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder=" "
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                </div>

                {/* Service Selector */}
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label
                    htmlFor="service"
                    style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}
                  >
                    Target Service Coordinates:
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: 'var(--bg-surface)',
                      border: '2px solid var(--border-color)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-orange)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                  >
                    <option value="social">Social Media Marketing Campaigns</option>
                    <option value="web">Enterprise Web Development (NextJS/TypeScript)</option>
                    <option value="design">Graphic Design & Creative Brand Identity</option>
                    <option value="ai">AI & Workflow Automation Agents</option>
                    <option value="ecommerce">E-commerce Development, Branding & Support</option>
                    <option value="all">Unified Brandverse Solution (All Services)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group" style={{ marginTop: '12px' }}>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder=" "
                    className="form-control"
                    style={{ resize: 'vertical', minHeight: '120px' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="message" className="form-label" style={{ top: '24px' }}>
                    Project Parameters / Details...
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '1.1rem', marginTop: '12px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Transmitting brief...'
                  ) : (
                    <>
                      Transmit Project Brief
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};
