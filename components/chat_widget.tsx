"use client"
import PixelCat from '@/components/cat_button';
import React, { useState } from 'react';
import { LuSend } from 'react-icons/lu';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 bg-neutral-900/90 border border-neutral-800 hover:border-[#9d7bf6]/50 p-2 rounded-full shadow-xl hover:shadow-[0_0_25px_-5px_rgba(157,123,246,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-md group ${isOpen ? 'max-sm:scale-0 max-sm:opacity-0' : 'scale-100 opacity-100'
          }`}
        aria-label="Toggle AI Assistant"
      >
        <span className="absolute inset-0 rounded-full bg-[#9d7bf6]/0 group-hover:bg-[#9d7bf6]/10 blur-md transition-all duration-300" />
        <PixelCat className="w-12 h-12 sm:w-14 sm:h-14 p-0 relative transition-transform duration-300 group-hover:rotate-3" />
        <span className="absolute top-1 right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9d7bf6] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#9d7bf6]"></span>
        </span>
      </button>
      <div
        className={`fixed inset-0 pb-3 sm:inset-auto sm:bottom-24 sm:right-16 z-50 w-full h-full sm:w-96 sm:h-112 bg-neutral-950 border-0 sm:border border-neutral-800/80 rounded-none sm:rounded-2xl  flex flex-col overflow-hidden origin-bottom sm:origin-bottom-right transition-all duration-300 ${isOpen
          ? 'scale-100 opacity-100 pointer-events-auto'
          : 'scale-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex items-center justify-between px-4 py-4 sm:py-3 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#9d7bf6]/20 blur-sm" />
              <PixelCat className="w-6 h-6 p-0 relative" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-neutral-200 tracking-wide leading-none">Meow-bot AI</span>
              <span className="flex items-center gap-1 mt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] text-neutral-500">Online</span>
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-neutral-400 hover:text-neutral-200 text-base sm:text-xs p-2 sm:p-1.5 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm text-neutral-300 scrollbar-thin [scrollbar-color:#3f3f46_transparent]">
          <div className="flex items-end gap-2 max-w-[90%]">
            <div className="shrink-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
              <PixelCat className="w-4 h-4 p-0" />
            </div>
            <div className="bg-neutral-900 border border-neutral-800/60 p-3 rounded-2xl rounded-bl-none shadow-sm">
              Hi there! Ask me anything about my creator's projects, background, or stack. 🐾
            </div>
          </div>
        </div>
        <div className="p-3 border-t border-neutral-800 bg-neutral-950 pb-[env(safe-area-inset-bottom)] shrink-0">
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="text"
              placeholder="Ask me a question..."
              className="flex-1 bg-neutral-900 border border-neutral-800 focus:border-[#9d7bf6]/60 focus:ring-2 focus:ring-[#9d7bf6]/15 focus:outline-none rounded-xl px-3 py-2 text-base sm:text-sm text-neutral-200 placeholder-neutral-500 transition-all duration-200"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="bg-[#9d7bf6] hover:bg-[#8b65e3] hover:shadow-[0_0_15px_-2px_rgba(157,123,246,0.6)] text-neutral-950 font-medium p-2.5 rounded-xl text-sm transition-all duration-200 active:scale-95 flex items-center justify-center"
            >
              <LuSend size={16} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}