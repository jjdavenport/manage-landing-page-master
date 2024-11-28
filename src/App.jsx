import Ul from "./components/ul";
import Testimonials from "./components/testimonials";
import Manage from "./components/manage";
import Hero from "./components/hero";
import { useMediaQuery } from "react-responsive";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Simplify from "./components/simplify";
import Products from "./components/products";

function App() {
  const media = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div className="font-custom text-base">
        <Nav desktop={media} />
        <main className="bg-pattern bg-mainRight flex flex-col gap-20 bg-contain bg-no-repeat">
          <Products />
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
