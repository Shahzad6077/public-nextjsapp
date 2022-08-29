const appstoreImg = "/images/appstore.png";
const playstoreImg = "/images/playstore.png";

import clsx from "clsx";
import { blurDataURL } from "../../utils/constatns";

const AppDetailCard = ({
  imgSrc,
  title,
  subtitle,
  description,
  appstoreHref = null,
  playstoreHref = null,
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
        className={clsx(" w-full mt-2 md:mt-6 flex flex-col", detailClassName)}
      >
        <h4 className="text-3xl font-semibold pb-1">{title}</h4>
        <p className="text-lg title-bottom-line left-line">{subtitle}</p>
        <p className="mt-6 text-sm  leading-6 whitespace-pre-line	">
          {description}
        </p>
        <div className="mt-8 flex gap-4">
          {appstoreHref && (
            <a href={appstoreHref} target="_blank" rel="noreferrer">
              <img src={appstoreImg} alt="Appstore link" />
            </a>
          )}
          {playstoreHref && (
            <a href={playstoreHref} target="_blank" rel="noreferrer">
              <img src={playstoreImg} alt="PlayStore link" />
            </a>
          )}
        </div>
      </div>
      <div className={clsx("relative w-full", imgClassName)}>
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
