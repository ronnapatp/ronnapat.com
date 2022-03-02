import Navbar from "@/components/navbar";
import Head from "@/components/meta";
import Donate from "@/components/donate";
import Footer from "@/components/footer";
import { langenus } from "@/script/languages";

export default function () {
  return (
    <>
      <Navbar lantoshow={langenus} pathname="en-us" page="/donate" />
      <Head title="Donate"   />
      <Donate />
      <Footer paht="en-us" />
    </>
  );
}
