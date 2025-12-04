import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

const BookingSection = () => {
  useEffect(() => {
    // Load Cal.com embed script
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal?.("init", "book-a-free-consultation", { origin: "https://app.cal.com" });

    window.Cal?.ns["book-a-free-consultation"]("inline", {
      elementOrSelector: "#my-cal-inline-book-a-free-consultation",
      config: { layout: "month_view" },
      calLink: "dialinity/book-a-free-consultation",
    });

    window.Cal?.ns["book-a-free-consultation"]("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#292929" },
        dark: { "cal-brand": "#fafafa" }
      },
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get Started
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book a Free Consultation
          </h2>
          <p className="text-lg text-muted-foreground">
            Schedule a call with our team to discuss your lead generation needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cal-wrapper relative">
            <div id="my-cal-inline-book-a-free-consultation" className="min-h-[600px]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[77px] bg-white z-50 pointer-events-none hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
