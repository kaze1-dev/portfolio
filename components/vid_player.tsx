"use client";

import React from 'react';
import { LuX } from 'react-icons/lu';

const Vid_Player = ({ activeVideo, close }: any) => {
  return (
    <div>
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 bg-black/40 px-4 py-3">
              <span className="flex items-center gap-2 text-xs font-mono font-medium text-zinc-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                System Demo Playback
              </span>

              <button
                onClick={close}
                className="rounded-lg p-1 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Close modal"
              >
                <LuX size={20} />
              </button>
            </div>

            <div className="flex aspect-video items-center justify-center bg-black">
              <video
                src={activeVideo}
                controls
                autoPlay
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vid_Player;