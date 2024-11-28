const Products = () => {
  return (
    <>
      <article className="flex flex-col items-center gap-6 p-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold text-darkBlue">
            Bring everyone together to build better products.
          </h1>
          <p className="w-11/12 leading-7 text-darkGrayishBlue">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
        </div>
        <a
          className="w-fit rounded-full bg-brightRed px-7 py-3 text-sm text-white"
          href="/"
        >
          Get Started
        </a>
      </article>
    </>
  );
};

export default Products;
