import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function EmptyState({ 
  icon: Icon, 
  title, 
  description, 
  actionLabel, 
  actionLink 
}) {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '80px 20px', textAlign: 'center', background: 'var(--color-surface-2)',
      borderRadius: '24px', margin: '32px 0', border: '1px dashed var(--color-border)',
      minHeight: '400px'
    }} className="page-transition">
      
      <div style={{
        width: '80px', height: '80px', borderRadius: '50%',
        background: 'var(--color-surface)', border: '1px solid var(--color-border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '24px', boxShadow: 'var(--shadow-sm)', color: 'var(--color-gold-dark)'
      }}>
        {Icon && <Icon size={32} />}
      </div>
      
      <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>
        {title}
      </h3>
      
      <p style={{ margin: '0 0 32px 0', fontSize: '15px', color: 'var(--color-text-secondary)', maxWidth: '400px', lineHeight: 1.6 }}>
        {description}
      </p>

      {actionLabel && (
        <button 
          onClick={() => navigate(actionLink)}
          className="btn btn-champ btn-md hover-lift"
        >
          <Plus size={18} /> {actionLabel}
        </button>
      )}
    </div>
  );
}
