import { companyNavigationItems, productNavigationItems } from "../header/home-navigation-items";
import { legalNavigationItems } from "../pages/legal/legal-navigation-items";
import { HomeFooterBottom } from "./components/home-footer-bottom";
import { HomeFooterGridWrapper } from "./components/home-footer-grid-wrapper";
import { HomeFooterLinks } from "./components/home-footer-links";
import { ProductColumn } from "./components/home-footer-product-column";
import { HomeFooterWrapper } from "./components/home-footer-wrapper";

export const HomeFooter = () => (
  <HomeFooterWrapper>
    <HomeFooterGridWrapper>
      <ProductColumn />
      {footerLinks.map(({ title, items }) => (
        <HomeFooterLinks key={title} title={title} items={items} />
      ))}
    </HomeFooterGridWrapper>
    <HomeFooterBottom />
  </HomeFooterWrapper>
);

const footerLinks = [
  {
    title: "Product",
    items: productNavigationItems,
  },
  {
    title: "Company",
    items: companyNavigationItems,
  },
  {
    title: "Legal",
    items: legalNavigationItems,
  },
];
