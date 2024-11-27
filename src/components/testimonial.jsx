const Testimonial = ({ img, title, paragraph }) => {
  return (
    <>
      <li className="px-4 py-6">
        <div className="flex flex-col items-center gap-4 rounded-md bg-veryLightGray p-6 text-center">
          <img className="-mt-12 w-16 object-contain" src={img} />
          <span>{title}</span>
          <p>{paragraph}</p>
        </div>
      </li>
    </>
  );
};

export default Testimonial;
