import React from 'react';
import { Heart, CheckCircle2, Map, MessageSquare } from 'lucide-react';

export default function PersonalizedRecommendations() {
  return (
    <section className="py-12 sm:py-20 bg-white overflow-hidden" id="personalized">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-16 md:gap-20">
        
        {/* Left: Mockup Visual */}
        <div className="flex-[0.5] w-full transform scale-90 sm:scale-100 origin-left relative flex justify-center order-2 md:order-1">
          <div className="mockup-container relative">

            {/* Main Background Panel (simulating chat/app interface) */}
            <div className="mockup-panel back-panel shadow-lg">
               <div className="mockup-sidebar">
                  <div className="sidebar-icon active"><span className="sparkle-icon">✦</span></div>
                  <div className="sidebar-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Map size={14} color="#a1a1aa" />
                  </div>
                  <div className="sidebar-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageSquare size={14} color="#a1a1aa" />
                  </div>
                  <div className="sidebar-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Heart size={14} color="#a1a1aa" />
                  </div>
                  <div className="sidebar-icon" style={{ overflow: 'hidden', padding: 0, border: 'none', marginTop: 'auto', marginBottom: '24px' }}>
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                  </div>
               </div>
               <div className="mockup-content" style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
                  <div style={{ alignSelf: 'flex-end', background: 'var(--color-surface-2)', padding: '12px 16px', borderRadius: '16px 16px 0 16px', fontSize: '13px', color: 'var(--color-text-primary)', maxWidth: '85%', lineHeight: '1.4', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                    I'm looking for a luxury getaway. Any recommendations? ✨
                  </div>
                  <div style={{ alignSelf: 'flex-start', background: 'linear-gradient(135deg, #dfc19b 0%, #cda776 100%)', padding: '14px 18px', borderRadius: '16px 16px 16px 0', fontSize: '13px', color: '#1a1a1a', maxWidth: '85%', lineHeight: '1.4', boxShadow: '0 4px 12px rgba(205, 167, 118, 0.25)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(0,0,0,0.5)' }}>
                      <span style={{color: 'rgba(0,0,0,0.6)'}}>✦</span> TRIPMIND AI
                    </div>
                    I found a highly-rated luxury resort available for your dates. Take a look at <strong>Costa Luz</strong>.
                  </div>
               </div>
            </div>

            {/* Floating Booking Card */}
            <div className="mockup-panel float-card-1 shadow-xl">
              <div className="float-card-header">
                <h4>Costa Luz</h4>
                <p>★ 4.9 • Luxury Hotel</p>
              </div>
              <div className="float-card-grid">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop" alt="Luxury Resort Pool" className="main-img" />
                <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=400&auto=format&fit=crop" alt="Luxury Room" />
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=400&auto=format&fit=crop" alt="Fine Dining" />
                <div className="more-photos">Show all photos</div>
              </div>
            </div>

            {/* Floating Action Card */}
            <div className="mockup-panel float-card-2 shadow-xl">
              <div className="date-picker">
                <div><span>Check-In</span><strong>Jul 21</strong></div>
                <div><span>Check-Out</span><strong>Jul 23</strong></div>
              </div>
              <div className="travelers">4 Travelers, 2 Rooms</div>
              <button className="btn btn-primary w-full mt-3">Book a room</button>
              <button className="btn btn-secondary w-full mt-2">+ Add to trip</button>
            </div>

            {/* Floating small image top right */}
            <div className="mockup-floating-img shadow-md hidden sm:block">
              <img src="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=300&auto=format&fit=crop" alt="Scenic Destination" />
              <div className="badge-overlay">
                <Heart size={14} color="#ef4444" fill="#ef4444" />
                <CheckCircle2 size={14} color="var(--color-gold-dark)" fill="white" />
              </div>
            </div>

          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-[0.5] text-center md:text-left order-1 md:order-2 mt-8 md:mt-0">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">Get personalized<br className="hidden md:block" />recommendations.</h2>
          <p className="m-0 text-base sm:text-lg text-gray-500 font-medium leading-relaxed">
            We'll provide personalized, actionable travel experiences based on your preferences. Check out photos, reviews, maps and more. Favorite the items you like and add them to your trip plan.
          </p>
        </div>

      </div>
    </section>
  );
}
