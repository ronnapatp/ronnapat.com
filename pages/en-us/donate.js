import Navbar from "@/components/navbar/navbar";
import Head from "@/components/global/meta";
import Donate from "@/components/donate/donate";
import Footer from "@/components/footer/footer";
import { langenus } from "@/script/languages";

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
