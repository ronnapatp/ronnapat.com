export default function Homeabout({
    title,
    children
}) {
    return(
        <>
            <div className="text-center py-16 sm:py-20 md:py-28 sm:px-4 lg:px-72 home-bg-gd">
                <h1 className="text-4xl md:text-5xl font-semibold">
                    {title}
                </h1>
                <div className="text-xl md:text-3xl font-normal">
                    {children}
                </div>
            </div>
        </>
    )
}