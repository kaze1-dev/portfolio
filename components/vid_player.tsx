"use client"
import React from 'react'
import { LuX } from 'react-icons/lu';

const Vid_Player = ({activeVideo, close}:any) => {
  return (
    <div>
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0E1117] border border-violet-900/40 rounded-2xl overflow-hidden shadow-2xl shadow-violet-950/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-violet-950/40">
              <span className="text-xs font-mono font-medium text-violet-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                System Demo Playback
              </span>
              <button
                onClick={close}
                className="text-zinc-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
                aria-label="Close modal"
              >
                <LuX size={20} />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Vid_Player