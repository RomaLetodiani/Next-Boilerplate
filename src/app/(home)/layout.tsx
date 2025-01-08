import { env } from "@/env";
import { HomeFooter } from "@/layout/(home)/footer/home-footer";
import { HomeHeader } from "@/layout/(home)/header/home-header";
import { HomeMain } from "@/layout/(home)/home-main";
import { HomeWrapper } from "@/layout/(home)/home-wrapper";
import { PropsWithChildren } from "react";

export const metadata = {
  openGraph: {
    title: "NextJS SaaS Template",
    description: "NextJS SaaS Template",
    images: [
      {
        url: `${env.NEXT_PUBLIC_SITE_URL}/screenshots/(auth)/login.png`,
        width: 800,
        height: 600,
        alt: "Image description",
      },
    ],
    type: "website",
    url: env.NEXT_PUBLIC_SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "NextJS SaaS Template",
    description: "NextJS SaaS Template",
    images: [`${env.NEXT_PUBLIC_SITE_URL}/screenshots/(auth)/login.png`],
  },
};

const HomeLayout = ({ children }: PropsWithChildren) => (
  <HomeWrapper>
    <HomeHeader />
    <HomeMain>{children}</HomeMain>
    <HomeFooter />
  </HomeWrapper>
);

export default HomeLayout;
