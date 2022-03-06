import Navbar from "@/components/navbar/navbar";
import Head from "@/components/global/meta";
import Social from "@/components/social";
import Footer from "@/components/footer/footer";
import { langenus } from "@/script/languages";

export default function () {
  return (
    <>
      <Navbar lantoshow={langenus} pathname="en-us" page="/social" />
      <Head title="Social" />
      <Social />
      <Footer paht="en-us" />
    </>
  );
}
