import Header from "../../components/header";
import Navbar from '../../components/navbar'
import Head from '../../components/meta'
import OtherHead from 'next/head'
import Script from 'next/script'
import Homeabout from "../../components/home-about";
import Project from '../../components/project'
import Goblog from '../../components/go-blog'
import Subscribe from "../../components/subscribe";
import Footer from "../../components/footer"
import {
    langenus
} from '../../script/languages'

export default function Home() {
    return(
        <>
            <Head title='Home' image='/meta.png' />
            <OtherHead>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1196910141338252"
     crossorigin="anonymous"></Script>
     <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1196910141338252"
     crossorigin="anonymous"></Script>
            </OtherHead>
            <Navbar lantoshow={langenus} pathname='en-us' page='/' />
            <Header name='Ronnapat Srivoravilai' description='I create website bot and much more! You can view my project in my blog' button='Learn more' bthref='#about' />
            <Homeabout title='Who am I ?' paht='en-us'>
                I am a student in bangkok ,Thailand. I like to create website bot and application. I am currently working on bottlecrush app (View it on <a href="https://github.com/bottlecrush" className="hover:underline hover:text-sky-500 dark:hover:text-sky-400">github</a>)
            </Homeabout>
            <Project />
            <Goblog />
            <Subscribe />
            <Footer paht='en-us' />
        </>
    )
}