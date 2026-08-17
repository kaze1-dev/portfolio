'use client';

import { useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import Vid_Player from '@/components/vid_player';

export default function VideoDemo() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoUrl =
    'https://res.cloudinary.com/oriqovwt/video/upload/v1786431414/customer-support-agent_otqh4v.mp4';

  return (
    <>
      <button
        onClick={() => setActiveVideo(videoUrl)}
        className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-zinc-500"
      >
        <HiExternalLink size={18} />
        Video Demo
      </button>

      <Vid_Player
        activeVideo={activeVideo}
        close={() => setActiveVideo(null)}
      />
    </>
  );
}