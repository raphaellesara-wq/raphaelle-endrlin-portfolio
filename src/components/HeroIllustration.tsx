const HeroIllustration = () => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full"
    style={{ maxWidth: 360 }}
    aria-hidden="true"
  >
    <style>{`
      @keyframes plantSway1 {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(4deg); }
      }
      @keyframes plantSway2 {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(-3.5deg); }
      }
      @keyframes plantSway3 {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(3deg); }
      }
      .plant1 { animation: plantSway1 3.5s ease-in-out infinite; transform-origin: 75px 220px; }
      .plant2 { animation: plantSway2 4s ease-in-out infinite 0.5s; transform-origin: 325px 220px; }
      .plant3 { animation: plantSway3 3s ease-in-out infinite 1s; transform-origin: 303px 210px; }
    `}</style>

    {/* Background blob */}
    <path
      d="M100 60 Q200 20 300 70 Q340 100 330 160 Q320 230 200 250 Q80 240 70 160 Q60 100 100 60Z"
      fill="#F8EDE3"
      opacity="0.5"
    />

    {/* Desk */}
    <rect x="80" y="215" width="240" height="8" rx="4" fill="#C4956A" />
    <rect x="105" y="223" width="6" height="40" rx="2" fill="#B8845C" />
    <rect x="289" y="223" width="6" height="40" rx="2" fill="#B8845C" />

    {/* Monitor */}
    <rect x="150" y="130" width="100" height="72" rx="6" fill="#E8E4DF" stroke="#D0CCC7" strokeWidth="1.5" />
    <rect x="156" y="136" width="88" height="54" rx="3" fill="#F5F3F0" />
    <rect x="166" y="148" width="40" height="3" rx="1.5" fill="#C9A0A8" opacity="0.5" />
    <rect x="166" y="156" width="55" height="3" rx="1.5" fill="#8B7DB5" opacity="0.4" />
    <rect x="166" y="164" width="35" height="3" rx="1.5" fill="#8A9E7A" opacity="0.4" />
    <rect x="166" y="172" width="48" height="3" rx="1.5" fill="#C9A0A8" opacity="0.3" />
    <rect x="192" y="202" width="16" height="13" rx="2" fill="#D0CCC7" />
    <rect x="182" y="213" width="36" height="4" rx="2" fill="#D0CCC7" />

    {/* Chair back */}
    <path
      d="M168 195 Q167 160 175 148 Q185 138 200 137 Q215 138 225 148 Q233 160 232 195Z"
      fill="#5A5564"
      opacity="0.15"
    />

    {/* Woman - torso */}
    <path
      d="M175 210 Q175 180 180 168 Q188 155 200 154 Q212 155 220 168 Q225 180 225 210Z"
      fill="#E07B5B"
    />
    {/* Arms */}
    <path d="M175 185 Q160 190 158 205 Q157 210 162 212" stroke="#E07B5B" strokeWidth="10" strokeLinecap="round" fill="none" />
    <path d="M225 185 Q240 190 242 205 Q243 210 238 212" stroke="#E07B5B" strokeWidth="10" strokeLinecap="round" fill="none" />
    <circle cx="162" cy="213" r="5" fill="#F2C6A5" />
    <circle cx="238" cy="213" r="5" fill="#F2C6A5" />

    {/* Neck */}
    <rect x="193" y="140" width="14" height="16" rx="5" fill="#F2C6A5" />

    {/* Head */}
    <ellipse cx="200" cy="120" rx="26" ry="28" fill="#F2C6A5" />

    {/* Hair */}
    <path
      d="M174 115 Q174 88 200 85 Q226 88 226 115 Q226 105 222 98 Q215 90 200 88 Q185 90 178 98 Q174 105 174 115Z"
      fill="#E8C86A"
    />
    <path d="M174 112 Q170 125 173 138" stroke="#E8C86A" strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M226 112 Q230 125 227 138" stroke="#E8C86A" strokeWidth="8" strokeLinecap="round" fill="none" />
    <path
      d="M178 108 Q185 100 200 98 Q215 100 222 108 Q218 104 200 102 Q182 104 178 108Z"
      fill="#D4B44E"
      opacity="0.6"
    />

    {/* Eyes */}
    <ellipse cx="191" cy="120" rx="3" ry="3.5" fill="#5A5564" />
    <ellipse cx="209" cy="120" rx="3" ry="3.5" fill="#5A5564" />
    <circle cx="192" cy="119" r="1" fill="#fff" />
    <circle cx="210" cy="119" r="1" fill="#fff" />

    {/* Smile */}
    <path d="M194 130 Q200 135 206 130" stroke="#C4956A" strokeWidth="1.5" strokeLinecap="round" fill="none" />

    {/* Blush */}
    <ellipse cx="185" cy="127" rx="5" ry="3" fill="#E8A090" opacity="0.3" />
    <ellipse cx="215" cy="127" rx="5" ry="3" fill="#E8A090" opacity="0.3" />

    {/* Plant 1 - left */}
    <g className="plant1">
      <path d="M62 220 L68 245 L82 245 L88 220Z" fill="#C4956A" />
      <rect x="60" y="217" width="30" height="5" rx="2" fill="#D4A070" />
      <path d="M75 217 Q73 200 65 190" stroke="#8A9E7A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M65 190 Q58 185 55 190 Q58 195 65 190Z" fill="#8A9E7A" />
      <path d="M75 217 Q77 195 82 185" stroke="#8A9E7A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M82 185 Q88 180 90 186 Q86 190 82 185Z" fill="#A3B58F" />
      <path d="M75 217 Q75 202 70 195" stroke="#8A9E7A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M70 195 Q65 192 64 197 Q67 200 70 195Z" fill="#7A8E6A" />
    </g>

    {/* Plant 2 - right tall */}
    <g className="plant2">
      <path d="M312 220 L318 248 L332 248 L338 220Z" fill="#C4956A" />
      <rect x="310" y="217" width="30" height="5" rx="2" fill="#D4A070" />
      <path d="M320 217 Q318 188 315 175" stroke="#6B8F5B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M325 217 Q325 185 327 170" stroke="#8A9E7A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M330 217 Q332 190 335 178" stroke="#7A8E6A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </g>

    {/* Plant 3 - small succulent */}
    <g className="plant3">
      <path d="M295 215 L298 230 L308 230 L311 215Z" fill="#B8845C" />
      <rect x="294" y="213" width="18" height="4" rx="2" fill="#C4956A" />
      <ellipse cx="303" cy="210" rx="7" ry="5" fill="#8A9E7A" />
      <ellipse cx="300" cy="208" rx="4" ry="4" fill="#A3B58F" />
      <ellipse cx="306" cy="208" rx="4" ry="4" fill="#7A8E6A" />
      <circle cx="303" cy="206" r="2.5" fill="#98AE84" />
    </g>

    {/* Coffee mug */}
    <rect x="130" y="205" width="12" height="14" rx="3" fill="#E8E4DF" />
    <path d="M142 208 Q148 208 148 213 Q148 218 142 218" stroke="#D0CCC7" strokeWidth="1.5" fill="none" />
  </svg>
);

export default HeroIllustration;
