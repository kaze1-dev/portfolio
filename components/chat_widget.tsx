"use client"
import PixelCat from '@/components/cat_button';
import React, { useState, useRef, useEffect } from 'react';
import { LuSend } from 'react-icons/lu';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi there! I'm Meow-bot AI. Ask me anything about my creator's full-stack projects, n8n automation workflows, or computer science background! 🐾"
    }
  ]);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Meow! I'm currently gathering context using LangChain and RAG pipelines. My creator is wiring up my brains right now!"
        }
      ]);
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-neutral-900/90 border border-neutral-800 hover:border-[#9d7bf6]/50 p-2 rounded-full shadow-xl hover:shadow-[0_0_25px_-5px_rgba(157,123,246,0.5)] transition-all  hover:scale-110 active:scale-95 backdrop-blur-md group"
        aria-label="Toggle AI Assistant"
      >
        <span className="absolute inset-0 rounded-full bg-[#9d7bf6]/0 group-hover:bg-[#9d7bf6]/10 blur-md transition-all " />
        <PixelCat className="w-11 h-11 sm:w-12 sm:h-12 p-0 relative transition-transform  group-hover:rotate-3" />
        <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9d7bf6] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9d7bf6]"></span>
        </span>
      </button>
      <div
        className={`fixed z-50 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col overflow-hidden origin-bottom-right transition-all  shadow-2xl
          /* Mobile Positioning (Stays floating, never fills entire screen) */
          bottom-20 right-4 left-4 h-[65vh] max-h-120
          /* Desktop Scale-up Overrides */
          sm:left-auto sm:bottom-24 sm:right-6 sm:w-90 sm:h-120 ${
            isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-900/60 backdrop-blur-md border-b border-neutral-900 shrink-0">
          <div className="flex items-center gap-2 max-w-[80%]">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#9d7bf6]/20 blur-sm" />
              <PixelCat className="w-5 h-5 p-0 relative" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold text-neutral-200 tracking-wide truncate">Meow-bot AI</span>
              <span className="flex items-center gap-1 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] text-neutral-400 font-medium truncate">RAG Interface Active</span>
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-neutral-400 hover:text-neutral-200 text-xs p-1 rounded-md hover:bg-neutral-900 transition-colors"
          >
            ✕
          </button>
        </div>
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-5 text-xs scrollbar-thin [scrollbar-color:#262626_transparent]"
        >
          {messages.map((msg, idx) => (
            <div key={idx} className="w-full">
              {msg.role === 'assistant' ? (
                <div className="flex gap-2.5 max-w-full items-start">
                  <div className="shrink-0 w-6 h-6 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center mt-0.5 shadow-inner">
                    <PixelCat className="w-3.5 h-3.5 p-0" />
                  </div>
                  <div className="flex-1 space-y-1 pt-0.5 min-w-0">
                    <div className="text-[9px] font-bold text-neutral-500 tracking-wider uppercase">
                      Meow-Bot
                    </div>
                    <div className="text-neutral-200 leading-relaxed text-[13px] font-normal wrap-break-words selection:bg-[#9d7bf6]/30">
                      {msg.content}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-end w-full">
                  <div className="max-w-[85%] bg-neutral-900/60 border border-neutral-800/60 px-3 py-2 rounded-xl rounded-tr-none text-neutral-200 text-[13px] shadow-sm wrap-break-words selection:bg-[#9d7bf6]/30">
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-neutral-900 bg-neutral-950 shrink-0">
          <form onSubmit={handleSubmit} className="flex gap-1.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-neutral-900/50 border border-neutral-800/80 focus:border-[#9d7bf6]/60 focus:ring-1 focus:ring-[#9d7bf6]/30 focus:outline-none rounded-xl px-3 py-2 text-xs text-neutral-200 placeholder-neutral-500 transition-all"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="bg-[#9d7bf6] hover:bg-[#8b65e3] hover:shadow-[0_0_12px_-2px_rgba(157,123,246,0.6)] text-neutral-950 font-semibold px-3 rounded-xl transition-all active:scale-95 flex items-center justify-center shrink-0"
            >
              <LuSend size={13} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}