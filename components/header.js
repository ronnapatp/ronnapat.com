export default function Header({
    name,
    description,
    button,
    bthref,
}) {
    return(
        <div className="w-full bg-center bg-no-repeat bg-cover bg-[url('https://ronnapat.com/heroes.png')]">
            <div className='bg-opacity-50 bg-black'>
                <div className="container flex flex-col px-6 lg:px-40 py-4 mx-auto md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
                    <div className="right-0 hidden md:block md:w-[40%] md:mr-20">
                        <img className="w-full h-full max-w-2xl rounded-md" src="/cover.jpeg" alt="My image" />
                    </div>
                    <div className="flex flex-col items-center w-full md:flex-row">
                        <div className="mt-40 mb-40 md:mb-0 md:mt-0 md:order-2">
                        <div className="p-2">
                            <div className="inline-flex items-center bg-white leading-none text-sky-600 rounded-full p-2 shadow text-sm">
                            <span className="inline-flex bg-sky-600 text-white rounded-full h-6 px-3 justify-center items-center text-">Languages</span>
                            <span className="inline-flex px-2">Thai languages coming soon </span>
                            </div>
                        </div>
                            <h1 className="text-6xl text-center md:text-left font-medium tracking-wide text-white md:text-7xl">{name}</h1>
                            <p className="mt-4 text-gray-100">{description}</p>
                            <div className="mt-6">
                                <a href={bthref} className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-sky-500 dark:bg-sky-600 rounded-md md:inline hover:bg-sky-400 dark:hover:bg-sky-500">
                                    {button}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   )
}
