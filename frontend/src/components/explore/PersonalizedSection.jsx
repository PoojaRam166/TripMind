import React, { useState, useEffect } from 'react';
import { exploreService } from '../../services/exploreService';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function PersonalizedSection() {
  const [picks, setPicks] = useState([]);

  useEffect(() => {
    exploreService.getRecommendations().then(data => setPicks(data));
  }, []);

  if (picks.length === 0) return null;

  return (
    <div className="px-4 md:px-10 pb-12 md:pb-[60px]">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 m-0 mb-6 flex items-center gap-2">
        <Sparkles size={24} className="text-[var(--color-gold)] fill-[var(--color-gold)] shrink-0" /> Picked for you
      </h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, ), ))', gap: '24px' }}>
        {picks.map(dest => (
          <div key={dest.id} className="hover-lift group cursor-pointer" style={{ 
            background: 'var(--color-surface)', 
            borderRadius: '20px', 
            padding: '20px', 
            border: '1px solid var(--color-border)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <img src={dest.image} alt={dest.title} style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '800', color: 'var(--color-text-primary)' }}>{dest.title}</h4>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{dest.location}</p>
              </div>
            </div>
            
            <div style={{ 
              background: 'rgba(184, 147, 90, 0.08)', 
              padding: '14px 18px', 
              borderRadius: '12px', 
              fontSize: '13px', 
              color: 'var(--color-text-primary)', 
              fontWeight: 600, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              border: '1px solid rgba(184, 147, 90, 0.15)'
            }}>
              <span>{dest.reason || 'Recommended based on your preferences'}</span>
              <ArrowRight size={18} color="var(--color-gold-dark)" className="group-hover:translate-x-1" style={{ transition: 'transform 0.2s' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
