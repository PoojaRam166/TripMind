import React from 'react';
import { Bookmark, MapPin, Star, Clock, CreditCard } from 'lucide-react';

export default function DestinationCard({ dest, onSave }) {
  return (
    <div className="hover-lift group" style={{ 
      background: 'var(--color-surface)', 
      borderRadius: '16px', 
      overflow: 'hidden',
      border: '1px solid var(--color-border)',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="image-zoom-container" style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
        <img src={dest.image} alt={dest.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="group-hover:scale-110" />
        
        {dest.isTrending && (
          <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--color-surface)', padding: '4px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2 }}>
            🔥 Trending
          </div>
        )}

        <button 
          onClick={(e) => { e.stopPropagation(); onSave(dest.id); }}
          style={{ 
            position: 'absolute', 
            top: '12px', 
            right: '12px', 
            background: 'rgba(255,255,255,0.9)', 
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: dest.saved ? 'var(--color-gold)' : 'var(--color-ink)',
            transition: 'transform 0.2s ease',
            zIndex: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
          className="hover:scale-110"
        >
          <Bookmark size={18} fill={dest.saved ? 'var(--color-gold)' : 'none'} />
        </button>
      </div>
      
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)', lineHeight: 1.2 }}>{dest.title}</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--color-surface-2)', padding: '2px 6px', borderRadius: '6px', fontSize: '12px', fontWeight: 600 }}>
            <Star size={12} fill="var(--color-gold)" color="var(--color-gold)" />
            {dest.rating}
          </div>
        </div>
        
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <MapPin size={14} /> {dest.location}
        </p>

        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flex: 1 }}>
          {dest.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontSize: '12px', padding: '4px 8px', background: 'var(--color-surface-2)', borderRadius: '6px', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={12} /> {dest.duration}
          </span>
          <span style={{ fontSize: '12px', padding: '4px 8px', background: 'var(--color-surface-2)', borderRadius: '6px', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CreditCard size={12} /> {dest.budgetCategory}
          </span>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border-light)', paddingTop: '16px' }}>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'block' }}>Estimated</span>
            <span style={{ fontWeight: 'bold', color: 'var(--color-gold-dark)', fontSize: '15px' }}>{dest.priceRange}</span>
          </div>
          <button className="btn btn-primary" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '13px' }} onClick={(e) => e.stopPropagation()}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
