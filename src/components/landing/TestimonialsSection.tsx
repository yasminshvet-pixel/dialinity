import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "CEO",
    company: "Apex Solutions",
    content: "We've tripled our qualified appointments in just 2 months. The ROI has been incredible. Their callers are professional and represent our brand perfectly.",
    rating: 5,
    initials: "MT",
  },
  {
    name: "Sarah Mitchell",
    role: "Sales Director",
    company: "GrowthForce",
    content: "Best decision we made for our sales team. We went from struggling to fill our calendar to having consistent daily appointments. Highly recommend!",
    rating: 5,
    initials: "SM",
  },
  {
    name: "David Chen",
    role: "Founder",
    company: "TechBridge Inc",
    content: "At $7/hour, this is an absolute no-brainer. The quality of leads and the professionalism of the callers exceeded all our expectations.",
    rating: 5,
    initials: "DC",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "2M+", label: "Calls Made" },
  { value: "98%", label: "Client Retention" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative p-6 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg ${
                index === 1 ? "lg:-translate-y-4" : ""
              }`}
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Trusted by sales teams at growing B2B companies
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
