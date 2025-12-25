import { Link } from "react-router-dom";
import { Camera, Wrench, Headphones, Shield, Wifi, Monitor, Server, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Camera,
    title: "كاميرات المراقبة",
    description: "تركيب وتوريد أحدث أنظمة كاميرات المراقبة بجودة 4K و 8 ميجابكسل مع خاصية الرؤية الليلية الملونة والتتبع الذكي للحركة.",
    features: ["دقة عالية تصل 4K", "رؤية ليلية ملونة", "تتبع ذكي للحركة", "مقاومة للعوامل الجوية"],
  },
  {
    icon: Wrench,
    title: "التركيب والتوصيل",
    description: "فريق فني متخصص لتركيب وتوصيل جميع أنظمة المراقبة بأعلى معايير الجودة والاحترافية مع ضمان شامل على العمل.",
    features: ["تركيب احترافي", "توصيل الكابلات", "إعداد النظام", "تدريب على الاستخدام"],
  },
  {
    icon: Headphones,
    title: "الصيانة والدعم",
    description: "خدمة صيانة دورية ودعم فني على مدار الساعة لضمان عمل أنظمتكم بكفاءة عالية مع استجابة سريعة لأي طارئ.",
    features: ["صيانة دورية", "دعم 24/7", "استجابة سريعة", "قطع غيار أصلية"],
  },
  {
    icon: Monitor,
    title: "أجهزة التسجيل DVR/NVR",
    description: "أحدث أجهزة التسجيل الرقمية بسعات تخزين عالية تصل إلى 16 تيرابايت مع إمكانية المراقبة عن بعد.",
    features: ["سعة تخزين عالية", "تسجيل مستمر", "مراقبة عن بعد", "نسخ احتياطي تلقائي"],
  },
  {
    icon: Wifi,
    title: "الكاميرات اللاسلكية",
    description: "حلول مراقبة لاسلكية سهلة التركيب ومرنة الاستخدام مع اتصال مستقر وجودة صورة ممتازة.",
    features: ["تركيب سهل", "اتصال مستقر", "بدون كابلات", "مرونة في التوضع"],
  },
  {
    icon: Shield,
    title: "أنظمة الإنذار",
    description: "أنظمة إنذار ذكية متكاملة تشمل حساسات الحركة والأبواب والنوافذ مع تنبيهات فورية على الهاتف.",
    features: ["حساسات حركة", "إنذار صوتي", "تنبيهات فورية", "تكامل مع الكاميرات"],
  },
  {
    icon: Server,
    title: "التخزين السحابي",
    description: "خدمات تخزين سحابي آمنة للاحتفاظ بتسجيلاتكم مع إمكانية الوصول إليها من أي مكان في العالم.",
    features: ["تخزين آمن", "وصول من أي مكان", "نسخ احتياطي", "حماية البيانات"],
  },
  {
    icon: Lock,
    title: "أنظمة التحكم بالدخول",
    description: "أنظمة متطورة للتحكم بالدخول تشمل البصمة والبطاقات والرموز السرية مع سجل كامل للدخول والخروج.",
    features: ["بصمة الإصبع", "بطاقات ذكية", "سجل الدخول", "تحكم عن بعد"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-semibold mb-3">خدماتنا المتكاملة</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              حلول أمنية شاملة لجميع احتياجاتكم
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              نقدم مجموعة متكاملة من الخدمات الأمنية بأعلى معايير الجودة، 
              من التوريد والتركيب إلى الصيانة والدعم الفني المستمر
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-3">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            هل تحتاج إلى خدمة مخصصة؟
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-8">
            فريقنا جاهز لمساعدتك في اختيار الحل الأمثل لاحتياجاتك
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              تواصل معنا الآن
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
