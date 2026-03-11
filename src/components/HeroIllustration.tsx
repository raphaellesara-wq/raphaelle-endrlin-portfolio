const HeroIllustration = () => (
  <svg
    viewBox="0 0 500 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full"
    aria-hidden="true"
  >
    <style>{`
      @keyframes sway1 {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(3deg); }
      }
      @keyframes sway2 {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(-3deg); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-4px); }
      }
      .plant-l { animation: sway1 4s ease-in-out infinite; transform-origin: 116px 270px; }
      .plant-r { animation: sway2 4.5s ease-in-out infinite 0.5s; transform-origin: 384px 270px; }
      .woman { animation: float 5s ease-in-out infinite 1s; }
    `}</style>

    {/* Background blob */}
    <path
      d="M120 55 Q250 10 380 60 Q440 100 425 205 Q410 300 250 325 Q90 315 75 205 Q60 100 120 55Z"
      fill="#F2DDD0"
      opacity="0.65"
    />

    {/* Desk */}
    <rect x="72" y="278" width="356" height="13" rx="5" fill="#C4956A" />
    <rect x="96" y="291" width="9" height="52" rx="3" fill="#A87B50" />
    <rect x="395" y="291" width="9" height="52" rx="3" fill="#A87B50" />

    {/* Monitor */}
    <rect x="188" y="148" width="124" height="105" rx="8" fill="#E2DDD8" stroke="#CCC8C2" strokeWidth="1.5" />
    <rect x="197" y="157" width="106" height="72" rx="4" fill="#F8F6F3" />
    <rect x="212" y="170" width="48" height="4" rx="2" fill="#C9A0A8" opacity="0.4" />
    <rect x="212" y="179" width="66" height="3" rx="1.5" fill="#8B7DB5" opacity="0.3" />
    <rect x="212" y="187" width="38" height="3" rx="1.5" fill="#8A9E7A" opacity="0.35" />
    <rect x="212" y="195" width="55" height="3" rx="1.5" fill="#C9A0A8" opacity="0.25" />
    <rect x="244" y="253" width="12" height="25" rx="3" fill="#CCC8C2" />
    <rect x="226" y="276" width="48" height="5" rx="2.5" fill="#CCC8C2" />

    {/* LEFT PLANT — dark vase, fern leaves */}
    <g className="plant-l">
      <path d="M100 278 Q98 258 103 250 L129 250 Q134 258 132 278Z" fill="#3A3D52" />
      <rect x="96" y="244" width="40" height="9" rx="4" fill="#4A4E65" />
      <path d="M116 244 Q108 225 96 208" stroke="#5A7A4A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M96 208 Q88 200 85 207 Q90 212 96 208Z" fill="#5A7A4A" />
      <path d="M96 208 Q92 198 95 192 Q100 200 96 208Z" fill="#6A8A5A" />
      <path d="M116 244 Q118 220 124 206" stroke="#6A8A5A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M124 206 Q130 198 132 205 Q128 210 124 206Z" fill="#6A8A5A" />
      <path d="M124 206 Q128 196 125 190 Q121 198 124 206Z" fill="#7A9A6A" />
      <path d="M116 244 Q112 228 104 218" stroke="#7A9A6A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M104 218 Q98 214 97 220 Q101 221 104 218Z" fill="#7A9A6A" />
      <path d="M116 244 Q120 230 130 220" stroke="#5A7A4A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M130 220 Q136 216 135 222 Q131 222 130 220Z" fill="#5A7A4A" />
      <path d="M116 244 Q114 232 110 224" stroke="#8AAA7A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M110 224 Q105 220 105 226 Q108 226 110 224Z" fill="#8AAA7A" />
    </g>

    {/* RIGHT PLANT — terracotta pot, large tropical leaves */}
    <g className="plant-r">
      <path d="M360 278 Q357 258 363 250 L405 250 Q411 258 408 278Z" fill="#D4714B" />
      <rect x="356" y="244" width="56" height="10" rx="5" fill="#E07B5B" />
      <rect x="360" y="252" width="48" height="2" rx="1" fill="#C0613B" opacity="0.4" />
      <path d="M384 244 Q400 215 422 192 Q428 186 424 192 Q412 210 402 228 Q392 242 384 244Z" fill="#4A7030" />
      <path d="M384 244 Q396 216 414 196" stroke="#3A6020" strokeWidth="1.5" fill="none" />
      <path d="M388 238 Q396 228 404 216" stroke="#3A6020" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M376 244 Q362 212 350 186 Q346 180 350 186 Q358 205 366 224 Q372 238 376 244Z" fill="#5A8040" />
      <path d="M376 244 Q364 215 352 190" stroke="#4A7030" strokeWidth="1.5" fill="none" />
      <path d="M368 248 Q342 230 322 218 Q316 215 321 218 Q336 226 350 237 Q362 245 368 248Z" fill="#4A7030" />
      <path d="M368 248 Q344 232 324 220" stroke="#3A6020" strokeWidth="1.5" fill="none" />
      <path d="M381 244 Q384 218 388 200 Q390 194 388 200 Q386 216 384 232 Q382 240 381 244Z" fill="#6A9050" />
    </g>

    {/* Woman */}
    <g className="woman">
      <rect x="197" y="218" width="106" height="66" rx="14" fill="#4A4560" />
      <path d="M168 278 Q166 252 182 238 Q206 224 250 222 Q294 224 318 238 Q334 252 332 278Z" fill="#E07B5B" />
      <ellipse cx="178" cy="237" rx="20" ry="13" fill="#E07B5B" />
      <ellipse cx="322" cy="237" rx="20" ry="13" fill="#E07B5B" />
      <path d="M178 245 Q172 252 170 262" stroke="#CB6A48" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M322 245 Q328 252 330 262" stroke="#CB6A48" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
      <rect x="241" y="218" width="18" height="10" rx="5" fill="#F0C0A0" />
      <ellipse cx="250" cy="192" rx="40" ry="42" fill="#E8C86A" />
      <path d="M210 198 Q204 228 208 252 Q215 262 225 258 Q216 244 212 215Z" fill="#E8C86A" />
      <path d="M290 198 Q296 228 292 252 Q285 262 275 258 Q284 244 288 215Z" fill="#E8C86A" />
      <path d="M225 158 Q250 150 275 158 Q268 165 250 162 Q232 165 225 158Z" fill="#D4B44E" opacity="0.35" />
      <ellipse cx="239" cy="196" rx="11" ry="7" fill="#C9A0A8" transform="rotate(-25 239 196)" />
      <ellipse cx="261" cy="196" rx="11" ry="7" fill="#C9A0A8" transform="rotate(25 261 196)" />
      <circle cx="250" cy="196" r="6" fill="#D4AEB6" />
      <circle cx="250" cy="196" r="3" fill="#C9A0A8" />
    </g>
  </svg>
);

export default HeroIllustration;
