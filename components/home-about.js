import Container from './container'
export default function Homeabout({
    title,
    children,
    paht,
}) {
    return(
        <>
            <div className="text-center py-20 dark:bg-slate-800 bg-white" id="about">
                <Container>
                    <h1 className="text-4xl md:text-6xl font-semibold dark:text-white">
                        {title}
                    </h1>
                    <div className="text-xl md:text-2xl mt-5 mb-8 font-normal dark:text-slate-300">
                        {children}
                    </div>
                    <a className="after:content-['_↗'] text-gray-600 dark:text-gray-200" href={`/${paht}/about`}>
                        View all in about page
                    </a>
                </Container>
            </div>
        </>
    )
}