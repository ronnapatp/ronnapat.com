export default function Homeabout({
    title,
    children
}) {
    return(
        <>
            <div className="text-center dark:bg-slate-800 py-16 sm:py-20 md:py-28 sm:px-4 lg:px-72 bg-white" id="about">
                <h1 className="text-4xl md:text-5xl font-semibold dark:text-white">
                    {title}
                </h1>
                <div className="text-xl md:text-3xl font-normal dark:text-slate-300">
                    {children}
                </div>
            </div>
        </>
    )
}