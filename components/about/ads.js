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
      <ins
        className="adsbygoogle block"
        data-ad-client="ca-pub-1196910141338252"
        data-ad-slot="2252611327"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
