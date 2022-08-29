import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Spinner from "../components/Spinner";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function TwitterTimeline() {
  return (
    <Layout>
      <SEO
        title="Twitter Timeline | EGOWALLAPPS"
        url="https://egowallapps.com/twitter-feed"
        description="egowallapps"
      />
      <div className="app-container">
        <div className="mx-auto max-w-xl h-[600px]">
          <TwitterTimelineEmbed
            sourceType={"url"}
            url={"https://twitter.com/ego_wall"}
            options={{ height: 600 }}
            placeholder={<Spinner />}
          />
        </div>
      </div>
    </Layout>
  );
}
