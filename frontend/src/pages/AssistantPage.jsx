import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MapPin, Search } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';

export default function AssistantPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to your dedicated TripMind AI Assistant! I can help you plan entire itineraries, find the best hotels, or answer any travel-related questions you have.' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `I'm analyzing your request for "${userMsg}". As your AI Travel Assistant, I will automatically cross-reference the best options and prepare a tailored plan for you.` 
      }]);
    }, 1000);
  };

  const suggestions = [
    "Plan a 5-day trip to Kyoto",
    "What are the top restaurants in New York?",
    "Build a budget-friendly itinerary for Bali",
    "Where should I go for my honeymoon?"
  ];

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Sidebar activeRoute="Travel Assistant" />
      </aside>

      <main className="dashboard-main" style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        <TopNav title="Travel Assistant" />

        {/* ── Gold Hero Banner Header ── */}
        <div style={{ padding: '32px 48px 0', flexShrink: 0 }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--color-ink) 0%, #1a1400 60%, #2a1f00 100%)',
            padding: '32px 40px',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,147,90,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={32} color="var(--color-ink)" fill="var(--color-ink)" />
              </div>
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 900, color: 'white', margin: '0 0 4px', letterSpacing: '-0.5px' }}>
                  Your AI Travel Assistant
                </h1>
                <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  Powered by advanced travel intelligence to build your perfect trip.
                </p>
              </div>
            </div>
            
            {/* Trip Selector (Mock) */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <MapPin size={18} color="var(--color-gold)" />
              <span style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>General Chat</span>
            </div>
          </div>
        </div>

        {/* ── Chat Interface ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '1000px', width: '100%', margin: '0 auto', padding: '24px 48px 48px', overflow: 'hidden' }}>
          
          {/* Chat Messages */}
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '24px' }} className="hide-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  {msg.role === 'assistant' && (
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Sparkles size={14} color="var(--color-ink)" fill="var(--color-ink)" />
                    </div>
                  )}
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                    {msg.role === 'user' ? 'You' : 'TripMind AI'}
                  </span>
                </div>
                
                <div style={{
                  maxWidth: '80%',
                  padding: '16px 20px',
                  borderRadius: '20px',
                  borderTopRightRadius: msg.role === 'user' ? '4px' : '20px',
                  borderTopLeftRadius: msg.role === 'assistant' ? '4px' : '20px',
                  background: msg.role === 'user' ? 'var(--color-ink)' : 'white',
                  color: msg.role === 'user' ? 'white' : 'var(--color-ink)',
                  border: msg.role === 'assistant' ? '1px solid var(--color-border)' : 'none',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px', justifyContent: 'center' }}>
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setInput(s)}
                  style={{
                    background: 'var(--color-surface)', border: '1px solid var(--color-gold)', color: 'var(--color-text-primary)',
                    padding: '10px 20px', borderRadius: '99px', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px'
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = 'var(--color-gold)'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'white'; }}
                >
                  <Search size={16} /> {s}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div style={{ position: 'relative' }}>
            <form onSubmit={handleSend} style={{ display: 'flex', alignItems: 'center', background: 'var(--color-surface)', padding: '8px 8px 8px 24px', borderRadius: '999px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me anything to help plan your trip..."
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '16px', color: 'var(--color-text-primary)' }}
              />
              <button 
                type="submit" 
                disabled={!input.trim()}
                style={{
                  background: input.trim() ? 'var(--color-gold)' : 'var(--color-surface-2)',
                  color: input.trim() ? 'var(--color-ink)' : 'var(--color-text-muted)',
                  border: 'none', padding: '12px 24px', borderRadius: '999px',
                  display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '15px', cursor: input.trim() ? 'pointer' : 'default',
                  transition: 'all 0.2s'
                }}
              >
                Send <Send size={18} />
              </button>
            </form>
          </div>
          
        </div>
      </main>
    </div>
  );
}
