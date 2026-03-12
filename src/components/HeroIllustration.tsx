import { useLanguage } from "@/contexts/LanguageContext";

const HeroIllustration = () => {
  const { isRTL } = useLanguage();

  return (
    <>
      {/* Desktop: absolute behind text */}
      <div
        className="hidden md:block absolute pointer-events-none"
        style={{
          zIndex: 0,
          top: "50%",
          transform: "translateY(-50%)",
          ...(isRTL
            ? { left: "-5%", right: "auto" }
            : { right: "-5%", left: "auto" }),
          width: "55%",
          maxWidth: 620,
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

      {/* Mobile: block between buttons and stats card */}
      <div
        className="block md:hidden mx-auto"
        style={{
          maxWidth: "85%",
          marginTop: 24,
          marginBottom: 24,
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
    </>
  );
};

export default HeroIllustration;
