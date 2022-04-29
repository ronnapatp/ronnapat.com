import Head from "next/head";
import { useEffect } from "react";
export default function () {
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }, []);
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1196910141338252"
          crossorigin="anonymous"
        ></script>
      </Head>
      <ins
        class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-1196910141338252"
        data-ad-slot="3921421767"
      ></ins>
    </>
  );
}
