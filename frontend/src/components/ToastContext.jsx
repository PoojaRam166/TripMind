import React, { createContext, useContext, useState, useCallback } from 'react';
import { Check, Info, AlertTriangle } from 'lucide-react';

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className="toast">
            {toast.type === 'success' && <Check size={16} color="var(--color-gold)" />}
            {toast.type === 'info' && <Info size={16} color="var(--color-surface-2)" />}
            {toast.type === 'error' && <AlertTriangle size={16} color="#ef4444" />}
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
