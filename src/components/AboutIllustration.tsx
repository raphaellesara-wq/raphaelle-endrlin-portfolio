/**
 * About section illustration — laptop with botanicals, speech bubbles and blobs.
 * Inspired by reference: hand-drawn laptop with flowers, leaves, chat bubbles.
 * Uses site palette only.
 */
const AboutIllustration = () => (
  <svg
    id="about-illustration"
    className="about-illust"
    aria-hidden="true"
    viewBox="0 0 400 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background blobs */}
    <ellipse cx="80" cy="160" rx="90" ry="100" fill="#D4798A" fillOpacity="0.1" />
    <ellipse cx="300" cy="100" rx="85" ry="80" fill="#C4834A" fillOpacity="0.1" />
    <ellipse cx="320" cy="290" rx="70" ry="60" fill="#7B68A8" fillOpacity="0.1" />
    <ellipse cx="140" cy="310" rx="60" ry="40" fill="#C4834A" fillOpacity="0.08" />

    {/* Speech bubble — top left */}
    <g className="about-bubble">
      <rect x="80" y="30" width="90" height="55" rx="10" stroke="hsl(252,20%,13%)" strokeWidth="1.5" fill="white" fillOpacity="0.04" />
      <path d="M120 85 L115 100 L130 85" stroke="hsl(252,20%,13%)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      {/* Lines inside bubble */}
      <line x1="95" y1="48" x2="155" y2="48" stroke="hsl(252,20%,13%)" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <line x1="95" y1="58" x2="145" y2="58" stroke="hsl(252,20%,13%)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <line x1="95" y1="68" x2="150" y2="68" stroke="hsl(252,20%,13%)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </g>

    {/* Laptop body */}
    <rect x="105" y="110" width="200" height="140" rx="8" stroke="hsl(252,20%,13%)" strokeWidth="1.5" fill="white" fillOpacity="0.04" />
    {/* Screen area */}
    <rect x="115" y="120" width="180" height="115" rx="4" stroke="hsl(252,20%,13%)" strokeWidth="1" fill="none" />
    {/* Browser dots in screen */}
    <circle cx="130" cy="130" r="3" fill="#D4798A" fillOpacity="0.7" />
    <circle cx="140" cy="130" r="3" fill="#C4834A" fillOpacity="0.7" />
    <circle cx="150" cy="130" r="3" fill="#6DC4A0" fillOpacity="0.7" />

    {/* Content grid inside laptop */}
    <rect x="125" y="142" width="55" height="40" rx="3" stroke="hsl(252,20%,13%)" strokeWidth="1" fill="#7B68A8" fillOpacity="0.06" />
    <path d="M125 182 L145 160 L162 172 L180 152 L180 182 Z" fill="#7B68A8" fillOpacity="0.1" />
    <rect x="185" y="142" width="55" height="40" rx="3" stroke="hsl(252,20%,13%)" strokeWidth="1" fill="#C4834A" fillOpacity="0.05" />
    <path d="M205 155 Q210 148 218 155 Q225 150 222 158 Q228 162 222 165 Q225 172 218 168 Q210 175 205 168 Q198 172 200 165 Q194 162 200 158 Q198 150 205 155 Z" stroke="#D4798A" strokeWidth="1" fill="#D4798A" fillOpacity="0.08" />
    <rect x="125" y="188" width="55" height="40" rx="3" stroke="hsl(252,20%,13%)" strokeWidth="1" fill="none" />
    {/* Globe icon */}
    <circle cx="152" cy="208" r="10" stroke="hsl(252,20%,13%)" strokeWidth="0.8" fill="none" />
    <ellipse cx="152" cy="208" rx="5" ry="10" stroke="hsl(252,20%,13%)" strokeWidth="0.6" fill="none" />
    <line x1="142" y1="208" x2="162" y2="208" stroke="hsl(252,20%,13%)" strokeWidth="0.6" />
    <rect x="185" y="188" width="55" height="40" rx="3" stroke="hsl(252,20%,13%)" strokeWidth="1" fill="none" />
    {/* Text lines */}
    <line x1="192" y1="200" x2="232" y2="200" stroke="hsl(252,20%,13%)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <line x1="192" y1="210" x2="225" y2="210" stroke="hsl(252,20%,13%)" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    <line x1="192" y1="220" x2="228" y2="220" stroke="hsl(252,20%,13%)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />

    {/* Laptop base */}
    <path d="M85 250 L105 250 L115 260 L295 260 L305 250 L325 250" stroke="hsl(252,20%,13%)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Trackpad hint */}
    <rect x="185" y="252" width="40" height="6" rx="2" stroke="hsl(252,20%,13%)" strokeWidth="0.8" fill="none" opacity="0.4" />

    {/* Large leaf — bottom left */}
    <g className="about-leaf-1">
      <path d="M30 320 Q5 270 35 230 Q55 280 30 320 Z" stroke="hsl(252,20%,13%)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <line x1="32" y1="315" x2="38" y2="250" stroke="hsl(252,20%,13%)" strokeWidth="1" strokeLinecap="round" />
      <line x1="34" y1="295" x2="20" y2="275" stroke="hsl(252,20%,13%)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="35" y1="280" x2="45" y2="262" stroke="hsl(252,20%,13%)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="34" y1="268" x2="22" y2="253" stroke="hsl(252,20%,13%)" strokeWidth="0.8" strokeLinecap="round" />
    </g>

    {/* Branch with berries — left */}
    <path d="M55 280 Q50 240 60 200" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <circle cx="48" cy="230" r="5" stroke="#7B68A8" strokeWidth="1.2" fill="#7B68A8" fillOpacity="0.2" />
    <circle cx="42" cy="215" r="4.5" stroke="#7B68A8" strokeWidth="1.2" fill="#7B68A8" fillOpacity="0.18" />
    <circle cx="52" cy="205" r="4" stroke="#7B68A8" strokeWidth="1.2" fill="#7B68A8" fillOpacity="0.18" />

    {/* Flower — top right */}
    <g className="about-flower">
      <circle cx="330" cy="70" r="12" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" />
      <circle cx="330" cy="70" r="6" stroke="hsl(252,20%,13%)" strokeWidth="0.8" fill="#C4834A" fillOpacity="0.15" />
      <circle cx="330" cy="70" r="2.5" fill="#C4834A" fillOpacity="0.3" />
      {/* Outer petals hint */}
      <path d="M330 55 Q335 48 340 55" stroke="hsl(252,20%,13%)" strokeWidth="1" fill="none" />
      <path d="M330 85 Q325 92 320 85" stroke="hsl(252,20%,13%)" strokeWidth="1" fill="none" />
      <path d="M315 70 Q308 65 315 60" stroke="hsl(252,20%,13%)" strokeWidth="1" fill="none" />
      <path d="M345 70 Q352 75 345 80" stroke="hsl(252,20%,13%)" strokeWidth="1" fill="none" />
    </g>

    {/* Simple flower — right side */}
    <g className="about-flower-2">
      <circle cx="360" cy="180" r="8" stroke="#D4798A" strokeWidth="1.2" fill="none" />
      <circle cx="360" cy="180" r="3" fill="#D4798A" fillOpacity="0.25" />
      <line x1="360" y1="188" x2="360" y2="220" stroke="#6DC4A0" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M360 200 Q370 192 375 198" stroke="#6DC4A0" strokeWidth="1" fill="#6DC4A0" fillOpacity="0.1" />
      <path d="M360 210 Q350 202 345 208" stroke="#6DC4A0" strokeWidth="1" fill="#6DC4A0" fillOpacity="0.1" />
    </g>

    {/* Sprig — right of laptop */}
    <path d="M340 260 Q335 230 340 200" stroke="#6DC4A0" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M340 245 Q355 238 358 225" stroke="#6DC4A0" strokeWidth="1.2" fill="#6DC4A0" fillOpacity="0.1" strokeLinejoin="round" />
    <path d="M340 230 Q325 222 328 208" stroke="#6DC4A0" strokeWidth="1.2" fill="#6DC4A0" fillOpacity="0.1" strokeLinejoin="round" />

    {/* Small accent dots */}
    <circle cx="380" cy="140" r="2" fill="#3D8B6E" opacity="0.35" />
    <circle cx="25" cy="180" r="2" fill="#C4834A" opacity="0.35" />
    <circle cx="370" cy="310" r="2.5" fill="#D4798A" opacity="0.3" />
  </svg>
);

export default AboutIllustration;
