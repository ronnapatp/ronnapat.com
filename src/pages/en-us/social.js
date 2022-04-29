import Navbar from "src/components/navbar/navbar";
import Head from "src/components/global/meta";
import Social from "src/components/social/social";
import Footer from "src/components/footer/footer";
import { langenus } from "src/script/languages";

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
