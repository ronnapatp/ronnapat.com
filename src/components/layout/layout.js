import Container from "src/components/layout/container";
import Navbar from "../navbar";
import Footer from "../footer/footer";
export default function ({ children }) {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-slate-700 text-black dark:text-white h-screen">
        <Container>
          {children}
          <Footer />
        </Container>
      </div>
    </>
  );
}
