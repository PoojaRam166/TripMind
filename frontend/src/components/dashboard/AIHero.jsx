import React, { useState, useEffect } from 'react';
import { ArrowRight, Paperclip, Mic, CheckCircle2, Circle, Sparkles, Loader2, AlertCircle, MapPin } from 'lucide-react';
import { agentService, AGENT_SEQUENCE } from '../../services/agentService';

export default function AIHero({ onPromptSubmit }) {
  const [prompt, setPrompt] = useState('');
  const [isPlanning, setIsPlanning] = useState(false);
  const [agentStates, setAgentStates] = useState([]);

  const samplePrompts = [
    'Plan a 5-day Goa trip under ₹30,000',
    'Plan a relaxing trip for two',
    'Find the best places to visit in Japan',
    'Plan a food and culture trip'
  ];

  const handlePillClick = (text) => {
    if (isPlanning) return;
    setPrompt(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim() || isPlanning) return;

    // Start the loading sequence
    setIsPlanning(true);

    // Initialize states to 'waiting'
    const initialStates = AGENT_SEQUENCE.map(a => ({
      agent: a.id,
      label: a.label,
      status: 'waiting',
      message: 'Waiting'
    }));
    setAgentStates(initialStates);

    if (onPromptSubmit) {
      onPromptSubmit(prompt);
    }

    // Call service to stream events
    agentService.startPlanning(
      { prompt },
      (event) => {
        // Handle streaming event
        setAgentStates(prev => prev.map(a => {
          if (a.agent === event.agent) {
            return { ...a, status: event.status, message: event.message };
          }
          return a;
        }));
      },
      () => {
        // Complete
        setTimeout(() => {
          setIsPlanning(false);
          setPrompt('');
        }, 2000);
      }
    );
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={16} color="var(--color-gold-dark)" />;
      case 'working': return <Loader2 size={16} color="var(--color-gold)" className="animate-spin" />;
      case 'error': return <AlertCircle size={16} color="#EF4444" />;
      case 'waiting':
      default: return <Circle size={16} color="var(--color-border)" />;
    }
  };

  return (
    <div style={{ marginBottom: '40px' }}>

      {/* Light Luxury Container */}
      <div style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f9f8f4 100%)',
        borderRadius: '32px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
        border: '1px solid var(--color-border-light)',
        minHeight: '440px',
        display: 'block'
      }}>

        {/* Decorative Light & Gold Gradients */}
        <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '50%', height: '140%', background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '40%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(15,23,42,0.02) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div className="ai-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '64px', position: 'relative', zIndex: 1, width: '100%', alignItems: 'center' }}>

          {/* Left Column: Text & Input */}
          <div style={{ maxWidth: '600px', minWidth: 0, width: '100%' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--color-gold-dark)' }}>
              <Sparkles size={20} fill="var(--color-gold)" color="var(--color-gold)" />
              <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>TripMind AI Planner</span>
            </div>

            <h1 className="ai-hero-title" style={{ fontSize: '46px', fontWeight: '800', marginBottom: '16px', color: 'var(--color-text-primary)', letterSpacing: '-1.5px', lineHeight: 1.15 }}>
              Where will your <br /><span style={{ color: 'var(--color-gold-dark)' }}>mind take you?</span>
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '40px', fontSize: '17px', lineHeight: 1.6, fontWeight: 400 }}>
              Tell TripMind what you're looking for and your AI travel team will instantly plan the perfect itinerary.
            </p>

            {isPlanning ? (
              /* --- MULTI-AGENT LOADING STATE --- */
              <div className="animate-fade-in-up" style={{ background: 'var(--color-surface)', padding: '24px', borderRadius: '24px', boxShadow: '0 12px 32px rgba(0,0,0,0.08)', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--color-gold)' }}>
                  <Sparkles size={20} />
                  <h3 style={{ margin: '0 0 2px 0', fontSize: '17px', fontWeight: 700, color: 'var(--color-text-primary)' }}>TripMind is planning your trip</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {agentStates.map((state) => {
                    const isCompleted = state.status === 'completed';
                    const isWorking = state.status === 'working';
                    const isWaiting = state.status === 'waiting';
                    let textColor = 'var(--color-text-secondary)';
                    if (isCompleted || isWorking) textColor = 'var(--color-ink)';

                    return (
                      <div key={state.agent} style={{ display: 'flex', gap: '12px', opacity: isWaiting ? 0.4 : 1, transition: 'all 0.3s ease' }}>
                        <div style={{ marginTop: '2px' }}>
                          {renderStatusIcon(state.status)}
                        </div>
                        <div>
                          <p style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 600, color: textColor }}>{state.label}</p>
                          <p style={{ margin: 0, fontSize: '13px', color: isWorking ? 'var(--color-gold)' : 'var(--color-text-secondary)' }}>
                            {isWorking ? <span className="pulsing-text">{state.message}</span> : state.message}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* --- NORMAL INPUT STATE --- */
              <div className="animate-fade-in-up">
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Frosted Glass Input Bar */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.8)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
                    minHeight: '64px',
                    transition: 'all 0.3s ease'
                  }} className="ai-hero-input-bar hover:shadow-lg focus-within:shadow-xl focus-within:border-gold">
                    <input
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g. A 4-day trip to Goa under ₹30k"
                      style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: 'var(--color-text-primary)',
                        fontSize: '16px',
                        fontWeight: 500,
                        minWidth: 0,
                        paddingLeft: '24px',
                        paddingRight: '12px',
                        textOverflow: 'ellipsis'
                      }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button type="button" style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: '6px', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-ink)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                        <Paperclip size={20} />
                      </button>
                      <button type="button" style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: '6px', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--color-ink)'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                        <Mic size={20} />
                      </button>
                      <button
                        type="submit"
                        disabled={!prompt.trim()}
                        className="btn ai-hero-submit"
                        style={{
                          background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '16px',
                          padding: '12px 24px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: prompt.trim() ? 'pointer' : 'not-allowed',
                          opacity: prompt.trim() ? 1 : 0.7,
                          boxShadow: '0 8px 20px rgba(184, 147, 90, 0.3)',
                          transition: 'transform 0.2s, box-shadow 0.2s'
                        }}
                      >
                        <span className="ai-hero-submit-text">Plan Trip</span> <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Prompt Pills */}
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {samplePrompts.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => handlePillClick(p)}
                        style={{
                          background: 'var(--color-surface)',
                          border: '1px solid var(--color-border-light)',
                          color: 'var(--color-text-secondary)',
                          padding: '8px 16px',
                          borderRadius: '9999px',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-ink)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: 3D Floating Glass Cards */}
          <div style={{ position: 'relative', height: '100%', minHeight: '440px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {/* Card 1: Amalfi Coast (Top Left) */}
            <div style={{
              position: 'absolute', left: '50%', top: '50%', marginLeft: '-200px', marginTop: '-160px', width: '200px',
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(255,255,255,0.8)', borderRadius: '24px',
              padding: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
              transform: 'rotate(-12deg)', zIndex: 1,
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s, z-index 0s'
            }} className="hover:rotate-0 hover:!z-20 hover:shadow-2xl">
              <img src="https://picsum.photos/seed/amalfi/400/300" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '16px', marginBottom: '10px' }} alt="Amalfi Coast" />
              <h4 style={{ color: 'var(--color-text-primary)', margin: '0 0 4px 0', fontSize: '14px', fontWeight: 800 }}>Amalfi Coast</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-gold-dark)' }}>
                <div style={{ background: 'rgba(184, 147, 90, 0.1)', padding: '4px', borderRadius: '50%' }}>
                  <MapPin size={10} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700 }}>Italy</span>
              </div>
            </div>

            {/* Card 2: Kyoto (Top Right) */}
            <div style={{
              position: 'absolute', left: '50%', top: '50%', marginLeft: '20px', marginTop: '-140px', width: '220px',
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(255,255,255,0.8)', borderRadius: '24px',
              padding: '12px', boxShadow: '0 24px 48px rgba(0,0,0,0.08)',
              transform: 'rotate(10deg)', zIndex: 2,
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s, z-index 0s'
            }} className="hover:rotate-0 hover:!z-20 hover:shadow-2xl">
              <img src="https://picsum.photos/seed/kyoto/400/300" style={{ width: '100%', height: '110px', objectFit: 'cover', borderRadius: '16px', marginBottom: '10px' }} alt="Kyoto" />
              <h4 style={{ color: 'var(--color-text-primary)', margin: '0 0 4px 0', fontSize: '15px', fontWeight: 800 }}>Kyoto Culture</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-gold-dark)' }}>
                <div style={{ background: 'rgba(184, 147, 90, 0.1)', padding: '4px', borderRadius: '50%' }}>
                  <MapPin size={10} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700 }}>Japan</span>
              </div>
            </div>

            {/* Card 3: Maldives (Bottom Left) */}
            <div style={{
              position: 'absolute', left: '50%', top: '50%', marginLeft: '-180px', marginTop: '20px', width: '230px',
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(255,255,255,0.8)', borderRadius: '24px',
              padding: '14px', boxShadow: '0 16px 32px rgba(0,0,0,0.06)',
              transform: 'rotate(-8deg)', zIndex: 3,
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s, z-index 0s'
            }} className="hover:rotate-0 hover:!z-20 hover:shadow-2xl">
              <img src="https://picsum.photos/seed/maldives/400/300" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '16px', marginBottom: '12px' }} alt="Maldives" />
              <h4 style={{ color: 'var(--color-text-primary)', margin: '0 0 4px 0', fontSize: '15px', fontWeight: 800 }}>Ocean Villas</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-gold-dark)' }}>
                <div style={{ background: 'rgba(184, 147, 90, 0.1)', padding: '4px', borderRadius: '50%' }}>
                  <MapPin size={10} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700 }}>Maldives</span>
              </div>
            </div>

            {/* Card 4: Swiss Alps (Bottom Right) */}
            <div style={{
              position: 'absolute', left: '50%', top: '50%', marginLeft: '40px', marginTop: '50px', width: '200px',
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(255,255,255,0.8)', borderRadius: '20px',
              padding: '12px', boxShadow: '0 12px 24px rgba(0,0,0,0.05)',
              transform: 'rotate(14deg)', zIndex: 4,
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s, z-index 0s'
            }} className="hover:rotate-0 hover:!z-20 hover:shadow-2xl">
              <img src="https://picsum.photos/seed/swiss/400/300" style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '12px', marginBottom: '10px' }} alt="Swiss Alps" />
              <h4 style={{ color: 'var(--color-text-primary)', margin: '0 0 4px 0', fontSize: '14px', fontWeight: 800 }}>Swiss Alps</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-gold-dark)' }}>
                <div style={{ background: 'rgba(184, 147, 90, 0.1)', padding: '2px', borderRadius: '50%' }}>
                  <MapPin size={10} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700 }}>Switzerland</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
