import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"building" | "logo" | "exit">("building");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 4800);
    const t2 = setTimeout(() => setPhase("exit"), 6200);
    const t3 = setTimeout(onComplete, 7000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-600 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8" }}
    >
      {/* Logo */}
      <div
        className={`mb-8 text-center transition-all duration-900 ${
          phase === "logo" || phase === "exit" ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"
        }`}
      >
        <span
          className="block text-5xl md:text-6xl tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: "hsl(348,30%,70%)", letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          ר.א
        </span>
        <p className="text-sm md:text-base text-muted-foreground mt-3 tracking-widest uppercase" style={{ fontFamily: "var(--font-apple)", fontWeight: 300, letterSpacing: "0.15em" }}>
          Raphaëlle Enderlin
        </p>
      </div>

      {/* Automation flow diagram */}
      <div className="w-[95vw] max-w-[750px] h-auto aspect-[750/380]">
        <svg viewBox="0 0 750 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

          {/* ═══ LEVEL 1: Root ═══ */}
          <g className="splash-node" style={{ animationDelay: "0.1s" }}>
            <rect x="340" y="10" width="70" height="40" rx="10" stroke="hsl(258,18%,60%)" strokeWidth="1.8" fill="hsl(258,20%,97%)" />
            <circle cx="375" cy="30" r="6" fill="hsl(258,18%,60%)" fillOpacity="0.25" />
          </g>

          {/* ═══ Lines L1 → L2 ═══ */}
          <line x1="358" y1="50" x2="240" y2="100" stroke="hsl(258,18%,60%)" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.45" className="splash-line" style={{ animationDelay: "0.5s" }} />
          <line x1="392" y1="50" x2="510" y2="100" stroke="hsl(155,30%,65%)" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.45" className="splash-line" style={{ animationDelay: "0.6s" }} />

          {/* ═══ LEVEL 2: Two nodes ═══ */}
          <g className="splash-node" style={{ animationDelay: "0.7s" }}>
            <rect x="205" y="100" width="70" height="40" rx="10" stroke="hsl(348,30%,70%)" strokeWidth="1.8" fill="hsl(348,30%,97%)" />
            <line x1="220" y1="116" x2="260" y2="116" stroke="hsl(348,30%,70%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <line x1="220" y1="128" x2="252" y2="128" stroke="hsl(348,30%,70%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
          </g>
          <g className="splash-node" style={{ animationDelay: "0.85s" }}>
            <rect x="475" y="100" width="70" height="40" rx="10" stroke="hsl(155,30%,65%)" strokeWidth="1.8" fill="hsl(155,25%,96%)" />
            <path d="M504 112 L496 124 H506 L500 134 L516 118 H506 Z" stroke="hsl(155,30%,65%)" strokeWidth="1" fill="hsl(155,30%,65%)" fillOpacity="0.15" />
          </g>

          {/* ═══ Lines L2 → L3 ═══ */}
          <line x1="222" y1="140" x2="140" y2="200" stroke="hsl(348,30%,70%)" strokeWidth="1.2" strokeDasharray="4 5" opacity="0.4" className="splash-line" style={{ animationDelay: "1.1s" }} />
          <line x1="258" y1="140" x2="310" y2="200" stroke="hsl(27,35%,60%)" strokeWidth="1.2" strokeDasharray="4 5" opacity="0.4" className="splash-line" style={{ animationDelay: "1.2s" }} />
          <line x1="492" y1="140" x2="440" y2="200" stroke="hsl(155,30%,65%)" strokeWidth="1.2" strokeDasharray="4 5" opacity="0.4" className="splash-line" style={{ animationDelay: "1.3s" }} />
          <line x1="528" y1="140" x2="610" y2="200" stroke="hsl(258,18%,60%)" strokeWidth="1.2" strokeDasharray="4 5" opacity="0.4" className="splash-line" style={{ animationDelay: "1.4s" }} />

          {/* ═══ LEVEL 3: Four nodes ═══ */}
          <g className="splash-node" style={{ animationDelay: "1.5s" }}>
            <rect x="105" y="200" width="70" height="40" rx="10" stroke="hsl(27,35%,60%)" strokeWidth="1.8" fill="hsl(27,40%,96%)" />
            <rect x="122" y="212" width="18" height="14" rx="3" stroke="hsl(27,35%,60%)" strokeWidth="0.9" fill="none" />
            <path d="M122 214 L131 222 L140 214" stroke="hsl(27,35%,60%)" strokeWidth="0.8" fill="none" />
          </g>
          <g className="splash-node" style={{ animationDelay: "1.65s" }}>
            <rect x="275" y="200" width="70" height="40" rx="10" stroke="hsl(348,30%,70%)" strokeWidth="1.8" fill="hsl(348,30%,97%)" />
            <circle cx="310" cy="220" r="8" stroke="hsl(348,30%,70%)" strokeWidth="0.9" fill="none" opacity="0.5" />
            <circle cx="310" cy="220" r="3.5" fill="hsl(348,30%,70%)" fillOpacity="0.25" />
          </g>
          <g className="splash-node" style={{ animationDelay: "1.8s" }}>
            <rect x="405" y="200" width="70" height="40" rx="10" stroke="hsl(155,30%,65%)" strokeWidth="1.8" fill="hsl(155,25%,96%)" />
            <line x1="420" y1="216" x2="460" y2="216" stroke="hsl(155,30%,65%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
            <line x1="420" y1="228" x2="452" y2="228" stroke="hsl(155,30%,65%)" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
          </g>
          <g className="splash-node" style={{ animationDelay: "1.95s" }}>
            <rect x="575" y="200" width="70" height="40" rx="10" stroke="hsl(258,18%,60%)" strokeWidth="1.8" fill="hsl(258,20%,97%)" />
            <path d="M604 212 L598 222 H606 L602 230 L614 218 H606 Z" stroke="hsl(258,18%,60%)" strokeWidth="0.8" fill="hsl(258,18%,60%)" fillOpacity="0.12" />
          </g>

          {/* ═══ Lines L3 → L4 ═══ */}
          {/* From node 1 */}
          <line x1="125" y1="240" x2="65" y2="300" stroke="hsl(27,35%,60%)" strokeWidth="1.1" strokeDasharray="4 5" opacity="0.35" className="splash-line" style={{ animationDelay: "2.2s" }} />
          <line x1="155" y1="240" x2="175" y2="300" stroke="hsl(348,30%,70%)" strokeWidth="1.1" strokeDasharray="4 5" opacity="0.35" className="splash-line" style={{ animationDelay: "2.3s" }} />
          {/* From node 2 */}
          <line x1="295" y1="240" x2="255" y2="300" stroke="hsl(348,30%,70%)" strokeWidth="1.1" strokeDasharray="4 5" opacity="0.35" className="splash-line" style={{ animationDelay: "2.4s" }} />
          <line x1="325" y1="240" x2="355" y2="300" stroke="hsl(155,30%,65%)" strokeWidth="1.1" strokeDasharray="4 5" opacity="0.35" className="splash-line" style={{ animationDelay: "2.5s" }} />
          {/* From node 3 */}
          <line x1="425" y1="240" x2="415" y2="300" stroke="hsl(155,30%,65%)" strokeWidth="1.1" strokeDasharray="4 5" opacity="0.35" className="splash-line" style={{ animationDelay: "2.6s" }} />
          <line x1="455" y1="240" x2="505" y2="300" stroke="hsl(258,18%,60%)" strokeWidth="1.1" strokeDasharray="4 5" opacity="0.35" className="splash-line" style={{ animationDelay: "2.7s" }} />
          {/* From node 4 */}
          <line x1="595" y1="240" x2="585" y2="300" stroke="hsl(258,18%,60%)" strokeWidth="1.1" strokeDasharray="4 5" opacity="0.35" className="splash-line" style={{ animationDelay: "2.8s" }} />
          <line x1="625" y1="240" x2="685" y2="300" stroke="hsl(27,35%,60%)" strokeWidth="1.1" strokeDasharray="4 5" opacity="0.35" className="splash-line" style={{ animationDelay: "2.9s" }} />

          {/* ═══ LEVEL 4: Eight nodes ═══ */}
          <g className="splash-node" style={{ animationDelay: "3.0s" }}>
            <rect x="35" y="300" width="60" height="34" rx="8" stroke="hsl(27,35%,60%)" strokeWidth="1.5" fill="hsl(27,40%,96%)" />
            <line x1="48" y1="313" x2="82" y2="313" stroke="hsl(27,35%,60%)" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
            <line x1="48" y1="323" x2="75" y2="323" stroke="hsl(27,35%,60%)" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.15s" }}>
            <rect x="145" y="300" width="60" height="34" rx="8" stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="hsl(348,30%,97%)" />
            <circle cx="175" cy="317" r="5" fill="hsl(348,30%,70%)" fillOpacity="0.2" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.3s" }}>
            <rect x="225" y="300" width="60" height="34" rx="8" stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="hsl(155,25%,96%)" />
            <circle cx="255" cy="317" r="5" stroke="hsl(155,30%,65%)" strokeWidth="0.8" fill="none" opacity="0.4" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.45s" }}>
            <rect x="325" y="300" width="60" height="34" rx="8" stroke="hsl(258,18%,60%)" strokeWidth="1.5" fill="hsl(258,20%,97%)" />
            <line x1="338" y1="313" x2="372" y2="313" stroke="hsl(258,18%,60%)" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
            <line x1="338" y1="323" x2="365" y2="323" stroke="hsl(258,18%,60%)" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.6s" }}>
            <rect x="390" y="300" width="55" height="34" rx="8" stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="hsl(155,25%,96%)" />
            <path d="M412 308 L408 316 H414 L411 322 L420 314 H414 Z" stroke="hsl(155,30%,65%)" strokeWidth="0.7" fill="hsl(155,30%,65%)" fillOpacity="0.12" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.75s" }}>
            <rect x="478" y="300" width="55" height="34" rx="8" stroke="hsl(27,35%,60%)" strokeWidth="1.5" fill="hsl(27,40%,96%)" />
            <rect x="492" y="309" width="14" height="11" rx="2" stroke="hsl(27,35%,60%)" strokeWidth="0.7" fill="none" />
            <path d="M492 311 L499 317 L506 311" stroke="hsl(27,35%,60%)" strokeWidth="0.6" fill="none" />
          </g>
          <g className="splash-node" style={{ animationDelay: "3.9s" }}>
            <rect x="558" y="300" width="55" height="34" rx="8" stroke="hsl(258,18%,60%)" strokeWidth="1.5" fill="hsl(258,20%,97%)" />
            <circle cx="585" cy="317" r="5" fill="hsl(258,18%,60%)" fillOpacity="0.2" />
          </g>
          <g className="splash-node" style={{ animationDelay: "4.05s" }}>
            <rect x="655" y="300" width="60" height="34" rx="8" stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="hsl(348,30%,97%)" />
            <line x1="668" y1="313" x2="702" y2="313" stroke="hsl(348,30%,70%)" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
            <line x1="668" y1="323" x2="695" y2="323" stroke="hsl(348,30%,70%)" strokeWidth="0.9" strokeLinecap="round" opacity="0.25" />
          </g>

          {/* Traveling data pulses */}
          <circle r="3.5" fill="hsl(155,30%,65%)" opacity="0.6">
            <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M375,30 L240,120 L140,220 L65,317" />
          </circle>
          <circle r="3" fill="hsl(258,18%,60%)" opacity="0.5">
            <animateMotion dur="3.2s" repeatCount="indefinite" begin="2.5s" path="M375,30 L510,120 L610,220 L685,317" />
          </circle>
          <circle r="2.5" fill="hsl(348,30%,70%)" opacity="0.5">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="3s" path="M375,30 L240,120 L310,220 L355,317" />
          </circle>
          <circle r="2.5" fill="hsl(27,35%,60%)" opacity="0.45">
            <animateMotion dur="3.3s" repeatCount="indefinite" begin="3.3s" path="M375,30 L510,120 L440,220 L505,317" />
          </circle>

          {/* Floating particles */}
          <circle className="splash-particle" cx="20" cy="170" r="2.5" fill="hsl(258,18%,60%)" opacity="0.3" />
          <circle className="splash-particle" cx="730" cy="180" r="2.5" fill="hsl(155,30%,65%)" opacity="0.3" style={{ animationDelay: "0.7s" }} />
          <circle className="splash-particle" cx="375" cy="365" r="2" fill="hsl(348,30%,70%)" opacity="0.25" style={{ animationDelay: "1.2s" }} />
          <circle className="splash-particle" cx="120" cy="350" r="2" fill="hsl(27,35%,60%)" opacity="0.2" style={{ animationDelay: "1.8s" }} />
          <circle className="splash-particle" cx="630" cy="355" r="2" fill="hsl(258,18%,60%)" opacity="0.2" style={{ animationDelay: "2.2s" }} />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
