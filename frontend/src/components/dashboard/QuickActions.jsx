import React from 'react';
import { Plus, Compass, UploadCloud, Wallet, ArrowRight } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { label: 'Create a Trip', icon: <Plus size={22} />, primary: true, desc: 'Start a new adventure' },
    { label: 'Explore Destinations', icon: <Compass size={22} />, primary: false, desc: 'Find inspiration' },
    { label: 'Upload a Booking', icon: <UploadCloud size={22} />, primary: false, desc: 'Sync your itinerary' },
    { label: 'Check Budget', icon: <Wallet size={22} />, primary: false, desc: 'Track your expenses' },
  ];

  return (
    <div style={{ marginBottom: '48px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text-primary)', margin: '0 0 20px 0' }}>
        Plan faster
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map(action => (
          <button key={action.label} className="hover-lift group" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '16px',
            padding: '20px 24px',
            background: action.primary ? 'linear-gradient(145deg, #fffbeb, #fde68a)' : 'white',
            border: action.primary ? '1px solid #fcd34d' : '1px solid #cbd5e1',
            borderRadius: '20px',
            cursor: 'pointer',
            textAlign: 'left',
            boxShadow: action.primary ? '0 8px 24px rgba(212, 175, 55, 0.2)' : '0 4px 16px rgba(0,0,0,0.03)',
            transition: 'all 0.3s ease',
          }}>
            <div style={{ 
              width: '44px', height: '44px', 
              borderRadius: '12px', 
              background: action.primary ? 'white' : '#f1f5f9',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: action.primary ? '#b58500' : '#475569',
              boxShadow: action.primary ? '0 4px 12px rgba(212, 175, 55, 0.15)' : 'none',
              border: action.primary ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid transparent',
              flexShrink: 0
            }}>
              {action.icon}
            </div>
            
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>{action.label}</h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#475569', fontWeight: 500 }}>{action.desc}</p>
            </div>
            
            <ArrowRight size={20} color={action.primary ? '#b58500' : '#64748b'} style={{ transition: 'transform 0.3s ease' }} className="group-hover:translate-x-1 flex-shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
}
