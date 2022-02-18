import {
    HandIcon
} from '@heroicons/react/outline'
export default function () {
    return(
        <>
            <div className="font-sans antialiased w-full">
            <div className="container mx-auto max-w-screen-xl">
                <main
                id="wrapper"
                className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
                >
                <div
                    id="sidebar"
                    className="w-full sm:max-w-sm p-8 bg-gradient-to-b from-sky-400 via-sky-300 to-white dark:from-sky-800 dark:via-sky-700 dark:to-sky-500"
                >
                    <div className="px-2 mb-12">
                    <img
                        src="/logo-no-bg.png"
                        alt="Profile Picture"
                        className="rounded-full w-48 mx-auto mb-2"
                    />
                    <h1 className="text-center text-3xl font-semibold mb-2 dark:text-white">Ronnapat Srivoraviali</h1>
                    </div>

                    <div className="font-light text-lg px-2 mb-12">
                    <h2 className="text-xl font-semibold mb-4 dark:text-white">Contact</h2>
                    <a href="/contact" className="flex items-center my-3 dark:text-gray-200">
                        <i className="ri-share-box-line mr-2"></i>
                        <a href="/contact">Contact page</a>
                    </a>
                    </div>

                    <div className="font-light text-lg px-2 mb-12 dark:text-white">
                    <h2 className="text-xl font-semibold mb-4">Personal</h2>
                    <div className="flex items-center my-3 dark:text-gray-200">
                        <span>Birthday : 24 May 2009</span>
                    </div>
                    </div>

                    <div className="font-light text-lg px-2 mb-12 dark:text-white">
                    <h2 className="text-xl font-semibold mb-4">On the Web</h2>
                    <a href="https://github.com/ronnapatp" target="_blank" rel="noopener" className="flex items-center my-3 dark:text-gray-200">
                        <i className="ri-share-box-line mr-2"></i>
                        GitHub
                    </a>
                    </div>

                    <div className="font-light text-lg px-2 mb-12 dark:text-white">
                    <h2 className="text-xl font-semibold mb-4">Languages</h2>
                    <p className='dark:text-gray-200'>Thai</p>
                    <p className='dark:text-gray-200'>English</p>
                    </div>
                </div>

                <div className="content w-full p-12 dark:bg-slate-600">
                    <div id="profile" className="prose dark:prose-headings:text-white dark:prose-p:text-gray-200">
                    <h1 className="text-3xl mb-2">Ronnapat Srivoraviali</h1>
                    <p>
                        Hi everyone ,Thank you for check out my personal website for my information please continue reading but if you have any question that don't in this page you can contact me in Contact page
                    </p>
                    </div>
                    <hr className="mt-8 mb-12" />
                    <div id="experience" className="prose">
                    <h2 className="section-headline text-2xl dark:text-gray-100">Education :</h2>
                        <li className='dark:text-gray-200'>Chulalongkorn University Demonstration Elementary School</li>
                        <li className='dark:text-gray-200'>Chulalongkorn University Demonstration Secondary School</li>
                    </div>
                </div>
                </main>
            </div>
            </div>
        </>
    )
}