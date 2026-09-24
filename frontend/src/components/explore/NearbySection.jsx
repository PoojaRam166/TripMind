import React, { useState, useEffect } from 'react';
import { exploreService } from '../../services/exploreService';
import { Navigation } from 'lucide-react';

export default function NearbySection() {
  const [nearby, setNearby] = useState([]);

  useEffect(() => {
    exploreService.getNearbyPlaces().then(data => setNearby(data));
  }, []);

  if (nearby.length === 0) return null;

  return (
    <div style={{ padding: '0 40px 60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          Explore Destinations near you <Navigation size={22} color="var(--color-gold)" fill="var(--color-gold)" />
        </h3>
        <button className="btn-view-all">
          View on map <span>&rarr;</span>
        </button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {nearby.map(dest => (
          <div key={dest.id} className="hover-lift cursor-pointer group" style={{ 
            display: 'flex', gap: '16px', background: 'var(--color-surface)', 
            border: '1px solid var(--color-border)', borderRadius: '16px', padding: '16px', alignItems: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
            transition: 'all 0.3s ease'
          }}>
            <img src={dest.image} alt={dest.title} style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '800', color: 'var(--color-text-primary)' }}>{dest.title}</h4>
              <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{dest.location}</p>
              <span style={{ 
                fontSize: '11px', padding: '4px 10px', 
                background: 'rgba(184, 147, 90, 0.08)', 
                border: '1px solid rgba(184, 147, 90, 0.15)',
                borderRadius: '6px', 
                color: 'var(--color-text-primary)', 
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Nearby
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
