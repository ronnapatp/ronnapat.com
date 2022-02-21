import Navbar from "@/components/navbar"
import Head from "@/components/meta"
import Social from "@/components/social"
import Footer from "@/components/footer"
import { langenus } from "@/script/languages";

export default function () {
    return(
        <>
            <Navbar lantoshow={langenus} pathname="en-us" page="/social" />
            <Head title="Social" image="/meta.png" />
            <Social />
            <Footer paht='en-us' />
        </>
    )
}