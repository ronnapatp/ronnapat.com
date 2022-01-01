import Header from "../../components/header";
import Navbar from '../../components/navbar'
import Head from '../../components/meta'
import {
    langenus
} from '../../script/main'

export default function Home() {
    return(
        <>
            <Head title='Home' image='/favicon.ico' />
            <Navbar lantoshow={langenus} pathname='en-us' />
            <Header name='Ronnapat Srivoravilai' description='I create website bot and much more! You can view my project in my blog' />
        </>
    )
}