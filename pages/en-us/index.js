import Header from "../../components/header";
import Navbar from '../../components/navbar'
import Head from '../../components/meta'
import Homeabout from "../../components/home-about";
import Skill from "../../components/skill";
import Footer from "../../components/footer"
import {
    langenus
} from '../../script/languages'

export default function Home() {
    return(
        <>
            <Head title='Home' image='/meta.png' />
            <Navbar lantoshow={langenus} pathname='en-us' page='/' />
            <Header name='Ronnapat Srivoravilai' description='I create website bot and much more! You can view my project in my blog' button='Learn more' bthref='#' />
            <Homeabout title='Who am I ?'>
                I am a student in bangkok,thailand. I like to create website bot and application. I am currently working on bottlecrush app (View it on <a href="https://github.com/bottlecrush" className="hover:underline hover:text-sky-500">github</a>)
            </Homeabout>
            <center>
                <Skill />
            </center>
            <Footer />
        </>
    )
}