import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../Images/logo.png'
import {  motion } from 'framer-motion'


function Header() {

    const [topSpace, setTopSpace] = useState("top-[-1000%]")
    const [icon, setIcon] = useState("menu-outline")
    function handleIcon() {

        if (icon === "menu-outline") {

            setIcon("close-outline")
            setTopSpace("top-[15%] left-[25%] bg-[#cb8be4] pb-2 w-[35%]")
        }
        else {
            setTopSpace("top-[-1000%]")
            setIcon("menu-outline")
        }
    }


    return (
        <div className="md:flex    md:flex-row  flex justify-between    sm:justify-around text-white md:w-[100%] mx-auto w-[100%] 
        items-center py-5 h-auto  px-6 sm:px-0"
            style={{
                // borderBottom: "1px solid gray",
                boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.1)",
                background: "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)"
            }}
        >
            <div className="w-10  ">
                <img src={logo} alt="" className="bg-cover bg-center" />
            </div>
            <div className="sm:hidden mr-5 text-3xl"
                onClick={handleIcon}
            >
                <ion-icon name={icon} className=" cursor-pointer burger "></ion-icon>
            </div>
            <div className={`${topSpace}  left-[5%] px-5  mt-4  sm:mt-0 absolute sm:static   `}>
                <ul className=" flex sm:flex-row flex-col sm:items-center sm:gap-16 gap-3 :sm-center">
                    <motion.li
                        whileHover={{
                            borderBottom: "2px solid green",
                            transition: { duration: 2 }
                        }}
                        className={({ isActive }) => `hover:text-[#2675b6] ${isActive ? "text-blue" : "text-black"}`}
                    >
                        <NavLink to="/">Home</NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            borderBottom: "2px solid green",
                            transition: { duration: 2 }
                        }}
                        className={({ isActive }) => `hover:text-[#2675b6] ${isActive ? "text-blue" : "text-black"}`}>
                        <NavLink to="/services">
                            Services
                        </NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            borderBottom: "2px solid green",
                            transition: { duration: 2 }
                        }}
                        className={({ isActive }) => `hover:text-[#2675b6] ${isActive ? "text-blue" : "text-black"}`}>
                        <NavLink to="/portfolio">
                            Portfolio
                        </NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            borderBottom: "2px solid green",
                            transition: { duration: 2 }
                        }}
                        className={({ isActive }) => `hover:text-[#2675b6] ${isActive ? "text-blue" : "text-black"}`}>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            borderBottom: "2px solid green",
                            transition: { duration: 2 }
                        }}
                        className={({ isActive }) => `hover:text-[#2675b6] ${isActive ? "text-blue" : "text-black"}`}>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </motion.li>

                </ul>
            </div>

        </div>
    )
}

export default Header
