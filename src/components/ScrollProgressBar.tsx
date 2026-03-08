import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 h-[3px]"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #3D8B6E, #7B68A8)",
        transition: "width 0.1s linear",
      }}
    />
  );
};

export default ScrollProgressBar;
