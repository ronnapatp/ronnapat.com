import Head from "@/components/meta";
import Navbar from "@/components/navbar";
import Terms from "@/components/terms";
import Footer from "@/components/footer";
import { langenus } from "@/script/languages";
export default function () {
  return (
    <>
      <Head title="terms"   />
      <Navbar lantoshow={langenus} pathname="en-us" page="/terms" />
      <Terms />
      <Footer paht="en-us" />
    </>
  );
}
