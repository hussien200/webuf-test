import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const phoneNumber = "07750006040";
  const whatsappNumber = "9647750006040";
  const whatsappMessage = encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات كاميرات المراقبة");

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-glow"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-glow hover:shadow-elevated hover:scale-110 transition-all duration-300"
        aria-label="اتصل بنا"
      >
        <Phone className="w-7 h-7 text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
