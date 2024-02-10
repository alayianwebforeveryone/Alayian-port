import React from "react";
import bannImg from "../../Images/bgbanner.png";
import { motion } from "framer-motion";
import CustomButton from "../Button";

function Home() {
  return (
    <>
      <div
        className=" md:h-screen h-[700px] pb-10 md:pb-0 pt-24 text-4xl font-bold flex md:flex-row flex-col md:justify-around gap-8 md:gap-20 justify-center items-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)",
        }}
      >
        <div className="text-left pt-72 sm:pt-0 ">
          <p className="text-white text-3xl font-bold w-26 ml-5 md:ml-20">
            Innovate, Create,
            <br /> CAPTIVATE:
            <p className=" text-white ml-2  text-xl font-bold">
            
              <br /> Journey into Web Development <br />
              with
              <span className="font-bold text-3xl md:text-3xl   text-[#833ec0] md:text-[#66ced5] px-2">
                Alayian Saeed
              </span>
            </p>
          </p>
        </div>
        <div className="md:mt-48">
          <img
            src={bannImg}
            alt="banner img"
            className="md:h-[900px] md:w-[800px] h-[500px] w-[400px] "
          />
        </div>
      </div>

      <div className="my-20 bg-[#eccff3] py-10">
        <p
          className="uppercase w-90
                 text-center mx-auto text-3xl font-bold text-[#101434] "
        >
          Ready to Boost your Business ?
        </p>
        <p className="w-[70%] md:w-[50%] my-10  text-center mx-auto">
          In a rapidly evolving digital landscape, the key to success lies in
          staying ahead. Our tailored solutions are designed to propel your
          business to new heights, leveraging cutting-edge strategies and
          innovative technologies. Whether you're aiming to enhance your online
          presence, optimize operations, or reach a broader audience, we're here
          to navigate the digital realm with you.
        </p>
        <motion.div
          whileHover={{ border: "2px solid purple" }}
          class=" text-sm rounded-2xl py-2 px-2  border md:rounded-3xl  border-2xl  md:w-[60%] w-[80%] flex justify-between mx-auto bg-[#101434]"
        >
          <input
            type="text"
            placeholder={"Enter your Emial Address"}
            className="w-[70%] rounded-3xl bg-transparent outline-none text-white   md:text-lg "
          />
          <motion.button
            whileHover={{ border: "2px solid gray" }}
            className="md:px-4 md:py-3 bg-[#CECDDF] md:rounded-3xl rounded-xl"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
