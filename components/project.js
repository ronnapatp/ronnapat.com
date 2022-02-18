import {
    ArrowRightIcon
} from '@heroicons/react/outline'
import Container from './container'
export default function () {
    return(
        <div className="bg-gray-50 dark:bg-slate-800">
            <Container>
                <div className='py-10'>
                    <div className="text-4xl md:text-6xl text-slate-800 dark:text-gray-200 font-semibold mb-4">
                        My project
                    </div>
                    <div className="p-6 max-w-screen mt-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2 md:mb-0 hover:scale-105 duration-100">
                        <a href='https://blog.ronnapat.com/blog/my-twitter-bot' target='_blank' rel="noopener">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My twitter bot with typescript</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I build my first twitter bot to update my bio using twitter api with typescript</p>
                        </a>
                    </div>
                    <div className="p-6 max-w-screen mt-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2 md:mb-0 hover:scale-105 duration-100">
                        <a href='https://blog.ronnapat.com/blog/my-website' target='_blank' rel="noopener">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My website ronnapat.com</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Since last year I create 2 version of my website and in this year I create version 1.2.0</p>
                        </a>
                    </div>
                </div>
            </Container>
            <div className='text-center pb-10'>
                <a className="after:content-['_↗'] text-gray-600 dark:text-gray-200" href='https://blog.ronnapat.com/tags/project' target='_blank' rel="noopener">
                    View all in project blog
                </a>
            </div>
        </div>
    )
}