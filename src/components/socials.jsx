import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Socials = () => {
  return (
    <>
      <ul>
        <li>
          <img src={facebook} />
        </li>
        <li>
          <img src={youtube} />
        </li>
        <li>
          <img src={twitter} />
        </li>
        <li>
          <img src={pinterest} />
        </li>
        <li>
          <img src={instagram} />
        </li>
      </ul>
    </>
  );
};

export default Socials;
