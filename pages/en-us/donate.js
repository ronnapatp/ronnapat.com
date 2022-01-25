import Head from '../../components/meta'
import Navbar from '../../components/navbar'
import Donate from '../../components/donate'
import Footer from '../../components/footer'
import {
    langenus
} from '../../script/languages'
export default function () {
    return(
        <>
            <div className='bg-white dark:bg-slate-700'>
                <Head title='Donate' image='/meta.png' />
                <Navbar lantoshow={langenus} pathname='en-us' page='/donate' />
                <Donate />
                <Footer paht='en-us' />
            </div>
        </>
    )
}