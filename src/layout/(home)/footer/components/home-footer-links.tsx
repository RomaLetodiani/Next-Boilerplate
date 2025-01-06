import { NavItem } from "@/types/nav.types";
import { HomeFooterLink } from "./home-footer-link";

type HomeFooterLinksProps = {
  title: string;
  items: Omit<NavItem, "icon">[];
};

export const HomeFooterLinks = ({ title, items }: HomeFooterLinksProps) => (
  <div>
    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">{title}</h3>
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <HomeFooterLink key={item.href} name={item.name} href={item.href} />
      ))}
    </ul>
  </div>
);
