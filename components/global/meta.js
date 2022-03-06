import Head from "next/head";
import { Name } from "../../script/meta";

export default function Meta({ title, image }) {
  return (
    <Head>
      <title>
        {title} | {Name}
      </title>
      <meta property="og:url" content="https://ronnapat.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | ${Name}`} />
      <meta property="og:description" content={`${Name} personal website`} />
      {/* <meta property="og:image" content={image} /> */}
      <meta property="og:keywords" content="Ronnapat Srivoravilai" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ronnapatp" />
      <meta name="twitter:title" content={`${title} | ${Name}`} />
      <meta name="twitter:description" content={`${Name} personal website`} />
      <meta name="twitter:creator" content="@ronnapatp" />
      {/* <meta name="twitter:image:src" content={image} /> */}
      <meta name="twitter:domain" content="https://ronnapat.com/" />
    </Head>
  );
}
