import React from 'react';
import { organizeCategories } from '../data/landingData';

export default function OrganizeCategories() {
  return (
    <section className="section organize-section bg-white" id="categories">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 54px)', letterSpacing: '-2px' }}>Organize it all in one place.</h2>
        </div>

        <div className="organize-grid">
          {organizeCategories.map((cat) => (
            <div key={cat.id} className="organize-card shadow-sm">
              <div className="organize-card-header">
                 <div className="organize-icon">
                   {cat.icon}
                 </div>
                 {cat.badge && <span className="organize-badge">{cat.badge}</span>}
              </div>
              <h3 className="organize-title">{cat.title}</h3>
              <p className="organize-desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
