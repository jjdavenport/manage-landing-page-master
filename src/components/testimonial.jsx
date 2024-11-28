const Testimonial = ({ img, title, paragraph }) => {
  return (
    <>
      <li className="px-4 py-8">
        <div className="flex flex-col items-center gap-4 rounded-md bg-veryLightGray p-6 text-center">
          <img className="-mt-14 w-16 object-contain" src={img} />
          <span className="font-bold text-darkBlue">{title}</span>
          <p className="text-darkGrayishBlue">{paragraph}</p>
        </div>
      </li>
    </>
  );
};

export default Testimonial;
