import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail, Phone, Linkedin } from "lucide-react";

const contactLinks = [
{
  icon: Mail,
  heLabel: "אימייל",
  enLabel: "Email",
  value: "raphaellesara@gmail.com",
  href: "mailto:raphaellesara@gmail.com"
},
{
  icon: Phone,
  heLabel: "טלפון",
  enLabel: "Phone",
  value: "050-293-9686",
  href: "tel:+972502939686"
},
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            {t("אשמח", "Let's")}
            <span className="accent block text-muted-foreground">
              {t("לדבר", "Talk")}
            </span>
          </h2>
        </div>

        <p
          className={`text-sm md:text-base leading-relaxed max-w-md text-muted-foreground transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`
          }>
          
          {t(
            "מחפשת הזדמנות לשלב ניסיון שיווקי עם עולם האוטומציות. תמיד שמחה לשמוע — פתוחה לשיחה.",
            "Looking for an opportunity to combine marketing experience with AI automation. Open for a conversation."
          )}
        </p>

        {/* Contact cards */}
        


































        
      </div>

      {/* Form column */}
      <div
        className={`contact-form-col ${isRTL ? "order-2" : ""} transition-all duration-700 delay-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`
        }>
        
        <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-4 w-full">
          <div className="form-group flex flex-col gap-1.5">
            <label>{t("שם מלא", "Full Name")}</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
              placeholder={t("הכנס שם מלא", "Enter your full name")} />
            
          </div>

          <div className="form-group flex flex-col gap-1.5">
            <label>{t("אימייל", "Email")}</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              placeholder={t("הכנס אימייל", "Enter your email")} />
            
          </div>

          <div className="form-group flex flex-col gap-1.5">
            <label>{t("הודעה", "Message")}</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
              placeholder={t("כתוב הודעה...", "Write your message...")} />
            
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="contact-submit">
            
            {submitted ?
            t("✓ נשלח!", "✓ Sent!") :
            t("← שלח הודעה", "Send Message →")}
          </button>
        </form>
      </div>
    </section>);

};

export default ContactSection;