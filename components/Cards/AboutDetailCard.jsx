import { RoundButton } from "../RoundButton";

import clsx from "clsx";
import { blurDataURL } from "../../utils/constatns";

const AppDetailCard = ({
  imgSrc,
  title,
  subtitle,
  description,
  btnText,
  btnHref,
  className,
  detailClassName,
  imgClassName,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col-reverse md:flex-row  gap-4 md:gap-10",
        className
      )}
    >
      <div
        className={clsx(
          " w-full md:w-7/12  mt-2 md:mt-6 flex flex-col",
          detailClassName
        )}
      >
        <h4 className="text-3xl font-semibold pb-1">{title}</h4>
        <p className="text-lg title-bottom-line left-line">{subtitle}</p>
        <p className="mt-6 text-sm  leading-6 whitespace-pre-line	">
          {description}
        </p>
        <div className="mt-8 flex">
          <RoundButton href={btnHref}>{btnText}</RoundButton>
        </div>
      </div>
      <div className={clsx("relative w-full md:w-5/12", imgClassName)}>
        <img
          alt={title}
          src={imgSrc}
          placeholder="blur"
          layout="responsive"
          objectFit="scale-down"
          className="res-img"
        />
      </div>
    </div>
  );
};

export default AppDetailCard;
