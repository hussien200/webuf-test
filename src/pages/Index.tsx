import { Link } from "react-router-dom";
import { Camera, Shield, Wrench, Headphones, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Camera,
    title: "كاميرات مراقبة متطورة",
    description: "أحدث أنظمة كاميرات المراقبة بدقة عالية تصل إلى 4K مع خاصية الرؤية الليلية",
  },
  {
    icon: Wrench,
    title: "تركيب احترافي",
    description: "فريق متخصص لتركيب وتوصيل الكاميرات بأعلى معايير الجودة والأمان",
  },
  {
    icon: Headphones,
    title: "دعم فني مستمر",
    description: "خدمة صيانة ودعم فني على مدار الساعة لضمان عمل أنظمتكم بكفاءة",
  },
  {
    icon: Shield,
    title: "حلول أمنية ذكية",
    description: "أنظمة إنذار وتنبيه ذكية متكاملة مع تطبيقات الهاتف المحمول",
  },
];

const features = [
  "تغطية شاملة لجميع المناطق",
  "ضمان على جميع المنتجات",
  "أسعار منافسة",
  "خبرة أكثر من 10 سنوات",
  "دعم فني 24/7",
  "منتجات أصلية ومعتمدة",
];

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta */}
      <title>أفق الذكاء - كاميرات مراقبة وحلول أمنية في العراق</title>
      <meta name="description" content="شركة أفق الذكاء للكاميرات المراقبة والحلول الأمنية الذكية في العراق. تركيب وصيانة أنظمة المراقبة بأعلى جودة." />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="كاميرات المراقبة الأمنية" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-foreground/95 via-foreground/80 to-foreground/60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">حماية متكاملة لمنزلك وعملك</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              حلول أمنية ذكية
              <span className="block text-primary mt-2">لحماية ما تحب</span>
            </h1>
            
            <p className="text-lg text-background/80 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              نقدم أحدث أنظمة كاميرات المراقبة والحلول الأمنية المتكاملة في العراق. 
              فريق متخصص، منتجات موثوقة، ودعم فني على مدار الساعة.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  احصل على استشارة مجانية
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-background/30 text-background hover:bg-background hover:text-foreground" asChild>
                <Link to="/services">
                  استعرض خدماتنا
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold mb-3">خدماتنا</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ماذا نقدم لكم؟
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نوفر مجموعة شاملة من الخدمات الأمنية لتلبية احتياجاتكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">
                عرض جميع الخدمات
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-semibold mb-3">لماذا نحن؟</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                الخيار الأمثل للحلول الأمنية في العراق
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                بخبرة تمتد لأكثر من عشر سنوات في مجال الأنظمة الأمنية، نفخر بكوننا 
                الشريك الموثوق للعديد من المؤسسات والمنازل في جميع أنحاء العراق.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="default" size="lg" asChild>
                  <Link to="/about">
                    اعرف المزيد عنا
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background/10 backdrop-blur rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-primary-foreground mb-2">+500</div>
                    <div className="text-primary-foreground/80 text-sm">مشروع منجز</div>
                  </div>
                  <div className="bg-background/10 backdrop-blur rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-primary-foreground mb-2">+10</div>
                    <div className="text-primary-foreground/80 text-sm">سنوات خبرة</div>
                  </div>
                  <div className="bg-background/10 backdrop-blur rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-primary-foreground mb-2">24/7</div>
                    <div className="text-primary-foreground/80 text-sm">دعم فني</div>
                  </div>
                  <div className="bg-background/10 backdrop-blur rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-primary-foreground mb-2">100%</div>
                    <div className="text-primary-foreground/80 text-sm">رضا العملاء</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            جاهز لتأمين منزلك أو عملك؟
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-8">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر خاص
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:07750006040">
                اتصل الآن: 07750006040
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-background/30 text-background hover:bg-background hover:text-foreground" asChild>
              <Link to="/contact">
                أرسل رسالة
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
