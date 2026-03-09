import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"rect1" | "line" | "rect2" | "logo" | "exit">("rect1");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("line"), 600);
    const t2 = setTimeout(() => setPhase("rect2"), 1200);
    const t3 = setTimeout(() => setPhase("logo"), 2000);
    const t4 = setTimeout(() => setPhase("exit"), 3200);
    const t5 = setTimeout(onComplete, 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [onComplete]);

  const showRect1 = phase !== "rect1" || true;
  const showLine = phase === "line" || phase === "rect2" || phase === "logo" || phase === "exit";
  const showRect2 = phase === "rect2" || phase === "logo" || phase === "exit";
  const showLogo = phase === "logo" || phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center px-4 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8", transition: "opacity 0.4s ease-out" }}
    >
      {/* Animation container */}
      <div className="flex flex-col items-center gap-8">
        {/* Geometric animation */}
        <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 md:w-64 h-auto">
          {/* Step 1: First rectangle */}
          <rect
            x="70" y="10" width="60" height="36" rx="10"
            stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)"
            className="transition-all duration-500"
            style={{
              opacity: showRect1 ? 1 : 0,
              transform: showRect1 ? "scale(1)" : "scale(0.8)",
              transformOrigin: "100px 28px"
            }}
          />

          {/* Step 2: Line going down */}
          <line
            x1="100" y1="46" x2="100" y2="75"
            stroke="hsl(348,30%,70%)" strokeWidth="2" strokeLinecap="round"
            className="transition-all duration-400"
            style={{
              opacity: showLine ? 0.6 : 0,
              strokeDasharray: showLine ? "0" : "30",
              strokeDashoffset: showLine ? "0" : "30"
            }}
          />

          {/* Step 3: Two rectangles */}
          <rect
            x="25" y="85" width="60" height="36" rx="10"
            stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)"
            className="transition-all duration-500"
            style={{
              opacity: showRect2 ? 1 : 0,
              transform: showRect2 ? "translateY(0)" : "translateY(-10px)",
              transitionDelay: "0ms"
            }}
          />
          <rect
            x="115" y="85" width="60" height="36" rx="10"
            stroke="hsl(155,30%,65%)" strokeWidth="2" fill="hsl(155,25%,96%)"
            className="transition-all duration-500"
            style={{
              opacity: showRect2 ? 1 : 0,
              transform: showRect2 ? "translateY(0)" : "translateY(-10px)",
              transitionDelay: "150ms"
            }}
          />

          {/* Connection lines to bottom rectangles */}
          <line
            x1="100" y1="75" x2="55" y2="85"
            stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeLinecap="round"
            style={{ opacity: showRect2 ? 0.4 : 0, transition: "opacity 0.3s" }}
          />
          <line
            x1="100" y1="75" x2="145" y2="85"
            stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeLinecap="round"
            style={{ opacity: showRect2 ? 0.4 : 0, transition: "opacity 0.3s" }}
          />
        </svg>

        {/* Step 4: Logo */}
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
