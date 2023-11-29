import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      linkname: "Home",
    },
    {
      id: 2,
      link: "about",
      linkname: "About",
    },
    {
      id: 3,
      link: "portfolio",
      linkname: "Portfolio",
    },
    {
      id: 4,
      link: "experience",
      linkname: "Experience",
    },
    {
      id: 5,
      link: "contact",
      linkname: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">Oussama</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, linkname }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
            >
              <Link smooth duration={500} to={link}>
                {linkname}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navbar */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, linkname }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white duration-200"
              >
                <Link smooth duration={500} to={link}>
                  {linkname}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
