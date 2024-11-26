import Ul from "./components/ul";
import Testimonials from "./components/testimonials";
import Manage from "./components/manage";
import Hero from "./components/hero";
import { useMediaQuery } from "react-responsive";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Attribution from "./components/attribution";

function App() {
  const media = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <Nav desktop={media} />
      <Hero />
      <Manage />
      <Testimonials />
      <Ul />
      <Footer />
      <Attribution />
    </>
  );
}

export default App;
