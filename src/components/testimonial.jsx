const Testimonial = ({ img, title, paragraph }) => {
  return (
    <>
      <li>
        <img src={img} />
        <span>{title}</span>
        <p>{paragraph}</p>
      </li>
    </>
  );
};

export default Testimonial;
