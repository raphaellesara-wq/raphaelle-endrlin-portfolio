import { useState, useEffect } from "react";

type Phase = "rect1" | "line1" | "rect2" | "line2" | "rect3" | "circles" | "logo" | "exit";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<Phase>("rect1");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("line1"), 900),
      setTimeout(() => setPhase("rect2"), 2000),
      setTimeout(() => setPhase("line2"), 3100),
      setTimeout(() => setPhase("rect3"), 4200),
      setTimeout(() => setPhase("circles"), 5400),
      setTimeout(() => setPhase("logo"), 5600),
      // Last circle finishes at ~5400 + 1200delay + 900anim = ~7500ms → +2000 = 9500
      setTimeout(() => setPhase("exit"), 9500),
      setTimeout(onComplete, 10200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const phases: Phase[] = ["rect1", "line1", "rect2", "line2", "rect3", "circles", "logo", "exit"];
  const pIdx = phases.indexOf(phase);

  const showRect1   = pIdx >= 0;
  const showLine1   = pIdx >= 1;
  const showRect2   = pIdx >= 2;
  const showLine2   = pIdx >= 3;
  const showRect3   = pIdx >= 4;
  const showCircles = pIdx >= 5;
  const showLogo    = pIdx >= 6;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 px-4 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#FAFAF8", transition: "opacity 0.7s ease-out" }}
    >
      <style>{`
        @keyframes popIn {
          0%   { transform: scale(0.6); opacity: 0; }
          70%  { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes treadMove {
          from { stroke-dashoffset: 14; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes dropIn {
          0%   { transform: translateY(-260px); opacity: 0; }
          55%  { transform: translateY(8px); opacity: 1; }
          75%  { transform: translateY(-5px); }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes lineGrow {
          from { stroke-dashoffset: 200; opacity: 0; }
          to   { stroke-dashoffset: 0;   opacity: 0.55; }
        }
        .pop-in-tread {
          animation: popIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     treadMove 1.2s linear infinite;
        }
        .line-grow {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: lineGrow 1s ease-out forwards;
        }
        .drop-circle {
          animation: dropIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
      `}</style>

      {/* Logo */}
      <div
        className="text-center z-10 transition-all duration-700"
        style={{
          opacity: showLogo ? 1 : 0,
          transform: showLogo ? "translateY(0) scale(1)" : "translateY(6px) scale(0.96)",
        }}
      >
        <span
          className="block text-5xl md:text-7xl tracking-tight"
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
          className="text-xs md:text-sm text-muted-foreground mt-2 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-apple)", fontWeight: 300, letterSpacing: "0.18em" }}
        >
          Raphaëlle Enderlin
        </p>
      </div>

      {/* Tree SVG – viewBox wide enough so level-3 rects never overlap */}
      <svg
        viewBox="0 0 520 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[96vw] sm:w-[86vw] md:w-[700px] lg:w-[900px] xl:w-[1050px] h-auto"
      >
        {/* ── Level 1 ── center rect */}
        <rect
          x="220" y="8" width="80" height="34" rx="5"
          stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
          className={showRect1 ? "pop-in-tread" : "opacity-0"}
          style={{ transformOrigin: "260px 25px" }}
        />
        {/* circle L1 */}
        {showCircles && (
          <circle
            cx="260" cy="25" r="7"
            fill="hsl(258,18%,60%)"
            className="drop-circle"
            style={{ animationDelay: "0ms" }}
          />
        )}

        {/* ── Lines L1 → L2 ── */}
        {showLine1 && (
          <>
            <path
              d="M 260 42 L 260 60 L 130 60 L 130 78"
              stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="none"
              className="line-grow"
            />
            <path
              d="M 260 42 L 260 60 L 390 60 L 390 78"
              stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="none"
              className="line-grow"
              style={{ animationDelay: "150ms" }}
            />
          </>
        )}

        {/* ── Level 2 ── two rects */}
        <rect
          x="90" y="78" width="80" height="34" rx="5"
          stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
          className={showRect2 ? "pop-in-tread" : "opacity-0"}
          style={{ transformOrigin: "130px 95px" }}
        />
        {showCircles && (
          <circle
            cx="130" cy="95" r="7"
            fill="hsl(348,30%,70%)"
            className="drop-circle"
            style={{ animationDelay: "300ms" }}
          />
        )}

        <rect
          x="350" y="78" width="80" height="34" rx="5"
          stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
          className={showRect2 ? "pop-in-tread" : "opacity-0"}
          style={{ transformOrigin: "390px 95px" }}
        />
        {showCircles && (
          <circle
            cx="390" cy="95" r="7"
            fill="hsl(155,30%,65%)"
            className="drop-circle"
            style={{ animationDelay: "600ms" }}
          />
        )}

        {/* ── Lines L2 → L3 ── */}
        {showLine2 && (
          <>
            <path
              d="M 130 112 L 130 130 L 55 130 L 55 148"
              stroke="hsl(27,35%,60%)" strokeWidth="1.5" fill="none"
              className="line-grow"
            />
            <path
              d="M 130 112 L 130 130 L 205 130 L 205 148"
              stroke="hsl(258,18%,60%)" strokeWidth="1.5" fill="none"
              className="line-grow"
              style={{ animationDelay: "120ms" }}
            />
            <path
              d="M 390 112 L 390 130 L 315 130 L 315 148"
              stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="none"
              className="line-grow"
              style={{ animationDelay: "240ms" }}
            />
            <path
              d="M 390 112 L 390 130 L 465 130 L 465 148"
              stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="none"
              className="line-grow"
              style={{ animationDelay: "360ms" }}
            />
          </>
        )}

        {/* ── Level 3 ── four rects, no overlap */}
        {/* rect A: x=15..95  center=55 */}
        <rect
          x="15" y="148" width="80" height="34" rx="5"
          stroke="hsl(27,35%,60%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
          className={showRect3 ? "pop-in-tread" : "opacity-0"}
          style={{ transformOrigin: "55px 165px" }}
        />
        {showCircles && (
          <circle cx="55" cy="165" r="7" fill="hsl(27,35%,60%)"
            className="drop-circle" style={{ animationDelay: "900ms" }} />
        )}

        {/* rect B: x=165..245  center=205 */}
        <rect
          x="165" y="148" width="80" height="34" rx="5"
          stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
          className={showRect3 ? "pop-in-tread" : "opacity-0"}
          style={{ transformOrigin: "205px 165px" }}
        />
        {showCircles && (
          <circle cx="205" cy="165" r="7" fill="hsl(258,18%,60%)"
            className="drop-circle" style={{ animationDelay: "1200ms" }} />
        )}

        {/* rect C: x=275..355  center=315 */}
        <rect
          x="275" y="148" width="80" height="34" rx="5"
          stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
          className={showRect3 ? "pop-in-tread" : "opacity-0"}
          style={{ transformOrigin: "315px 165px" }}
        />
        {showCircles && (
          <circle cx="315" cy="165" r="7" fill="hsl(348,30%,70%)"
            className="drop-circle" style={{ animationDelay: "1500ms" }} />
        )}

        {/* rect D: x=425..505  center=465 */}
        <rect
          x="425" y="148" width="80" height="34" rx="5"
          stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
          className={showRect3 ? "pop-in-tread" : "opacity-0"}
          style={{ transformOrigin: "465px 165px" }}
        />
        {showCircles && (
          <circle cx="465" cy="165" r="7" fill="hsl(155,30%,65%)"
            className="drop-circle" style={{ animationDelay: "1800ms" }} />
        )}
      </svg>
    </div>
  );
};

export default SplashScreen;
