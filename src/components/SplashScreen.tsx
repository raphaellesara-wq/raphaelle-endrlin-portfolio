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

  const dashStyle = "6 4";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center px-4 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8", transition: "opacity 0.4s ease-out" }}
    >
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-72 md:w-96 h-auto">
          
          {/* Level 1 - Top rect */}
          <rect
            x="130" y="10" width="60" height="32" rx="10"
            stroke="hsl(258,18%,60%)" strokeWidth="2" strokeDasharray={dashStyle} fill="none"
            className="transition-all duration-500"
            style={{ opacity: showRect1 ? 1 : 0, transform: showRect1 ? "scale(1)" : "scale(0.8)", transformOrigin: "160px 26px" }}
          />
          <circle cx="160" cy="26" r="6" fill="hsl(258,18%,60%)" className="transition-all duration-500" style={{ opacity: showCircles ? 1 : 0, transform: showCircles ? "scale(1)" : "scale(0)" , transformOrigin: "160px 26px" }} />

          {/* Lines L1 -> L2 */}
          <line x1="145" y1="42" x2="90" y2="80" stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine1 ? 0.5 : 0 }} />
          <line x1="175" y1="42" x2="230" y2="80" stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine1 ? 0.5 : 0 }} />

          {/* Level 2 - Two rects */}
          <rect
            x="60" y="80" width="60" height="32" rx="10"
            stroke="hsl(348,30%,70%)" strokeWidth="2" strokeDasharray={dashStyle} fill="none"
            className="transition-all duration-500"
            style={{ opacity: showRect2 ? 1 : 0, transform: showRect2 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "0ms" }}
          />
          <circle cx="90" cy="96" r="6" fill="hsl(348,30%,70%)" className="transition-all duration-500" style={{ opacity: showCircles ? 1 : 0, transform: showCircles ? "scale(1)" : "scale(0)", transformOrigin: "90px 96px", transitionDelay: "100ms" }} />

          <rect
            x="200" y="80" width="60" height="32" rx="10"
            stroke="hsl(155,30%,65%)" strokeWidth="2" strokeDasharray={dashStyle} fill="none"
            className="transition-all duration-500"
            style={{ opacity: showRect2 ? 1 : 0, transform: showRect2 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "150ms" }}
          />
          <circle cx="230" cy="96" r="6" fill="hsl(155,30%,65%)" className="transition-all duration-500" style={{ opacity: showCircles ? 1 : 0, transform: showCircles ? "scale(1)" : "scale(0)", transformOrigin: "230px 96px", transitionDelay: "200ms" }} />

          {/* Lines L2 -> L3 (each rect branches into 2) */}
          <line x1="72" y1="112" x2="40" y2="155" stroke="hsl(27,35%,60%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine2 ? 0.5 : 0 }} />
          <line x1="108" y1="112" x2="130" y2="155" stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine2 ? 0.5 : 0, transitionDelay: "50ms" }} />
          <line x1="212" y1="112" x2="190" y2="155" stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine2 ? 0.5 : 0, transitionDelay: "100ms" }} />
          <line x1="248" y1="112" x2="280" y2="155" stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine2 ? 0.5 : 0, transitionDelay: "150ms" }} />

          {/* Level 3 - Four rects */}
          <rect
            x="10" y="155" width="56" height="32" rx="10"
            stroke="hsl(27,35%,60%)" strokeWidth="2" strokeDasharray={dashStyle} fill="none"
            className="transition-all duration-500"
            style={{ opacity: showRect3 ? 1 : 0, transform: showRect3 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "0ms" }}
          />
          <circle cx="38" cy="171" r="6" fill="hsl(27,35%,60%)" className="transition-all duration-500" style={{ opacity: showCircles ? 1 : 0, transform: showCircles ? "scale(1)" : "scale(0)", transformOrigin: "38px 171px", transitionDelay: "300ms" }} />

          <rect
            x="102" y="155" width="56" height="32" rx="10"
            stroke="hsl(258,18%,60%)" strokeWidth="2" strokeDasharray={dashStyle} fill="none"
            className="transition-all duration-500"
            style={{ opacity: showRect3 ? 1 : 0, transform: showRect3 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "100ms" }}
          />
          <circle cx="130" cy="171" r="6" fill="hsl(258,18%,60%)" className="transition-all duration-500" style={{ opacity: showCircles ? 1 : 0, transform: showCircles ? "scale(1)" : "scale(0)", transformOrigin: "130px 171px", transitionDelay: "400ms" }} />

          <rect
            x="162" y="155" width="56" height="32" rx="10"
            stroke="hsl(348,30%,70%)" strokeWidth="2" strokeDasharray={dashStyle} fill="none"
            className="transition-all duration-500"
            style={{ opacity: showRect3 ? 1 : 0, transform: showRect3 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "200ms" }}
          />
          <circle cx="190" cy="171" r="6" fill="hsl(348,30%,70%)" className="transition-all duration-500" style={{ opacity: showCircles ? 1 : 0, transform: showCircles ? "scale(1)" : "scale(0)", transformOrigin: "190px 171px", transitionDelay: "500ms" }} />

          <rect
            x="254" y="155" width="56" height="32" rx="10"
            stroke="hsl(155,30%,65%)" strokeWidth="2" strokeDasharray={dashStyle} fill="none"
            className="transition-all duration-500"
            style={{ opacity: showRect3 ? 1 : 0, transform: showRect3 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "300ms" }}
          />
          <circle cx="282" cy="171" r="6" fill="hsl(155,30%,65%)" className="transition-all duration-500" style={{ opacity: showCircles ? 1 : 0, transform: showCircles ? "scale(1)" : "scale(0)", transformOrigin: "282px 171px", transitionDelay: "600ms" }} />
        </svg>

        {/* Logo */}
        <div
          className="text-center transition-all duration-700"
          style={{
            opacity: showLogo ? 1 : 0,
            transform: showLogo ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)"
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
