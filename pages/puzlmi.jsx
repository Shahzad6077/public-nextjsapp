import Layout from "../components/Layout";
import SEO from "../components/SEO";
import AppDetailCard from "../components/Cards/AppDetailCard";
import FollowUs from "../components/FollowUs";
import Features from "../components/Features";

const firstImg = "/images/puzlmi/01.png";
const secondImg = "/images/puzlmi/02.png";
const thirdImg = "/images/puzlmi/03.png";

const detailsList = [
  {
    imgSrc: firstImg,
    title: "PuzlMi",
    subtitle: "Relax with Puzzles!",
    description: `PuzlMi is the new app where you can bring lavish Real world Objects to life by solving polygonal puzzles. Complete your collections and replay to unlock more colorful puzzles.
      <br/>As you play, listen to soothing, zen-like music that will set your mind at ease! Lower your stress level and relax with PuzlMi!`,
    appstoreHref: "https://apps.apple.com/us/app/puzlmi/id1557971600",
    playstoreHref:
      "https://play.google.com/store/apps/details?id=com.egowall.puzlmi",
    detailClassName: "md:!mt-24",
  },
  {
    imgSrc: secondImg,
    title: "PLAY AND CHALLENGE YOURSELF",
    subtitle: "Three Levels of Difficulty",
    description: `With three optional levels of difficulty for each puzzle, the experience grows with you! It's fun and relaxing to complete puzzles on easy, medium, or hard!
    The complexity increases, but you can control your experience and comfort level. Take your time and calmly play and replay puzzles- or blast through them all. It's up to you!`,
    className: "md:flex-row-reverse",
    detailClassName: "md:!mt-24",
  },
  {
    imgSrc: thirdImg,
    title: "SHARING",
    subtitle: "Share your favorites!",
    description: `PuzlMi lets you share your favorite puzzles, either by grabbing a custom screenshot to your mobile device, or sharing one to friends and family on email, text, or social media. 
    As PuzlMi grows, you'll find more types of puzzles and interesting categories to solve! We care about charging fairly for our work, and taking care of our customers. There are no manipulative monetization trial periods like other puzzle apps. If you see a category you like, you can purchase it and experience PuzlMi without worry that yet another app store subscription fee will show up month after month.`,
    detailClassName: "md:!mt-24",
  },
];
const featureList = [
  {
    title: "Solve",
    imgSrc: "images/Explore-Icon.png",
    desc: "PuzlMi is all about puzzles! Drag pieces with your finger and place them to reveal the hidden object.",
  },
  {
    title: "Relax",
    imgSrc: "images/learn.png",
    desc: "It’s been a long day – open PuzlMi and pop on your headphones to listen to relaxing music while you solve beautiful puzzles!",
  },
  {
    title: "Challenge",
    imgSrc: "images/family-friendly.png",
    desc: "Each puzzle has three distinct complexity modes for greater challenge. Play in any order you like.",
  },
  {
    title: "Replay",
    imgSrc: "images/Reveal.png",
    desc: "Relax and replay any puzzle when you need some time to chill.",
  },
  {
    title: "Share",
    imgSrc: "images/Create-icon.png",
    desc: "Use our screenshot and sharing features to capture your favorite PuzlMi puzzles and show them to friends.",
  },
  {
    title: "Collect",
    imgSrc: "images/Collect-icon.png",
    desc: "PuzlMi Puzzle Packs have dozens of colorful puzzles with gorgeous subject matter. Our puzzles are handcrafted!",
  },
];
export default function PuzlmiPage() {
  return (
    <Layout className={""}>
      <SEO
        title="Puzlmi app | EGOWALLAPPS"
        url="https://egowallapps.com/puzlmi"
        description="egowallapps"
      />
      <div className="app-container py-12 ">
        {detailsList.map((obj, i) => {
          return (
            <AppDetailCard
              key={i}
              {...obj}
              className={"items-center md:items-start " + obj.className}
              imgClassName="max-w-xs md:max-w-full"
            />
          );
        })}
        <iframe
          className="aspect-video"
          width="100%"
          height="597"
          src="https://www.youtube-nocookie.com/embed/dFvQqmqgE2Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <FollowUs instagramHref="https://www.instagram.com/puzlmi/" />
      <Features list={featureList} />
    </Layout>
  );
}
