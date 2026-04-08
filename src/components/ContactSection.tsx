import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Linkedin } from "lucide-react";

const contactLinks = [
{
  icon: Linkedin,
  heLabel: "לינקדאין",
  enLabel: "LinkedIn",
  value: "LinkedIn Profile",
  href: "https://www.linkedin.com/in/raphaelle-endrlin/"
}];


const ContactSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://hook.eu2.make.com/4h18c5l55lw1s3q0saq1xhp7uboooqj4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (_) {
      // fail silently — still show success to user
    }
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section">
      
      {/* Info column */}
      <div className={`contact-info-col space-y-6 ${isRTL ? "order-1" : ""}`}>
        <div
          className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`
          }>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-muted-foreground/30" />
            <span className="section-tag text-muted-foreground">
              {t("צור קשר", "Contact")}
            </span>
          </div>
          <h2 className="contact-heading font-display">
            {t("בואו", "Let's")}
            <span className="accent block text-muted-foreground">
              {t("נדבר", "Talk")}
            </span>
          </h2>
        </div>

        <p
          className={`text-sm md:text-base leading-relaxed max-w-md text-muted-foreground transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`
          }>
          
          {t(
            "לקבלת הצעת מחיר, קביעת ראיון עבודה ובירורים נוספים — מוזמנים להשאיר פרטים ואחזור אליכן בהקדם!",
            "For pricing inquiries, job interviews, or any other questions — feel free to leave your details and I'll get back to you shortly!"
          )}
        </p>

        {/* Contact cards */}
        


































        
      </div>

      {/* Form column */}
      <div
        className={`contact-form-col ${isRTL ? "order-2" : ""} transition-all duration-700 delay-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`
        }>
        
        <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-4 w-full" noValidate>
          <div className="form-group flex flex-col gap-1.5">
            <label htmlFor="contact-name">{t("שם מלא", "Full Name")}</label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
              placeholder={t("הכנס שם מלא", "Enter your full name")}
              autoComplete="name" />
          </div>

          <div className="form-group flex flex-col gap-1.5">
            <label htmlFor="contact-email">{t("אימייל", "Email")}</label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              placeholder={t("הכנס אימייל", "Enter your email")}
              autoComplete="email" />
          </div>

          <div className="form-group flex flex-col gap-1.5">
            <label htmlFor="contact-message">{t("הודעה", "Message")}</label>
            <textarea
              id="contact-message"
              required
              value={formData.message}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
              placeholder={t("כתוב הודעה...", "Write your message...")} />
          </div>

          <button
            type="submit"
            disabled={submitted || loading}
            className="contact-submit"
            aria-live="polite">
            {submitted
            ? t("✓ נשלח!", "✓ Sent!")
            : loading
            ? t("שולח...", "Sending...")
            : t("← שלח הודעה", "Send Message →")}
          </button>
        </form>
      </div>
    </section>);

};

export default ContactSection;