import logo from "../assets/logo.svg";
import open from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import { useState } from "react";
import MobileMenu from "./mobile-menu";
import Hero from "./hero";

const Nav = ({ desktop }) => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  if (!desktop) {
    return (
      <>
        <nav className="flex flex-col justify-between bg-pattern bg-contain bg-topRight bg-no-repeat">
          <div className="flex justify-between px-6 py-10">
            <img src={logo} alt="Logo" />
            <button className="z-50" onClick={toggle}>
              <img src={menu ? close : open} alt="Menu" />
            </button>
          </div>
          <Hero />
        </nav>
        {menu && <MobileMenu />}
      </>
    );
  }

  return (
    <>
      <nav className="flex justify-between p-4">
        <img className="object-contain" src={logo} alt="Logo" />
        <ul className="flex gap-2">
          <li>Pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
        <a href="/">Get Started</a>
      </nav>
    </>
  );
};

export default Nav;
