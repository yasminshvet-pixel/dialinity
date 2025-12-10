import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "CEO, Apex Solutions",
    content: "We've tripled our qualified appointments in just 2 months. The ROI has been incredible. Their callers are professional and represent our brand perfectly.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Sales Director, GrowthForce",
    content: "Best decision we made for our sales team. We went from struggling to fill our calendar to having consistent daily appointments. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder, TechBridge Inc",
    content: "At $7/hour, this is an absolute no-brainer. The quality of leads and the professionalism of the callers exceeded all our expectations.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our clients say about working with us.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-primary/20 shadow-soft">
            <Quote className="absolute top-6 left-6 w-16 h-16 text-primary/10" />
            <div className="relative z-10">
              <div className="flex gap-1 justify-center mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-foreground text-center font-medium leading-relaxed mb-8">
                "{testimonials[0].content}"
              </p>
              <div className="text-center">
                <p className="font-semibold text-lg text-foreground">{testimonials[0].name}</p>
                <p className="text-muted-foreground">{testimonials[0].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary testimonials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.slice(1).map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
