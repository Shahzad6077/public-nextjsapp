import Link from "next/link";

export const RoundButton = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="p-3 px-4 font-medium rounded-3xl  bg-appOrange text-white hover:bg-appBlue transition ">
        {children}
      </a>
    </Link>
  );
};
