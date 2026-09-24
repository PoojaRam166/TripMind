import React from 'react';
import { Mail, Receipt, Music, Anchor, BedDouble, Plane, Ticket, Car, Utensils, Map } from 'lucide-react';

export default function OrganizeReceipts() {
  return (
    <section className="py-12 sm:py-20 bg-white" id="receipts">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left: Mockup Visual */}
        <div className="flex-1 flex justify-center items-center w-full transform scale-90 sm:scale-100 origin-center relative py-8 md:py-0">
          
          {/* Main Mobile Panel */}
          <div className="w-[280px] h-[480px] bg-white rounded-[36px] border-[8px] border-[var(--color-ink)] relative overflow-hidden p-4 sm:p-6 shadow-2xl z-10">
             <div className="flex justify-between text-[12px] font-bold mb-6">
                <div className="time">4:20</div>
                <div className="flex gap-1">
                   <div className="w-3 h-3 bg-gray-200 rounded-sm"></div>
                   <div className="w-3 h-3 bg-gray-200 rounded-sm"></div>
                </div>
             </div>
             <h3 className="m-0 mb-4 text-xl font-bold">Trip to Paris</h3>
             <div className="flex gap-4 mb-6 border-b border-gray-100 pb-2">
                <span className="text-[13px] font-bold text-gray-400">Itinerary</span>
                <span className="text-[13px] font-bold text-gray-900 border-b-2 border-[var(--color-ink)] pb-2 -mb-[9px]">Bookings</span>
             </div>
             
             {/* Stacked Cards inside Mobile */}
             <div className="relative flex flex-col gap-3 mt-4">
                <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-3 relative z-10 shadow-sm">
                   <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg bg-[#f3f4f6] text-[var(--color-text-primary)]">✈</div>
                   <div>
                      <h4 className="m-0 text-[13px] font-bold">United Airlines</h4>
                      <p className="m-0 text-[11px] text-gray-500 font-medium">Flight</p>
                   </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-3 absolute w-full z-20 shadow-sm" style={{ transform: 'scale(1.02) translateY(30px)' }}>
                   <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg bg-[var(--color-gold)] text-[var(--color-text-primary)]">🏨</div>
                   <div>
                      <h4 className="m-0 text-[13px] font-bold">Costa Hotel</h4>
                      <p className="m-0 text-[11px] text-gray-500 font-medium">Hotel</p>
                   </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-3 absolute w-full z-30 shadow-sm" style={{ transform: 'scale(1.04) translateY(60px)' }}>
                   <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg bg-[var(--color-ink)] text-white">🍽</div>
                   <div>
                      <h4 className="m-0 text-[13px] font-bold">Sabor Moderno</h4>
                      <p className="m-0 text-[11px] text-gray-500 font-medium">Restaurant</p>
                   </div>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-3 absolute w-full z-40 shadow-sm" style={{ transform: 'scale(1.06) translateY(90px)' }}>
                   <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg bg-[#f3f4f6] text-[var(--color-text-primary)]">🗼</div>
                   <div>
                      <h4 className="m-0 text-[13px] font-bold">Eiffel Tour</h4>
                      <p className="m-0 text-[11px] text-gray-500 font-medium">Activity</p>
                   </div>
                </div>
             </div>
             
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
                <button className="flex items-center gap-2 bg-[var(--color-ink)] text-white font-bold text-sm shadow-xl rounded-full px-5 py-2.5 whitespace-nowrap">
                   <Mail size={16} /> Forward email
                </button>
             </div>
          </div>
          
          {/* Floating Category Icons with Ink and Gold Palette */}
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center bg-[var(--color-gold)] shadow-lg z-20"><Receipt size={22} color="var(--color-ink)" /></div>
          <div className="absolute top-12 -left-8 w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 shadow-md z-0"><Music size={18} color="var(--color-ink)" /></div>
          <div className="absolute top-1/2 -left-6 w-11 h-11 rounded-full flex items-center justify-center bg-[var(--color-ink)] shadow-lg z-20"><Anchor size={20} color="#fff" /></div>
          <div className="absolute bottom-1/4 -left-3 w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm z-0"><BedDouble size={18} color="var(--color-ink)" /></div>
          <div className="absolute -bottom-6 left-8 w-14 h-14 rounded-full flex items-center justify-center bg-[var(--color-gold)] shadow-xl z-20"><Plane size={24} color="var(--color-ink)" /></div>
          <div className="absolute -top-2 -right-4 w-11 h-11 rounded-full flex items-center justify-center bg-[var(--color-ink)] shadow-lg z-20"><Ticket size={20} color="#fff" /></div>
          <div className="absolute top-1/3 -right-6 w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm z-0"><Car size={18} color="var(--color-ink)" /></div>
          <div className="absolute bottom-1/3 -right-5 w-12 h-12 rounded-full flex items-center justify-center bg-[var(--color-gold)] shadow-lg z-20"><Utensils size={22} color="var(--color-ink)" /></div>
          <div className="absolute -bottom-4 right-6 w-11 h-11 rounded-full flex items-center justify-center bg-gray-100 shadow-md z-0"><Map size={20} color="var(--color-ink)" /></div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 mt-10 md:mt-0 text-center md:text-left">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">Upload and organize all your travel receipts.</h2>
          <p className="m-0 text-base sm:text-lg text-gray-500 font-medium leading-relaxed">
            Get started by uploading a receipt or confirmation to TripMind or forwarding it to receipts@tripmind.ai. Add new ones as you book and access everything in one place while you travel.
          </p>
        </div>

      </div>
    </section>
  );
}
