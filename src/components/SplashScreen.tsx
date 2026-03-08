import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"building" | "logo" | "exit">("building");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 2200);
    const t2 = setTimeout(() => setPhase("exit"), 3400);
    const t3 = setTimeout(onComplete, 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8" }}
    >
      <div className="relative w-[340px] h-[280px] md:w-[480px] md:h-[340px]">
        {/* Automation flow SVG */}
        <svg
          viewBox="0 0 480 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Connection lines - draw themselves */}
          <line x1="90" y1="120" x2="200" y2="80" stroke="hsl(258,18%,60%)" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5"
            className="splash-line" style={{ animationDelay: "0.3s" }} />
          <line x1="200" y1="80" x2="320" y2="120" stroke="hsl(155,30%,65%)" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5"
            className="splash-line" style={{ animationDelay: "0.5s" }} />
          <line x1="320" y1="120" x2="420" y2="80" stroke="hsl(348,30%,70%)" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.5"
            className="splash-line" style={{ animationDelay: "0.7s" }} />
          <line x1="90" y1="120" x2="200" y2="200" stroke="hsl(27,35%,60%)" strokeWidth="1" strokeDasharray="3 5" opacity="0.35"
            className="splash-line" style={{ animationDelay: "0.9s" }} />
          <line x1="200" y1="200" x2="320" y2="120" stroke="hsl(27,35%,60%)" strokeWidth="1" strokeDasharray="3 5" opacity="0.35"
            className="splash-line" style={{ animationDelay: "1.1s" }} />
          <line x1="320" y1="120" x2="420" y2="200" stroke="hsl(258,18%,60%)" strokeWidth="1" strokeDasharray="3 5" opacity="0.3"
            className="splash-line" style={{ animationDelay: "1.3s" }} />

          {/* Node 1 — circle (trigger) */}
          <g className="splash-node" style={{ animationDelay: "0.2s" }}>
            <circle cx="90" cy="120" r="22" stroke="hsl(258,18%,60%)" strokeWidth="1.5" fill="hsl(258,20%,97%)" />
            <circle cx="90" cy="120" r="8" fill="hsl(258,18%,60%)" fillOpacity="0.2" />
            <circle cx="90" cy="120" r="3.5" fill="hsl(258,18%,60%)" fillOpacity="0.5" />
          </g>

          {/* Node 2 — rounded square (process) */}
          <g className="splash-node" style={{ animationDelay: "0.5s" }}>
            <rect x="177" y="57" width="46" height="46" rx="10" stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="hsl(155,25%,96%)" />
            <path d="M195 72 L189 83 H197 L193 92 L205 79 H197 Z" stroke="hsl(155,30%,65%)" strokeWidth="1" fill="hsl(155,30%,65%)" fillOpacity="0.15" />
          </g>

          {/* Node 3 — diamond (decision) */}
          <g className="splash-node" style={{ animationDelay: "0.8s" }}>
            <path d="M320 96 L344 120 L320 144 L296 120 Z" stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="hsl(348,30%,97%)" />
            <circle cx="320" cy="120" r="6" fill="hsl(348,30%,70%)" fillOpacity="0.25" />
          </g>

          {/* Node 4 — circle (output) */}
          <g className="splash-node" style={{ animationDelay: "1.1s" }}>
            <circle cx="420" cy="80" r="20" stroke="hsl(27,35%,60%)" strokeWidth="1.5" fill="hsl(27,40%,96%)" />
            <rect x="410" y="72" width="20" height="16" rx="3" stroke="hsl(27,35%,60%)" strokeWidth="1" fill="none" />
            <path d="M410 75 L420 82 L430 75" stroke="hsl(27,35%,60%)" strokeWidth="0.8" fill="none" />
          </g>

          {/* Node 5 — bottom left (data) */}
          <g className="splash-node" style={{ animationDelay: "1s" }}>
            <circle cx="200" cy="200" r="18" stroke="hsl(27,35%,60%)" strokeWidth="1.5" fill="hsl(27,40%,96%)" />
            <circle cx="200" cy="200" r="7" stroke="hsl(27,35%,60%)" strokeWidth="0.8" fill="none" opacity="0.5" />
            <circle cx="200" cy="200" r="3" fill="hsl(27,35%,60%)" fillOpacity="0.35" />
          </g>

          {/* Node 6 — bottom right */}
          <g className="splash-node" style={{ animationDelay: "1.4s" }}>
            <rect x="398" y="180" width="44" height="40" rx="8" stroke="hsl(258,18%,60%)" strokeWidth="1.5" fill="hsl(258,20%,97%)" />
            <line x1="410" y1="194" x2="430" y2="194" stroke="hsl(258,18%,60%)" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
            <line x1="410" y1="204" x2="425" y2="204" stroke="hsl(258,18%,60%)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          </g>

          {/* Floating particles */}
          <circle className="splash-particle" cx="150" cy="60" r="2.5" fill="hsl(258,18%,60%)" opacity="0.4" />
          <circle className="splash-particle" cx="380" cy="150" r="2" fill="hsl(155,30%,65%)" opacity="0.4" style={{ animationDelay: "0.5s" }} />
          <circle className="splash-particle" cx="260" cy="240" r="2" fill="hsl(348,30%,70%)" opacity="0.35" style={{ animationDelay: "1s" }} />
          <circle className="splash-particle" cx="130" cy="200" r="1.5" fill="hsl(27,35%,60%)" opacity="0.3" style={{ animationDelay: "1.5s" }} />

          {/* Data pulse traveling along lines */}
          <circle r="3" fill="hsl(155,30%,65%)" opacity="0.7">
            <animateMotion dur="2s" repeatCount="indefinite" begin="0.8s" path="M90,120 L200,80 L320,120 L420,80" />
          </circle>
          <circle r="2.5" fill="hsl(258,18%,60%)" opacity="0.5">
            <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s" path="M90,120 L200,200 L320,120 L420,200" />
          </circle>
        </svg>

        {/* Logo text — fades in after flow builds */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
            phase === "logo" || phase === "exit" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight" style={{ fontFamily: "var(--font-apple)" }}>
            ר.א
          </span>
          <span className="text-xs md:text-sm text-muted-foreground mt-1 tracking-wide">
            Raphaëlle Enderlin
          </span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
