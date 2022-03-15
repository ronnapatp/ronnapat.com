import Head from "@/components/global/meta"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer";
import Share from "./share"
import { langenus } from "@/script/languages";
import Container from "./container";
export default function ({ children, title, page }) {
  return (
    <div className="bg-white dark:bg-slate-700">
        <Navbar lantoshow={langenus} pathname="en-us" page={`/blog/posts/${page}`} />
        <Head title={title} />
      <Container>
        <div className="prose-layout">
            {children}
            <Share href={page} title={title} />
        </div>
      </Container>
      <Footer path="en-us" />
    </div>
  );
}
