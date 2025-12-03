declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/dialinity-info?hide_landing_page_details=1&hide_gdpr_banner=1'
    });
  }
};
