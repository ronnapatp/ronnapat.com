export default function () {
    let update = '11/01/2022'
    return(
        <div className="bg-white dark:bg-slate-700">
            <div className="container mx-auto px-4">
                <div className="max-w-prose mx-auto py-8 prose-h1:font-semibold dark:prose-h1:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-h2:text-2xl prose-h2:md:text-4xl dark:prose-a:text-gray-100 prose-a:text-gray-600  hover:prose-a:text-sky-500 dark:hover:prose-a:text-sky-300 hover:prose-a:underline">
                    <h1 className="md:text-6xl text-4xl">
                        Cookies Policy
                    </h1>
                    <p>
                        Last update : {update}
                    </p>
                    <hr className="mt-5" />
                    <div className="mt-10 dark:text-white">
                        <b>
                            Disclamer
                        </b>
                        {` : `}
                        This cookies policy <b>only contain to ronnapat.com website</b> but other website that link from this website is <b>not</b> contain on this cookies policy.
                        <br /><br />
                        You may contact us if you have any additional questions at <a href="mailto:me@ronnapat.com" className="underline">me@ronnapat.com</a> or <a href="/contact" className="underline">Contact page</a>.
                    </div>
                    <div className="mt-14" id='what-is-cookies'>
                        <h2>
                            <a href='#what-is-cookies' className="tag inline-flex">
                                What is cookies?
                            </a>
                        </h2>
                        <p className="mt-10">
                            Cookies are text files with small pieces of data — like a username and password — that are used to identify your computer as you use a computer network. Specific cookies known as HTTP cookies are used to identify specific users and improve your web browsing experience.
                            <br /><br />
                            Data stored in a cookie is created by the server upon your connection. This data is labeled with an ID unique to you and your computer.
                            <br /><br />
                            When the cookie is exchanged between your computer and the network server, the server reads the ID and knows what information to specifically serve to you.
                            <br /><br />
                            From :
                            <a className="ml-2 underline" href="https://www.kaspersky.com/resource-center/definitions/cookies" target='_blank'>
                              Kaspersky  
                            </a>
                        </p>
                    </div>
                    <div className="mt-14" id='what-data-we-collect'>
                        <h2>
                            <a href='#what-data-we-collect' className="tag inline-flex">
                                What data we collect?
                            </a>
                        </h2>
                        <p className="mt-10">
                            We collect the following data :
                            <ul className="list-decimal ml-5">
                                <li>Theme</li>
                                <li>Page you visit</li>
                                <li>Time you visit each page</li>
                                <li>Which platform you visit from</li>
                                <li>Which city and country you visit from</li>
                            </ul>
                        </p>
                    </div>
                    <div className="mt-14" id='how-and-why-do-we-use-cookies'>
                        <h2>
                            <a href='#how-and-why-do-we-use-cookies' className="tag inline-flex">
                                How and Why do We Use Cookies?
                            </a>
                        </h2>
                        <p className="mt-10">
                            We use cookies to track what out visiter like or not like so we can develop website that more friendly and easy to use for our visiter
                            <ul className="mt-3">
                                <li className="text-xl mb-2">1. Theme cookies</li>
                                We use this cookie to remember theme that users use latest and next time when users visit the theme still same as last visit
                            </ul>
                            <ul className="mt-2">
                                <li className="text-xl mb-2">2. Google anlytics cookies</li>
                                View google anlytics terms <a href="https://marketingplatform.google.com/about/analytics/terms/us/" className="underline" target='_blank'>click here.</a>
                                <p className="mt-2"></p>
                                We use this cookie to check time page platform city and country users visit so we can develop website in a correct ways.
                            </ul>
                        </p>
                    </div>
                    <div className="mt-14" id='how-can-i-block-cookie'>
                        <h2>
                            <a href='#how-can-i-block-cookie' className="tag inline-flex">
                                How can I block cookies?
                            </a>
                        </h2>
                        <p className="mt-10">
                            You can use our website with no cookies and no tracking in <a className="underline" href="https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop" target="_blank">Incognito mode</a> or you can delete cookies by
                            <ul className="list-disc ml-5 mt-2">
                                <li><a className="underline" href="https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform=Desktop" target='_blank'>Chrome</a></li>
                                <li><a className="underline" href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target='_blank'>Edge</a></li>
                                <li><a className="underline" href="https://support.apple.com/en-us/HT201265" target='_blank'>Safari</a></li>
                                <li><a className="underline" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target='_blank'>Firefox</a></li>
                                <li><a className="underline" href="https://www.opera.com/use-cases/clean-browser-and-remove-trackers" target='_blank'>Opera</a></li>
                            </ul>
                        </p>
                    </div>
                    <div className="mt-14" id='changes-of-cookies-policy'>
                        <h2>
                            <a href='#changes-of-cookies-policy' className="tag inline-flex">
                                Changes of cookies policy?
                            </a>
                        </h2>
                        <p className="mt-10">
                            We may change this cookie policy from time to time, You may get update from us if we update pur cookie policy by <a href="/sub" className="underline">subscribe</a>
                        </p>
                    </div>
                    <div className="mt-14 mb-10" id='contact-for-more-information'>
                        <h2>
                            <a href='#contact-for-more-information' className="tag inline-flex">
                                Contact for more information
                            </a>
                        </h2>
                        <p className="mt-10">
                            Contact me for more information : <a href="mailto:me@ronnapat.com" className="underline">me@ronnapat.com</a> or <a className="underline" href="/contact">Contact page</a>
                        </p>
                    </div>
                    <h3 className="text-2xl text-gray-600 dark:text-gray-200">
                        Last update : {update}
                    </h3>
                </div>
            </div>
        </div>
    )
}