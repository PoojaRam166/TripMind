import React from 'react';
import { organizeCategories } from '../data/landingData';

export default function OrganizeCategories() {
  return (
    <section className="py-12 sm:py-20 bg-white" id="categories">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">Organize it all in one place.</h2>
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
