import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroIllustration = () => {
  const { isRTL } = useLanguage();
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [mobileVideoRef, desktopVideoRef].forEach((ref) => {
      if (ref.current) {
        ref.current.play().catch(() => {});
      }
    });
  }, []);

  return (
    <>
      {/* Mobile version */}
      <div className="block md:hidden w-full flex justify-center" style={{ minHeight: 300 }}>
        <video
          ref={mobileVideoRef}
          src="/hero-illustration.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-[300px] w-auto object-contain"
          style={{
            transform: "scale(1.2)",
            maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
          }}
        />
      </div>

      {/* Desktop version */}
      <div
        className="hidden md:block absolute pointer-events-none"
        style={{
          zIndex: 0,
          top: "50%",
          transform: "translateY(-55%)",
          ...(isRTL
            ? { left: "0%", right: "auto" }
            : { right: "0%", left: "auto" }),
          width: "55%",
          maxWidth: 640,
          opacity: 0.9,
          maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
        }}
      >
        <video
          ref={desktopVideoRef}
          src="/hero-illustration.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );
};

export default HeroIllustration;
