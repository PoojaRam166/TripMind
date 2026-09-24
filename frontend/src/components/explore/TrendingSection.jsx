import React, { useState, useEffect } from 'react';
import { exploreService } from '../../services/exploreService';
import { Flame } from 'lucide-react';

export default function TrendingSection() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    exploreService.getTrendingDestinations().then(data => setTrending(data));
  }, []);

  if (trending.length === 0) return null;

  return (
    <div style={{ padding: '0 40px 60px' }}>
      <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
        Trending now <Flame size={24} color="var(--color-gold)" fill="var(--color-gold)" />
      </h3>
      
      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '16px' }} className="hide-scrollbar">
        {trending.map(dest => (
          <div key={dest.id} className="group cursor-pointer hover-lift" style={{ minWidth: '180px' }}>
            <div style={{ width: '180px', height: '240px', borderRadius: '16px', overflow: 'hidden', position: 'relative', marginBottom: '12px' }}>
              <img src={dest.image} alt={dest.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="group-hover:scale-110" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                <h4 style={{ margin: 0, color: 'white', fontSize: '16px', fontWeight: 'bold' }}>{dest.location}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
