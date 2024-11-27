const Li = ({ number, title, paragraph }) => {
  return (
    <>
      <li>
        <div className="flex rounded-l-full bg-brightRed bg-opacity-10">
          <span className="flex items-center rounded-full bg-brightRed px-4">
            {number}
          </span>
          <span className="flex w-full p-2">{title}</span>
        </div>
        <p>{paragraph}</p>
      </li>
    </>
  );
};

export default Li;
