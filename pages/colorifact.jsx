import Layout from "../components/Layout";
import AppDetailCard from "../components/Cards/AppDetailCard";
import FollowUs from "../components/FollowUs";
import Features from "../components/Features";
import SEO from "../components/SEO";
const firstImg = "/images/colorifact/01.png";
const secondImg = "/images/colorifact/02.png";
const thirdImg = "/images/colorifact/03.png";

const detailsList = [
  {
    imgSrc: firstImg,
    title: "Colorifact",
    subtitle: "Color to Learn!",
    description:
      "Colorifact is the awesome new coloring book app that lets kids color to learn. As you color the pages, they reveal funny and educational facts! Look and listen as each fact is narrated beautifully. Return again and again to color creative masterpieces!",
    appstoreHref: "https://apps.apple.com/us/app/puzlmi/id1572892637",
  },
  {
    imgSrc: secondImg,
    title: "DELIGHTFUL NARRATIONS",
    subtitle: "Listen to Learn!",
    description:
      "“Did you know?”….Colorifact is like an interactive coloring book! As your child colors, each page becomes clearer, until *POOF* the fact is revealed! Each Fun Fact is narrated in a clear, warm voice paired with text. Children love hearing the narrations, and reading the fun facts!",
    className: "md:flex-row-reverse",
  },
  {
    imgSrc: thirdImg,
    title: "CREATIVITY GALORE",
    subtitle: "Color and create your way to knowledge",
    description: `Colorifact has a fun user interface that really pops! Kids can choose from dozens of crayon choices, as well as amazing brushes and patterns. Using colors and brush materials, anyone can spend hours crafting gorgeous creative compositions!
    Then, when complete, save a screenshot or share the work!`,
    className: "",
  },
];

const featureList = [
  {
    title: "Color and Create",
    imgSrc: "images/colorAndCreate.svg",
    desc: "Colorifact has simple and delightful coloring! There are hundreds of Coloring Pages, with funny and memorable compositions!",
  },
  {
    title: "Learn",
    imgSrc: "images/learn.png",
    desc: "Every Coloring Page is crafted around a Fun Fact! Kids love to color and reveal them all!",
  },
  {
    title: "Capture your work!",
    imgSrc: "images/capture.svg",
    desc: "When finished with a Coloring Page, save or share your work!",
  },
  {
    title: "Listen Up!",
    imgSrc: "images/listenUp.svg",
    desc: "Hear now: Colorifact guides you with audio cues! 275 Fun Fact narrations to reveal and hear.",
  },
  {
    title: "It's simple to create!",
    imgSrc: "images/hand-simpleToCreate.svg",
    desc: "Simple, intuitive controls let kids enjoy Colorifact with just one finger.",
  },
  {
    title: "Family Friendly",
    imgSrc: "images/family-friendly.png",
    desc: "Colorifact is fun for the whole family. Feel safe knowing Colorifact is an app you can trust.",
  },
];
export default function ColrifactPage() {
  return (
    <Layout>
      <SEO
        title="Colorifact App | EGOWALLAPPS"
        url="https://egowallapps.com/colorifact"
        description="egowallapps"
      />
      <div className="app-container  py-12">
        {detailsList.map((obj, i) => {
          return <AppDetailCard key={i} {...obj} />;
        })}
      </div>
      <FollowUs />
      <Features list={featureList} />
    </Layout>
  );
}
