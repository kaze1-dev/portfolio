"use client";

import PixelCat from '@/components/cat_button';
import React, { useEffect, useRef, useState } from 'react';
import { LuSend } from 'react-icons/lu';
import Typewriter from './Typewriter';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi there! I'm Pixel. Ask me anything about my creator's projects or computer science background! 🐾",
    },
  ]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userQuery = input.trim();
    const userMessage: Message = { role: 'user', content: userQuery };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userQuery }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status code: ${response.status}`);
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.response,
        },
      ]);
    } catch (error) {
      console.error('RAG pipeline communication failure:', error);

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '(Pixel is taking a nap... send another message to wake it up!)',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group fixed bottom-4 right-4 z-40 rounded-full border border-neutral-800 bg-neutral-900/90 p-2 shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:border-zinc-500 hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.2)] active:scale-95 sm:bottom-6 sm:right-6"
        aria-label="Toggle AI Assistant"
      >
        <span className="absolute inset-0 rounded-full bg-white/0 blur-md transition-all group-hover:bg-white/10" />

        <PixelCat className="relative h-11 w-11 p-0 transition-transform group-hover:rotate-3 sm:h-12 sm:w-12" />

        <span className="absolute right-1 top-1 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
      </button>

      <div
        className={`fixed z-50 flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl origin-bottom-right transition-all
          bottom-20 left-4 right-4 h-[65vh] max-h-120
          sm:bottom-24 sm:left-auto sm:right-6 sm:h-120 sm:w-90
          ${
            isOpen
              ? 'pointer-events-auto scale-100 opacity-100'
              : 'pointer-events-none scale-95 opacity-0'
          }`}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-neutral-800 bg-neutral-900/60 px-3.5 py-2.5 backdrop-blur-md">
          <div className="flex max-w-[80%] items-center gap-2">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-sm" />
              <PixelCat className="relative h-5 w-5 p-0" />
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="truncate text-xs font-semibold tracking-wide text-neutral-200">
                Pixel
              </span>

              <span className="mt-0.5 flex items-center gap-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                <span className="truncate text-[9px] font-medium text-neutral-400">
                  RAG Interface Active
                </span>
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md p-1 text-xs text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-white"
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex-1 space-y-5 overflow-y-auto p-4 text-xs scrollbar-thin [scrollbar-color:#262626_transparent]"
        >
          {messages.map((msg, idx) => (
            <div key={idx} className="w-full">
              {msg.role === 'assistant' ? (
                <div className="flex max-w-full items-start gap-2.5">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 shadow-inner">
                    <PixelCat className="h-3.5 w-3.5 p-0" />
                  </div>

                  <div className="min-w-0 flex-1 space-y-1 pt-0.5">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">
                      Pixel
                    </div>

                    <div className="wrap-break-words text-[13px] font-normal leading-relaxed text-neutral-200 selection:bg-white/20">
                      {idx === messages.length - 1 ? (
                        <Typewriter text={msg.content} speed={25} />
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex w-full flex-col items-end">
                  <div className="max-w-[85%] wrap-break-words rounded-xl rounded-tr-none border border-neutral-800/60 bg-neutral-900/60 px-3 py-2 text-[13px] text-neutral-200 shadow-sm selection:bg-white/20">
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex max-w-full animate-pulse items-start gap-2.5">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 shadow-inner">
                <PixelCat className="h-3.5 w-3.5 p-0" />
              </div>

              <div className="flex-1 space-y-1 pt-0.5">
                <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">
                  Pixel
                </div>
                <div className="text-[13px] font-normal italic text-neutral-400">
                  Thinking...
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="shrink-0 border-t border-neutral-800 bg-neutral-950 p-3">
          <form onSubmit={handleSubmit} className="flex gap-1.5">
            <input
              disabled={isLoading}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 rounded-xl border border-neutral-800/80 bg-neutral-900/50 px-3 py-2 text-xs text-neutral-200 placeholder-neutral-500 transition-all focus:border-zinc-500 focus:ring-1 focus:ring-white/20 focus:outline-none"
            />

            <button
              disabled={isLoading}
              type="submit"
              aria-label="Send message"
              className="flex shrink-0 items-center justify-center rounded-xl bg-white px-3 font-semibold text-neutral-950 transition-all hover:bg-zinc-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <LuSend size={13} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}