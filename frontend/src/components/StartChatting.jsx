import React from 'react';
import { Send, Smile, Plus, Mic } from 'lucide-react';
import chatMockup from '../assets/chat-mockup.png';

export default function StartChatting() {
  return (
    <section className="py-12 sm:py-20 bg-[var(--color-surface-2)]" id="chat">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left: Text Content */}
        <div className="flex-[0.4] text-center md:text-left order-2 md:order-1">
          <h2 className="m-0 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Start chatting<br className="hidden md:block" />with us.
          </h2>
          <p className="m-0 text-base sm:text-lg text-gray-500 font-medium leading-relaxed">
            Ask for suggestions for any destination or an entire itinerary. Tell us how you like to travel, what you look for in a new place, and any preferences or pet peeves you have. The more you share, the more personalized your recommendations and plans become.
          </p>
        </div>

        {/* Right: Mockup Visual */}
        <div className="flex-[0.6] flex flex-col items-center justify-center w-full order-1 md:order-2 transform scale-95 sm:scale-100">
          
          {/* Static Image with the bottom fake chat completely cropped out, and blended into the background */}
          <div className="w-full max-w-[650px] relative z-[1] mix-blend-multiply drop-shadow-2xl">
            <img 
              src={chatMockup} 
              alt="Start Chatting Mockup" 
              className="w-full h-auto block"
            />
          </div>

          {/* Real Interactive Chat Input */}
          <div className="relative w-full max-w-[680px] z-10 bg-white border-[3px] border-[var(--color-ink)] rounded-[32px] px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between shadow-2xl mt-4 sm:-mt-8">
             <div className="flex-1 w-full text-center sm:text-left mb-3 sm:mb-0">
                <span className="text-gray-400 text-base sm:text-lg">|Ask us anything...</span>
             </div>
             <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-5 w-full sm:w-auto">
                <div className="flex items-center gap-3 sm:gap-4">
                   <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                     <Plus size={16} className="text-gray-400" />
                   </div>
                   <Smile size={20} className="text-gray-400" />
                   <span className="text-gray-400 text-lg sm:text-xl font-medium">@</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                   <Mic size={20} className="text-gray-400 hidden sm:block" />
                   <div className="w-9 h-9 rounded-full bg-[var(--color-ink)] flex items-center justify-center shadow-md">
                      <Send size={16} color="white" className="-ml-0.5" />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
