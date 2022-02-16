import { useState } from "react"

export default function () {
    let cookie;

    if (typeof window !== "undefined") {
        cookie = localStorage.getItem('Cookies');
    }
    if (cookie === null) {
        cookie = true;
    } else {
        cookie = false
    }


    const [ isShow, setIsShow ] = useState(cookie)
    
    if (typeof window !== "undefined") {
        localStorage.setItem('Cookies', isShow);
    }
    return(
        <div>
            { isShow ? 
            <div>
                <div className="max-w-screen-lg mx-auto fixed bg-white dark:bg-slate-500 inset-x-5 p-5 bottom-10 rounded-lg border-sky-500 border-2 drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
                    <div className="w-full text-gray-800 dark:text-gray-200">
                        This website uses cookies to ensure you get the best experience on our website. 
                    </div>
                    <div className="flex gap-4 items-center flex-shrink-0">
                        <a href="/en-us/cookie" className="text-sky-600 dark:text-sky-400 focus:outline-none hover:underline">Cookie policy</a>
                        <button onClick={() => setIsShow(false)} className="bg-sky-500 px-5 py-2 text-white rounded-md hover:bg-sky-700 focus:outline-none">Allow Coockies</button>
                    </div>
                </div>
            </div>
            : null}
        </div>
    )
}