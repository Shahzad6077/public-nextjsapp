import { useState } from "react";
import clsx from "clsx";
import { RoundButton } from "../RoundButton";
import ActiveLink from "../ActiveLink";
import Logo from "../Logo";

const navLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/applications",
    title: "Applications",
  },
  {
    href: "/about",
    title: "About US",
  },
  {
    href: "/twitter-feed",
    title: "Twitter Feed",
  },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((p) => !p);

  return (
    <header className="bg-white">
      <nav className="app-container flex flex-wrap items-center justify-between py-6 bg-white ">
        <div className="hidden md:block">
          <Logo width={230} height={52} />
        </div>
        <div className="block md:hidden">
          <Logo width={184} height={42} />
        </div>
        <div className="block lg:hidden ">
          <button
            onClick={toggle}
            className="flex items-center px-3 py-2 text-black hover:text-orange"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={clsx(
            "w-full h-auto block flex-grow- lg:ml-auto lg:flex lg:items-center lg:w-auto ",
            !open && "h-0 hidden"
          )}
        >
          <div className="mb-2 text-sm uppercase font-semibold lg:mb-0">
            {navLinks.map(({ href, title }, i) => (
              <ActiveLink
                key={i}
                href={href}
                className="block mt-4 mr-6 lg:inline-block lg:mt-0 "
              >
                {title}
              </ActiveLink>
            ))}
          </div>
        </div>
        <div
          className={clsx(
            !open && "hidden ",
            "lg:flex gap-2  lg:mx-0",
            open && "mx-auto flex"
          )}
        >
          <RoundButton href="/contact-us">CONTACT US</RoundButton>
        </div>
      </nav>
    </header>
  );
}
