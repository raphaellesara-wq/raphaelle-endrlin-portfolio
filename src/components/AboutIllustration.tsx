/**
 * About illustration — automation pentagon.
 * 5 coloured nodes at pentagon vertices, animated flow lines,
 * rotating gear at centre. Flat design, site palette, transparent bg.
 */
const AboutIllustration = () => {
  // Pentagon vertices: centre (160, 210), circumradius 100
  // angles: -90°, -18°, 54°, 126°, 198°
  const verts: [number, number][] = [
    [160, 110],   // V0 top
    [255, 179],   // V1 top-right
    [219, 291],   // V2 bottom-right
    [101, 291],   // V3 bottom-left
    [65,  179],   // V4 top-left
  ];

  const colors = ['#E03468', '#D4834A', '#3AAA80', '#9070C0', '#3AAAC0'];
  const delays = ['0s', '0.28s', '0.56s', '0.84s', '1.12s'];
  const durations = ['1.4s', '1.55s', '1.45s', '1.6s', '1.5s'];

  return (
    <svg
      id="about-illustration"
      className="about-illust"
      aria-hidden="true"
      viewBox="0 0 320 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Scale + centre in viewBox */}
      <g transform="translate(45 64) scale(0.72)">

        {/* Gentle float up/down */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -10; 0 0"
            keyTimes="0; 0.5; 1"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
            dur="4s"
            repeatCount="indefinite"
          />

          {/* ── PENTAGON BACKGROUND ── */}
          <path
            d="M 160 110 L 255 179 L 219 291 L 101 291 L 65 179 Z"
            fill="rgba(144,112,192,0.06)"
            stroke="#9070C0"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            opacity="0.35"
          />

          {/* ── ANIMATED FLOW LINES (one per edge) ── */}
          {verts.map((v, i) => {
            const n = verts[(i + 1) % 5];
            return (
              <line
                key={`fl-${i}`}
                x1={v[0]} y1={v[1]}
                x2={n[0]} y2={n[1]}
                stroke={colors[i]}
                strokeWidth="2.5"
                strokeDasharray="9 7"
                strokeLinecap="round"
                opacity="0.7"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0" to="-48"
                  dur={durations[i]}
                  begin={delays[i]}
                  repeatCount="indefinite"
                />
              </line>
            );
          })}

          {/* ── NODE GLOW RINGS (pulse) ── */}
          {verts.map((v, i) => (
            <circle
              key={`glow-${i}`}
              cx={v[0]} cy={v[1]}
              r="26"
              fill={colors[i]}
              opacity="0.14"
            >
              <animate attributeName="r"
                values="24;32;24"
                dur={`${2.4 + i * 0.35}s`}
                begin={`${i * 0.45}s`}
                repeatCount="indefinite"
              />
              <animate attributeName="opacity"
                values="0.14;0.26;0.14"
                dur={`${2.4 + i * 0.35}s`}
                begin={`${i * 0.45}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* ── NODE CIRCLES ── */}
          {verts.map((v, i) => (
            <circle key={`nd-${i}`} cx={v[0]} cy={v[1]} r="22" fill={colors[i]} />
          ))}

          {/* ── NODE ICONS (white) ── */}

          {/* V0 (160,110) — Lightning bolt */}
          <path
            d="M 163 99 L 155 113 L 161 113 L 157 121 L 165 107 L 160 107 Z"
            fill="white" opacity="0.92"
          />

          {/* V1 (255,179) — Gear: ring + 4 teeth + centre hole */}
          <circle cx="255" cy="179" r="9"
            fill="none" stroke="white" strokeWidth="2.5" opacity="0.92" />
          <rect x="252" y="167" width="6" height="5" rx="1.5" fill="white" opacity="0.92" />
          <rect x="252" y="187" width="6" height="5" rx="1.5" fill="white" opacity="0.92" />
          <rect x="243" y="176" width="5" height="6" rx="1.5" fill="white" opacity="0.92" />
          <rect x="263" y="176" width="5" height="6" rx="1.5" fill="white" opacity="0.92" />
          <circle cx="255" cy="179" r="4" fill="white" opacity="0.92" />

          {/* V2 (219,291) — Checkmark */}
          <path
            d="M 209 291 L 216 299 L 229 281"
            stroke="white" strokeWidth="3"
            fill="none" strokeLinecap="round" strokeLinejoin="round"
            opacity="0.92"
          />

          {/* V3 (101,291) — Three horizontal bars (data) */}
          <line x1="92" y1="285" x2="110" y2="285" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.92" />
          <line x1="92" y1="291" x2="110" y2="291" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.92" />
          <line x1="92" y1="297" x2="110" y2="297" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.92" />

          {/* V4 (65,179) — Double chevron right (flow/forward) */}
          <path d="M 55 172 L 63 179 L 55 186"
            stroke="white" strokeWidth="3" fill="none"
            strokeLinecap="round" strokeLinejoin="round" opacity="0.92" />
          <path d="M 63 172 L 71 179 L 63 186"
            stroke="white" strokeWidth="3" fill="none"
            strokeLinecap="round" strokeLinejoin="round" opacity="0.92" />

          {/* ── CENTRE CIRCLE ── */}
          <circle cx="160" cy="210" r="36" fill="#1C1A28" opacity="0.88" />
          <circle cx="160" cy="210" r="30" fill="#26223A" />

          {/* ── ROTATING GEAR (centre) ── */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 160 210"
              to="360 160 210"
              dur="10s"
              repeatCount="indefinite"
            />
            {/* 8 teeth */}
            {([0,45,90,135,180,225,270,315] as number[]).map((a, i) => (
              <rect key={`t-${i}`}
                x="157" y="193" width="6" height="9" rx="2"
                fill="#9070C0"
                transform={`rotate(${a} 160 210)`}
              />
            ))}
            <circle cx="160" cy="210" r="13" fill="#9070C0" />
            <circle cx="160" cy="210" r="5.5" fill="#26223A" />
          </g>

          {/* ── PULSING RING around centre ── */}
          <circle cx="160" cy="210" r="40"
            fill="none" stroke="#9070C0" strokeWidth="1.2" opacity="0.18">
            <animate attributeName="r"     values="38;48;38" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.18;0;0.18" dur="3s" repeatCount="indefinite" />
          </circle>

        </g>
      </g>
    </svg>
  );
};

export default AboutIllustration;
