import Navbar from "src/components/navbar/navbar";
import Head from "src/components/global/meta";
import Faq from "src/components/faq/faq";
import Footer from "src/components/footer/footer";
import { langenus } from "src/script/languages";
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
