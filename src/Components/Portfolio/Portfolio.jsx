import React from "react";
import { Link } from "react-router-dom";
import portOne from "../../Images/portfolio3.png";
import portTwo from "../../Images/portfolio2.png";
import portThree from "../../Images/swmsport.png";
import { motion } from "framer-motion";
import Title from "../Head of page/Title";
import CustomButton from "../Button";

function Portfolio() {
  return (
    <>
      <Title>What we have done ?</Title>

      <div className=" border flex px-8 md:px-0  justify-center md:gap-12 ">
        {/* //! first portfolio */}
        <Link className="w-[30%] " to="https://ubiquitous-system-git-edit-colroute-saifqamar.vercel.app/">
          <div className="  hover:border-2 border-purple-600 shadow-xl my-8 rounded-xl lg:rounded-2xl   mt-10 cursor-pointer bg-[#440d45]">
            <p className="py-3 text-center text-white font-bold">
              Smart Waste Management System
            </p>
            <img
              src={portThree}
              alt=""
              className="rounded-xl w-full h-52 lg:rounded-3xl "
            />
          </div>
        </Link>
        {/*  //! Second portfolio */}
        <Link className="w-[30%]" to="http://aiwriter.services/">
          <div className=" hover:border-2 border-purple-600 shadow-xl rounded-xl lg:rounded-2xl border  mt-10 cursor-pointer bg-[#6b49f1]">
            <p className="py-3 text-center text-white font-bold">
              Ai Essay Writer
            </p>

            <img src={portTwo} alt="" className="rounded-xl w-full h-52 lg:rounded-3xl" />
          </div>
        </Link>
        {/* //! Third portfolio */}

        <Link className="w-[30%]" to="https://alayianwebforeveryone.github.io/portfolio/">
          <div className=" hover:border-2 border-purple-600 shadow-xl rounded-xl lg:rounded-2xl border  mt-10 cursor-pointer bg-purple-600">
            <p className="py-3 text-center text-white font-bold">
              S Software Solution
            </p>
            <img src={portOne} alt="" className="rounded-xl w-full h-52 lg:rounded-3xl" />
          </div>
        </Link>
      </div>

      <button className="border bg-purple-700  my-8 px-6 rounded-xl text-white hover:bg-slate-400 py-2 flex mx-auto" >See all</button >
    </>
  );
}

export default Portfolio;
