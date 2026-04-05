import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Phase = "draw" | "circles" | "logo" | "exit";

// Desktop phases (tree animation, compressed to ~6s)
type DesktopPhase = "rect1" | "line1" | "rect2" | "line2" | "rect3" | "circles" | "logo" | "exit";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const { isRTL } = useLanguage();
  const [phase, setPhase]    = useState<Phase>("draw");
  const [dPhase, setDPhase]  = useState<DesktopPhase>("rect1");

  // ── Mobile timeline (6 s) ──
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("circles"), 1200),
      setTimeout(() => setPhase("logo"),    2200),
      setTimeout(() => setPhase("exit"),    5000),
      setTimeout(onComplete,               5700),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // ── Desktop timeline (~6 s) ──
  useEffect(() => {
    const timers = [
      setTimeout(() => setDPhase("line1"),   600),
      setTimeout(() => setDPhase("rect2"),  1300),
      setTimeout(() => setDPhase("line2"),  2000),
      setTimeout(() => setDPhase("rect3"),  2700),
      setTimeout(() => setDPhase("circles"),3500),
      setTimeout(() => setDPhase("logo"),   3700),
      setTimeout(() => setDPhase("exit"),   5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const dPhases: DesktopPhase[] = ["rect1","line1","rect2","line2","rect3","circles","logo","exit"];
  const dIdx = dPhases.indexOf(dPhase);
  const dShowRect1   = dIdx >= 0;
  const dShowLine1   = dIdx >= 1;
  const dShowRect2   = dIdx >= 2;
  const dShowLine2   = dIdx >= 3;
  const dShowRect3   = dIdx >= 4;
  const dShowCircles = dIdx >= 5;
  const dShowLogo    = dIdx >= 6;

  const showCircles = phase === "circles" || phase === "logo" || phase === "exit";
  const showLogo    = phase === "logo" || phase === "exit";

  // Diamond perimeter ≈ 780px (4 sides × ~195px each)
  const PERIMETER = 780;

  const logoInitial = "R.E";
  const logoName    = "Raphaëlle Enderlin";

  const isExiting = phase === "exit" || dPhase === "exit";

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FAFAF8",
        transition: "opacity 0.7s ease-out",
        opacity: isExiting ? 0 : 1,
        pointerEvents: isExiting ? "none" : "auto",
      }}
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
        @keyframes drawDiamond {
          from { stroke-dashoffset: ${PERIMETER}; }
          to   { stroke-dashoffset: 0; }
        }

        .pop-in-tread {
          animation: popIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     treadMove 1.2s linear infinite;
        }
        .pop-in {
          animation: popIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
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
        .draw-diamond {
          stroke-dasharray: ${PERIMETER};
          stroke-dashoffset: ${PERIMETER};
          animation: drawDiamond 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* ── MOBILE: Diamond ── */}
      <div
        className="md:hidden"
        style={{
          position: "relative",
          width: "min(88vw, 65vh)",
          height: "min(88vw, 65vh)",
        }}
      >
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          {/* Solid diamond: draws in, then fades out as dashed fades in */}
          <polygon
            points="150,12 288,150 150,288 12,150"
            stroke="hsl(348,30%,70%)"
            strokeWidth="2"
            fill="none"
            className="draw-diamond"
            style={{
              opacity: showCircles ? 0 : 1,
              transition: "opacity 0.4s ease-out",
            }}
          />
          {/* Dashed diamond: fades in after drawing */}
          <polygon
            points="150,12 288,150 150,288 12,150"
            stroke="hsl(348,30%,70%)"
            strokeWidth="2"
            strokeDasharray="8 5"
            fill="none"
            style={{
              opacity: showCircles ? 1 : 0,
              transition: "opacity 0.4s ease-in",
            }}
          />

          {/* Dots at 4 vertices — appear after drawing */}
          {showCircles && (
            <>
              <circle cx="150" cy="12"  r="7" fill="hsl(348,30%,70%)"
                className="drop-circle" style={{ animationDelay: "0ms" }} />
              <circle cx="288" cy="150" r="7" fill="hsl(155,30%,65%)"
                className="drop-circle" style={{ animationDelay: "200ms" }} />
              <circle cx="150" cy="288" r="7" fill="hsl(258,18%,60%)"
                className="drop-circle" style={{ animationDelay: "400ms" }} />
              <circle cx="12"  cy="150" r="7" fill="hsl(27,35%,60%)"
                className="drop-circle" style={{ animationDelay: "600ms" }} />
            </>
          )}
        </svg>

        {/* Name centered inside diamond */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: showLogo ? 1 : 0,
            transform: showLogo ? "scale(1)" : "scale(0.95)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "3.5rem",
              color: "hsl(348,30%,70%)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {logoInitial}
          </span>
          <p
            style={{
              fontFamily: "var(--font-apple)",
              fontWeight: 300,
              fontSize: "0.7rem",
              color: "hsl(220 8.9% 46.1%)",
              marginTop: "0.5rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {logoName}
          </p>
        </div>
      </div>

      {/* ── DESKTOP: Tree ── */}
      <div className="hidden md:flex flex-col items-center justify-center gap-6">
        {/* Logo */}
        <div
          className="text-center z-10 transition-all duration-700"
          style={{
            opacity: dShowLogo ? 1 : 0,
            transform: dShowLogo ? "translateY(0) scale(1)" : "translateY(6px) scale(0.96)",
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
            {logoInitial}
          </span>
          <p
            className="text-xs md:text-sm text-muted-foreground mt-2 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-apple)", fontWeight: 300, letterSpacing: "0.18em" }}
          >
            {logoName}
          </p>
        </div>

        {/* Tree SVG */}
        <svg
          viewBox="0 0 520 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[96vw] sm:w-[86vw] md:w-[700px] lg:w-[900px] xl:w-[1050px] h-auto"
        >
          {/* Level 1 */}
          <rect
            x="220" y="8" width="80" height="34" rx="5"
            stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
            className={dShowRect1 ? "pop-in-tread" : "opacity-0"}
            style={{ transformOrigin: "260px 25px" }}
          />
          {dShowCircles && (
            <circle cx="260" cy="25" r="7" fill="hsl(258,18%,60%)"
              className="drop-circle" style={{ animationDelay: "0ms" }} />
          )}

          {/* Lines L1 → L2 */}
          {dShowLine1 && (
            <>
              <path d="M 260 42 L 260 60 L 130 60 L 130 78"
                stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="none" className="line-grow" />
              <path d="M 260 42 L 260 60 L 390 60 L 390 78"
                stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="none" className="line-grow"
                style={{ animationDelay: "150ms" }} />
            </>
          )}

          {/* Level 2 */}
          <rect x="90" y="78" width="80" height="34" rx="5"
            stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
            className={dShowRect2 ? "pop-in-tread" : "opacity-0"}
            style={{ transformOrigin: "130px 95px" }} />
          {dShowCircles && (
            <circle cx="130" cy="95" r="7" fill="hsl(348,30%,70%)"
              className="drop-circle" style={{ animationDelay: "300ms" }} />
          )}
          <rect x="350" y="78" width="80" height="34" rx="5"
            stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
            className={dShowRect2 ? "pop-in-tread" : "opacity-0"}
            style={{ transformOrigin: "390px 95px" }} />
          {dShowCircles && (
            <circle cx="390" cy="95" r="7" fill="hsl(155,30%,65%)"
              className="drop-circle" style={{ animationDelay: "600ms" }} />
          )}

          {/* Lines L2 → L3 */}
          {dShowLine2 && (
            <>
              <path d="M 130 112 L 130 130 L 55 130 L 55 148"
                stroke="hsl(27,35%,60%)" strokeWidth="1.5" fill="none" className="line-grow" />
              <path d="M 130 112 L 130 130 L 205 130 L 205 148"
                stroke="hsl(258,18%,60%)" strokeWidth="1.5" fill="none" className="line-grow"
                style={{ animationDelay: "120ms" }} />
              <path d="M 390 112 L 390 130 L 315 130 L 315 148"
                stroke="hsl(348,30%,70%)" strokeWidth="1.5" fill="none" className="line-grow"
                style={{ animationDelay: "240ms" }} />
              <path d="M 390 112 L 390 130 L 465 130 L 465 148"
                stroke="hsl(155,30%,65%)" strokeWidth="1.5" fill="none" className="line-grow"
                style={{ animationDelay: "360ms" }} />
            </>
          )}

          {/* Level 3 */}
          <rect x="15" y="148" width="80" height="34" rx="5"
            stroke="hsl(27,35%,60%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
            className={dShowRect3 ? "pop-in-tread" : "opacity-0"}
            style={{ transformOrigin: "55px 165px" }} />
          {dShowCircles && (
            <circle cx="55" cy="165" r="7" fill="hsl(27,35%,60%)"
              className="drop-circle" style={{ animationDelay: "900ms" }} />
          )}
          <rect x="165" y="148" width="80" height="34" rx="5"
            stroke="hsl(258,18%,60%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
            className={dShowRect3 ? "pop-in-tread" : "opacity-0"}
            style={{ transformOrigin: "205px 165px" }} />
          {dShowCircles && (
            <circle cx="205" cy="165" r="7" fill="hsl(258,18%,60%)"
              className="drop-circle" style={{ animationDelay: "1200ms" }} />
          )}
          <rect x="275" y="148" width="80" height="34" rx="5"
            stroke="hsl(348,30%,70%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
            className={dShowRect3 ? "pop-in-tread" : "opacity-0"}
            style={{ transformOrigin: "315px 165px" }} />
          {dShowCircles && (
            <circle cx="315" cy="165" r="7" fill="hsl(348,30%,70%)"
              className="drop-circle" style={{ animationDelay: "1500ms" }} />
          )}
          <rect x="425" y="148" width="80" height="34" rx="5"
            stroke="hsl(155,30%,65%)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"
            className={dShowRect3 ? "pop-in-tread" : "opacity-0"}
            style={{ transformOrigin: "465px 165px" }} />
          {dShowCircles && (
            <circle cx="465" cy="165" r="7" fill="hsl(155,30%,65%)"
              className="drop-circle" style={{ animationDelay: "1800ms" }} />
          )}
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
