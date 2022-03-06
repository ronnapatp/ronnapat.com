import Navbar from "@/components/navbar/navbar";
import Head from "@/components/meta";
import Footer from "@/components/footer/footer";
import Container from "@/components/layout/container";
import { langenus } from "@/script/languages";

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
