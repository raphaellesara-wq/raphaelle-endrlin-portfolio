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

  // RTL: slide right on hover. LTR: slide left on hover.
  const hoverSlideClass = isRTL
    ? "hover:translate-x-1"
    : "hover:-translate-x-1";

  return (
    <section id="contact" ref={sectionRef} className="py-10 md:py-16 bg-background">
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
                <div className="w-8 h-px bg-accent-green" />
                <span className="text-sm tracking-wide text-muted-foreground font-medium">
                  {t("צור קשר", "Contact")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1]">
                {t("נשמח", "Let's")}
                <br />
                <span className="text-accent-green italic">{t("לדבר", "Talk")}</span>
              </h2>
            </div>

            <p
              className={`text-sm md:text-base leading-relaxed text-muted-foreground max-w-md transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
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
                    className={`flex items-center gap-4 p-4 rounded-2xl border border-border bg-background transition-all duration-500 ${hoverSlideClass} hover:shadow-md ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent-green-pale flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent-green" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{t(link.heLabel, link.enLabel)}</p>
                      <p className="text-sm font-medium text-foreground">{link.value}</p>
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
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  {t("שם מלא", "Full Name")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink/40 focus:border-accent-pink/40"
                  placeholder={t("הכנס שם מלא", "Enter your full name")}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  {t("אימייל", "Email")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink/40 focus:border-accent-pink/40"
                  placeholder={t("הכנס אימייל", "Enter your email")}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  {t("הודעה", "Message")}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-pink/40 focus:border-accent-pink/40 resize-none"
                  placeholder={t("כתוב הודעה...", "Write your message...")}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className={`w-full rounded-xl font-medium transition-all duration-300 ${
                  submitted
                    ? "bg-accent-green text-primary-foreground hover:bg-accent-green"
                    : "text-primary-foreground hover:-translate-y-0.5 hover:shadow-lg"
                }`}
                style={
                  submitted
                    ? undefined
                    : { backgroundColor: "#6DC4A0" }
                }
                onMouseEnter={(e) => {
                  if (!submitted) (e.currentTarget as HTMLElement).style.backgroundColor = "#4AAF8C";
                }}
                onMouseLeave={(e) => {
                  if (!submitted) (e.currentTarget as HTMLElement).style.backgroundColor = "#6DC4A0";
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
