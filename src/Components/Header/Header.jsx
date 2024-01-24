import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Images/logo.png";
import { motion } from "framer-motion";

function Header() {
  const [topSpace, setTopSpace] = useState("top-[-1000%]");
  const [icon, setIcon] = useState("menu-outline");
  function handleIcon() {
    if (icon === "menu-outline") {
      setIcon("close-outline");
      setTopSpace(
        "top-[10%] left-[10%] pb-2  rounded-lg  text-[#101434]  text-center bg-white "
      );
    } else {
      setTopSpace("top-[-1000%]");
      setIcon("menu-outline");
    }
  }

  return (
    <div
      className="md:flex    md:flex-row  flex justify-between    sm:justify-around text-white md:w-[100%] mx-auto w-[100%]
        items-center py-5 h-auto  px-6 sm:px-0"
      style={{
        boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.1)",
        background:
          "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)",
      }}
    >
      <div className="w-10  ">
        <img src={logo} alt="" className="bg-cover bg-center" />
      </div>
      <div className="sm:hidden mr-5 text-3xl" onClick={handleIcon}>
        <ion-icon name={icon} className=" cursor-pointer burger "></ion-icon>
      </div>
      <div
        className={`${topSpace}   sm:items-center pt-2  md:w-80 sm:gap-16 gap-3   px-1 flex sm:flex-row flex-col  mt-4  sm:mt-0 absolute sm:static text-center w-[80%]`}
      >
        {/* //! Home */}
        <NavLink to="/">
        <motion.div className=" hover:text-white py-1 sm:hover:bg-transparent sm:hover:text-pink-300 w-[100%] rounded-md hover:bg-purple-700">
          Home
        </motion.div>
        </NavLink>
        {/* //! Portfolio */}
        <NavLink to="/portfolio">
        <motion.div className=" hover:text-white py-1 w-[100%] sm:hover:bg-transparent rounded-md hover:bg-purple-700 sm:hover:text-pink-300">
          Portfolio
        </motion.div>
        </NavLink>
        {/* //! contact */}
        <NavLink to="/contact">
        <motion.div className=" hover:text-white py-1 w-[100%] rounded-md hover:bg-purple-700 sm:hover:bg-transparent sm:hover:text-pink-300">
          Contact
        </motion.div>
        </NavLink>
        {/* //! About */}
        
        <NavLink to="/about">
        <motion.div className=" hover:text-white py-1 w-[100%] rounded-md sm:hover:bg-transparent hover:bg-purple-700 sm:hover:text-pink-300">
          About
        </motion.div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
