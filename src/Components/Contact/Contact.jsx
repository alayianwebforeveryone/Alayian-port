import Title from "../Head of page/Title";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Title>Contact us</Title>
      <div className="flex md:flex-row flex-col  justify-center md:gap-16 gap-8 items-center  py-9 bg-[#a4e1f7]">
        <div className="w-[70%] md:w-[20%] bg-[#faf5fb] hover:border-2  border-purple-500  py-3 shadow-xl rounded-xl">
          <div className="w-6 mx-auto text-3xl">
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <p className="text-center  mt-3">+92 348 8759075</p>
          <p className="text-center text-sm  mt-2">Contact me any time </p>
        </div>
        {/* Phone */}
        <div className="w-[70%] md:w-[20%] hover:border-2 border-purple-500  bg-[#faf5fb]  py-3 shadow-xl rounded-xl">
          <div className="w-6 mx-auto text-3xl">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <p className="text-center  mt-3">alayiansaeed@gamil.com</p>
          <p className="text-center text-sm  mt-2">Contact me any time! </p>
        </div>
        {/* Email */}
        <div className="w-[70%] md:w-[20%] hover:border-2 border-purple-500  bg-[#faf5fb]  py-3 shadow-xl rounded-xl">
          <div className="w-6 mx-auto text-3xl">
            <ion-icon name="logo-linkedin" className=""></ion-icon>
          </div>
          <p className="text-center  mt-3"></p>
          <p className="text-center text-sm  mt-5 border w-[50%] mx-auto rounded-xl py-2 hover:bg-slate-500 hover:text-white ">
            <Link to="https://www.linkedin.com/in/alayian-saeed-34287a219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Linked profile
            </Link>
          </p>
        </div>
        {/* Location */}
      </div>
      <div className="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0 bg-[#220e48]">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight hover:underline">
                  Get in touch
                </h1>
                <p className="w-[90%] mt-10">
                  I'm passionate about crafting digital experiences that leave a
                  lasting impact. Whether you're looking to bring your ideas to
                  life, enhance your online presence, or optimize existing web
                  solutions, I'm here to help. Let's discuss how we can
                  collaborate to turn your vision into a seamlessly functional
                  and visually stunning website. Reach out, and let's embark on
                  a journey to elevate your online presence together."
                </p>
              </div>

              <form className="p-6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <label for="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="tel" className="hidden">
                    Message
                  </label>
                  <textarea
                    type=""
                    name="tel"
                    id="tel"
                    placeholder="Enter Message"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
