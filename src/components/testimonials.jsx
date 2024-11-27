import Testimonial from "./testimonial";
import aliAvatar from "../assets/avatar-ali.png";
import anishaAvatar from "../assets/avatar-anisha.png";
import richardAvatar from "../assets/avatar-richard.png";
import shanaiAvatar from "../assets/avatar-shanai.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Testimonials = ({ desktop }) => {
  const [index, setIndex] = useState(0);

  const settingsDesktop = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };

  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <article className="flex flex-col gap-8 py-10">
        <div className="flex justify-center">
          <span className="text-3xl">What they’ve said</span>
        </div>
        <ul>
          <Slider
            afterChange={(i) => setIndex(i)}
            {...(desktop ? settingsDesktop : settingsMobile)}
          >
            <Testimonial
              index={0}
              img={aliAvatar}
              title="Anisha Li"
              paragraph="“Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”"
            />
            <Testimonial
              index={1}
              img={anishaAvatar}
              title="Ali Bravo"
              paragraph="“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”"
            />
            <Testimonial
              index={2}
              img={richardAvatar}
              title="Richard Watts"
              paragraph=" “Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”"
            />
            <Testimonial
              index={3}
              img={shanaiAvatar}
              title="Shanai Gough"
              paragraph=" “Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”"
            />
          </Slider>
        </ul>
        <ul className="flex justify-center gap-2">
          <li
            className={`${index === 0 ? "bg-white" : "bg-black"} h-4 w-4 rounded-full`}
          ></li>
          <li
            className={`${index === 1 ? "bg-white" : "bg-black"} h-4 w-4 rounded-full`}
          ></li>
          <li
            className={`${index === 2 ? "bg-white" : "bg-black"} h-4 w-4 rounded-full`}
          ></li>
          <li
            className={`${index === 3 ? "bg-white" : "bg-black"} h-4 w-4 rounded-full`}
          ></li>
        </ul>
        <div className="flex w-full justify-center">
          <a
            className="w-fit rounded-full bg-brightRed p-2 text-white"
            href="/"
          >
            Get Started
          </a>
        </div>
      </article>
    </>
  );
};

export default Testimonials;
