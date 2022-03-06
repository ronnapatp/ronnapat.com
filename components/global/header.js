export default function ({title, description}) {
    return(
        <div className="bg-gray-300 dark:bg-slate-600 text-center">
            <h1 className="text3xl md:text-5xl text-sky-400 dark:text-sky-200">
                {title}
                <p className="text-md md:text-xl">
                    {description}
                </p>
            </h1>
        </div>
    )
}