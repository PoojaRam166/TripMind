import React from 'react';
import { Plus, Smile, AtSign, Send, Mic } from 'lucide-react';

const chips = [
  { emoji: '🧖', label: 'Spa / Wellness', style: { top: '5%', left: '32%' } },
  { emoji: '🎭', label: 'Theater',         style: { top: '2%', right: '5%' } },
  { emoji: '🏖', label: 'Beach',           style: { top: '28%', right: '18%' } },
  { emoji: '🦜', label: 'Wildlife',        style: { top: '20%', right: '-2%' } },
  { emoji: '🏔', label: 'Resorts',         style: { top: '48%', left: '2%' } },
  { emoji: '🍽', label: 'Fine Dining',     style: { top: '48%', right: '2%' } },
  { emoji: '🏛', label: 'Historical Tours', style: { top: '70%', left: '16%' } },
  { emoji: '🤿', label: 'Water Sports',    style: { top: '72%', right: '8%' } },
  { emoji: '🚴', label: 'Cycling',         style: { bottom: '4%', left: '38%' } },
];

const activityImages = [
  {
    src: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=300&auto=format&fit=crop&q=80',
    alt: 'Tropical resort',
    style: { top: '15%', left: '10%', width: 90, height: 90 },
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&auto=format&fit=crop&q=80',
    alt: 'Beach aerial',
    style: { top: '20%', right: '28%', width: 80, height: 80 },
  },
  {
    src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&auto=format&fit=crop&q=80',
    alt: 'Taj Mahal',
    style: { bottom: '18%', left: '5%', width: 80, height: 80 },
  },
  {
    src: 'https://images.unsplash.com/photo-1546198632-9ef6368bef12?w=300&auto=format&fit=crop&q=80',
    alt: 'Scuba diver',
    style: { bottom: '14%', right: '10%', width: 85, height: 85 },
  },
];

export default function AssistantSection() {
  return (
    <section className="assistant-section" id="how-it-works">
      <div className="assistant-inner">
        {/* Left: Text + Chat box */}
        <div>
          <div className="assistant-label">✦ YOUR AI TRAVEL COMPANION</div>
          <h2 className="assistant-title">
            Start chatting<br />with us.
          </h2>
          <p className="assistant-desc">
            Ask for suggestions for{' '}
            <span className="coral">any destination</span> or an{' '}
            <span className="coral">entire itinerary</span>. Tell us how you like
            to travel, what you look for in a new place, and any preferences or pet
            peeves you have. The more you share, the{' '}
            <span className="midnight">more personalized</span> your recommendations
            and plans become.
          </p>

          {/* Chat input box */}
          <div className="chat-input-box">
            <input type="text" placeholder="Ask us anything…" />
            <div className="chat-input-actions">
              <div className="chat-input-icons">
                <Plus size={18} strokeWidth={2} style={{ cursor: 'pointer' }} />
                <Smile size={18} strokeWidth={2} style={{ cursor: 'pointer' }} />
                <AtSign size={18} strokeWidth={2} style={{ cursor: 'pointer' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Mic size={18} color="var(--color-text-muted)" strokeWidth={2} style={{ cursor: 'pointer' }} />
                <button className="chat-send-btn">
                  <Send size={16} color="white" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Visual / floating chips */}
        <div className="assistant-visual">
          {/* Background activity images */}
          {activityImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="activity-img"
              style={img.style}
              loading="lazy"
            />
          ))}

          {/* Center avatar */}
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&auto=format&fit=crop&q=80"
            alt="Traveler"
            className="center-avatar"
          />

          {/* Activity chips */}
          {chips.map((chip, i) => (
            <div key={i} className="activity-chip" style={{ ...chip.style, position: 'absolute' }}>
              <span>{chip.emoji}</span>
              {chip.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
