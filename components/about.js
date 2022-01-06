import {
    HandIcon
} from '@heroicons/react/outline'
export default function () {
    return(
        <>
            <div class="font-sans antialiased w-full">
            <div class="container mx-auto max-w-screen-xl">
                <main
                id="wrapper"
                class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
                >
                <div
                    id="sidebar"
                    class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-sky-400 via-sky-300 to-white dark:from-sky-800 dark:via-sky-700 dark:to-sky-500"
                >
                    <div class="px-2 mb-12">
                    <img
                        src="/logo-no-bg.png"
                        alt="Profile Picture"
                        class="rounded-full w-48 mx-auto mb-2"
                    />
                    <h1 class="text-center text-3xl font-semibold mb-2 dark:text-white">Ronnapat Srivoraviali</h1>
                    </div>

                    <div class="font-light text-lg px-2 mb-12">
                    <h2 class="text-xl font-semibold mb-4 dark:text-white">Contact</h2>
                    <a href="/contact" class="flex items-center my-3 dark:text-gray-200">
                        <i class="ri-share-box-line mr-2"></i>
                        <a href="/contact">Contact page</a>
                    </a>
                    </div>

                    <div class="font-light text-lg px-2 mb-12 dark:text-white">
                    <h2 class="text-xl font-semibold mb-4">Personal</h2>
                    <div class="flex items-center my-3 dark:text-gray-200">
                        <span>Birthday : 24 May 2009</span>
                    </div>
                    </div>

                    <div class="font-light text-lg px-2 mb-12 dark:text-white">
                    <h2 class="text-xl font-semibold mb-4">On the Web</h2>
                    <a href="https://github.com/ronnapatp" target="_blank" class="flex items-center my-3 dark:text-gray-200">
                        <i class="ri-share-box-line mr-2"></i>
                        GitHub
                    </a>
                    </div>

                    <div class="font-light text-lg px-2 mb-12 dark:text-white">
                    <h2 class="text-xl font-semibold mb-4">Languages</h2>
                    <p class='dark:text-gray-200'>Thai</p>
                    <p class='dark:text-gray-200'>English</p>
                    </div>
                </div>

                <div class="content w-full p-12 dark:bg-slate-600">
                    <div id="profile" class="prose dark:prose-headings:text-white dark:prose-p:text-gray-200">
                    <h1 class="text-3xl mb-2">Ronnapat Srivoraviali</h1>
                    <p>
                        Hi everyone ,Thank you for check out my personal website for my information please continue reading but if you have any question that don't in this page you can contact me in Contact page
                    </p>
                    </div>
                    <hr class="mt-8 mb-12" />
                    <div id="experience" class="prose">
                    <h2 class="section-headline text-2xl dark:text-gray-100">Education :</h2>
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