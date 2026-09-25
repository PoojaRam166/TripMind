import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, MapPin, Calendar, Compass } from 'lucide-react';

export default function GlobalAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! I am your TripMind AI Assistant. How can I help you plan your next adventure today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `I can certainly help you with "${userMsg}". I'm currently in demo mode, but I'm ready to find flights, hotels, and build itineraries when connected!` 
      }]);
    }, 1000);
  };

  const suggestions = [
    "Find a beach resort in Goa",
    "What to pack for Paris?",
    "Plan a 3-day weekend trip"
  ];

  return (
    <div className="assistant-widget-container" style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 9999 }}>
      {/* ── Chat Window ── */}
      {isOpen && (
        <div className="assistant-chat-panel" style={{
          position: 'absolute',
          bottom: '80px',
          right: '0',
          width: '380px',
          height: '600px',
          maxHeight: 'calc(100vh - 120px)',
          background: 'var(--color-surface)',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
          transformOrigin: 'bottom right',
          animation: 'scaleIn 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-ink) 0%, #1a1400 60%, #2a1f00 100%)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '4px solid var(--color-gold)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={20} color="var(--color-ink)" fill="var(--color-ink)" />
              </div>
              <div>
                <h3 style={{ margin: 0, color: 'white', fontSize: '16px', fontWeight: 'bold' }}>TripMind Assistant</h3>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></div> Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px', background: '#F8F9FA', display: 'flex', flexDirection: 'column', gap: '16px' }} className="hide-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  borderBottomRightRadius: msg.role === 'user' ? '4px' : '16px',
                  borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
                  background: msg.role === 'user' ? 'var(--color-ink)' : 'white',
                  color: msg.role === 'user' ? 'white' : 'var(--color-ink)',
                  border: msg.role === 'assistant' ? '1px solid var(--color-border)' : 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div style={{ padding: '0 24px 16px', background: '#F8F9FA', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setInput(s)}
                  style={{
                    background: 'var(--color-surface)', border: '1px solid var(--color-gold)', color: 'var(--color-text-primary)',
                    padding: '6px 12px', borderRadius: '99px', fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = 'var(--color-gold)'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'white'; }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div style={{ padding: '16px 20px', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
            <form onSubmit={handleSend} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--color-surface-2)', padding: '8px 16px', borderRadius: '99px', border: '1px solid var(--color-border-light)' }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me anything..."
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '14px', color: 'var(--color-text-primary)' }}
              />
              <button 
                type="submit" 
                disabled={!input.trim()}
                style={{
                  background: input.trim() ? 'var(--color-gold)' : 'transparent',
                  color: input.trim() ? 'var(--color-ink)' : 'var(--color-text-muted)',
                  border: 'none', width: '32px', height: '32px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: input.trim() ? 'pointer' : 'default',
                  transition: 'all 0.2s'
                }}
              >
                <Send size={16} style={{ marginLeft: input.trim() ? '2px' : '0' }} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── Floating Button ── */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'var(--color-gold)',
          border: '3px solid var(--color-ink)',
          color: 'var(--color-text-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4)',
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isOpen ? 'rotate(90deg) scale(0.9)' : 'rotate(0deg) scale(1)',
          animation: isOpen ? 'none' : 'pulse-gold 2s infinite'
        }}
        className="hover:shadow-2xl"
        onMouseOver={e => e.currentTarget.style.transform = isOpen ? 'rotate(90deg) scale(0.95)' : 'rotate(0deg) scale(1.05)'}
        onMouseOut={e => e.currentTarget.style.transform = isOpen ? 'rotate(90deg) scale(0.9)' : 'rotate(0deg) scale(1)'}
      >
        {isOpen ? <X size={28} color="var(--color-ink)" /> : <MessageSquare size={28} fill="currentColor" />}
      </button>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-gold {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0); }
          100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
        @media (max-width: 768px) {
          .assistant-widget-container {
            bottom: 76px !important;
            right: 16px !important;
          }
          .assistant-chat-panel {
            position: fixed !important;
            top: 16px !important;
            bottom: 76px !important;
            left: 12px !important;
            right: 12px !important;
            width: auto !important;
            max-width: calc(100vw - 24px) !important;
            height: auto !important;
            max-height: none !important;
            border-radius: 20px !important;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
            z-index: 10000 !important;
          }
        }
      `}} />
    </div>
  );
}
