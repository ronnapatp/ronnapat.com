import Head from "@/components/global/meta"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer";
import Share from "./share"
import { langenus } from "@/script/languages";
import Container from "./container";
export default function ({ children, title, page, date, author, image }) {
  return (
    <div className="bg-white dark:bg-slate-700">
        <Navbar lantoshow={langenus} pathname="en-us" page={`/blog/posts/${page}`} />
        <Head title={title} image={image} />
      <Container>
            <h1 className="text-center uppercase text-2xl md:text-4xl font-semibold mt-10">
          <span className="text-center text-sm md:text-xl font-normal">
              {date} - <a href="#">@{author}</a> 
              <br />
          </span>
                {title}
            </h1>
        <div className="prose-layout">
            {children}
            <Share href={page} title={title} />
        </div>
      </Container>
      <Footer path="en-us" />
    </div>
  );
}
