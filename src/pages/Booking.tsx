import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Cal?: any;
  }
}

const Booking = () => {
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

    window.Cal("init", "book-a-free-consultation", { origin: "https://app.cal.com" });

    window.Cal.ns["book-a-free-consultation"]("inline", {
      elementOrSelector: "#my-cal-inline-book-a-free-consultation",
      config: { "layout": "month_view" },
      calLink: "dialinity/book-a-free-consultation",
    });

    window.Cal.ns["book-a-free-consultation"]("ui", {
      "cssVarsPerTheme": { "light": { "cal-brand": "#0EA5E9" }, "dark": { "cal-brand": "#38BDF8" } },
      "hideEventTypeDetails": false,
      "layout": "month_view"
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book a <span className="text-primary">Free Consultation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a call with our team to discuss how we can help grow your business with professional cold calling services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div id="my-cal-inline-book-a-free-consultation" style={{ width: "100%", height: "100%", overflow: "scroll" }} />
          <div className="absolute bottom-0 left-0 w-full h-[77px] bg-background z-10 pointer-events-none hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
