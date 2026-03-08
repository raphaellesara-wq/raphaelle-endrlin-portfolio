import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"building" | "logo" | "exit">("building");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 2400);
    const t2 = setTimeout(() => setPhase("exit"), 3600);
    const t3 = setTimeout(onComplete, 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8" }}
    >
      {/* Logo above animation */}
      <div
        className={`mb-8 text-center transition-all duration-700 ${
          phase === "logo" || phase === "exit" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <span
          className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-apple)", color: "hsl(348,30%,70%)" }}
        >
          ר.א
        </span>
        <p className="text-xs md:text-sm text-muted-foreground mt-1 tracking-wide">
          Raphaëlle Enderlin
        </p>
      </div>

      {/* Automation flow diagram */}
      <div className="w-[320px] h-[200px] md:w-[480px] md:h-[260px]">
        <svg
          viewBox="0 0 480 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* === LEVEL 1: Root node === */}
          <g className="splash-node" style={{ animationDelay: "0.1s" }}>
            <rect x="210" y="10" width="60" height="36" rx="8" stroke="hsl(258,18%,60%)" strokeWidth="1.5" fill="hsl(258,20%,97%)" />
            <circle cx="240" cy="28" r="5" fill="hsl(258,18%,60%)" fillOpacity="0.25" />
          </g>

          {/* === Lines from root to level 2 === */}
          <line x1="228" y1="46" x2="150" y2="90" stroke="hsl(258,18%,60%)" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.45"
            className="splash-line" style={{ animationDelay: "0.5s" }} />
          <line x1="252" y1="46" x2="330" y2="90" stroke="hsl(155,30%,65%)" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.45"
            className="splash-line" style={{ animationDelay: "0.6s" }} />

          {/* === LEVEL 2: Two nodes === */}
          <g className="splash-node" style={{ animationDelay: "0.7s" }}>
            <rect x="120" y="90" width="60" height="36" rx="8" stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="hsl(348,30%,97%)" />
            <line x1="135" y1="104" x2="165" y2="104" stroke="hsl(348,30%,70%)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            <line x1="135" y1="114" x2="158" y2="114" stroke="hsl(348,30%,70%)" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
          </g>
          <g className="splash-node" style={{ animationDelay: "0.8s" }}>
            <rect x="300" y="90" width="60" height="36" rx="8" stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="hsl(155,25%,96%)" />
            <path d="M324 102 L318 112 H326 L322 120 L334 108 H326 Z" stroke="hsl(155,30%,65%)" strokeWidth="0.8" fill="hsl(155,30%,65%)" fillOpacity="0.15" />
          </g>

          {/* === Lines from level 2 to level 3 === */}
          {/* Left node → two children */}
          <line x1="135" y1="126" x2="70" y2="180" stroke="hsl(348,30%,70%)" strokeWidth="1.1" strokeDasharray="4 4" opacity="0.4"
            className="splash-line" style={{ animationDelay: "1.1s" }} />
          <line x1="165" y1="126" x2="190" y2="180" stroke="hsl(27,35%,60%)" strokeWidth="1.1" strokeDasharray="4 4" opacity="0.4"
            className="splash-line" style={{ animationDelay: "1.2s" }} />
          {/* Right node → two children */}
          <line x1="315" y1="126" x2="290" y2="180" stroke="hsl(155,30%,65%)" strokeWidth="1.1" strokeDasharray="4 4" opacity="0.4"
            className="splash-line" style={{ animationDelay: "1.3s" }} />
          <line x1="345" y1="126" x2="410" y2="180" stroke="hsl(258,18%,60%)" strokeWidth="1.1" strokeDasharray="4 4" opacity="0.4"
            className="splash-line" style={{ animationDelay: "1.4s" }} />

          {/* === LEVEL 3: Four nodes === */}
          <g className="splash-node" style={{ animationDelay: "1.5s" }}>
            <rect x="40" y="180" width="60" height="36" rx="8" stroke="hsl(27,35%,60%)" strokeWidth="1.5" fill="hsl(27,40%,96%)" />
            <rect x="53" y="191" width="16" height="12" rx="3" stroke="hsl(27,35%,60%)" strokeWidth="0.8" fill="none" />
            <path d="M53 193 L61 199 L69 193" stroke="hsl(27,35%,60%)" strokeWidth="0.7" fill="none" />
          </g>
          <g className="splash-node" style={{ animationDelay: "1.6s" }}>
            <rect x="160" y="180" width="60" height="36" rx="8" stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="hsl(348,30%,97%)" />
            <circle cx="190" cy="198" r="7" stroke="hsl(348,30%,70%)" strokeWidth="0.8" fill="none" opacity="0.5" />
            <circle cx="190" cy="198" r="3" fill="hsl(348,30%,70%)" fillOpacity="0.25" />
          </g>
          <g className="splash-node" style={{ animationDelay: "1.7s" }}>
            <rect x="260" y="180" width="60" height="36" rx="8" stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="hsl(155,25%,96%)" />
            <line x1="275" y1="194" x2="305" y2="194" stroke="hsl(155,30%,65%)" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
            <line x1="275" y1="204" x2="298" y2="204" stroke="hsl(155,30%,65%)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          </g>
          <g className="splash-node" style={{ animationDelay: "1.8s" }}>
            <rect x="380" y="180" width="60" height="36" rx="8" stroke="hsl(258,18%,60%)" strokeWidth="1.5" fill="hsl(258,20%,97%)" />
            <path d="M404 192 L398 202 H406 L402 210 L414 198 H406 Z" stroke="hsl(258,18%,60%)" strokeWidth="0.7" fill="hsl(258,18%,60%)" fillOpacity="0.12" />
          </g>

          {/* Traveling data pulses */}
          <circle r="3" fill="hsl(155,30%,65%)" opacity="0.6">
            <animateMotion dur="2s" repeatCount="indefinite" begin="1.5s" path="M240,28 L150,108 L70,198" />
          </circle>
          <circle r="2.5" fill="hsl(258,18%,60%)" opacity="0.5">
            <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.8s" path="M240,28 L330,108 L410,198" />
          </circle>
          <circle r="2" fill="hsl(348,30%,70%)" opacity="0.5">
            <animateMotion dur="2.4s" repeatCount="indefinite" begin="2s" path="M240,28 L150,108 L190,198" />
          </circle>

          {/* Floating particles */}
          <circle className="splash-particle" cx="30" cy="130" r="2" fill="hsl(258,18%,60%)" opacity="0.3" />
          <circle className="splash-particle" cx="450" cy="140" r="2" fill="hsl(155,30%,65%)" opacity="0.3" style={{ animationDelay: "0.7s" }} />
          <circle className="splash-particle" cx="240" cy="245" r="1.5" fill="hsl(348,30%,70%)" opacity="0.25" style={{ animationDelay: "1.2s" }} />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
