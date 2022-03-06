import Head from "@/components/global/meta";
import Navbar from "@/components/navbar/navbar";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import { langenus } from "@/script/languages";

export default function () {
  return (
    <div className="dark:bg-slate-800">
      <Head title="About" />
      <Navbar lantoshow={langenus} pathname="en-us" page="/about" />
      <About />
      <Footer paht="en-us" />
    </div>
  );
}
