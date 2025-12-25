import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: Phone,
    title: "الهاتف",
    value: "07750006040",
    href: "tel:07750006040",
    dir: "ltr",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "07750006040",
    href: "https://wa.me/9647750006040",
    dir: "ltr",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@horizonintel.iq",
    href: "mailto:info@horizonintel.iq",
    dir: "ltr",
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "العراق - بغداد",
    href: null,
    dir: "rtl",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "السبت - الخميس: 9 ص - 6 م",
    href: null,
    dir: "rtl",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "تم الإرسال بنجاح",
      description: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت.",
    });
    
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-semibold mb-3">تواصل معنا</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              نحن هنا لمساعدتك
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              هل لديك استفسار أو تحتاج إلى عرض سعر؟ تواصل معنا وسيقوم فريقنا 
              بالرد عليك في أقرب وقت ممكن
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">أرسل رسالتك</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    الاسم الكامل <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك الكامل"
                    className="h-12"
                    maxLength={100}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    رقم الهاتف <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXXX"
                    className="h-12"
                    dir="ltr"
                    maxLength={15}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    البريد الإلكتروني (اختياري)
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="h-12"
                    dir="ltr"
                    maxLength={255}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    الرسالة <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    className="min-h-[150px] resize-none"
                    maxLength={1000}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "جاري الإرسال..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      إرسال الرسالة
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">معلومات التواصل</h2>
              
              <div className="space-y-4 mb-10">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-muted rounded-xl"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                          dir={item.dir}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground" dir={item.dir}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-hero rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-primary-foreground mb-4">
                  هل تفضل التحدث مباشرة؟
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  اتصل بنا أو راسلنا عبر واتساب للحصول على رد فوري
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" size="lg" className="flex-1" asChild>
                    <a href="tel:07750006040">
                      <Phone className="w-4 h-4" />
                      اتصل الآن
                    </a>
                  </Button>
                  <Button variant="whatsapp" size="lg" className="flex-1" asChild>
                    <a href="https://wa.me/9647750006040" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      واتساب
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
