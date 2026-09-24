import React from 'react';
import { Search, Mic, X } from 'lucide-react';

export default function ExploreHero({ searchQuery, setSearchQuery }) {
  return (
    <div className="explore-hero-container" style={{
      padding: '80px 40px 60px',
      textAlign: 'center',
      position: 'relative',
      background: 'linear-gradient(135deg, var(--color-surface-2) 0%, rgba(184,147,90,0.1) 100%)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      {/* Decorative Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '30%', height: '100%', background: 'radial-gradient(ellipse, rgba(184,147,90,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-5%', width: '40%', height: '100%', background: 'radial-gradient(ellipse, rgba(184,147,90,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h1 className="explore-hero-title" style={{ fontSize: '56px', fontWeight: '900', letterSpacing: '-1.5px', color: 'var(--color-text-primary)', margin: '0 0 16px 0', lineHeight: 1.1 }}>
          Explore the world <br />
          <span style={{ color: 'var(--color-gold-dark)' }}>your way.</span>
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '40px', fontWeight: 500 }}>
          Discover places, experiences, and destinations that match your travel style.
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'var(--color-surface)',
          border: '1.5px solid var(--color-border)',
          borderRadius: '9999px',
          padding: '8px 16px 8px 24px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
          transition: 'all 0.3s ease',
          maxWidth: '680px',
          margin: '0 auto'
        }} className="hover:border-[var(--color-gold)] focus-within:border-[var(--color-gold)] focus-within:shadow-[0_8px_24px_rgba(184,147,90,0.15)]">
          <Search size={24} color="var(--color-gold-dark)" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search destinations, places, activities..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              padding: '12px 16px',
              fontSize: 'clamp(14px, 3vw, 18px)',
              color: 'var(--color-text-primary)',
              background: 'transparent',
              minWidth: 0,
            }}
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              style={{ background: 'var(--color-surface-2)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', color: 'var(--color-text-secondary)' }}
            >
              <X size={18} />
            </button>
          ) : (
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)' }}>
              <Mic size={22} />
            </button>
          )}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
          {['Best places in Japan', 'Hidden beaches in Goa', 'Food experiences in Hyderabad', 'Weekend trips from Vizag'].map(suggestion => (
            <button
              key={suggestion}
              onClick={() => setSearchQuery(suggestion)}
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border-light)',
                borderRadius: '9999px',
                padding: '6px 16px',
                fontSize: '13px',
                color: 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              className="hover:border-[var(--color-gold)] hover:text-[var(--color-gold-dark)]"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
