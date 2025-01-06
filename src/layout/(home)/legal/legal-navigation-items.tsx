import { Cookie, FileText, Shield, ShieldCheck } from "lucide-react";

export const legalNavigationItems = [
  { name: "Acceptable Use", href: "/legal/acceptable-use", icon: <ShieldCheck /> },
  { name: "Cookie Policy", href: "/legal/cookie-policy", icon: <Cookie /> },
  { name: "Copyright", href: "/legal/copyright", icon: <FileText /> },
  { name: "Data Protection Agreement", href: "/legal/dpa", icon: <Shield /> },
  { name: "GDPR Compliance", href: "/legal/gdpr", icon: <Shield /> },
  { name: "Privacy Policy", href: "/legal/privacy", icon: <Shield /> },
  { name: "Refund Policy", href: "/legal/refund", icon: <FileText /> },
  { name: "Service Level Agreement", href: "/legal/sla", icon: <FileText /> },
  { name: "Terms & Conditions", href: "/legal/terms", icon: <FileText /> },
];
