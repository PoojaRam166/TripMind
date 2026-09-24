import React from 'react';
import { Mail, Receipt, Music, Anchor, BedDouble, Plane, Ticket, Car, Utensils, Map } from 'lucide-react';

export default function OrganizeReceipts() {
   return (
      <section className="section bg-white" id="receipts">
         <div className="section-inner split-section">

            {/* Left: Mockup Visual */}
            <div className="mockup-container center-mockup">

               {/* Main Mobile Panel */}
               <div className="mockup-mobile shadow-lg">
                  <div className="mobile-header">
                     <div className="time">4:20</div>
                     <div className="status-icons">
                        <div className="status-icon"></div>
                        <div className="status-icon"></div>
                     </div>
                  </div>
                  <h3 className="mobile-title">Trip to Paris</h3>
                  <div className="mobile-tabs">
                     <span className="tab">Itinerary</span>
                     <span className="tab active">Bookings</span>
                  </div>

                  {/* Stacked Cards inside Mobile */}
                  <div className="mobile-list">
                     <div className="mobile-card shadow-sm">
                        <div className="card-icon flight" style={{ background: '#f3f4f6', color: 'var(--color-text-primary)' }}>✈</div>
                        <div className="card-info">
                           <h4>United Airlines</h4>
                           <p>Flight</p>
                        </div>
                     </div>
                     <div className="mobile-card shadow-sm" style={{ transform: 'scale(1.02) translateY(5px)', zIndex: 2 }}>
                        <div className="card-icon hotel" style={{ background: 'var(--color-gold)', color: 'var(--color-text-primary)' }}>🏨</div>
                        <div className="card-info">
                           <h4>Costa Hotel</h4>
                           <p>Hotel</p>
                        </div>
                     </div>
                     <div className="mobile-card shadow-sm" style={{ transform: 'scale(1.04) translateY(10px)', zIndex: 3 }}>
                        <div className="card-icon restaurant" style={{ background: 'var(--color-ink)', color: '#fff' }}>🍽</div>
                        <div className="card-info">
                           <h4>Sabor Moderno</h4>
                           <p>Restaurant</p>
                        </div>
                     </div>
                     <div className="mobile-card shadow-sm" style={{ transform: 'scale(1.06) translateY(15px)', zIndex: 4 }}>
                        <div className="card-icon activity" style={{ background: '#f3f4f6', color: 'var(--color-text-primary)' }}>🗼</div>
                        <div className="card-info">
                           <h4>Eiffel Tour</h4>
                           <p>Activity</p>
                        </div>
                     </div>
                  </div>

                  <div className="forward-btn-container">
                     <button className="btn btn-primary shadow-lg" style={{ borderRadius: '9999px', padding: '10px 20px', whiteSpace: 'nowrap' }}>
                        <Mail size={16} /> Forward email
                     </button>
                  </div>
               </div>

               {/* Floating Category Icons with Ink and Gold Palette */}
               <div className="floating-circle top-left" style={{ background: 'var(--color-gold)', color: 'var(--color-text-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}><Receipt size={22} color="var(--color-ink)" /></div>
               <div className="floating-circle top-left-outer" style={{ background: '#f3f4f6', color: 'var(--color-text-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}><Music size={20} color="var(--color-ink)" /></div>
               <div className="floating-circle mid-left" style={{ background: 'var(--color-ink)', color: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}><Anchor size={20} color="#fff" /></div>
               <div className="floating-circle mid-left-lower" style={{ background: 'var(--color-surface)', color: 'var(--color-text-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb' }}><BedDouble size={20} color="var(--color-ink)" /></div>
               <div className="floating-circle bottom-left" style={{ background: 'var(--color-gold)', color: 'var(--color-text-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}><Plane size={24} color="var(--color-ink)" /></div>
               <div className="floating-circle top-right" style={{ background: 'var(--color-ink)', color: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}><Ticket size={20} color="#fff" /></div>
               <div className="floating-circle mid-right" style={{ background: 'var(--color-surface)', color: 'var(--color-text-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb' }}><Car size={20} color="var(--color-ink)" /></div>
               <div className="floating-circle mid-right-lower" style={{ background: 'var(--color-gold)', color: 'var(--color-text-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}><Utensils size={24} color="var(--color-ink)" /></div>
               <div className="floating-circle bottom-right" style={{ background: '#f3f4f6', color: 'var(--color-text-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}><Map size={20} color="var(--color-ink)" /></div>

            </div>

            {/* Right: Text Content */}
            <div className="text-content pr-lg pl-lg">
               <h2 className="section-title text-left" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', lineHeight: 1.15, letterSpacing: '-1.5px' }}>Upload and organize all your travel receipts.</h2>
               <p className="section-subtitle text-left mt-4">
                  Get started by uploading a receipt or confirmation to TripMind or forwarding it to receipts@tripmind.ai. Add new ones as you book and access everything in one place while you travel.
               </p>
            </div>

         </div>
      </section>
   );
}
