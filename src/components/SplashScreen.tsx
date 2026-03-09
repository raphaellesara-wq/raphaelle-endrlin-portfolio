import { useState, useEffect } from "react";

type Phase = "rect1" | "line1" | "rect2" | "line2" | "rect3" | "logo" | "circles" | "exit";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<Phase>("rect1");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("line1"), 800),
      setTimeout(() => setPhase("rect2"), 1200),
      setTimeout(() => setPhase("line2"), 1800),
      setTimeout(() => setPhase("rect3"), 2400),
      setTimeout(() => setPhase("logo"), 3200),
      setTimeout(() => setPhase("circles"), 3800),
      setTimeout(() => setPhase("exit"), 5800), // 2 seconds for circles
      setTimeout(onComplete, 6200),
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
      style={{ background: "#FAFAF8", transition: "opacity 0.4s ease-out" }}
    >
      <style>{`
        @keyframes wheelSpin {
          0% { transform: rotate(0deg) scale(0.8); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: rotate(360deg) scale(1); opacity: 1; }
        }
        @keyframes circleAppear {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        .wheel-animation {
          animation: wheelSpin 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .circle-animation {
          animation: circleAppear 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      <div className="flex flex-col items-center gap-8 md:gap-12">
        <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-80 md:w-[400px] h-auto">
          
          {/* Level 1 - Top rect */}
          <rect
            x="130" y="20" width="60" height="30" rx="8"
            stroke="hsl(258,18%,60%)" strokeWidth="2" strokeDasharray="6 4" fill="none"
            className={showRect1 ? "wheel-animation" : ""}
            style={{ 
              opacity: showRect1 ? 1 : 0,
              transformOrigin: "160px 35px",
              animationDelay: "0ms"
            }}
          />
          <circle 
            cx="160" cy="35" r="5" 
            fill="hsl(258,18%,60%)" 
            className={showCircles ? "circle-animation" : ""}
            style={{ 
              opacity: showCircles ? 1 : 0, 
              transform: "scale(0)",
              transformOrigin: "160px 35px" 
            }} 
          />

          {/* Lines L1 -> L2 */}
          <line 
            x1="145" y1="50" x2="90" y2="85" 
            stroke="hsl(348,30%,70%)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" 
            className="transition-opacity duration-300" 
            style={{ opacity: showLine1 ? 0.7 : 0 }} 
          />
          <line 
            x1="175" y1="50" x2="230" y2="85" 
            stroke="hsl(155,30%,65%)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" 
            className="transition-opacity duration-300" 
            style={{ opacity: showLine1 ? 0.7 : 0, transitionDelay: "100ms" }} 
          />

          {/* Level 2 - Two rects */}
          <rect
            x="60" y="85" width="60" height="30" rx="8"
            stroke="hsl(348,30%,70%)" strokeWidth="2" strokeDasharray="6 4" fill="none"
            className={showRect2 ? "wheel-animation" : ""}
            style={{ 
              opacity: showRect2 ? 1 : 0,
              transformOrigin: "90px 100px",
              animationDelay: "200ms"
            }}
          />
          <circle 
            cx="90" cy="100" r="5" 
            fill="hsl(348,30%,70%)" 
            className={showCircles ? "circle-animation" : ""}
            style={{ 
              opacity: showCircles ? 1 : 0, 
              transform: "scale(0)",
              transformOrigin: "90px 100px",
              animationDelay: "100ms"
            }} 
          />

          <rect
            x="200" y="85" width="60" height="30" rx="8"
            stroke="hsl(155,30%,65%)" strokeWidth="2" strokeDasharray="6 4" fill="none"
            className={showRect2 ? "wheel-animation" : ""}
            style={{ 
              opacity: showRect2 ? 1 : 0,
              transformOrigin: "230px 100px",
              animationDelay: "400ms"
            }}
          />
          <circle 
            cx="230" cy="100" r="5" 
            fill="hsl(155,30%,65%)" 
            className={showCircles ? "circle-animation" : ""}
            style={{ 
              opacity: showCircles ? 1 : 0, 
              transform: "scale(0)",
              transformOrigin: "230px 100px",
              animationDelay: "200ms"
            }} 
          />

          {/* Lines L2 -> L3 */}
          <line x1="75" y1="115" x2="45" y2="150" stroke="hsl(27,35%,60%)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="transition-opacity duration-300" style={{ opacity: showLine2 ? 0.7 : 0 }} />
          <line x1="105" y1="115" x2="135" y2="150" stroke="hsl(258,18%,60%)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="transition-opacity duration-300" style={{ opacity: showLine2 ? 0.7 : 0, transitionDelay: "100ms" }} />
          <line x1="215" y1="115" x2="185" y2="150" stroke="hsl(348,30%,70%)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="transition-opacity duration-300" style={{ opacity: showLine2 ? 0.7 : 0, transitionDelay: "200ms" }} />
          <line x1="245" y1="115" x2="275" y2="150" stroke="hsl(155,30%,65%)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="transition-opacity duration-300" style={{ opacity: showLine2 ? 0.7 : 0, transitionDelay: "300ms" }} />

          {/* Level 3 - Four rects */}
          <rect
            x="15" y="150" width="60" height="30" rx="8"
            stroke="hsl(27,35%,60%)" strokeWidth="2" strokeDasharray="6 4" fill="none"
            className={showRect3 ? "wheel-animation" : ""}
            style={{ 
              opacity: showRect3 ? 1 : 0,
              transformOrigin: "45px 165px",
              animationDelay: "0ms"
            }}
          />
          <circle 
            cx="45" cy="165" r="5" 
            fill="hsl(27,35%,60%)" 
            className={showCircles ? "circle-animation" : ""}
            style={{ 
              opacity: showCircles ? 1 : 0, 
              transform: "scale(0)",
              transformOrigin: "45px 165px",
              animationDelay: "300ms"
            }} 
          />

          <rect
            x="105" y="150" width="60" height="30" rx="8"
            stroke="hsl(258,18%,60%)" strokeWidth="2" strokeDasharray="6 4" fill="none"
            className={showRect3 ? "wheel-animation" : ""}
            style={{ 
              opacity: showRect3 ? 1 : 0,
              transformOrigin: "135px 165px",
              animationDelay: "200ms"
            }}
          />
          <circle 
            cx="135" cy="165" r="5" 
            fill="hsl(258,18%,60%)" 
            className={showCircles ? "circle-animation" : ""}
            style={{ 
              opacity: showCircles ? 1 : 0, 
              transform: "scale(0)",
              transformOrigin: "135px 165px",
              animationDelay: "400ms"
            }} 
          />

          <rect
            x="155" y="150" width="60" height="30" rx="8"
            stroke="hsl(348,30%,70%)" strokeWidth="2" strokeDasharray="6 4" fill="none"
            className={showRect3 ? "wheel-animation" : ""}
            style={{ 
              opacity: showRect3 ? 1 : 0,
              transformOrigin: "185px 165px",
              animationDelay: "400ms"
            }}
          />
          <circle 
            cx="185" cy="165" r="5" 
            fill="hsl(348,30%,70%)" 
            className={showCircles ? "circle-animation" : ""}
            style={{ 
              opacity: showCircles ? 1 : 0, 
              transform: "scale(0)",
              transformOrigin: "185px 165px",
              animationDelay: "500ms"
            }} 
          />

          <rect
            x="245" y="150" width="60" height="30" rx="8"
            stroke="hsl(155,30%,65%)" strokeWidth="2" strokeDasharray="6 4" fill="none"
            className={showRect3 ? "wheel-animation" : ""}
            style={{ 
              opacity: showRect3 ? 1 : 0,
              transformOrigin: "275px 165px",
              animationDelay: "600ms"
            }}
          />
          <circle 
            cx="275" cy="165" r="5" 
            fill="hsl(155,30%,65%)" 
            className={showCircles ? "circle-animation" : ""}
            style={{ 
              opacity: showCircles ? 1 : 0, 
              transform: "scale(0)",
              transformOrigin: "275px 165px",
              animationDelay: "600ms"
            }} 
          />
        </svg>

        {/* Logo */}
        <div
          className="text-center transition-all duration-700"
          style={{
            opacity: showLogo ? 1 : 0,
            transform: showLogo ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)"
          }}
        >
          <span
            className="block text-5xl md:text-6xl tracking-tight"
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
            className="text-xs md:text-sm text-muted-foreground mt-2 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-apple)", fontWeight: 300, letterSpacing: "0.18em" }}
          >
            Raphaëlle Enderlin
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
