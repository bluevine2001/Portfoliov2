import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/obe29/",
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      href: "https://github.com/bluevine2001",
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
    },
    {
      id: 3,
      href: "mailto:oussamabechichi@gmail.com",
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
    },
    {
      id: 1,
      href: "/resume.pdf",
      child: (
        <>
          CV <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300  bg-gray-500 ${
                link.style ? link.style : ""
              }`}
            >
              <a
                href={link.href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
                download={link.download ? link.download : false}
              >
                {link.child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
