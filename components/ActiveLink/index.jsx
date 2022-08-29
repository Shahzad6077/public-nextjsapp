import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();

  const activeClass = router.pathname == href ? "active-link" : "";
  return (
    <Link href={href}>
      <a
        className={clsx(
          "py-2 border-b border-transparent transition duration-300 hover:text-appOrange  hover:border-appOrange",
          className,
          activeClass
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default ActiveLink;
