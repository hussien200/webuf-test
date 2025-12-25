import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "الجودة",
    description: "نلتزم بتقديم منتجات وخدمات بأعلى معايير الجودة العالمية",
  },
  {
    icon: Users,
    title: "العملاء أولاً",
    description: "رضا عملائنا هو هدفنا الأساسي ونسعى دائماً لتجاوز توقعاتهم",
  },
  {
    icon: Eye,
    title: "الشفافية",
    description: "نؤمن بالتعامل الشفاف والصادق مع جميع عملائنا وشركائنا",
  },
  {
    icon: Award,
    title: "الاحترافية",
    description: "فريق عمل محترف ومدرب على أعلى مستوى من الكفاءة",
  },
];

const milestones = [
  { year: "2014", title: "تأسيس الشركة", description: "بداية رحلتنا في عالم الأنظمة الأمنية" },
  { year: "2016", title: "توسع الخدمات", description: "إضافة خدمات الصيانة والدعم الفني" },
  { year: "2019", title: "الانتشار الجغرافي", description: "توسيع نطاق خدماتنا لتشمل جميع المحافظات" },
  { year: "2022", title: "الحلول الذكية", description: "إطلاق خدمات المراقبة الذكية والسحابية" },
  { year: "2024", title: "الريادة", description: "أصبحنا من أبرز الشركات في القطاع" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-semibold mb-3">من نحن</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                أفق الذكاء للحلول الأمنية
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                شركة عراقية رائدة في مجال كاميرات المراقبة والأنظمة الأمنية الذكية. 
                تأسست عام 2014 بهدف توفير حلول أمنية متكاملة وموثوقة للمنازل والمؤسسات 
                في جميع أنحاء العراق.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                بفريق من المهندسين والفنيين المحترفين، نفخر بخدمة أكثر من 500 عميل 
                راضٍ وتنفيذ مئات المشاريع الناجحة خلال مسيرتنا.
              </p>
            </div>
            <div className="bg-gradient-hero rounded-3xl p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-foreground mb-2">+500</div>
                  <div className="text-primary-foreground/80">عميل راضٍ</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-foreground mb-2">+10</div>
                  <div className="text-primary-foreground/80">سنوات خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-foreground mb-2">+1000</div>
                  <div className="text-primary-foreground/80">كاميرا مركبة</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-foreground mb-2">18</div>
                  <div className="text-primary-foreground/80">محافظة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                أن نكون الشركة الرائدة والمفضلة في مجال الحلول الأمنية الذكية في العراق 
                والمنطقة، من خلال تقديم خدمات مبتكرة وموثوقة تحقق أعلى مستويات الأمان لعملائنا.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">رسالتنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                توفير حلول أمنية متكاملة بأسعار منافسة وجودة عالية، مع الالتزام بتقديم 
                أفضل خدمة عملاء ودعم فني مستمر لضمان راحة البال لعملائنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold mb-3">قيمنا</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              المبادئ التي نعمل بها
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-2xl text-center hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold mb-3">مسيرتنا</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              رحلة النجاح والتطور
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
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
            انضم إلى عائلة عملائنا الراضين
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-8">
            تواصل معنا اليوم ودعنا نساعدك في اختيار الحل الأمني المناسب لك
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              تواصل معنا
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
