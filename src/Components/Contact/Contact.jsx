import React from 'react'
import Title from '../Head of page/Title'
import { Link } from 'react-router-dom'
import linkedin from '../../Images/portfolio2.png'

function Contact() {
    return (
        <div>
            <Title>Contact us</Title>
            <div class="flex md:flex-row flex-col  justify-center md:gap-16 gap-8 items-center  py-9 bg-[#a4e1f7]">
                <div class="w-[70%] md:w-[20%] bg-[#faf5fb]  py-3 shadow-xl rounded-xl">
                    <div class="w-9 mx-auto text-5xl"> 
                    <image src={linkedin} alt = "phone-logo"></image>
                    </div>
                    <p class="text-center  mt-3">+92 348 8759075</p>
                    <p class="text-center text-sm  mt-2">Contact me any time </p>
                </div> 
                {/* Phone */}
                <div class="w-[70%] md:w-[20%] bg-[#faf5fb]  py-3 shadow-xl rounded-xl">
                    <div class="w-9 mx-auto text-5xl"> <ion-icon name="desktop-outline"></ion-icon></div>
                    <p class="text-center  mt-3">alayiansaeed@gamil.com</p>
                    <p class="text-center text-sm  mt-2">Contact me any time! </p>
                </div>
                  {/* Email */}
                <div class="w-[70%] md:w-[20%] bg-[#faf5fb]  py-3 shadow-xl rounded-xl">
                    <div class="w-9 mx-auto text-5xl"> <ion-icon name="desktop-outline"></ion-icon></div>
                    <p class="text-center  mt-3"></p>
                    <p class="text-center text-sm  mt-5 border w-[50%] mx-auto rounded-xl py-2 hover:bg-slate-500 hover:text-white "> 
                    <Link to ="https://www.linkedin.com/in/alayian-saeed-34287a219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" >
                    Linked profile
                    </Link>
                      
                     </p>
                </div>
                  {/* Location */}
            </div>
            <div class="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0 bg-[#220e48]">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="mt-8 overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight hover:underline">
                                    Get in touch
                                </h1>
                                <p class="w-[90%] mt-10">
                                I'm passionate about crafting digital experiences that leave a lasting impact. Whether you're looking to bring your ideas to life, enhance your online presence, or optimize existing web solutions, I'm here to help. Let's discuss how we can collaborate to turn your vision into a seamlessly functional and visually stunning website. Reach out, and let's embark on a journey to elevate your online presence together."
                                    </p>

                            </div>

                            <form class="p-6 flex flex-col justify-center">
                                <div class="flex flex-col">
                                    <label for="name" class="hidden">Full Name</label>
                                    <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="email" class="hidden">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="tel" class="hidden">Message</label>
                                    <textarea type="" name="tel" id="tel" placeholder="Enter Message" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                                    </textarea>
                                </div>

                                <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
