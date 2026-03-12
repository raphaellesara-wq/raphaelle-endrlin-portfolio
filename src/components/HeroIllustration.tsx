import { useLanguage } from "@/contexts/LanguageContext";

const HeroIllustration = () => {
  const { isRTL } = useLanguage();

  return (
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
        src="/hero-illustration.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default HeroIllustration;
