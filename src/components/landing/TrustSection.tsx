import { Headphones, ShieldCheck, Clock, BarChart3, Zap, Users } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "100% Quality Guarantee" },
  { icon: Headphones, label: "U.S. Trained Callers" },
  { icon: Clock, label: "24/7 Support Available" },
  { icon: BarChart3, label: "Daily Performance Reports" },
  { icon: Zap, label: "Live Call Transfers" },
  { icon: Users, label: "Dedicated Account Manager" },
];

const integrations = [
  "Salesforce",
  "HubSpot",
  "Pipedrive",
  "Zoho CRM",
  "Close",
  "Monday",
];

const TrustSection = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/20">
      <div className="container">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-10">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Icon className="w-4 h-4 text-primary" strokeWidth={2} />
              <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CRM Integrations */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
            Seamlessly integrates with your CRM
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {integrations.map((name) => (
              <span
                key={name}
                className="text-sm md:text-base font-semibold text-foreground/40 hover:text-foreground/60 transition-colors duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
