import Navbar from "@/components/navbar/navbar";
import Head from "@/components/meta";
import Faq from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import { langenus } from "@/script/languages";
export default function faq() {
  return (
    <>
      <Head title="FAQ" />
      <Navbar lantoshow={langenus} pathname="en-us" page="/faq" />
      <Faq />
      <Footer paht="en-us" />
    </>
  );
}
