import Head from "../../components/meta"
import Navbar from "../../components/navbar"
import Cookie from "../../components/cookie"
import {
    langenus
} from '../../script/languages'
export default function () {
    return(
        <>
            <Head title='Cookies' image='/meta.png' />
            <Navbar lantoshow={langenus} pathname='en-us' page='/cookie' />
            <Cookie />
        </>
    )
}