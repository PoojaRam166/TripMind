import React from 'react';
import { features } from '../data/landingData';

export default function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">Everything you need for a better trip</h2>
          <p className="section-subtitle">One platform for every step of your journey.</p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.id} className="feature-card">
              <div className="feature-icon" style={{ background: `${f.color}18` }}>
                <span style={{ fontSize: 22, color: f.color, lineHeight: 1 }}>{f.icon}</span>
              </div>
              <h3 className="feature-card-title">{f.title}</h3>
              <p className="feature-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
