import Head from '../../components/meta'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import {
    langenus
} from '../../script/languages'
import Script from 'next/script'
export default function () {
    return(
        <>
            <Head title='Privacy' image='/meta.png' />
            <Navbar lantoshow={langenus} pathname='en-us' page='/privacy' />
            <Footer paht='en-us' />
        </>
    )
}