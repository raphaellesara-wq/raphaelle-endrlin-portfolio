import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroIllustration = () => {
  const { isRTL } = useLanguage();
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [mobileVideoRef, desktopVideoRef].forEach((ref) => {
      const video = ref.current;
      if (!video) return;

      const tryPlay = () => {
        video.play().catch(() => {});
      };

      // If already loaded enough, play immediately; otherwise wait
      if (video.readyState >= 2) {
        tryPlay();
      } else {
        video.addEventListener("canplay", tryPlay, { once: true });
      }
    });
  }, []);

  const videoStyle: React.CSSProperties = {
    WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
    maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
  };

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
          {...({ "x-webkit-airplay": "deny" } as Record<string, string>)}
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          className="h-[300px] w-auto object-contain pointer-events-none"
          style={{ ...videoStyle, transform: "scale(1.2)" }}
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
          ...videoStyle,
        }}
      >
        <video
          ref={desktopVideoRef}
          src="/hero-illustration.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-auto"
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );
};

export default HeroIllustration;
