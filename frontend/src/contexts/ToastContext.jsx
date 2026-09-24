import React, { createContext, useContext, useState, useCallback } from 'react';
import { X, Info, CheckCircle, AlertCircle } from 'lucide-react';

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Container */}
      <div style={{
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 9999,
        pointerEvents: 'none'
      }}>
        <style>{`
          @keyframes toast-slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        {toasts.map(toast => (
          <div key={toast.id} style={{
            background: 'white',
            border: '1px solid #cbd5e1',
            borderRadius: '16px',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            pointerEvents: 'auto',
            animation: 'toast-slide-up 0.3s ease forwards',
            minWidth: '300px'
          }}>
            {toast.type === 'info' && <Info size={20} color="var(--color-gold)" />}
            {toast.type === 'success' && <CheckCircle size={20} color="var(--color-ink)" />}
            {toast.type === 'error' && <AlertCircle size={20} color="#EF4444" />}
            
            <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)', flex: 1 }}>
              {toast.message}
            </span>
            
            <button 
              onClick={() => removeToast(toast.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
