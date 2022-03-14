import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"

export default function () {
    return(
        <div className="bg-white dark:bg-slate-700">
            <Navbar />
            <h1 className="text-center text-3xl md:text-5xl p-10">Ronnapat Blog</h1>
            <Footer />
        </div>
    )
} 