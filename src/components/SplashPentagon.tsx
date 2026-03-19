/**
 * Mobile splash – animated pentagon automation illustration
 * with R.E logo at centre. Matches AboutIllustration style.
 */
import { useState, useEffect } from "react";

type PentaPhase = "idle" | "edges" | "nodes" | "gear" | "logo" | "exit";

const SplashPentagon = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<PentaPhase>("idle");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("edges"), 300),
      setTimeout(() => setPhase("nodes"), 1800),
      setTimeout(() => setPhase("gear"), 3200),
      setTimeout(() => setPhase("logo"), 4200),
      setTimeout(() => setPhase("exit"), 7200),
      setTimeout(onComplete, 7900),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const phases: PentaPhase[] = ["idle", "edges", "nodes", "gear", "logo", "exit"];
  const pIdx = phases.indexOf(phase);

  const showEdges = pIdx >= 1;
  const showNodes = pIdx >= 2;
  const showGear  = pIdx >= 3;
  const showLogo  = pIdx >= 4;

  const verts: [number, number][] = [
    [160, 80],
    [255, 149],
    [219, 261],
    [101, 261],
    [65, 149],
  ];

  const colors = ["#E03468", "#D4834A", "#3AAA80", "#9070C0", "#3AAAC0"];
  const icons = [
    // V0 Lightning
    <path key="i0" d="M163 69 L155 83 L161 83 L157 91 L165 77 L160 77Z" fill="white" opacity="0.92" />,
    // V1 Gear
    <>
      <circle cx="255" cy="149" r="9" fill="none" stroke="white" strokeWidth="2.5" opacity="0.92" />
      <rect x="252" y="137" width="6" height="5" rx="1.5" fill="white" opacity="0.92" />
      <rect x="252" y="157" width="6" height="5" rx="1.5" fill="white" opacity="0.92" />
      <rect x="243" y="146" width="5" height="6" rx="1.5" fill="white" opacity="0.92" />
      <rect x="263" y="146" width="5" height="6" rx="1.5" fill="white" opacity="0.92" />
      <circle cx="255" cy="149" r="4" fill="white" opacity="0.92" />
    </>,
    // V2 Check
    <path key="i2" d="M209 261 L216 269 L229 251" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.92" />,
    // V3 Bars
    <>
      <line x1="92" y1="255" x2="110" y2="255" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.92" />
      <line x1="92" y1="261" x2="110" y2="261" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.92" />
      <line x1="92" y1="267" x2="110" y2="267" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.92" />
    </>,
    // V4 Chevrons
    <>
      <path d="M55 142 L63 149 L55 156" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.92" />
      <path d="M63 142 L71 149 L63 156" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.92" />
    </>,
  ];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 px-4 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8", transition: "opacity 0.7s ease-out" }}
    >
      <style>{`
        @keyframes pentaEdgeDraw {
          from { stroke-dashoffset: 200; opacity: 0; }
          to   { stroke-dashoffset: 0; opacity: 0.7; }
        }
        @keyframes pentaNodePop {
          0%   { transform: scale(0); opacity: 0; }
          70%  { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pentaFlowDash {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -48; }
        }
        @keyframes pentaGearSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pentaPulseRing {
          0%, 100% { r: 38; opacity: 0.18; }
          50%      { r: 48; opacity: 0; }
        }
        .penta-edge {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: pentaEdgeDraw 1s ease-out forwards;
        }
        .penta-flow {
          stroke-dasharray: 9 7;
          animation: pentaFlowDash 1.5s linear infinite;
        }
        .penta-node {
          transform-origin: center;
          animation: pentaNodePop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards;
          transform: scale(0);
          opacity: 0;
        }
      `}</style>

      {/* Logo text */}
      <div
        className="text-center z-10 transition-all duration-700"
        style={{
          opacity: showLogo ? 1 : 0,
          transform: showLogo ? "translateY(0) scale(1)" : "translateY(6px) scale(0.96)",
        }}
      >
        <span
          className="block text-5xl tracking-tight"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            color: "hsl(348,30%,70%)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          R.E
        </span>
        <p
          className="text-xs text-muted-foreground mt-2 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-apple)", fontWeight: 300, letterSpacing: "0.18em" }}
        >
          Raphaëlle Enderlin
        </p>
      </div>

      {/* Pentagon SVG */}
      <svg viewBox="0 0 320 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[80vw] max-w-[320px] h-auto">
        {/* Pentagon background */}
        <path
          d={`M ${verts.map(v => v.join(",")).join(" L ")} Z`}
          fill="rgba(144,112,192,0.06)"
          stroke="#9070C0"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          opacity={showEdges ? "0.35" : "0"}
          style={{ transition: "opacity 0.5s" }}
        />

        {/* Animated flow edges */}
        {showEdges && verts.map((v, i) => {
          const n = verts[(i + 1) % 5];
          return (
            <line
              key={`e-${i}`}
              x1={v[0]} y1={v[1]} x2={n[0]} y2={n[1]}
              stroke={colors[i]} strokeWidth="2.5" strokeLinecap="round"
              className="penta-edge"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          );
        })}

        {/* Flow dash animation on edges */}
        {showNodes && verts.map((v, i) => {
          const n = verts[(i + 1) % 5];
          return (
            <line
              key={`f-${i}`}
              x1={v[0]} y1={v[1]} x2={n[0]} y2={n[1]}
              stroke={colors[i]} strokeWidth="2.5" strokeLinecap="round"
              opacity="0.7"
              className="penta-flow"
              style={{ animationDelay: `${i * 280}ms` }}
            />
          );
        })}

        {/* Glow rings */}
        {showNodes && verts.map((v, i) => (
          <circle key={`g-${i}`} cx={v[0]} cy={v[1]} r="26" fill={colors[i]} opacity="0.14">
            <animate attributeName="r" values="24;32;24" dur={`${2.4 + i * 0.35}s`} begin={`${i * 0.45}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.14;0.26;0.14" dur={`${2.4 + i * 0.35}s`} begin={`${i * 0.45}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Node circles */}
        {showNodes && verts.map((v, i) => (
          <g key={`n-${i}`} className="penta-node" style={{ animationDelay: `${i * 200}ms`, transformOrigin: `${v[0]}px ${v[1]}px` }}>
            <circle cx={v[0]} cy={v[1]} r="22" fill={colors[i]} />
            {icons[i]}
          </g>
        ))}

        {/* Centre circle */}
        {showGear && (
          <>
            <circle cx="160" cy="180" r="36" fill="#1C1A28" opacity="0.88" />
            <circle cx="160" cy="180" r="30" fill="#26223A" />
            {/* Rotating gear */}
            <g style={{ transformOrigin: "160px 180px", animation: "pentaGearSpin 10s linear infinite" }}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
                <rect key={`t-${i}`} x="157" y="163" width="6" height="9" rx="2" fill="#9070C0" transform={`rotate(${a} 160 180)`} />
              ))}
              <circle cx="160" cy="180" r="13" fill="#9070C0" />
              <circle cx="160" cy="180" r="5.5" fill="#26223A" />
            </g>
            {/* Pulse ring */}
            <circle cx="160" cy="180" r="40" fill="none" stroke="#9070C0" strokeWidth="1.2" opacity="0.18">
              <animate attributeName="r" values="38;48;38" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.18;0;0.18" dur="3s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
};

export default SplashPentagon;
