import {
    ArrowRightIcon
} from '@heroicons/react/outline'
export default function () {
    return(
        <div className="bg-gray-50 dark:bg-slate-800">
            <div className="container mx-auto px-6 lg:px-40 py-10">
                <div className="text-4xl md:text-6xl text-slate-800 dark:text-gray-200 font-semibold mb-4">
                    My project
                </div>
                <div className="md:inline-flex md:space-x-5">
                    <div className="p-6 max-w-screen md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2 md:mb-0">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bottle crush system</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Bottle crush system help world clean plastic. We have application and website click down below to learn more.</p>
                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 dark:bg-opacity-20 rounded-full hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500/20">
                            Read more
                            <ArrowRightIcon className="ml-2 -mr-1 w-4 h-4" />
                        </a>
                    </div>
                    <div className="p-6 max-w-screen md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2 md:mb-0">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My website ronnapat.com</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Since last year I create 2 version of my website and in this year I create version 1.2.0</p>
                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 dark:bg-opacity-20 rounded-full hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500/20">
                            Read more
                            <ArrowRightIcon className="ml-2 -mr-1 w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}