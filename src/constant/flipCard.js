import { AnimatedTestimonials } from "@/components/AnimatedCard/AnimatedCard";

export function VisualDescription() {
  const testimonials = [
    {
        quote:
          "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Backtest Result",
        designation: "CTO at InnovateSphere",
        src: "/visualize/port_pnl.png",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Parameter Tuning",
      designation: "The best way to find the best parameter",
      src: "/visualize/tuning.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Returns Calendar",
      designation: "Operations Director at CloudScale",
      src: "/visualize/ret_cal.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Returns Distribution",
      designation: "Engineering Lead at DataPro",
      src: "/visualize/return_dist.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Factor Layers",
      designation: "VP of Technology at FutureNet",
      src: "/visualize/factor_layer.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
