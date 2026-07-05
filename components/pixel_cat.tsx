interface PixelCatProps {
  className?: string;
}

export const PixelCat: React.FC<PixelCatProps> = ({ className = 'w-64 h-64 sm:w-82 sm:h-82' }) => {
  return (
    <div className={`relative flex items-center justify-center p-8 rounded-2xl ${className}`}>
      <style>{`
        @keyframes realTailWag {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-2px); }
        }
        @keyframes realEyeBlink {
          0%, 93%, 100% { transform: scaleY(1); }
          96% { transform: scaleY(0); }
        }
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-real-tail {
          animation: realTailWag 1s steps(2) infinite;
        }
        .animate-real-eyes {
          animation: realEyeBlink 4s steps(2) infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .animate-bubble-float {
          animation: bubbleFloat 3s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 32 32"
        className="w-full h-full fill-current text-[#9d7bf6]"
        shapeRendering="crispEdges"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="15" width="2" height="3" />
        <rect x="4" y="16" width="1" height="4" />
        <rect x="5" y="18" width="2" height="2" />
        <rect x="6" y="19" width="3" height="2" />
        <rect x="8" y="15" width="2" height="6" />
        <rect x="9" y="14" width="2" height="7" />
        <rect x="10" y="13" width="14" height="9" />
        <rect x="24" y="14" width="1" height="8" />
        <rect x="25" y="16" width="1" height="4" />
        <rect x="13" y="11" width="3" height="2" />
        <rect x="14" y="9" width="2" height="2" />
        <rect x="15" y="8" width="1" height="1" />
        <rect x="21" y="10" width="3" height="3" />
        <rect x="22" y="9" width="2" height="1" />
        <rect x="22" y="8" width="1" height="1" />
        <rect x="15" y="10" width="1" height="2" className="text-black fill-current" />
        <rect x="22" y="11" width="1" height="2" className="text-black fill-current" />
        <g className="animate-real-eyes">
          <rect x="16" y="17" width="1" height="2" className="text-[#593da3] fill-current" />
          <rect x="22" y="17" width="1" height="2" className="text-[#593da3] fill-current" />
        </g>
        <g className="animate-real-tail">
          <rect x="9" y="5" width="1" height="3" />
          <rect x="8" y="6" width="3" height="1" />
          <rect x="6" y="8" width="1" height="1" />
        </g>
        <rect x="23" y="3" width="1" height="3" />
        <rect x="22" y="4" width="3" height="1" />
        <rect x="26" y="5" width="2" height="2" />
        <rect x="27" y="6" width="1" height="1" className="text-black fill-current" />
        <rect x="9" y="21" width="1" height="4" />
        <rect x="8" y="22" width="4" height="1" />
        <rect x="7" y="23" width="1" height="1" />
        <rect x="10" y="24" width="1" height="1" />
        <rect x="11" y="23" width="1" height="1" />
        <rect x="26" y="22" width="1" height="3" />
        <rect x="25" y="23" width="3" height="1" />
        <rect x="23" y="25" width="3" height="3" />
        <rect x="24" y="26" width="1" height="1" className="text-black fill-current" />
      </svg>
    </div>
  );
};