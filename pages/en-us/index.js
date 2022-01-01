import Header from "../../components/header";
import Navbar from '../../components/navbar'
import {
    langenus
} from '../../script/main'

export default function Home() {
    return(
        <>
            <Navbar lantoshow={langenus} pathname='en-us' />
            <Header name='Ronnapat Srivoravilai' description='I create website bot and much more! You can view my project in my blog' />
        </>
    )
}