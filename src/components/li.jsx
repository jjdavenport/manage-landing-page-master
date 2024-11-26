const Li = ({ number, title, paragraph }) => {
  return (
    <>
      <li>
        <div>
          <div>
            <span>{number}</span>
          </div>
          <span>{title}</span>
        </div>
        <p>{paragraph}</p>
      </li>
    </>
  );
};

export default Li;
