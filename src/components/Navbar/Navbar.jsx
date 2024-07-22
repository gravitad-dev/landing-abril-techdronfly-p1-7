import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import data from "../../data.json";
import { BsJustify, BsXLg } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 lg:px-16 py-2 flex justify-between items-center h-[78px] text-white
      bg-black shadow-sm`}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/">
          <div className="flex items-center gap-2">
            <img
              src={data["logo-white"].url}
              alt={data.logo.alt}
              className="w-[200px] md:w-[200px] sm:hidden md:block cursor-pointer mr-2 hover:animate-rotate-x hover:animate-duration-[1500ms]"
            />
            <img
              width={64}
              height={64}
              src={data.logo.url}
              alt={data.logo.alt}
              className="hidden sm:block md:hidden cursor-pointer mr-2 hover:animate-rotate-y hover:animate-duration-[2000ms]"
            />
          </div>
        </a>
        <div className="hidden sm:flex items-center justify-between space-x-6 sm:space-x-3 md:space-x-6">
          {data["section-header"].navbar.map((item, index) => (
            <Link
              to={item.href}
              spy={false}
              smooth={true}
              duration={500}
              key={index}
              offset={-75}
              className=" cursor-pointer"
            >
              <p
                className="text-md font-[600] hover:text-green-custom sm:text-[12px] lg:text-[16px] w-max"
                key={item.id}
              >
                {item.text}
              </p>
            </Link>
          ))}
          <a
            href={data["section-header"].blog.href}
            key={data["section-header"].blog.id}
            target="_blank"
            className=" cursor-pointer"
          >
            <p className="text-md font-[600] hover:text-green-custom sm:text-[12px] lg:text-[16px] w-max">
              {data["section-header"].blog.text}
            </p>
          </a>
          <a
            href={`${data["section-header"].contact.href}`}
            target="blank_"
            className=" cursor-pointer"
          >
            <p className="text-md text-md font-[600] hover:text-green-custom sm:text-[12px] lg:text-[16px] w-max">
              {data["section-header"].contact.text}
            </p>
          </a>
        </div>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center sm:hidden"
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};

export default Navbar;
