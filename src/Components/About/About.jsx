import React from "react";
import profile from "../../Images/profile.png";
import resumeImage from "../../Images/resume.png";
import close from "../../Images/close.svg";

import CustomButton from "../Button";
import Title from "../Head of page/Title";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function About() {
//   ! MODAL function

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Title>About us </Title>

      <div className=" w-full  flex md:flex-row flex-col justify-center md:gap-8  gap-6 pt-20 items:center ">
        <div className="md:w-[22%] w-[70%]  mx-auto">
          <div className=" ">
            <img src={profile} alt="alt text" className="h-[300px] w-[500px]" />
          </div>
          <h3 className="text-center mt-7 text-3xl font-bold ">
            Alayian Saeed
          </h3>
          <h4 className="text-center text-xl mt-2">Web Developer</h4>
        </div>

        <div className="   md:w-[30%] w-[70%] flex  text-center flex-col mt-20 mx-auto ">
          <p className="text-2xl font-bold">About us</p>
          <p className="text-sm my-3 text-justify">
            "As a passionate software engineer currently immersed in the dynamic
            field of web development, I thrive on transforming ideas into
            functional and visually appealing digital solutions. With a keen eye
            for detail and a commitment to staying at the forefront of
            technology, I bring a wealth of expertise to every project. My
            journey in the world of coding has equipped me with a diverse skill
            set, allowing me to navigate the complexities of web development
            seamlessly.
          </p>
          <CustomButton onClick={openModal}>Know more</CustomButton>
  {/* //* -----------------Resume------------------------------ */}


          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10 " onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/95" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >

                    {/*//* Modal contect */}
                    
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-purple-300 p-2  align-middle shadow-xl transition-all">
                    <div className="absolute right-3">
                        <CustomButton
                          className="h-auto w-6"
                          onClick={closeModal}
                        >
                      <img src= {close} alt="close" className="" />   {/*   close btn */}
                        </CustomButton>
                      </div>
                      <Dialog.Title
                        as="h3"
                        className="text-3xl  font-bold leading-6 text-gray-900"
                      >
                        Resume
                      </Dialog.Title>
                      <div className="mt-2 w-full">
                       <img src= {resumeImage} alt="resume" className=""/>  {/* //!resumeImage is here */}
                      </div>

                     
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  );
}

export default About;
