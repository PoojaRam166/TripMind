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
    <div className="dashboard-layout page-transition">
      <aside className="hidden md:flex flex-col bg-black border-r border-white/10 h-screen overflow-y-auto z-20 relative">
        <Sidebar activeRoute="Help & Support" />
      </aside>

      <main className="flex flex-col h-screen overflow-y-auto overflow-x-hidden relative">
        <TopNav title="Help & Support" />

        <div className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-10 pb-[100px] md:pb-10">
          
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)] mb-2">Help & Support</h1>
            <p className="text-lg text-[var(--color-text-secondary)] m-0">Guides, FAQs, and support for your trips</p>
          </div>

          <div className="flex flex-col gap-8">
            
            {/* FAQ Card */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-[var(--shadow-sm)]">
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
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-[var(--shadow-sm)]">
              <div className="p-6 border-b border-[var(--color-border)]">
                <h2 className="text-[19px] font-extrabold text-[var(--color-text-primary)] m-0">Contact Support</h2>
              </div>
              <div className="p-6">
                <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 m-0">
                  Need more help? Our support team is available from 9 AM to 6 PM, Monday to Saturday.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <a href="mailto:support@tripmind.com" className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-gold)] hover:bg-[var(--color-surface-2)] transition-all cursor-pointer no-underline text-inherit hover-lift">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-primary)] text-[15px] m-0 mb-1">Email Us</h4>
                      <p className="text-[14px] text-[var(--color-text-secondary)] m-0 font-medium">support@tripmind.com</p>
                    </div>
                  </a>
                  <a href="tel:18001234567" className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-gold)] hover:bg-[var(--color-surface-2)] transition-all cursor-pointer no-underline text-inherit hover-lift">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
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
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-[var(--shadow-sm)]">
              <div className="p-6 border-b border-[var(--color-border)]">
                <h2 className="text-[19px] font-extrabold text-[var(--color-text-primary)] m-0">Documentation</h2>
              </div>
              <div className="p-6">
                <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 m-0">
                  Read our detailed guides on how to use every feature of the application.
                </p>
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 mt-6 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-gold)] hover:bg-[var(--color-surface-2)] rounded-xl font-bold text-[var(--color-text-primary)] transition-all hover-lift shadow-sm">
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
