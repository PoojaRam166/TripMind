import React from 'react';
import { HelpCircle, Mail, Phone, FileText } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';

export default function HelpPage() {
  const faqs = [
    {
      q: "How do I create a new trip?",
      a: "Go to the Home page and click the 'Create a Trip' button in the Quick Actions section. Fill in your destination, dates, and budget to get started."
    },
    {
      q: "How can I track my travel expenses?",
      a: "Navigate to the Budget Tracker page. You can view all your recent expenses there. To add a new one, click 'Add Expense', select the category, and enter the amount and description."
    },
    {
      q: "Can I share my itinerary with friends?",
      a: "Yes, go to My Trips, select a trip, and click the 'Share' icon in the top right. You can copy a view-only link to share with anyone."
    },
    {
      q: "How does the AI Travel Assistant work?",
      a: "The Travel Assistant uses AI to suggest personalized itineraries, hidden gems, and optimal routes based on your budget and preferences. Just ask it a question!"
    }
  ];

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Sidebar activeRoute="Help & Support" />
      </aside>

      <main className="dashboard-main">
        <TopNav title="Help & Support" />

        <div className="dashboard-content" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          
          {/* ── Hero Banner ── */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-ink) 0%, #1a1400 60%, #2a1f00 100%)',
            padding: '32px 40px',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.1)'
          }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,147,90,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HelpCircle size={32} color="var(--color-ink)" />
              </div>
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 900, color: 'white', margin: '0 0 4px', letterSpacing: '-0.5px' }}>
                  Help & Support
                </h1>
                <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                  Guides, FAQs, and support for your trips.
                </p>
              </div>
            </div>
            
            <a href="mailto:support@tripmind.com" style={{ 
              position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px', 
              background: 'var(--color-gold)', color: 'var(--color-text-primary)', padding: '10px 20px', 
              borderRadius: '99px', border: 'none', fontWeight: 700, fontSize: '13px', cursor: 'pointer',
              transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)', textDecoration: 'none'
            }} className="hover-lift">
              <Mail size={16} /> Contact Us
            </a>
          </div>

          <div className="flex flex-col gap-8">
            
            {/* FAQ Card */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[24px] overflow-hidden shadow-[var(--shadow-sm)]">
              <div className="p-6 border-b border-[var(--color-border)]">
                <h2 className="text-[19px] font-extrabold text-[var(--color-text-primary)] m-0">Frequently Asked Questions</h2>
              </div>
              <div className="flex flex-col">
                {faqs.map((faq, index) => (
                  <div key={index} className={`p-6 ${index !== faqs.length - 1 ? 'border-b border-[var(--color-border-light)]' : ''}`}>
                    <h3 className="text-[16px] font-bold text-[var(--color-text-primary)] mb-3 m-0">{faq.q}</h3>
                    <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed m-0">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support Card */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[24px] overflow-hidden shadow-[var(--shadow-sm)]">
              <div className="p-6 border-b border-[var(--color-border)]">
                <h2 className="text-[19px] font-extrabold text-[var(--color-text-primary)] m-0">Contact Support</h2>
              </div>
              <div className="p-6">
                <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 m-0">
                  Need more help? Our support team is available from 9 AM to 6 PM, Monday to Saturday.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <a href="mailto:support@tripmind.com" className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-gold)] hover:bg-[var(--color-surface-2)] transition-all cursor-pointer no-underline text-inherit hover-lift">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold-muted)] flex items-center justify-center text-[var(--color-gold-dark)] flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-primary)] text-[15px] m-0 mb-1">Email Us</h4>
                      <p className="text-[14px] text-[var(--color-text-secondary)] m-0 font-medium">support@tripmind.com</p>
                    </div>
                  </a>
                  <a href="tel:18001234567" className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-gold)] hover:bg-[var(--color-surface-2)] transition-all cursor-pointer no-underline text-inherit hover-lift">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center text-[var(--color-ink)] flex-shrink-0 border border-[var(--color-border-light)]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-primary)] text-[15px] m-0 mb-1">Call Us (Toll Free)</h4>
                      <p className="text-[14px] text-[var(--color-text-secondary)] m-0 font-medium">1800-123-4567</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Documentation Card */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[24px] overflow-hidden shadow-[var(--shadow-sm)]">
              <div className="p-6 border-b border-[var(--color-border)]">
                <h2 className="text-[19px] font-extrabold text-[var(--color-text-primary)] m-0">Documentation</h2>
              </div>
              <div className="p-6">
                <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 m-0">
                  Read our detailed guides on how to use every feature of the application.
                </p>
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 mt-6 bg-[var(--color-ink)] hover:bg-black rounded-xl font-bold text-white transition-all hover-lift shadow-[var(--shadow-md)]">
                  <FileText size={18} /> User Manual
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
