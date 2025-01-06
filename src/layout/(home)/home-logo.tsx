import { Logo } from "@/components/common/logo";
import Link from "next/link";

const HomeLogo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <Logo />
  </Link>
);

export default HomeLogo;
