import Header from "../../components/header";
import Navbar from '../../components/navbar'
import Head from '../../components/meta'
import Homeabout from "../../components/home-about";
import Skill from "../../components/skill";
import {
    langthth
} from '../../script/languages'

export default function Home() {
    return(
        <>
            <Head title='หน้าหลัก' image='/meta.png' />
            <Navbar lantoshow={langthth} pathname='th-th' />
            <Header name='Ronnapat Srivoravilai' description='ผมสร้างเว็บไซต์ บอท คุณสามารถดูโปรเจคของผมได้ที่บทความ' button='เรียนรู้เพิ่มเติม' bthref='#' />
            <Homeabout title='Who am I ?'>
                I am a student in bangkok,thailand. I like to create website bot and application. I am currently create bottlecrush app (View it on <a href="https://github.com/bottlecrush" className="hover:underline hover:text-sky-500">github</a>)
            </Homeabout>
            <center>
                <Skill />
            </center>
        </>
    )
}