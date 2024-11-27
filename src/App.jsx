import Ul from "./components/ul";
import Testimonials from "./components/testimonials";
import Manage from "./components/manage";
import Hero from "./components/hero";
import { useMediaQuery } from "react-responsive";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Simplify from "./components/simplify";

function App() {
  const media = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div className="font-custom text-base">
        <Nav desktop={media} />
        <Hero />
        <main className="flex flex-col gap-4">
          <Manage />
          <Ul />
          <Testimonials desktop={media} />
        </main>
        <Simplify />
        <Footer />
      </div>
    </>
  );
}

export default App;
