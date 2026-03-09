import { useState, useEffect } from "react";

type Phase = "rect1" | "line1" | "rect2" | "line2" | "rect3" | "logo" | "circles" | "exit";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<Phase>("rect1");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("line1"), 600),
      setTimeout(() => setPhase("rect2"), 1200),
      setTimeout(() => setPhase("line2"), 1800),
      setTimeout(() => setPhase("rect3"), 2400),
      setTimeout(() => setPhase("logo"), 3200),
      setTimeout(() => setPhase("circles"), 4000),
      setTimeout(() => setPhase("exit"), 6000),
      setTimeout(onComplete, 6500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const phases: Phase[] = ["rect1", "line1", "rect2", "line2", "rect3", "logo", "circles", "exit"];
  const pIdx = phases.indexOf(phase);

  const showRect1 = pIdx >= 0;
  const showLine1 = pIdx >= 1;
  const showRect2 = pIdx >= 2;
  const showLine2 = pIdx >= 3;
  const showRect3 = pIdx >= 4;
  const showLogo = pIdx >= 5;
  const showCircles = pIdx >= 6;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center px-4 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8", transition: "opacity 0.5s ease-out" }}
    >
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes dropIn {
          0% { transform: translateY(-100px) scale(0.5); opacity: 0; }
          60% { transform: translateY(5px) scale(1.1); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .pop-in {
          animation: popIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .drop-in {
          animation: dropIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      <div className="flex flex-col items-center gap-8 md:gap-12 relative w-full max-w-md">
        
        {/* Logo at the top */}
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 text-center transition-all duration-700 w-full"
          style={{
            opacity: showLogo ? 1 : 0,
            transform: showLogo ? "translate(-50%, 0) scale(1)" : "translate(-50%, 10px) scale(0.95)"
          }}
        >
          <span
            className="block text-4xl md:text-5xl tracking-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              color: "hsl(348,30%,70%)",
              letterSpacing: "-0.02em",
              lineHeight: 1
            }}
          >
            R.E
          </span>
          <p
            className="text-[10px] md:text-xs text-muted-foreground mt-2 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-apple)", fontWeight: 300, letterSpacing: "0.18em" }}
          >
            Raphaëlle Enderlin
          </p>
        </div>

        <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-80 md:w-[400px] h-auto mt-16">
          
          {/* Level 1 - Top rect */}
          <rect
            x="130" y="20" width="60" height="30" rx="4"
            stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeDasharray="4 3" fill="none"
            className={showRect1 ? "pop-in" : "opacity-0"}
            style={{ transformOrigin: "160px 35px" }}
          />
          <circle 
            cx="160" cy="35" r="6" 
            fill="hsl(258,18%,60%)" 
            className={showCircles ? "drop-in" : "opacity-0"}
            style={{ transformOrigin: "160px 35px", animationDelay: "0ms" }} 
          />

          {/* Lines L1 -> L2 */}
          <path 
            d="M 160 50 L 160 65 L 90 65 L 90 85" 
            stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="none"
            className="transition-all duration-500" 
            style={{ opacity: showLine1 ? 0.5 : 0, strokeDasharray: showLine1 ? "100" : "0", strokeDashoffset: showLine1 ? "0" : "100" }} 
          />
          <path 
            d="M 160 50 L 160 65 L 230 65 L 230 85" 
            stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="none"
            className="transition-all duration-500" 
            style={{ opacity: showLine1 ? 0.5 : 0, strokeDasharray: showLine1 ? "100" : "0", strokeDashoffset: showLine1 ? "0" : "100" }} 
          />

          {/* Level 2 - Two rects */}
          <rect
            x="60" y="85" width="60" height="30" rx="4"
            stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeDasharray="4 3" fill="none"
            className={showRect2 ? "pop-in" : "opacity-0"}
            style={{ transformOrigin: "90px 100px" }}
          />
          <circle 
            cx="90" cy="100" r="6" 
            fill="hsl(348,30%,70%)" 
            className={showCircles ? "drop-in" : "opacity-0"}
            style={{ transformOrigin: "90px 100px", animationDelay: "150ms" }} 
          />

          <rect
            x="200" y="85" width="60" height="30" rx="4"
            stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeDasharray="4 3" fill="none"
            className={showRect2 ? "pop-in" : "opacity-0"}
            style={{ transformOrigin: "230px 100px" }}
          />
          <circle 
            cx="230" cy="100" r="6" 
            fill="hsl(155,30%,65%)" 
            className={showCircles ? "drop-in" : "opacity-0"}
            style={{ transformOrigin: "230px 100px", animationDelay: "300ms" }} 
          />

          {/* Lines L2 -> L3 */}
          <path 
            d="M 90 115 L 90 130 L 45 130 L 45 150" 
            stroke="hsl(27,35%,60%)" strokeWidth="1.5" fill="none"
            className="transition-all duration-500" 
            style={{ opacity: showLine2 ? 0.5 : 0 }} 
          />
          <path 
            d="M 90 115 L 90 130 L 135 130 L 135 150" 
            stroke="hsl(258,18%,60%)" strokeWidth="1.5" fill="none"
            className="transition-all duration-500" 
            style={{ opacity: showLine2 ? 0.5 : 0 }} 
          />
          <path 
            d="M 230 115 L 230 130 L 185 130 L 185 150" 
            stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="none"
            className="transition-all duration-500" 
            style={{ opacity: showLine2 ? 0.5 : 0 }} 
          />
          <path 
            d="M 230 115 L 230 130 L 275 130 L 275 150" 
            stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="none"
            className="transition-all duration-500" 
            style={{ opacity: showLine2 ? 0.5 : 0 }} 
          />

          {/* Level 3 - Four rects */}
          <rect
            x="15" y="150" width="60" height="30" rx="4"
            stroke="hsl(27,35%,60%)" strokeWidth="1.5" strokeDasharray="4 3" fill="none"
            className={showRect3 ? "pop-in" : "opacity-0"}
            style={{ transformOrigin: "45px 165px" }}
          />
          <circle 
            cx="45" cy="165" r="6" 
            fill="hsl(27,35%,60%)" 
            className={showCircles ? "drop-in" : "opacity-0"}
            style={{ transformOrigin: "45px 165px", animationDelay: "450ms" }} 
          />

          <rect
            x="105" y="150" width="60" height="30" rx="4"
            stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeDasharray="4 3" fill="none"
            className={showRect3 ? "pop-in" : "opacity-0"}
            style={{ transformOrigin: "135px 165px" }}
          />
          <circle 
            cx="135" cy="165" r="6" 
            fill="hsl(258,18%,60%)" 
            className={showCircles ? "drop-in" : "opacity-0"}
            style={{ transformOrigin: "135px 165px", animationDelay: "600ms" }} 
          />

          <rect
            x="155" y="150" width="60" height="30" rx="4"
            stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeDasharray="4 3" fill="none"
            className={showRect3 ? "pop-in" : "opacity-0"}
            style={{ transformOrigin: "185px 165px" }}
          />
          <circle 
            cx="185" cy="165" r="6" 
            fill="hsl(348,30%,70%)" 
            className={showCircles ? "drop-in" : "opacity-0"}
            style={{ transformOrigin: "185px 165px", animationDelay: "750ms" }} 
          />

          <rect
            x="245" y="150" width="60" height="30" rx="4"
            stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeDasharray="4 3" fill="none"
            className={showRect3 ? "pop-in" : "opacity-0"}
            style={{ transformOrigin: "275px 165px" }}
          />
          <circle 
            cx="275" cy="165" r="6" 
            fill="hsl(155,30%,65%)" 
            className={showCircles ? "drop-in" : "opacity-0"}
            style={{ transformOrigin: "275px 165px", animationDelay: "900ms" }} 
          />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
