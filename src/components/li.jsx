const Li = ({ number, title, paragraph }) => {
  return (
    <>
      <li className="flex flex-col gap-3">
        <div className="flex gap-1 rounded-l-full bg-brightRed bg-opacity-10">
          <span className="flex items-center rounded-full bg-brightRed px-6 font-medium text-white">
            {number}
          </span>
          <span className="flex w-full p-2 font-bold text-darkBlue">
            {title}
          </span>
        </div>
        <p className="leading-7 text-darkGrayishBlue">{paragraph}</p>
      </li>
    </>
  );
};

export default Li;
