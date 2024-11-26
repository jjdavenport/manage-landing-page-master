import Form from "./form";
import Socials from "./socials";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <section>
        <Form />
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
        <Socials />
        <img src={logo} />
        <span>Copyright 2020. All Rights Reserved</span>
      </section>
    </>
  );
};

export default Footer;
