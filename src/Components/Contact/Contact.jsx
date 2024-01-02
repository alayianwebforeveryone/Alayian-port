import React from 'react'

function Contact() {
    return (
        <div>
            <div class="h-[300px] w-full bg-[#7da2ea] "
             style={{
                background: "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)"
            }}
            >
                <h2 class="text-center text-white text-4xl font-bold py-28">Contact us</h2>
            </div>
            <div class="flex md:flex-row flex-col  justify-center md:gap-16 gap-8 items-center  py-9 bg-[#a4e1f7]">
                <div class="w-[70%] md:w-[20%] bg-[#faf5fb]  py-3 shadow-xl rounded-xl">
                    <div class="w-9 mx-auto text-5xl"> <ion-icon name="desktop-outline"></ion-icon></div>
                    <p class="text-center  mt-3">+92 346 8745333</p>
                    <p class="text-center text-sm  mt-5">Monday to Friday 9:00 am to 6:pm </p>
                </div>
                <div class="w-[70%] md:w-[20%] bg-[#faf5fb]  py-3 shadow-xl rounded-xl">
                    <div class="w-9 mx-auto text-5xl"> <ion-icon name="desktop-outline"></ion-icon></div>
                    <p class="text-center  mt-3">alayiansaeed@gamil.com</p>
                    <p class="text-center text-sm  mt-5">Contact me any time! </p>
                </div>
                <div class="w-[70%] md:w-[20%] bg-[#faf5fb]  py-3 shadow-xl rounded-xl">
                    <div class="w-9 mx-auto text-5xl"> <ion-icon name="desktop-outline"></ion-icon></div>
                    <p class="text-center  mt-3">Location</p>
                    <p class="text-center text-sm  mt-5">  23 Main Street
                        Cityville, State
                        Postal Code: 12345
                        Country: United States</p>
                </div>
            </div>
            <div class="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0 bg-[#220e48]">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="mt-8 overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>
                                <p class="w-[90%] mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Saepe nostrum non necessitatibus, soluta ab modi corporis
                                    exercitationem similique beatae qui! Lorem ipsum dolor sit, amet
                                    consectetur adipisicing elit. A error soluta ut ipsa, necessitatibus,
                                    iure labore, assumenda sapiente illum distinctio debitis facilis at
                                    deserunt magnam officia. Sed, harum beatae. Tempore!</p>

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
