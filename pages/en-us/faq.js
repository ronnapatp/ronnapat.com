import Navbar from "../../components/navbar"
import Head from "../../components/meta"
import Faq from "../../components/faq"
import Footer from "../../components/footer"
import {
    langenus
} from '../../script/languages'
export default function faq () {
    return(
        <>
            <Head title='FAQ' image='/meta.png' />
            <Navbar lantoshow={langenus} pathname='en-us' page='/faq' />
            <Faq />
            <Footer />
        </>
    )
}