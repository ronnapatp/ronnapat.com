import Head from "@/components/meta";
import Navbar from "@/components/navbar/navbar";
import Cookie from "@/components/cookie";
import Footer from "@/components/footer/footer";
import { langenus } from "@/script/languages";
export default function () {
  return (
    <div>
      <Head title="Cookies"   />
      <Navbar lantoshow={langenus} pathname="en-us" page="/cookie" />
      <Cookie />
      <Footer />
    </div>
  );
}
