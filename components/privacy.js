export default function () {
    let update = '03/02/2022'
    return(
        <div className="bg-white dark:bg-slate-700">
            <div className="container mx-auto px-4">
                <div className="max-w-prose mx-auto py-8 prose-h1:font-semibold dark:prose-h1:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-h2:text-2xl prose-h2:md:text-4xl dark:prose-a:text-gray-100 prose-a:text-gray-600  hover:prose-a:text-sky-500 dark:hover:prose-a:text-sky-300 hover:prose-a:underline">
                    <h1 className="md:text-6xl text-4xl">
                        Privacy Policy
                    </h1>
                    <p>
                        Last update : {update}
                    </p>
                    <hr className="mt-5" />
                    <div className="mt-10 dark:text-white">
                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in ronnapat.com. This policy is not applicable to any information collected offline or via channels other than this website.
                        <br /><br />
                        You may contact us if you have any additional questions at <a href="mailto:me@ronnapat.com" className="underline">me@ronnapat.com</a> or <a href="/contact" className="underline">Contact page</a>.
                        <br /><br /><br />
                        At ronnapat.com, accessible from https://ronnapat.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ronnapat.com and how we use it.
                    </div>
                    <div className="mt-14" id='cookie'>
                        <h2>
                            <a href='#cookie' className="tag inline-flex">
                                Cookies
                            </a>
                        </h2>
                        <p className="mt-10">
                            In this website we use cookie to manage and help user to use our webiste easier. You can view our Cookie Policy by click link down below.
                            <br /><br />
                            <a href="/cookie">Cookie policy</a>
                        </p>
                    </div>
                    <div className="mt-14" id='google-analytics'>
                        <h2>
                            <a href='#google-analytics' className="tag inline-flex">
                                Google analytics
                            </a>
                        </h2>
                        <p className="mt-10">
                            We use google analytics to track and see what pages you visit ,how many minutes you visit each pages ,which platform you visit from ('Desktop' , 'TABLET' , 'MOBILE') and browser you visit from ,Country you visit from (Ex.Thailand)
                            <br /><br />
                            You can view more about this in cookie policy by click <a href="/cookie">Here</a>
                        </p>
                    </div>
                    <div className="mt-14" id='changes-of-privacy-policy'>
                        <h2>
                            <a href='#changes-of-privacy-policy' className="tag inline-flex">
                                Changes of privacy policy?
                            </a>
                        </h2>
                        <p className="mt-10">
                            We may change this privacy policy from time to time, You may get update from us if we update our privacy policy by <a href="/en-us/#sub" className="underline">subscribe</a>
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