import logo from "../assets/logo.svg";
import open from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

const Nav = ({ desktop }) => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  if (!desktop) {
    return (
      <>
        <nav className="flex justify-between p-4">
          <img src={logo} alt="Logo" />
          <button onClick={toggle}>
            <img src={menu ? close : open} alt="Menu" />
          </button>
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
