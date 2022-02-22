import Head from "@/components/meta";
import Navbar from "@/components/navbar";
import Privacy from "@/components/privacy";
import Footer from "@/components/footer";
import { langenus } from "@/script/languages";
export default function () {
  return (
    <>
      <Head title="Privacy" image="/meta.png" />
      <Navbar lantoshow={langenus} pathname="en-us" page="/privacy" />
      <Privacy />
      <Footer paht="en-us" />
    </>
  );
}
