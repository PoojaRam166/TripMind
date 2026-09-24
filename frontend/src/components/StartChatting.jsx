import React from 'react';
import { Send, Smile, Plus, Mic } from 'lucide-react';
import chatMockup from '../assets/chat-mockup.png';

export default function StartChatting() {
  return (
    <section className="section" id="chat" style={{ background: 'var(--color-surface-2)' }}>
      <div className="section-inner split-section" style={{ gridTemplateColumns: '40% 60%', gap: '40px' }}>
        
        {/* Left: Text Content */}
        <div className="text-content pl-lg">
          <h2 className="section-title text-left" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', lineHeight: 1.15, letterSpacing: '-1.5px', color: 'var(--color-text-primary)' }}>
            Start chatting<br/>with us.
          </h2>
          <p className="section-subtitle text-left mt-4" style={{ color: 'var(--color-text-secondary)' }}>
            Ask for suggestions for any destination or an entire itinerary. Tell us how you like to travel, what you look for in a new place, and any preferences or pet peeves you have. The more you share, the more personalized your recommendations and plans become.
          </p>
        </div>

        {/* Right: Mockup Visual */}
        <div className="chat-mockup-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Static Image with the bottom fake chat completely cropped out, and blended into the background */}
          <div style={{ width: '100%', maxWidth: '650px', mixBlendMode: 'multiply', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.05))', position: 'relative', zIndex: 1 }}>
            <img 
              src={chatMockup} 
              alt="Start Chatting Mockup" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>

          {/* Real Interactive Chat Input */}
          <div className="chat-input-bar shadow-lg" style={{ position: 'relative', width: '100%', maxWidth: '680px', zIndex: 10, background: 'var(--color-surface)', border: '3px solid var(--color-ink)', borderRadius: '32px', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
             <div className="chat-input-content" style={{ flex: 1 }}>
                <span className="placeholder" style={{ color: 'var(--color-text-muted)', fontSize: '18px' }}>|Ask us anything...</span>
             </div>
             <div className="chat-input-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="action-icons" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                   <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Plus size={16} color="var(--color-text-muted)" />
                   </div>
                   <Smile size={20} color="var(--color-text-muted)" />
                   <span style={{ color: 'var(--color-text-muted)', fontSize: '20px', fontWeight: '500' }}>@</span>
                </div>
                <div className="send-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                   <Mic size={20} color="var(--color-text-muted)" />
                   <div className="send-btn shadow-sm" style={{ background: 'var(--color-ink)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Send size={16} color="white" style={{ marginLeft: '-2px' }} />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
