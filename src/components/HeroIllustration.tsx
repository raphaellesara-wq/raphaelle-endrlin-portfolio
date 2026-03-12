import { useLanguage } from "@/contexts/LanguageContext";

const HeroIllustration = () => {
  const { isRTL } = useLanguage();

  return (
    <div
      className="hidden md:block absolute pointer-events-none"
      style={{
        zIndex: 0,
        top: "50%",
        transform: "translateY(-50%)",
        ...(isRTL
          ? { left: "-2%", right: "auto" }
          : { right: "-2%", left: "auto" }),
        width: "50%",
        maxWidth: 580,
        opacity: 0.92,
        maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
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
