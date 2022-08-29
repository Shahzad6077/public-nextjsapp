import Link from "next/link";
import Logo from "../Logo";
export default function Footer() {
  return (
    <footer className="bg-white text-appblack100">
      <div className="py-4 md:h-36  app-container flex flex-col  md:flex-row md:items-center gap-3">
        <div className="mr-20">
          <Logo width={300} height={64} />
        </div>
        <Link href="/terms">
          <a className="hover:text-appOrange">Terms of Service</a>
        </Link>
        <Link href="/policy">
          <a className="hover:text-appOrange">Privacy Policy</a>
        </Link>
      </div>
      <div className="px-2 py-3 text-center text-sm border-t border-appOrange">
        © 2012-2020 Egowall.com. All rights reserved. U.S. Patent No. 9,110,999.
        Be The Real You™
      </div>
    </footer>
  );
}
