import Head from "@/components/meta"

export default function (props) {
    const { name } = props
    return(
        <div className="text-center w-full h-screen flex flex-col justify-center items-center">
            <Head title={`${name} coming soon!`} />
            <h1 className="text-3xl md:text-4xl mb-2">
                This page is coming soon!
            </h1>
            <a className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800" href="/">
                Go back to home page
            </a>
        </div>
    )
}