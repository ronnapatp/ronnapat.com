import "../../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "src/script/gtag";
import "remixicon/fonts/remixicon.css";
import { ThemeProvider } from "next-themes";
import Cookies from "src/components/global/cookies";

function MyApp({ Component }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
          `,
        }}
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1196910141338252"
        crossorigin="anonymous"
      ></script>
        <Component {...pageProps} />
      <script
        type="text/javascript"
        src="https://cookiecdn.com/cwc.js"
      ></script>
      <script
        id="cookieWow"
        type="text/javascript"
        src="https://cookiecdn.com/configs/kQwesTXCWNG5w3fSvft8PspL"
        data-cwcid="kQwesTXCWNG5w3fSvft8PspL"
      ></script>
      {/* <Cookies /> */}
      <a href="https://war.ukraine.ua/" target="_blank" id="ukraine"></a>
    </ThemeProvider>
  );
}

export default MyApp;
