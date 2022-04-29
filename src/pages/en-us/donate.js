import Navbar from "src/components/navbar/navbar";
import Head from "src/components/global/meta";
import Donate from "src/components/donate/donate";
import Footer from "src/components/footer/footer";
import { langenus } from "src/script/languages";

export default function () {
  return (
    <>
      <Navbar lantoshow={langenus} pathname="en-us" page="/donate" />
      <Head title="Donate" />
      <Donate />
      <Footer paht="en-us" />
    </>
  );
}
