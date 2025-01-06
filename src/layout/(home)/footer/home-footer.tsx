import { companyNavigationItems, productNavigationItems } from "../header/home-navigation-items";
import { legalNavigationItems } from "../pages/legal/legal-navigation-items";
import { HomeFooterBottom } from "./components/home-footer-bottom";
import { HomeFooterGridWrapper } from "./components/home-footer-grid-wrapper";
import { HomeFooterLinks } from "./components/home-footer-links";
import { HomeFooterWrapper } from "./components/home-footer-wrapper";
import { ProductColumn } from "./components/product-column";

export const HomeFooter = () => (
  <HomeFooterWrapper>
    <HomeFooterGridWrapper>
      <ProductColumn />
      <HomeFooterLinks title="Product" items={productNavigationItems} />
      <HomeFooterLinks title="Company" items={companyNavigationItems} />
      <HomeFooterLinks title="Legal" items={legalNavigationItems} />
    </HomeFooterGridWrapper>
    <HomeFooterBottom />
  </HomeFooterWrapper>
);
