import Link from "next/link";
import { blurDataURL } from "../../utils/constatns";
import ActiveLink from "../ActiveLink";

const AppHeroCard = ({ imgSrc, title, href = null, hrefText, description }) => {
  return (
    <div className="">
      <div className="relative shadow-xl  border">
        <Link href={href}>
          <a className="block ">
            <img
              src={imgSrc}
              alt={title}
              placeholder="blur"
              layout="responsive"
              objectFit="scale-down"
              className="res-img"
            />
          </a>
        </Link>
      </div>
      <div className="py-8 pb-12 flex flex-col justify-center items-center text-center">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="mt-3 text-sm text-gray-500 leading-6">{description}</p>
        <ActiveLink
          href={href}
          className="mt-4 text-appOrange font-semibold hover:text-appblack100 hover:border-transparent"
        >
          {hrefText}
        </ActiveLink>
      </div>
    </div>
  );
};

export default AppHeroCard;
