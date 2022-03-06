import Head from "@/components/meta";
import Navbar from "@/components/navbar/navbar";
import Privacy from "@/components/privacy";
import Footer from "@/components/footer/footer";
import { langenus } from "@/script/languages";
export default function () {
  return (
    <>
      <Head title="Privacy"   />
      <Navbar lantoshow={langenus} pathname="en-us" page="/privacy" />
      <Privacy />
      <Footer paht="en-us" />
    </>
  );
}
