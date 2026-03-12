import { useLanguage } from "@/contexts/LanguageContext";
import { useCountUp } from "@/hooks/use-count-up";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import HeroIllustration from "@/components/HeroIllustration";

const tools = [
  {
    name: "Claude",
    color: "#C97B4B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 18L12 7L16 18" stroke="#C97B4B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="9.5" y1="15" x2="14.5" y2="15" stroke="#C97B4B" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Flashy",
    color: "#7B2FBE",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13.5 3L7 13H12L10.5 21L18 11H13Z" fill="#7B2FBE" opacity="0.82"/>
      </svg>
    ),
  },
  {
    name: "Klaviyo",
    color: "#1F3A5F",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="4" width="3.5" height="16" rx="0.8" fill="#1F3A5F" opacity="0.80"/>
        <path d="M8.5 12L16 4V8.5L11.5 12L16 15.5V20Z" fill="#1F3A5F" opacity="0.80"/>
      </svg>
    ),
  },
  {
    name: "Mailchimp",
    color: "#FFE01B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="13.5" rx="5.5" ry="5" fill="#FFE01B" opacity="0.92"/>
        <circle cx="6.5" cy="14" r="1.8" fill="#FFE01B" opacity="0.72"/>
        <circle cx="17.5" cy="14" r="1.8" fill="#FFE01B" opacity="0.72"/>
        <circle cx="10" cy="12" r="1" fill="#241C15"/>
        <circle cx="14" cy="12" r="1" fill="#241C15"/>
        <path d="M9.5 15Q12 17 14.5 15" stroke="#241C15" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "N8N",
    color: "#FF6D5A",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="7" cy="12" r="3" fill="#FF6D5A" opacity="0.78"/>
        <circle cx="17" cy="12" r="3" fill="#FF6D5A" opacity="0.78"/>
        <line x1="10" y1="12" x2="14" y2="12" stroke="#FF6D5A" strokeWidth="1.6" opacity="0.62"/>
      </svg>
    ),
  },
  {
    name: "Make.com",
    color: "#6D00CC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="12" r="3.2" stroke="#6D00CC" strokeWidth="1.3" fill="none" opacity="0.78"/>
        <circle cx="15" cy="9" r="2.6" stroke="#6D00CC" strokeWidth="1.2" fill="none" opacity="0.62"/>
        <circle cx="15" cy="15" r="2.6" stroke="#6D00CC" strokeWidth="1.2" fill="
