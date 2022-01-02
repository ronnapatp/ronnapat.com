export default function footer(){
    return(
    <footer className="bg-gray-100 w-full py-8 border-t">
        <div className="max-w-screen-xl mx-auto px-4">
            <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
                <li className="my-2">
                    <a className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200" href="#">
                        Privacy
                    </a>
                </li>
                <li className="my-2">
                    <a className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200" href="#">
                        Blog
                    </a>
                </li>
                <li className="my-2">
                    <a className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200" href="#">
                        Repository
                    </a>
                </li>
                <li className="my-2">
                    <a className="text-sky-500 font-semibold hover:text-sky-800 transition-colors duration-200" href="#">
                        Share
                    </a>
                </li>
            </ul>
            <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <div className="relative">
                        <input type="text" id="&quot;form-subscribe-Subscribe" className="rounded-lg border-transparent flex-1 appearance-none border border-sky-300 w-full py-2 px-4 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" placeholder="Email"/>
                        </div>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-sky-600 rounded-lg shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-200" type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="text-center text-gray-500 pt-10 sm:pt-12 font-light flex items-center justify-center">
                    Ronnapat Srivoravilai © 2020 - {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
}