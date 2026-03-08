/**
 * Hero illustration — browser window with botanicals, blobs and design elements.
 * Inspired by reference: browser mockup with leaves, image cards and geometric shapes.
 * Uses site palette only: green #3D8B6E, pink #D4798A, orange #C4834A, purple #7B68A8
 */
const HeroIllustration = () => (
  <svg
    id="hero-illustration"
    className="hero-illust"
    aria-hidden="true"
    viewBox="0 0 420 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background blobs */}
    <ellipse cx="90" cy="260" rx="80" ry="70" fill="#D4798A" fillOpacity="0.08" />
    <ellipse cx="330" cy="100" rx="75" ry="85" fill="#C4834A" fillOpacity="0.07" />
    <ellipse cx="200" cy="320" rx="100" ry="50" fill="#7B68A8" fillOpacity="0.06" />

    {/* Back paper/document shape */}
    <rect x="70" y="50" width="200" height="240" rx="6" stroke="#C4834A" strokeWidth="1.2" fill="white" fillOpacity="0.03" strokeDasharray="4 4" />

    {/* Browser window — main */}
    <rect x="100" y="80" width="220" height="170" rx="8" stroke="hsl(252,20%,13%)" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
    {/* Browser top bar */}
    <line x1="100" y1="105" x2="320" y2="105" stroke="hsl(252,20%,13%)" strokeWidth="1.2" />
    {/* Browser dots */}
    <circle cx="118" cy="92" r="4" fill="#D4798A" fillOpacity="0.6" />
    <circle cx="132" cy="92" r="4" fill="#C4834A" fillOpacity="0.6" />
    <circle cx="146" cy="92" r="4" fill="#3D8B6E" fillOpacity="0.6" />
    {/* Wavy URL bar */}
    <path d="M160 92 Q180 86 200 92 Q220 98 240 92" stroke="#7B68A8" strokeWidth="1" fill="none" strokeLinecap="round" />

    {/* Image placeholder inside browser — landscape with mountains */}
    <rect x="112" y="115" width="100" height="70" rx="4" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="#7B68A8" fillOpacity="0.06" />
    {/* Mountain scene */}
    <path d="M112 185 L142 145 L160 165 L180 135 L212 185 Z" fill="#7B68A8" fillOpacity="0.12" />
    <circle cx="135" cy="130" r="8" fill="#C4834A" fillOpacity="0.2" />

    {/* Grid squares — right side of browser */}
    <rect x="222" y="115" width="36" height="30" rx="3" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" />
    <rect x="264" y="115" width="36" height="30" rx="3" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" />
    <rect x="222" y="152" width="36" height="30" rx="3" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" />
    <rect x="264" y="152" width="36" height="30" rx="3" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" />

    {/* Text lines inside browser */}
    <line x1="112" y1="198" x2="200" y2="198" stroke="hsl(252,20%,13%)" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="112" y1="208" x2="185" y2="208" stroke="hsl(252,20%,13%)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <line x1="112" y1="218" x2="195" y2="218" stroke="hsl(252,20%,13%)" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

    {/* Band at browser bottom */}
    <rect x="100" y="230" width="220" height="20" rx="0" fill="#C4834A" fillOpacity="0.08" />

    {/* Floating image card — bottom right, overlapping */}
    <rect x="280" y="200" width="100" height="80" rx="6" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="white" fillOpacity="0.06" />
    <circle cx="300" cy="220" r="5" fill="#C4834A" fillOpacity="0.35" />
    <path d="M280 260 L310 230 L340 245 L380 220 L380 280 L280 280 Z" fill="#7B68A8" fillOpacity="0.1" />

    {/* Botanical — large leaf bottom left */}
    <path className="hero-leaf-1" d="M30 340 Q10 290 40 260 Q55 310 30 340 Z" stroke="hsl(252,20%,13%)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    {/* Leaf veins */}
    <line x1="35" y1="335" x2="38" y2="280" stroke="hsl(252,20%,13%)" strokeWidth="1" strokeLinecap="round" />
    <line x1="36" y1="315" x2="26" y2="300" stroke="hsl(252,20%,13%)" strokeWidth="0.8" strokeLinecap="round" />
    <line x1="37" y1="300" x2="44" y2="285" stroke="hsl(252,20%,13%)" strokeWidth="0.8" strokeLinecap="round" />

    {/* Botanical branch — left side with round leaves */}
    <path d="M60 330 Q55 280 60 230 Q62 200 65 175" stroke="hsl(252,20%,13%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Round leaves on branch */}
    <ellipse className="hero-leaf-2" cx="48" cy="280" rx="12" ry="9" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" transform="rotate(-20 48 280)" />
    <ellipse className="hero-leaf-2" cx="72" cy="260" rx="12" ry="9" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" transform="rotate(15 72 260)" />
    <ellipse className="hero-leaf-2" cx="50" cy="238" rx="10" ry="8" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" transform="rotate(-10 50 238)" />
    <ellipse className="hero-leaf-2" cx="70" cy="218" rx="10" ry="8" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" transform="rotate(12 70 218)" />
    <ellipse className="hero-leaf-2" cx="55" cy="198" rx="9" ry="7" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" transform="rotate(-8 55 198)" />

    {/* Berry cluster — left */}
    <circle cx="45" cy="195" r="5" stroke="#D4798A" strokeWidth="1.2" fill="#D4798A" fillOpacity="0.15" />
    <circle cx="55" cy="185" r="4" stroke="#D4798A" strokeWidth="1.2" fill="#D4798A" fillOpacity="0.12" />
    <circle cx="40" cy="185" r="4.5" stroke="#D4798A" strokeWidth="1.2" fill="#D4798A" fillOpacity="0.12" />

    {/* Small flower — top right */}
    <g className="hero-flower">
      <circle cx="360" cy="60" r="8" stroke="#D4798A" strokeWidth="1.2" fill="none" />
      <circle cx="360" cy="60" r="3" fill="#D4798A" fillOpacity="0.3" />
      <ellipse cx="360" cy="48" rx="4" ry="6" stroke="#D4798A" strokeWidth="1" fill="none" />
      <ellipse cx="360" cy="72" rx="4" ry="6" stroke="#D4798A" strokeWidth="1" fill="none" />
      <ellipse cx="348" cy="60" rx="6" ry="4" stroke="#D4798A" strokeWidth="1" fill="none" />
      <ellipse cx="372" cy="60" rx="6" ry="4" stroke="#D4798A" strokeWidth="1" fill="none" />
    </g>

    {/* Small botanical sprig — right side */}
    <path d="M370 150 Q365 120 370 90" stroke="#3D8B6E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <path d="M370 130 Q385 118 388 100" stroke="#3D8B6E" strokeWidth="1.2" fill="#3D8B6E" fillOpacity="0.06" strokeLinejoin="round" />
    <path d="M370 120 Q355 108 358 92" stroke="#3D8B6E" strokeWidth="1.2" fill="#3D8B6E" fillOpacity="0.06" strokeLinejoin="round" />

    {/* Geometric accent — circle at right */}
    <circle cx="395" cy="200" r="30" stroke="hsl(252,20%,13%)" strokeWidth="1" fill="none" opacity="0.3" />
    <rect x="385" y="160" width="18" height="18" rx="2" stroke="hsl(252,20%,13%)" strokeWidth="1.2" fill="none" opacity="0.3" />

    {/* Bottom badge icons */}
    <circle cx="50" cy="365" r="14" fill="hsl(252,20%,13%)" fillOpacity="0.08" stroke="hsl(252,20%,13%)" strokeWidth="1" />
    <text x="50" y="370" textAnchor="middle" fontSize="12" fill="#C4834A" fontWeight="bold">♛</text>
    <circle cx="85" cy="365" r="14" fill="hsl(252,20%,13%)" fillOpacity="0.08" stroke="hsl(252,20%,13%)" strokeWidth="1" />
    <text x="85" y="370" textAnchor="middle" fontSize="11" fill="#7B68A8" fontWeight="bold">Ai</text>
  </svg>
);

export default HeroIllustration;
