import React from 'react'
import profile from '../../Images/profile.png'
import {motion} from 'framer-motion'
import Button from '../Button'

function About() {
    return (
        <>
            <div class="h-[300px] w-full  pt-14 sm:pt-0 "
                style={{
                    background: "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)"
                }}
            >
                <h2 class="text-center text-white md:text-5xl text-3xl  font-bold py-28">About us</h2>
            </div>

            <div className=" w-full  flex md:flex-row flex-col justify-center md:gap-8  gap-6 pt-20 items:center ">


                <div className="md:w-[22%] w-[70%]  mx-auto">
                    <div className=" ">
                        <img src={profile} alt="alt text" className="h-[300px] w-[500px]" />
                    </div>
                    <h3 className="text-center mt-7 text-3xl font-bold ">Alayian Saeed</h3>
                    <h4 className="text-center text-xl mt-2">Web Developer</h4>

                </div>

                <div className="   md:w-[30%] w-[70%] flex  text-center flex-col mt-20 mx-auto ">
                    <p className="text-2xl font-bold">About us</p>
                    <p className="text-sm my-3 text-justify" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                        consectetur saepe vero voluptates accusamus perspiciatis, dolorem sint
                        qui, porro quia rerum ad vel nemo
                        at quasi inventore rem praesentium n
                        ostrum maiores quam itaque impedit. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ipsam quod doloribus
                        esse facere corrupti possimus tempora aliquid asperiores aperiam uos!</p>
                     <Button>Know more</Button>
                </div>
            </div>

        </>


    )
}

export default About
