import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const MenuList = ({ isMobile }) => (
    <ul
      className={`w-full text-sm list-none flex p-6 rounded-xl ${isMobile ? 'flex-col items-start text-sm bg-tertiary' : 'flex-row items-center'
        } gap-4`}
    >
      {navLinks.map(({ id, title }) => (
        <li
          key={id}
          className={`${active === title ? 'text-white' : 'text-secondary'
            } hover:text-white font-medium cursor-pointer`}
          onClick={() => {
            setActive(title);
            if (isMobile) setToggle(false);
          }}
        >{
            id === "resume" ? <a href="/MansoorPort.pdf" target="_blank">{title}</a>
              :
              <a href={`#${id}`}>{title}</a>
          }</li>
      ))}
    </ul>
  );

  return (
    <nav className={`${styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
      }`}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={"/mansoor.jpg"}
            alt="logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <hr className="h-12 w-[2px] bg-secondary m-0 border-none" />
          <p className="cursor-pointer flex flex-col">
            <span className="font-semibold">Mansoor Shaik</span>
            <span className="text-xs italic text-secondary">
              mansoor91216@gmail.com
            </span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex">
          <MenuList isMobile={false} />
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${toggle ? 'flex green-pink-gradient bg-tertiary' : 'hidden'
              } mobile-menu`}
          >
            <MenuList isMobile={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
