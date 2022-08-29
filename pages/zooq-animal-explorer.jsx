import Layout from "../components/Layout";
import SEO from "../components/SEO";
import AppDetailCard from "../components/Cards/AppDetailCard";

import { blurDataURL } from "../utils/constatns";
import FollowUs from "../components/FollowUs";
import Features from "../components/Features";
import Carousel from "../components/Carousel";

const headerImg = "/images/headers/zooqjr-banner-01.png";
const firstImg = "/images/zooq/01.png";
const secondImg = "/images/zooq/02.png";
const thirdImg = "/images/zooq/03.png";

const detailsList = [
  {
    imgSrc: firstImg,
    title: "ZooQ: Animal Explorer",
    subtitle: "Solve, Reveal, Explore, and Learn",
    description:
      "ZooQ: Animal Explorer is the new app where you can bring lavish habitats to life by solving polygonal puzzles. Complete your animal collections and replay to unlock more colorful puzzles. Then, learn about all of your animals with unique Fun Fact Coloring Cards.",
    appstoreHref:
      "https://apps.apple.com/us/app/zooq-animal-explorer/id1337869901",
    playstoreHref:
      "https://play.google.com/store/apps/details?id=com.Egowall.ZooQAnimalExplorer&hl=en_US&gl=US",
  },
  {
    imgSrc: secondImg,
    title: "CREATIVE ACTIVITIES & FUN PUZZLES",
    subtitle: "Learn about your favorite animals",
    description: `Bring your habitats to life! Each puzzle you solve reveals a new animal. As you reveal, you’ll earn rewards and more chances to unlock dozens of new puzzles. Replay puzzles as fast as you can in Timed Mode to earn huge piles of coins. Or try your hand at Multiplier Mode, where you earn the most coins by solving the puzzle strategically.
      As your habitats fill with new animals, experience the joy and calmness of watching these majestic creatures. You can even inspect each 3d animal individually using an interactive detail view mode. As you explore and reveal, use your coins to collect over 230 puzzles and 25 cute animal avatars!`,
    className: "md:flex-row-reverse",
  },
  {
    imgSrc: thirdImg,
    title: "COLOR, LEARN, & GROW",
    subtitle: " ",
    description: `ZooQ: Animal Explorer comes with hundreds of Fun Fact Coloring Cards. Unlock these as you explore; collecting them all is a quest in itself! Then, color and re-color them in a rainbow of colors and styles. Use the rewards you earned while revealing animals to unlock new brushes and color palettes. Take your artwork from basic to bold as you progress in the app.`,
    className: "",
  },
];

const featureList = [
  {
    title: "Explore",
    imgSrc: "images/Explore-Icon.png",
    desc: "ZooQ: Animal Explorer comes with the Heartland. 10 gorgeous habitats each filled with animals to unlock and interact with.",
  },
  {
    title: "Solve",
    imgSrc: "images/learn.png",
    desc: "Over 230 polygonal animal puzzles await you. Solve and replay each, as often as you like. Mix it up with Timed and Multiplier Modes.",
  },
  {
    title: "Observe",
    imgSrc: "images/family-friendly.png",
    desc: "As your habitats fill with life, take time to enjoy the view. Each 3d world comes to life with calm and realistic ambient animal behavior.",
  },
  {
    title: "Reveal",
    imgSrc: "images/Reveal.png",
    desc: "Bring your habitats to life! Solve to Reveal the fantasic animals you love. Each ZooQ Animal Habitat has up to 6 Revelation Puzzles with corresponding creatures.",
  },
  {
    title: "Create",
    imgSrc: "images/Create-icon.png",
    desc: "Coloring is fun and calming, and with ZooQ: Animal Explorer you'll learn fun and funny facts about all of your animals. Tap to Fill, or use your finger like a brush for a finer touch. There are hundreds of Fun Fact Coloring Cards waiting to be found!",
  },
  {
    title: "Collect",
    imgSrc: "images/Collect-icon.png",
    desc: "ZooQ: Animal Explorer isn't a one and done experience. Play Daily for rewards, and replay puzzles til you've 3-Starred them all! Earn a pile of coins- then use them to unlock all of the puzzles, coloring tools, and avatars you want!",
  },
];
const carouselImages = [
  { imgSrc: "/images/zooq/Carousal/zooq_1_c.png" },
  { imgSrc: "/images/zooq/Carousal/zooq_2_c.png" },
  { imgSrc: "/images/zooq/Carousal/zooq_3_c.png" },
  { imgSrc: "/images/zooq/Carousal/zooq_4_c.png" },
  { imgSrc: "/images/zooq/Carousal/zooq_5_c.png" },
];
export default function PuzlmiPage() {
  return (
    <Layout className={""}>
      <SEO
        title="Zooq animal explorer | EGOWALLAPPS"
        url="https://egowallapps.com/zooq-animal-explorer"
        description="egowallapps"
      />
      <div className=" relative">
        <img
          alt="Zooq animal explorer | EGOWALLAPPS"
          src={headerImg}
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className="app-container  py-12">
        {detailsList.map((obj, i) => {
          return (
            <AppDetailCard
              key={i}
              {...obj}
              className={"mt-16 " + obj.className}
            />
          );
        })}
      </div>
      <Carousel list={carouselImages} />
      <FollowUs
        fbHref="https://www.facebook.com/ZooQAnimals/"
        twitterHref="https://twitter.com/ZooQAnimals"
        instagramHref="https://www.instagram.com/zooqanimals/"
        youtubeHref="https://www.youtube.com/watch?v=0DdlIC3VCEY"
      />
      <Features list={featureList} />
    </Layout>
  );
}
