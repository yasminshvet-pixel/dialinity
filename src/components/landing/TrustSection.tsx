import { Headphones, ShieldCheck, Clock, BarChart3, Zap, Users } from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, label: "Quality Guarantee" },
  { icon: Headphones, label: "U.S. Trained Callers" },
  { icon: Clock, label: "24/7 Support" },
  { icon: BarChart3, label: "Daily Reports" },
  { icon: Zap, label: "Live Transfers" },
  { icon: Users, label: "Dedicated Manager" },
];

const integrations = [
  { name: "Salesforce", color: "#00A1E0" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Pipedrive", color: "#1A1A1A" },
  { name: "Zoho", color: "#C8202B" },
  { name: "Close", color: "#3D5AFE" },
  { name: "Monday", color: "#FF3D57" },
];

const TrustSection = () => {
  return (
    <section className="py-14 border-y border-border/30 bg-muted/10">
      <div className="container space-y-10">
        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" strokeWidth={2} />
              </div>
              <span className="text-sm font-medium text-foreground/80">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/50" />

        {/* CRM Integrations */}
        <div className="text-center space-y-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
            Integrates with your favorite CRM
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {integrations.map(({ name, color }) => (
              <div
                key={name}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm font-semibold text-foreground/60 group-hover:text-foreground/90 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
