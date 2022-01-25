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
            <Script src="https://donorbox.org/widget.js" paypalExpress="false"></Script>
            <iframe src="https://donorbox.org/embed/donate-to-ronnapat" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%"></iframe>
            <Footer paht='en-us' />
        </>
    )
}