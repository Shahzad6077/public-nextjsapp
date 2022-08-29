import Link from "next/link";
import { blurDataURL } from "../../utils/constatns";
import { RoundButton } from "../RoundButton";

const AppBanner = ({ href = "/", imgSrc, btnText, description }) => {
  return (
    <div className="bg-gray-100">
      <div className="relative ">
        <Link href={href}>
          <a>
            <img
              src={imgSrc}
              alt={description}
              layout="responsive"
              placeholder="blur"
              objectFit="contain"
              className="w-full"
            />
          </a>
        </Link>
      </div>
      <div className="py-8 pb-12 flex flex-col justify-center items-center">
        <RoundButton href={href}>{btnText}</RoundButton>
        <p className="mt-3 text-xl text-gray-500 font-bold">{description}</p>
      </div>
    </div>
  );
};

export default AppBanner;
