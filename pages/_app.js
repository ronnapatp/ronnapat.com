import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "@/script/gtag";
import "remixicon/fonts/remixicon.css";
import { ThemeProvider } from "next-themes";
import Cookies from "@/components/global/cookies";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
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
      <SessionProvider session={pageProps.session}>
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
      <Component {...pageProps} />
      <Cookies />
      <a href="https://war.ukraine.ua/" target="_blank" id="ukraine"></a>
        </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
