import Link from "next/link";

const Logo = ({ width = 300, height = 64 }) => {
  return (
    <Link href="/">
      <a>
        <img
          alt="EGOWALLAPPS"
          src="/images/logo.png"
          width={width}
          height={height}
        />
      </a>
    </Link>
  );
};

export default Logo;
