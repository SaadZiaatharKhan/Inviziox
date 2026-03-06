import onboarding1 from "@/assets/images/onboarding1.jpg";
import onboarding2 from "@/assets/images/onboarding2.jpg";
import onboarding3 from "@/assets/images/onboarding3.jpg";
import sign_up_background from "@/assets/images/sign_up_background.jpg";
import sign_in_background from "@/assets/images/sign_in_background.jpg";

export const images = { 
  onboarding1, 
  onboarding2, 
  onboarding3,
  sign_up_background,
  sign_in_background
};

export const onboarding = [
  {
    id: 1,
    title: "Smart Wealth, Real Time",
    description:
      "Track your crypto, stablecoins, and RWAs instantly.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Automated Growth",
    description:
      "AI rebalances and compounds your portfolio 24/7.",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Secure & Always On",
    description:
      "Real-time alerts and institutional-grade security.",
    image: images.onboarding3,
  },
]
;

export const data = {
  onboarding,
};