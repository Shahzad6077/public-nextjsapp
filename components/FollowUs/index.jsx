import React from "react";

const fbIcon = "/images/facebook_icon.svg";
const igIcon = "/images/instagram_icon.svg";
const ytIcon = "/images/youtube_icon.svg";
const twtIcon = "/images/twitter_social_icon.svg";
export default function FollowUs({
  fbHref = null,
  twitterHref = null,
  instagramHref = null,
  youtubeHref = null,
}) {
  return (
    <div className='bg-appOrange'>
      <div className='app-container text-center py-[60px]'>
        <h1 className='titleComponent'>FOLLOW US</h1>
        <h1 className='text-white text-5xl -mt-6'>_</h1>
        <div className='flex flex-wrap justify-center gap-4 mt-6'>
          <div className='bg-white rounded-full w-[80px] h-[80px] items-center hover:cursor-pointer hover:bg-appBlue'>
            <a href={fbHref || "https://www.facebook.com/egowall"}>
              <img
                src={fbIcon}
                alt='fbIcon'
                className='w-10 mt-[25%] mx-auto followSvg'
              />
            </a>
          </div>
          <div className='bg-white rounded-full w-[80px] h-[80px] items-center hover:cursor-pointer hover:bg-appBlue'>
            <a href={twitterHref || "https://twitter.com/ego_wall"}>
              <img
                src={twtIcon}
                alt='twitter'
                className='w-10 mt-[25%] mx-auto followSvg'
              />
            </a>
          </div>
          <div className='bg-white rounded-full w-[80px] h-[80px] items-center hover:cursor-pointer hover:bg-appBlue'>
            <a href={instagramHref || "https://www.instagram.com/egowall/"}>
              <img
                src={igIcon}
                alt='instagram'
                className='w-10 mt-[25%] mx-auto followSvg'
              />
            </a>
          </div>
          <div className='bg-white rounded-full w-[80px] h-[80px] items-center hover:cursor-pointer hover:bg-appBlue'>
            <a href={youtubeHref || "https://www.youtube.com/egowall"}>
              <img
                src={ytIcon}
                alt='youtube'
                className='w-10 mt-[25%] mx-auto followSvg'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
