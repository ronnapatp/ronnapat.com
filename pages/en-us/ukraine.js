import Navbar from "@/components/navbar";
import Head from "@/components/meta";
import Footer from "@/components/footer";
import Container from "@/components/container"
import { langenus } from "@/script/languages";

export default function () {
  return (
    <div className="bg-white dark:bg-slate-700"> 
      <Navbar lantoshow={langenus} pathname="en-us" page="/ukraine" />
      <Head title="#StandWithUkraine" />
    <Container>
        <h1 className="text-center text-5xl mt-10 font-semibold">#StandWithUkraine 🇺🇦</h1>
    </Container>
      <Footer paht="en-us" />
    </div>
  );
}
