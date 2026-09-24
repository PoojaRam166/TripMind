import React from 'react';
import { X } from 'lucide-react';

export default function ActiveFilterChips({ filters, setFilters, onClearAll }) {
  const activeChips = [];
  
  Object.keys(filters).forEach(key => {
    if (filters[key] && filters[key].length > 0) {
      filters[key].forEach(val => {
        activeChips.push({ key, val });
      });
    }
  });

  if (activeChips.length === 0) return null;

  const handleRemove = (key, val) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].filter(v => v !== val)
    }));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', padding: '16px 40px', background: 'var(--color-surface)' }}>
      {activeChips.map(chip => (
        <div key={`${chip.key}-${chip.val}`} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--color-surface-2)',
          border: '1px solid var(--color-border)',
          borderRadius: '9999px',
          padding: '4px 12px',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--color-text-primary)'
        }}>
          {chip.val}
          <button 
            onClick={() => handleRemove(chip.key, chip.val)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0, color: 'var(--color-text-muted)' }}
            className="hover:text-ink"
          >
            <X size={14} />
          </button>
        </div>
      ))}
      
      <button 
        onClick={onClearAll}
        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: 'var(--color-gold-dark)', marginLeft: '8px', textDecoration: 'underline' }}
      >
        Clear all
      </button>
    </div>
  );
}
