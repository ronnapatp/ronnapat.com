import Head from "src/components/global/meta";
import Navbar from "src/components/navbar/navbar";
import About from "src/components/about/about";
import Footer from "src/components/footer/footer";
import { langenus } from "src/script/languages";

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
