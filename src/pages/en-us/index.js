import Header from "src/components/home/header";
import Navbar from "src/components/navbar/navbar";
import Head from "src/components/global/meta";
import Homeabout from "src/components/home/home-about";
import Ads from "src/components/about/ads";
import Project from "src/components/home/project";
import Goblog from "src/components/home/go-blog";
import Subscribe from "src/components/home/subscribe";
import Footer from "src/components/footer/footer";
import { langenus } from "src/script/languages";

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <Navbar lantoshow={langenus} pathname="en-us" page="/" />
      <Header
        name="Ronnapat Srivoravilai"
        description="I create website bot and much more! You can view my project in my blog"
        button="Learn more"
        bthref="#about"
      />
      <Homeabout title="Who am I ?" paht="en-us">
        I am a student in bangkok ,Thailand. I like to create website bot and
        application. I am currently working on bottlecrush app (View it on{" "}
        <a
          href="https://github.com/bottlecrush"
          className="hover:underline hover:text-sky-500 dark:hover:text-sky-400"
        >
          github
        </a>
        )
      </Homeabout>
      <Project />
      <Goblog />
      <Subscribe />
      <Ads />
      <Footer paht="en-us" />
    </>
  );
}
