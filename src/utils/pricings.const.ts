import { FAQItem } from "@/types/faq.types";

export const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for side projects and small teams",
    features: [
      "Up to 3 team members",
      "Basic analytics",
      "1GB storage",
      "Community support",
      "Basic integrations",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for growing teams and businesses",
    features: [
      "Unlimited team members",
      "Advanced analytics",
      "10GB storage",
      "Priority support",
      "Advanced integrations",
      "Custom domains",
      "API access",
      "SSO Authentication",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Unlimited everything",
      "24/7 dedicated support",
      "Unlimited storage",
      "Custom contracts",
      "SLA guarantee",
      "Custom integrations",
      "On-premise deployment",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const pricingFaqs: FAQItem[] = [
  {
    question: "How does the free trial work?",
    answer:
      "You can try our Pro plan free for 14 days. No credit card required. If you decide to continue, you'll be billed monthly at the end of your trial.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and you'll be billed the prorated amount.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For Enterprise plans, we also support wire transfers.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact our support team for a full refund.",
  },
];
