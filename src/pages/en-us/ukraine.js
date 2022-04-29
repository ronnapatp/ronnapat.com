import Navbar from "src/components/navbar/navbar";
import Head from "src/components/global/meta";
import Footer from "src/components/footer/footer";
import Container from "src/components/layout/container";
import { langenus } from "src/script/languages";

export default function () {
  return (
    <div className="bg-white dark:bg-slate-700">
      <Navbar lantoshow={langenus} pathname="en-us" page="/ukraine" />
      <Head title="#StandWithUkraine" />
      <div className="bg-[#005bbb] py-32 text-center text-xl md:text-7xl font-bold text-[#ffd500]">
        #StandWithUkraine
      </div>
      <div className="bg-[#ffd500] py-32 text-center text-xl md:text-7xl font-bold text-[#005bbb]">
        #StopWar
      </div>
      <Footer paht="en-us" />
    </div>
  );
}
