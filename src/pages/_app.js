import "../../styles/globals.css";
import { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "src/script/gtag";
import "remixicon/fonts/remixicon.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [open, setOpen] = useState(true)
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
      { open ? 
      <div id="small-modal" class="overflow-y-auto fixed w-full md:inset-0 h-modal md:h-full">
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                  Website Update
              </h3>
              <button type="button" onClick={() => {setOpen(false)}} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Close modal</span>
              </button>
          </div>
          <div class="p-6 space-y-6">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Our website will change the url from "ronnapat.com" to "ronnapat.me" in October. After October "ronnapat.com" will not redirect to our website anymore. Use "ronnapat.me"
              </p>
          </div>
          <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button onClick={() => {setOpen(false)}} data-modal-toggle="small-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I understand</button>
          </div>
      </div>
  </div>
  </div> : <h1></h1>}
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
    </ThemeProvider>
  );
}

export default MyApp;
