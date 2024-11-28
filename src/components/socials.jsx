import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Socials = () => {
  return (
    <>
      <ul className="flex w-full items-center justify-evenly gap-4">
        <li>
          <img className="w-7 object-contain" src={facebook} />
        </li>
        <li>
          <img className="w-7 object-contain" src={youtube} />
        </li>
        <li>
          <img className="w-7 object-contain" src={twitter} />
        </li>
        <li>
          <img className="w-7 object-contain" src={pinterest} />
        </li>
        <li>
          <img className="w-7 object-contain" src={instagram} />
        </li>
      </ul>
    </>
  );
};

export default Socials;
