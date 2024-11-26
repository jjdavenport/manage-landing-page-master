import Testimonial from "./testimonial";
import aliAvatar from "../assets/avatar-ali.png";
import anishaAvatar from "../assets/avatar-anisha.png";
import richardAvatar from "../assets/avatar-richard.png";
import shanaiAvatar from "../assets/avatar-shanai.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  return (
    <>
      <section>
        <span>What they’ve said</span>
        <ul>
          <Slider>
            <Testimonial
              img={aliAvatar}
              title="Anisha Li"
              paragraph="“Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”"
            />
            <Testimonial
              img={anishaAvatar}
              title="Ali Bravo"
              paragraph="“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”"
            />
            <Testimonial
              img={richardAvatar}
              title="Richard Watts"
              paragraph=" “Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”"
            />
            <Testimonial
              img={shanaiAvatar}
              title="Shanai Gough"
              paragraph=" “Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”"
            />
          </Slider>
        </ul>
        <a href="/">Get Started</a>
      </section>
    </>
  );
};

export default Testimonials;
