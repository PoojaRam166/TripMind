import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CustomSelect({ options, value, onChange, placeholder, name, customStyles = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', userSelect: 'none' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%', padding: customStyles.padding || '14px 16px', borderRadius: customStyles.borderRadius || '12px', 
          border: isOpen ? '1px solid var(--color-gold)' : '1px solid var(--color-border)', 
          fontSize: customStyles.fontSize || '16px', 
          backgroundColor: 'var(--color-surface)', display: 'flex', 
          justifyContent: 'space-between', alignItems: 'center',
          cursor: 'pointer',
          color: selectedOption ? 'var(--color-ink)' : '#9ca3af',
          transition: 'border 0.2s, box-shadow 0.2s',
          boxShadow: isOpen ? '0 0 0 3px rgba(212, 175, 55, 0.15)' : 'none'
        }}
      >
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginRight: '8px' }}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={18} color="var(--color-text-secondary)" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, 
          marginTop: '8px', backgroundColor: 'var(--color-surface)', 
          borderRadius: customStyles.borderRadius || '12px', border: '1px solid var(--color-border)', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)', zIndex: 50,
          overflow: 'hidden', padding: '8px 0'
        }}>
          {options.map((opt) => (
            <div 
              key={opt.value}
              onClick={() => {
                onChange({ target: { name, value: opt.value } });
                setIsOpen(false);
              }}
              style={{
                padding: '10px 16px',
                cursor: 'pointer',
                color: value === opt.value ? 'var(--color-gold)' : 'var(--color-ink)',
                backgroundColor: value === opt.value ? 'var(--color-surface-2)' : 'transparent',
                fontWeight: value === opt.value ? '600' : 'normal',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => { 
                if (value !== opt.value) {
                  e.target.style.backgroundColor = 'var(--color-surface-2)';
                  e.target.style.color = 'var(--color-ink)';
                }
              }}
              onMouseLeave={(e) => { 
                if (value !== opt.value) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--color-ink)';
                }
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
