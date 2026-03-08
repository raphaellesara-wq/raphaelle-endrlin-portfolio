import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    heLabel: "אימייל",
    enLabel: "Email",
    value: "raphaellesara@gmail.com",
    href: "mailto:raphaellesara@gmail.com",
  },
  {
    icon: Phone,
    heLabel: "טלפון",
    enLabel: "Phone",
    value: "050-293-9686",
    href: "tel:+972502939686",
  },
  {
    icon: Linkedin,
    heLabel: "לינקדאין",
    enLabel: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/raphaelle-endrlin/",
  },
];

const ContactSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const hoverSlideClass = isRTL
    ? "hover:translate-x-1"
    : "hover:-translate-x-1";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-10 md:py-16"
      style={{ background: "#1C1A28" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Info */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: "hsl(var(--accent-green))" }} />
                <span className="text-sm tracking-wide font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {t("צור קשר", "Contact")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1]" style={{ color: "#FFFFFF" }}>
                {t("נשמח", "Let's")}
                <br />
                <span className="italic" style={{ color: "hsl(var(--accent-green))" }}>{t("לדבר", "Talk")}</span>
              </h2>
            </div>

            <p
              className={`text-sm md:text-base leading-relaxed max-w-md transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {t(
                "מחפשת הזדמנות לשלב ניסיון שיווקי עם עולם האוטומציות. תמיד שמחה לשמוע — פתוחה לשיחה.",
                "Looking for an opportunity to combine marketing experience with AI automation. Open for a conversation."
              )}
            </p>

            {/* Contact link cards */}
            <div className="space-y-3">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a
                    key={i}
                    href={link.href}
                    target={link.icon === Linkedin ? "_blank" : undefined}
                    rel={link.icon === Linkedin ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 ${hoverSlideClass} hover:shadow-md ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{
                      transitionDelay: `${200 + i * 100}ms`,
                      background: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.10)",
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(61,139,110,0.15)" }}>
                      <Icon size={18} style={{ color: "hsl(var(--accent-green))" }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{t(link.heLabel, link.enLabel)}</p>
                      <p className="text-sm font-medium" style={{ color: "#FFFFFF" }}>{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right — Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {t("שם מלא", "Full Name")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#FFFFFF",
                    focusRingColor: "hsl(var(--accent-green))",
                  }}
                  placeholder={t("הכנס שם מלא", "Enter your full name")}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {t("אימייל", "Email")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#FFFFFF",
                  }}
                  placeholder={t("הכנס אימייל", "Enter your email")}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {t("הודעה", "Message")}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#FFFFFF",
                  }}
                  placeholder={t("כתוב הודעה...", "Write your message...")}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundColor: "hsl(var(--accent-green))",
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) => {
                  if (!submitted) (e.currentTarget as HTMLElement).style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  if (!submitted) (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
                disabled={submitted}
              >
                {submitted
                  ? t("✓ נשלח!", "✓ Sent!")
                  : t("שלח הודעה →", "Send Message →")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
