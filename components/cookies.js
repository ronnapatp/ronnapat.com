import { useState } from "react"

export default function () {
    let cookie;

    if (typeof window !== "undefined") {
        cookie = localStorage.getItem('Cookies');
    }
    if (cookie === null) {
        console.log('was null setting to false');
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
                <div className="max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-10 rounded-lg border-sky-500 border-2 drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
                    <div className="w-full">
                        This website uses cookies to ensure you get the best experience on our website. 
                    </div>
                    <div className="flex gap-4 items-center flex-shrink-0">
                        <button className="text-sky-600 focus:outline-none hover:underline">Decline</button>
                        <button onClick={() => setIsShow(false)} className="bg-sky-500 px-5 py-2 text-white rounded-md hover:bg-sky-700 focus:outline-none">Allow Coockies</button>
                    </div>
                </div>
            </div>
            : null}
        </div>
    )
}