import Navbar from "@/components/navbar/navbar";
import Head from "@/components/global/meta";
import Footer from "@/components/footer/footer";
import { langenus } from "@/script/languages";
export default function faq() {
  return (
    <>
      <Head title="SEARCH" />
      <Navbar lantoshow={langenus} pathname="en-us" page="/search" />
      <script async src="https://cse.google.com/cse.js?cx=7c2e979434cc48da3"></script>
<div class="gcse-search"></div>
      <Footer paht="en-us" />
    </>
  );
}
