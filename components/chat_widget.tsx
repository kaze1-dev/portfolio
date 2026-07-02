"use client"
import PixelCat from '@/components/cat_button';
import React, { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 bg-neutral-900/90 border border-neutral-800 hover:border-[#9d7bf6]/50 p-2 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-md group ${isOpen ? 'max-sm:scale-0 max-sm:opacity-0' : 'scale-100 opacity-100'
          }`}
        aria-label="Toggle AI Assistant"
      >
        <PixelCat className="w-12 h-12 sm:w-14 sm:h-14 p-0 transition-transform duration-300 group-hover:rotate-3" />
        <span className="absolute top-1 right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9d7bf6] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#9d7bf6]"></span>
        </span>
      </button>

      <div
        className={`fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-16 z-50 w-full h-full sm:w-96 sm:h-112 bg-neutral-950 border-0 sm:border border-neutral-800 rounded-none sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden origin-bottom sm:origin-bottom-right transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex items-center justify-between px-4 py-4 sm:py-3 bg-neutral-900 border-b border-neutral-800 shrink-0">
          <div className="flex items-center gap-2">
            <PixelCat className="w-6 h-6 p-0" />
            <span className="text-sm font-semibold text-neutral-200 tracking-wide">Meow-bot AI</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-neutral-400 hover:text-neutral-200 text-base sm:text-xs p-2 sm:p-1 rounded-lg hover:bg-neutral-800 sm:hover:bg-transparent transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm text-neutral-300">
          <div className="bg-neutral-900 border border-neutral-800/60 p-3 rounded-xl max-w-[85%] rounded-tl-none">
            Hi there! Ask me anything about my creator's projects, background, or stack. 🐾
          </div>
        </div>
        <div className="p-3 border-t border-neutral-800 bg-neutral-950 pb-safe-bottom shrink-0">
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="text"
              placeholder="Ask me a question..."
              className="flex-1 bg-neutral-900 border border-neutral-800 focus:border-[#9d7bf6]/60 focus:outline-none rounded-xl px-3 py-2 text-sm text-neutral-200 placeholder-neutral-500 transition-colors"
            />
            <button
              type="submit"
              className="bg-[#9d7bf6] hover:bg-[#8b65e3] text-neutral-950 font-medium px-4 py-2 rounded-xl text-sm transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}