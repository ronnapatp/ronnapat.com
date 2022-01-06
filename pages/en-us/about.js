import Navbar from '../../components/navbar'
import About from "../../components/about";
import {
    langenus
} from '../../script/languages'

export default function () {
    return(
        <div className='bg-slate-800'>
            <Navbar lantoshow={langenus} pathname='en-us' page='/about' />
            <About />
        </div>
    )
}