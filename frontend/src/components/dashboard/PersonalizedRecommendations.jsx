import React, { useState, useEffect } from 'react';
import { Bookmark, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { recommendationService } from '../../services/recommendationService';

export default function PersonalizedRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    recommendationService.getRecommendations().then(data => {
      setRecommendations(data);
      setLoading(false);
    });
  }, []);

  const toggleSave = (e, dest) => {
    e.stopPropagation();
    const isSaved = !dest.saved;
    setRecommendations(recommendations.map(rec => 
      rec.id === dest.id ? { ...rec, saved: isSaved } : rec
    ));
  };

  if (loading) {
    return <div style={{ height: '280px', background: 'var(--color-surface-2)', borderRadius: '24px', animation: 'pulse-opacity 1.5s infinite', marginBottom: '40px' }} />;
  }

  if (recommendations.length === 0) return null;

  return (
    <div style={{ marginBottom: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: 'var(--color-surface-2)', padding: '8px', borderRadius: '50%' }}>
            <Sparkles size={20} color="var(--color-gold)" />
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: 0 }}>Recommended for you</h3>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '16px' }} className="hide-scrollbar">
        {recommendations.map(rec => (
          <div key={rec.id} className="group hover:scale-[1.02] transition-all duration-300" style={{ 
            position: 'relative',
            flexShrink: 0,
            width: '400px',
            height: '260px',
            borderRadius: '24px', 
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            isolation: 'isolate',
            WebkitMaskImage: '-webkit-radial-gradient(white, black)'
          }}>
            {/* Background Image */}
            <img src={rec.image} alt={rec.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="group-hover:scale-105" />
            
            {/* Dark Gradient Overlay for premium text readability */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)' }} />

            {/* Save Button */}
            <button 
              onClick={(e) => toggleSave(e, rec)}
              style={{ 
                position: 'absolute', 
                top: '16px', 
                right: '16px', 
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: rec.saved ? 'var(--color-gold)' : 'white',
                transition: 'all 0.2s ease',
                zIndex: 2
              }}
              className="hover-lift"
            >
              <Bookmark size={18} fill={rec.saved ? 'var(--color-gold)' : 'none'} />
            </button>
            
            {/* Content (Bottom Left) */}
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '24px', zIndex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', padding: '6px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, color: 'white', marginBottom: '12px', alignSelf: 'flex-start', border: '1px solid rgba(255,255,255,0.3)' }}>
                {rec.reason}
              </span>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '22px', fontWeight: 'bold', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{rec.title}</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} /> {rec.location}
                  </p>
                </div>
                
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-primary)', transition: 'all 0.3s ease' }} className="group-hover:bg-gold group-hover:text-white">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
