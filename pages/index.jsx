import AppBanner from "../components/Cards/AppBanner";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const colorifactImg = "/images/headers/colorifact-banner-01.png";
const puzlmiImg = "/images/headers/puzlmi-banner-02.png";
const zooqjrImg = "/images/headers/zooqjr-banner-01.png";
const applicationImg = "/images/headers/zooqjr-banner-02.png";

const bannersList = [
  {
    imgSrc: colorifactImg,
    href: "/colorifact",
    btnText: "Learn More",
    description: "Color to Learn!",
  },
  {
    imgSrc: puzlmiImg,
    href: "/puzlmi",
    btnText: "Learn More",
    description: "The Relaxing Puzzle Experience",
  },
  {
    imgSrc: zooqjrImg,
    href: "/zooq-animal-explorer",
    btnText: "Learn More",
    description: "Solve, Reveal, Explore, and Learn",
  },
  {
    imgSrc: applicationImg,
    href: "/applications",
    btnText: "Learn More",
    description: "Learn in 3D",
  },
];
export default function Home() {
  return (
    <Layout>
      <SEO
        title="Home"
        url="https://egowallapps.com/"
        description="egowallapps"
      />
      {bannersList.map((obj, i) => {
        return <AppBanner key={i} {...obj} />;
      })}
    </Layout>
  );
}
