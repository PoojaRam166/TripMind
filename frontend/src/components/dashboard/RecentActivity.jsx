import React from 'react';
import { Activity, Heart, FileText, Bot } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    { id: 1, type: 'saved', title: 'You saved Paris to your wishlist', time: '2 hours ago', icon: <Heart size={16} /> },
    { id: 2, type: 'itinerary', title: 'You updated your Goa trip itinerary', time: 'Yesterday', icon: <FileText size={16} /> },
    { id: 3, type: 'ai', title: 'Your AI trip plan for Tokyo was generated', time: 'Yesterday', icon: <Bot size={16} /> },
  ];

  return (
    <div>
      <style>
        {`
          .timeline-card:hover .timeline-line {
            border-color: var(--color-gold) !important;
          }
          .timeline-card:hover .timeline-icon {
            border-color: var(--color-gold) !important;
            color: var(--color-gold-dark) !important;
            background: white !important;
          }
          .timeline-card:hover .timeline-title {
            color: var(--color-gold-dark) !important;
          }
          .timeline-card:hover .timeline-time {
            color: var(--color-ink) !important;
          }
        `}
      </style>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: '0 0 20px 0' }}>
        Recent activity
      </h3>
      <div style={{ 
        background: 'var(--color-surface)', 
        border: '1px solid var(--color-border)', 
        borderRadius: '20px', 
        padding: '32px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', position: 'relative' }}>
          {activities.map((activity, index) => (
            <div key={activity.id} style={{ 
              display: 'flex', alignItems: 'flex-start', gap: '20px', position: 'relative', 
              cursor: 'pointer'
            }} className="timeline-card">
              
              {/* Timeline Connector Line */}
              {index !== activities.length - 1 && (
                <div className="timeline-line" style={{ position: 'absolute', left: '19px', top: '44px', bottom: '-28px', borderLeft: '2px dashed var(--color-border-light)', zIndex: 1, transition: 'border-color 0.3s ease' }} />
              )}
              
              {/* Icon */}
              <div className="timeline-icon" style={{ 
                width: '40px', height: '40px', borderRadius: '50%', 
                background: index === 0 ? 'rgba(184, 147, 90, 0.15)' : 'white', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                color: index === 0 ? 'var(--color-gold-dark)' : 'var(--color-text-secondary)', zIndex: 2,
                transition: 'all 0.3s ease',
                border: index === 0 ? '1px solid rgba(184, 147, 90, 0.3)' : '1px solid var(--color-border)'
              }}>
                {activity.icon}
              </div>
              
              {/* Content */}
              <div style={{ flex: 1, paddingTop: '8px' }}>
                <h4 className="timeline-title" style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: 600, color: 'var(--color-text-primary)', transition: 'color 0.2s ease' }}>{activity.title}</h4>
                <p className="timeline-time" style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 500, transition: 'color 0.2s ease' }}>{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
