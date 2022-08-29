import Layout from "../components/Layout";
import AppHeroCard from "../components/Cards/AppHeroCard";
import SEO from "../components/SEO";
const colorifactImg = "/images/headers/colorifact-banner-02.png";
const puzlmiImg = "/images/headers/puzlmi-banner-01.png";

const zooqjr1Img = "/images/headers/zooqjr-banner-01.png";
const zooqjr3Img = "/images/headers/zooqjr-banner-03.png";
const headerImg = "/images/headers/egowall-header.png";
import { blurDataURL } from "../utils/constatns";

const appList = [
  {
    imgSrc: colorifactImg,
    title: "Colorifact",
    description:
      "Colorifact is the awesome new coloring book app that lets kids color to learn. As you color the pages, they reveal funny and educational facts! Look and listen as each fact is narrated beautifully. Return again and again to color creative masterpieces!",
    href: "/colorifact",
    hrefText: "Discover More",
  },
  {
    imgSrc: puzlmiImg,
    title: "PuzlMi",
    description:
      "Calm and relaxing puzzles set to soft music. Challenge yourself with more complex puzzles. Share colorful puzzles with friends. Brighten your mood with PuzlMi.",
    href: "/puzlmi",
    hrefText: "Discover More",
  },
  {
    imgSrc: zooqjr1Img,
    title: "ZooQ: Animal Explorer",
    description:
      "ZooQ: Animal Explorer is the new app where you can bring lavish habitats to life by solving polygonal puzzles. Complete your animal collections and replay to unlock more colorful puzzles. Then, learn about all of your animals with unique Fun Fact Coloring Cards.",
    href: "/zooq-animal-explorer",
    hrefText: "Discover More",
  },
  {
    imgSrc: zooqjr3Img,
    title: "ZooQ Jr",
    description:
      "ZooQ Jr is for ages 4+. Explore the landscape, navigate to unearth hidden objects with delightful effects, collect myriad objects, and learn about your world!",
    href: "",
    hrefText: "Coming Soon",
  },
];
export default function Applications() {
  return (
    <Layout className={"bg-gray-100 "}>
      <SEO
        title="Applications | EGOWALLAPPS"
        url="https://egowallapps.com/applications"
        description="egowallapps"
      />
      <div className=" relative">
        <img
          alt="APPLICATIONS"
          src={headerImg}
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className="app-container  py-12">
        <h3 className="text-center text-lg sm:text-3xl md:text-4xl font-semibold text-appblack100">
          <span className="title-bottom-line center-line">APPLICATIONS</span>
        </h3>
        <div className="grid grid-cols-1 mt-16 md:grid-cols-2 md:gap-8 ">
          {appList.map((obj, i) => {
            return <AppHeroCard {...obj} key={i} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
