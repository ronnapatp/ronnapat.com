import Navbar from "src/components/navbar";
import Head from "src/components/global/meta";
import Footer from "src/components/footer/footer";
import Container from "src/components/layout/container";
export default function Custom404() {
  return (
    <div>
      <Navbar lantoshow="en-us" pathname="en-us" />
      <Head title="404 Page not found" image="/" />
      <div className="h-[80vh] bg-white dark:bg-slate-700 flex justify-center content-center flex-wrap">
        <h1 className="text-black dark:text-gray-50 error-text text-4xl md:text-7xl	">
          404 - Page Not Found
        </h1>
      </div>
      <div className="bg-white dark:bg-slate-700">
        <Container>
          <Footer paht="en-us" />
        </Container>
      </div>
    </div>
  );
}
