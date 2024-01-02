import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../Images/logo.png'

function Header() {
    return (
        <div className="md:flex    md:flex-row  flex justify-between md:justify-around text-white md:w-[100%] mx-auto w-[100%] 
        items-center py-5 h-auto  "
            style={{
                // borderBottom: "1px solid gray",
                boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.1)",
                background: "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)"
            }}
        >
            <div className="w-10  ">
                <img src={logo} alt="" className="bg-cover bg-center" />
            </div>
            <div className="md:hidden">
                <ion-icon name="menu-outline" className="text-3xl cursor-pointer"></ion-icon>
            </div>
            <div className="mt-4  md:mt-0 absolute md:static  top-[-100%]   left-[0%] px-5  ">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-16 gap-3 md:justify-center">
                    <li className={({ isActive }) => `hover:text-[#2675b6] ${isActive ? "text-blue" : "text-black"}`}>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className={({ isActive }) => `hover:text-[#2675b6] ${isActive ? "text-blue" : "text-black"}`}>
                        <NavLink to="/services">
                            Services
                        </NavLink>
                    </li>
                    <li className={({ isActive }) => `hover:text-[#2675b6] ${isActive ? "text-blue" : "text-black"}`}>
                        <NavLink to="/portfolio">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className={({ isActive }) => `hover:text-[#2675b6] ${isActive ? "text-blue" : "text-black"}`}>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li className={({ isActive }) => `hover:text-[#2675b6] ${isActive ? "text-blue" : "text-black"}`}>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Header
