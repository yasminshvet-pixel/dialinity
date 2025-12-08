import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* Be Our First Client CTA */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            New & Ready to Serve
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Be One of Our First Clients
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're a new agency ready to prove ourselves. Get premium service and dedicated attention as one of our founding clients.
          </p>
          <div className="p-8 rounded-2xl bg-card border border-border/50">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Founding Client Benefits
            </h3>
            <ul className="text-muted-foreground space-y-2 mb-6">
              <li>✓ Priority attention and dedicated support</li>
              <li>✓ Flexible terms as we build our partnership</li>
              <li>✓ Shape our service to fit your needs</li>
              <li>✓ Same professional quality at $7/hour</li>
            </ul>
            <Button asChild size="lg">
              <Link to="/book">Become a Founding Client</Link>
            </Button>
          </div>
        </div>
        
        {/* Call Demo */}
        <div className="max-w-xl mx-auto text-center">
          <div className="p-8 rounded-2xl gradient-hero text-primary-foreground">
            <h3 className="font-display text-2xl font-bold mb-3">
              Hear Our Callers in Action
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Listen to a sample call and experience the quality of our trained professionals.
            </p>
            <Button variant="heroOutline" size="lg" className="group">
              <Play className="w-5 h-5" />
              Play Call Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
