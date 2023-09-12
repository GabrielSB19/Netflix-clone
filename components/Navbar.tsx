import React, { useCallback } from "react";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className="
        px-4
        md:px-16
        py-6
        flex
        flex-row
        items-center
        transition
        duration-300
        bg-zinc-900
        bg-opacity-90"
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
        <div
          className="
          flex-row
          ml-8
          gap-7
          hidden
          lg:flex"
        >
          <NavbarItem label={"Home"} />
          <NavbarItem label={"Series"} />
          <NavbarItem label={"Films"} />
          <NavbarItem label={"New & Popular"} />
          <NavbarItem label={"My List"} />
          <NavbarItem label={"Browse by Languages"} />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm hover:text-gray-300">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={showMobileMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
