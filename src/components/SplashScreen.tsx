import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<
    "rect1" | "line1" | "rect2" | "line2" | "rect3" | "line3" | "rect4" | "logo" | "exit"
  >("rect1");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("line1"), 500);
    const t2 = setTimeout(() => setPhase("rect2"), 1000);
    const t3 = setTimeout(() => setPhase("line2"), 1500);
    const t4 = setTimeout(() => setPhase("rect3"), 2000);
    const t5 = setTimeout(() => setPhase("line3"), 2500);
    const t6 = setTimeout(() => setPhase("rect4"), 3000);
    const t7 = setTimeout(() => setPhase("logo"), 3800);
    const t8 = setTimeout(() => setPhase("exit"), 6800); // 3 seconds after logo appears
    const t9 = setTimeout(onComplete, 7200);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      clearTimeout(t5); clearTimeout(t6); clearTimeout(t7); clearTimeout(t8); clearTimeout(t9);
    };
  }, [onComplete]);

  const phases = ["rect1", "line1", "rect2", "line2", "rect3", "line3", "rect4", "logo", "exit"];
  const pIdx = phases.indexOf(phase);

  const showRect1 = pIdx >= 0;
  const showLine1 = pIdx >= 1;
  const showRect2 = pIdx >= 2;
  const showLine2 = pIdx >= 3;
  const showRect3 = pIdx >= 4;
  const showLine3 = pIdx >= 5;
  const showRect4 = pIdx >= 6;
  const showLogo = pIdx >= 7;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center px-4 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8", transition: "opacity 0.4s ease-out" }}
    >
      {/* Animation container */}
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {/* Geometric animation - Circular/Wheel flow */}
        <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-64 md:w-80 h-auto">
          {/* Level 1 (Top) */}
          <rect
            x="110" y="10" width="60" height="36" rx="10"
            stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)"
            className="transition-all duration-500"
            style={{
              opacity: showRect1 ? 1 : 0,
              transform: showRect1 ? "scale(1)" : "scale(0.8)",
              transformOrigin: "140px 28px"
            }}
          />

          {/* Lines L1 -> L2 */}
          <line x1="140" y1="46" x2="60" y2="85" stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine1 ? 0.5 : 0 }} />
          <line x1="140" y1="46" x2="140" y2="85" stroke="hsl(27,35%,60%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine1 ? 0.5 : 0 }} />
          <line x1="140" y1="46" x2="220" y2="85" stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine1 ? 0.5 : 0 }} />

          {/* Level 2 (3 Rects) */}
          <rect x="30" y="85" width="60" height="36" rx="10" stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)" className="transition-all duration-500" style={{ opacity: showRect2 ? 1 : 0, transform: showRect2 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "0ms" }} />
          <rect x="110" y="85" width="60" height="36" rx="10" stroke="hsl(27,35%,60%)" strokeWidth="2" fill="hsl(27,40%,96%)" className="transition-all duration-500" style={{ opacity: showRect2 ? 1 : 0, transform: showRect2 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "100ms" }} />
          <rect x="190" y="85" width="60" height="36" rx="10" stroke="hsl(155,30%,65%)" strokeWidth="2" fill="hsl(155,25%,96%)" className="transition-all duration-500" style={{ opacity: showRect2 ? 1 : 0, transform: showRect2 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "200ms" }} />

          {/* Lines L2 -> L3 */}
          <line x1="60" y1="121" x2="60" y2="160" stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine2 ? 0.5 : 0 }} />
          <line x1="140" y1="121" x2="140" y2="160" stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine2 ? 0.5 : 0 }} />
          <line x1="220" y1="121" x2="220" y2="160" stroke="hsl(27,35%,60%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine2 ? 0.5 : 0 }} />

          {/* Level 3 (3 Rects) */}
          <rect x="30" y="160" width="60" height="36" rx="10" stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)" className="transition-all duration-500" style={{ opacity: showRect3 ? 1 : 0, transform: showRect3 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "0ms" }} />
          <rect x="110" y="160" width="60" height="36" rx="10" stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)" className="transition-all duration-500" style={{ opacity: showRect3 ? 1 : 0, transform: showRect3 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "100ms" }} />
          <rect x="190" y="160" width="60" height="36" rx="10" stroke="hsl(27,35%,60%)" strokeWidth="2" fill="hsl(27,40%,96%)" className="transition-all duration-500" style={{ opacity: showRect3 ? 1 : 0, transform: showRect3 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "200ms" }} />

          {/* Lines L3 -> L4 */}
          <line x1="60" y1="196" x2="140" y2="235" stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine3 ? 0.5 : 0 }} />
          <line x1="140" y1="196" x2="140" y2="235" stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine3 ? 0.5 : 0 }} />
          <line x1="220" y1="196" x2="140" y2="235" stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" className="transition-all duration-400" style={{ opacity: showLine3 ? 0.5 : 0 }} />

          {/* Level 4 (Bottom) */}
          <rect x="110" y="235" width="60" height="36" rx="10" stroke="hsl(155,30%,65%)" strokeWidth="2" fill="hsl(155,25%,96%)" className="transition-all duration-500" style={{ opacity: showRect4 ? 1 : 0, transform: showRect4 ? "translateY(0)" : "translateY(-10px)", transitionDelay: "100ms" }} />
        </svg>

        {/* Step 5: Logo */}
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
