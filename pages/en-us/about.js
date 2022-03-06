import Head from "@/components/meta";
import Navbar from "@/components/navbar/navbar";
import About from "@/components/about";
import Footer from "@/components/footer/footer";
import { langenus } from "@/script/languages";
import Hello from "@/components/index.mdx"

export default function () {
  return (
    <div className="dark:bg-slate-800">
      <Head title="About"   />
      <Navbar lantoshow={langenus} pathname="en-us" page="/about" />
      <About />
      <Hello />
      <Footer paht="en-us" />
    </div>
  );
}
