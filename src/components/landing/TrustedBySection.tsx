import { Building2, Home, KeyRound, FileSignature, Map, Building } from "lucide-react";

const trustedBy = [
  { icon: Home, label: "Residential" },
  { icon: Building2, label: "Commercial" },
  { icon: KeyRound, label: "Luxury" },
  { icon: FileSignature, label: "Investment" },
  { icon: Map, label: "Developers" },
  { icon: Building, label: "Brokers" },
];

const TrustedBySection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container">
        <p className="text-center text-sm md:text-base text-muted-foreground mb-10">
          Trusted by professionals across the real estate industry
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {trustedBy.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 group"
            >
              <Icon
                className="w-8 h-8 md:w-10 md:h-10 text-foreground opacity-50 grayscale transition-opacity duration-300 group-hover:opacity-70"
                strokeWidth={1.5}
              />
              <span className="text-xs md:text-sm text-muted-foreground font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
