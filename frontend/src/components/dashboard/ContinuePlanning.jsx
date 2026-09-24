import React, { useState, useEffect } from 'react';
import { tripService } from '../../services/tripService';
import { Map, ArrowRight } from 'lucide-react';

export default function ContinuePlanning() {
  const [drafts, setDrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tripService.getDraftTrips().then(data => {
      setDrafts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return null;
  if (drafts.length === 0) return null;

  return (
    <div>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
        Continue planning
      </h3>
      <style>
        {`
          .continue-arrow {
            transition: all 0.3s ease;
          }
          .continue-card:hover .continue-arrow {
            background: var(--color-gold) !important;
            border-color: var(--color-gold) !important;
            boxShadow: 0 4px 12px rgba(184, 147, 90, 0.3) !important;
          }
          .continue-card:hover .continue-arrow-icon {
            color: white !important;
            transform: translateX(2px);
          }
        `}
      </style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {drafts.map((draft, idx) => (
          <div key={draft.id} className="hover-lift continue-card" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '24px', 
            background: 'var(--color-surface)', 
            border: '1px solid var(--color-border)',
            borderRadius: '20px', 
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ 
                width: '52px', height: '52px', borderRadius: '14px', 
                background: idx === 0 ? 'rgba(184, 147, 90, 0.15)' : 'var(--color-surface-2)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                color: idx === 0 ? 'var(--color-gold-dark)' : 'var(--color-text-secondary)',
                border: idx === 0 ? '1px solid rgba(184, 147, 90, 0.3)' : '1px solid var(--color-border-light)'
              }}>
                <Map size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '17px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>{draft.title}</h4>
                <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Next: {draft.nextStep}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <div style={{ width: '120px', height: '6px', background: 'var(--color-surface-2)', borderRadius: '3px', overflow: 'hidden' }}>
                     <div style={{ width: `${draft.progress}%`, height: '100%', background: 'linear-gradient(90deg, var(--color-gold-dark), var(--color-gold))', borderRadius: '3px' }} />
                   </div>
                   <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--color-gold-dark)' }}>{draft.progress}%</span>
                </div>
              </div>
            </div>
            
            <div className="continue-arrow" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)' }}>
              <ArrowRight className="continue-arrow-icon" size={18} color="var(--color-text-secondary)" style={{ transition: 'all 0.3s ease' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
