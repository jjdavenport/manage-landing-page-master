import { useEffect } from "react";

const MobileMenu = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-10 h-full w-full bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.7)]">
        <dialog className="absolute top-[7rem] z-20 flex w-11/12">
          <ul className="flex w-full flex-col items-center gap-6 p-12 font-bold text-darkBlue">
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Community</li>
          </ul>
        </dialog>
      </div>
    </>
  );
};

export default MobileMenu;
