// import Image from "next/image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import AboutDetailCard from "../components/Cards/AboutDetailCard";

import { blurDataURL } from "../utils/constatns";

// import headerImg from "../public/images/headers/egowall-header.png";
// import firstImg from "../public/images/aboutus/about-01.jpg";
// import secondImg from "../public/images/aboutus/about-02.png";
const headerImg = "/images/headers/egowall-header.png";
const firstImg = "/images/aboutus/about-01.jpg";
const secondImg = "/images/aboutus/about-02.png";

const detailsList = [
  {
    imgSrc: firstImg,
    title: "ABOUT EGOWALL",
    description: `Egowall.com is a Dallas based technology company founded in 2010. We empower users to “Be The Real You” via creative social media, customizable virtual spaces, and games that foster exploration and education. Egowall lets everyone illustrate their lifestyle, passions, interests, and define who they are, from children to grownups of any age. In 2020 Egowall brings you several new products such as Topics for iOS and Android, and ZooQ: Animal Explorer for iPad. And there’s still more to come!`,
    btnText: "Contact Us",
    btnHref: "/contact-us",
    className: "mb-10",
  },
  {
    imgSrc: secondImg,
    title: "OUR MISSION",
    description: `To empower and elevate through technology that fosters communication and creativity. \n To put your privacy first, down to the foundation of our technologies.\n To create meaningful family oriented learning experiences, for all ages.`,
    btnText: "See Products",
    btnHref: "/applications",
    className: "md:flex-row-reverse",
  },
];

export default function AboutUsPage() {
  return (
    <Layout>
      <SEO
        title="About | EGOWALLAPPS"
        url="https://egowallapps.com/about"
        description="egowallapps"
      />
      <div className=" relative">
        <img
          alt="About | EGOWALLAPPS"
          src={headerImg}
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className="app-container  py-12">
        {detailsList.map((obj, i) => {
          return <AboutDetailCard key={i} {...obj} />;
        })}
      </div>
      <div className="connectedTop"></div>
      <div className="connected">
        <div className="app-container">
          <h2 className="titleComponent pt-[60px]">Stay Connected</h2>
          <p className="text-termsP text-sm mb-6">
            Join our newsletter and be the first to know about announcements,
            news, and new features!
          </p>
          <form className="flex flex-col justify-center gap-4 w-full lg:w-[50vw] mx-auto">
            <input
              placeholder="Name"
              className="focus:bg-inputFocus outline-none text-sm text-termsP rounded-3xl px-4 h-[60px]"
            />
            <input
              placeholder="Email Address"
              className="focus:bg-inputFocus outline-none text-sm text-termsP rounded-3xl px-4 h-[60px]"
            />
            <button className="bg-appOrange rounded-3xl h-[50px] text-white">
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
