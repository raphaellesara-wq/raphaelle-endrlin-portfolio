import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"building" | "logo" | "exit">("building");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 4800);
    const t2 = setTimeout(() => setPhase("exit"), 6800);
    const t3 = setTimeout(onComplete, 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8", transition: "opacity 2.2s ease-out" }}
    >
      {/* Logo — above animation */}
      <div
        className={`mb-8 text-center transition-all duration-1000 ${
          phase === "logo" || phase === "exit" ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"
        }`}
      >
        <span
          className="block text-5xl md:text-6xl tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: "hsl(348,30%,70%)", letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          R.E
        </span>
        <p className="text-xs md:text-sm text-muted-foreground mt-3 tracking-widest uppercase" style={{ fontFamily: "var(--font-apple)", fontWeight: 300, letterSpacing: "0.18em" }}>
          Raphaëlle Enderlin
        </p>
      </div>

      {/* Automation flow — wide & horizontal */}
      <div className="w-[98vw] max-w-[1600px] h-auto" style={{ aspectRatio: "1200/280" }}>
        <svg viewBox="0 0 1200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

          {/* ═══ LEVEL 1: Root ═══ */}
          <g className="splash-node" style={{ animationDelay: "0.2s" }}>
            <rect x="550" y="10" width="100" height="52" rx="14" stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)" />
            <circle cx="600" cy="36" r="9" fill="hsl(258,18%,60%)" fillOpacity="0.2" />
            <circle cx="600" cy="36" r="4" fill="hsl(258,18%,60%)" fillOpacity="0.45" />
          </g>

          {/* ═══ Lines L1 → L2 ═══ */}
          <line x1="570" y1="62" x2="350" y2="115" stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45" className="splash-line" style={{ animationDelay: "0.8s" }} />
          <line x1="630" y1="62" x2="850" y2="115" stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45" className="splash-line" style={{ animationDelay: "1.0s" }} />

          {/* ═══ LEVEL 2: Two nodes ═══ */}
          <g className="splash-node" style={{ animationDelay: "1.2s" }}>
            <rect x="300" y="115" width="100" height="52" rx="14" stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)" />
            <line x1="320" y1="133" x2="380" y2="133" stroke="hsl(348,30%,70%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
            <line x1="320" y1="148" x2="368" y2="148" stroke="hsl(348,30%,70%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.3" />
          </g>
          <g className="splash-node" style={{ animationDelay: "1.4s" }}>
            <rect x="800" y="115" width="100" height="52" rx="14" stroke="hsl(155,30%,65%)" strokeWidth="2" fill="hsl(155,25%,96%)" />
            <path d="M842 128 L832 145 H846 L838 158 L858 138 H844 Z" stroke="hsl(155,30%,65%)" strokeWidth="1.2" fill="hsl(155,30%,65%)" fillOpacity="0.15" />
          </g>

          {/* ═══ Lines L2 → L3 ═══ */}
          <line x1="320" y1="167" x2="130" y2="215" stroke="hsl(348,30%,70%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "1.8s" }} />
          <line x1="380" y1="167" x2="480" y2="215" stroke="hsl(27,35%,60%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.0s" }} />
          <line x1="820" y1="167" x2="720" y2="215" stroke="hsl(155,30%,65%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.2s" }} />
          <line x1="880" y1="167" x2="1060" y2="215" stroke="hsl(258,18%,60%)" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.4" className="splash-line" style={{ animationDelay: "2.4s" }} />

          {/* ═══ LEVEL 3: Four nodes — spread wide ═══ */}
          <g className="splash-node" style={{ animationDelay: "2.6s" }}>
            <rect x="80" y="215" width="100" height="52" rx="14" stroke="hsl(27,35%,60%)" strokeWidth="2" fill="hsl(27,40%,96%)" />
            <rect x="108" y="228" width="24" height="18" rx="4" stroke="hsl(27,35%,60%)" strokeWidth="1.1" fill="none" />
            <path d="M108 231 L120 241 L132 231" stroke="hsl(27,35%,60%)" strokeWidth="0.9" fill="none" />
          </g>
          <g className="splash-node" style={{ animationDelay: "2.9s" }}>
            <rect x="430" y="215" width="100" height="52" rx="14" stroke="hsl(348,30%,70%)" strokeWidth="2" fill="hsl(348,30%,97%)" />
            <circle cx="480" cy="241" r="10" stroke="hsl(348,30%,70%)" strokeWidth="1" fill="none" opacity="0.45" />
            <circle cx="480" cy="241" r="4.5" fill="hsl(348,30%,70%)" fillOpacity="0.25" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.2s" }}>
            <rect x="670" y="215" width="100" height="52" rx="14" stroke="hsl(155,30%,65%)" strokeWidth="2" fill="hsl(155,25%,96%)" />
            <line x1="690" y1="235" x2="750" y2="235" stroke="hsl(155,30%,65%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.45" />
            <line x1="690" y1="250" x2="738" y2="250" stroke="hsl(155,30%,65%)" strokeWidth="1.3" strokeLinecap="round" opacity="0.3" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.5s" }}>
            <rect x="1010" y="215" width="100" height="52" rx="14" stroke="hsl(258,18%,60%)" strokeWidth="2" fill="hsl(258,20%,97%)" />
            <path d="M1052 228 L1044 243 H1056 L1050 255 L1068 239 H1056 Z" stroke="hsl(258,18%,60%)" strokeWidth="0.9" fill="hsl(258,18%,60%)" fillOpacity="0.12" />
          </g>

          {/* Traveling data pulses */}
          <circle r="4.5" fill="hsl(155,30%,65%)" opacity="0.55">
            <animateMotion dur="4s" repeatCount="indefinite" begin="3s" path="M600,36 L350,141 L130,241" />
          </circle>
          <circle r="4" fill="hsl(258,18%,60%)" opacity="0.45">
            <animateMotion dur="4.5s" repeatCount="indefinite" begin="3.5s" path="M600,36 L850,141 L1060,241" />
          </circle>
          <circle r="3.5" fill="hsl(348,30%,70%)" opacity="0.5">
            <animateMotion dur="4.2s" repeatCount="indefinite" begin="3.8s" path="M600,36 L350,141 L480,241" />
          </circle>
          <circle r="3" fill="hsl(27,35%,60%)" opacity="0.4">
            <animateMotion dur="4.8s" repeatCount="indefinite" begin="4s" path="M600,36 L850,141 L720,241" />
          </circle>

          {/* Floating particles */}
          <circle className="splash-particle" cx="30" cy="140" r="3" fill="hsl(258,18%,60%)" opacity="0.25" />
          <circle className="splash-particle" cx="1170" cy="160" r="3" fill="hsl(155,30%,65%)" opacity="0.25" style={{ animationDelay: "0.7s" }} />
          <circle className="splash-particle" cx="600" cy="275" r="2.5" fill="hsl(348,30%,70%)" opacity="0.2" style={{ animationDelay: "1.2s" }} />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
