import React, { useState } from 'react';
import { Sparkles, Bot, MapPin } from 'lucide-react';

export default function AIExploreSection() {
  const [prompt, setPrompt] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null);

  const handleDiscover = () => {
    if (!prompt.trim()) return;
    setIsSearching(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      setResult({
        message: "Based on your preferences, here are some places you might like.",
        destinations: [
          { name: 'Gokarna, India', image: 'https://picsum.photos/seed/gokarna/400/300', reason: 'Peaceful beaches within ₹20,000 budget' },
          { name: 'Varkala, India', image: 'https://picsum.photos/seed/varkala/400/300', reason: 'Clifftop views and great seafood' }
        ]
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div style={{ 
      margin: '0 40px 40px', 
      background: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(24px)',
      borderRadius: '32px', 
      position: 'relative', 
      overflow: 'hidden',
      boxShadow: '0 24px 48px rgba(0,0,0,0.04)',
      border: '1px solid rgba(255,255,255,0.8)'
    }}>
      
      {/* Decorative premium gradients */}
      <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '60%', height: '160%', background: 'radial-gradient(ellipse at center, rgba(184,147,90,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', padding: '56px', position: 'relative', zIndex: 1, alignItems: 'center' }}>
        
        {/* Left Column: Input */}
        <div>
          <style>
            {`
              .explore-ai-textarea::placeholder {
                color: rgba(0, 0, 0, 0.4);
              }
              .explore-ai-textarea:focus {
                background: rgba(255, 255, 255, 0.8) !important;
                box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
              }
              .explore-ai-textarea::-webkit-scrollbar {
                width: 6px;
              }
              .explore-ai-textarea::-webkit-scrollbar-track {
                background: transparent;
                margin: 8px 0;
              }
              .explore-ai-textarea::-webkit-scrollbar-thumb {
                background: rgba(0, 0, 0, 0.1);
                border-radius: 10px;
              }
            `}
          </style>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: 'var(--color-gold-dark)' }}>
            <Sparkles size={20} fill="var(--color-gold-dark)" />
            <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>TripMind AI Planner</span>
          </div>
          
          <h2 style={{ fontSize: '42px', fontWeight: '900', margin: '0 0 16px 0', lineHeight: 1.15, color: 'var(--color-text-primary)', letterSpacing: '-1px' }}>
            Not sure where to go? <br/><span style={{ color: 'var(--color-gold-dark)' }}>Let AI decide.</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: '0 0 40px 0', maxWidth: '440px', lineHeight: 1.6, fontWeight: 500 }}>
            Describe your dream vibe, budget, and travel style. Our AI will instantly match you with the perfect destinations.
          </p>

          <div style={{ 
            background: 'rgba(255, 255, 255, 0.9)', 
            border: '1.5px solid rgba(184, 147, 90, 0.2)', 
            borderRadius: '20px', 
            padding: '16px', 
            display: 'flex', 
            flexDirection: 'column',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)'
          }}>
            <textarea 
              className="explore-ai-textarea"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. I want a peaceful 4-day trip with beaches, good food and a ₹20,000 budget."
              style={{ 
                background: 'transparent', border: 'none', outline: 'none', color: 'var(--color-text-primary)', 
                fontSize: '16px', resize: 'none', height: '80px', fontFamily: 'inherit',
                lineHeight: 1.5, padding: '8px', transition: 'all 0.2s', borderRadius: '12px'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', padding: '0 8px' }}>
              <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>Powered by AI</span>
              <button 
                onClick={handleDiscover}
                disabled={isSearching || !prompt.trim()}
                style={{ 
                  padding: '12px 28px', borderRadius: '9999px', fontSize: '15px',
                  background: 'var(--color-ink)', color: 'white', border: 'none',
                  fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
                className="hover:-translate-y-0.5 hover:shadow-lg hover:bg-[var(--color-gold-dark)]"
              >
                {isSearching ? 'Thinking...' : 'Discover with AI'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Photo Masonry */}
        <div style={{ position: 'relative', height: '100%', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', padding: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px' }}>
              <img src="https://picsum.photos/seed/explore1/400/500" alt="Destination" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }} className="hover:-translate-y-1 transition-transform duration-300" />
              <img src="https://picsum.photos/seed/explore2/400/300" alt="Destination" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }} className="hover:-translate-y-1 transition-transform duration-300" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              <img src="https://picsum.photos/seed/explore3/400/300" alt="Destination" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }} className="hover:-translate-y-1 transition-transform duration-300" />
              <img src="https://picsum.photos/seed/explore4/400/500" alt="Destination" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }} className="hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>

        </div>

      </div>

      {/* AI Results Overlay - Light Theme */}
      {result && (
        <div className="animate-fade-in-up" style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(16px)', zIndex: 10, padding: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--color-gold-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold-dark)', boxShadow: 'var(--shadow-md)' }}>
                  <Bot size={24} />
                </div>
                <h3 style={{ margin: 0, fontWeight: 800, fontSize: '22px', color: 'var(--color-text-primary)' }}>{result.message}</h3>
              </div>
              <button onClick={() => setResult(null)} className="btn btn-outline-gold btn-sm" style={{ background: 'var(--color-surface)' }}>Close</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px' }}>
              {result.destinations.map(dest => (
                <div key={dest.name} style={{ display: 'flex', gap: '16px', padding: '16px', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }} className="hover-lift cursor-pointer">
                  <img src={dest.image} alt={dest.name} style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
                  <div>
                    <h5 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: '800', color: 'var(--color-text-primary)' }}>{dest.name}</h5>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{dest.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
