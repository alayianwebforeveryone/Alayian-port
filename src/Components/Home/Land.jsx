import React from 'react'
import bannImg from '../../Images/Bannerimg.jpg'

function Home() {


    return (
        <>
            <div className=" md:h-screen h-[700px] pb-10 md:pb-0 pt-24 text-4xl font-bold flex md:flex-row flex-col md:justify-around gap-20 justify-center items-center"
                style={{
                    background: "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)"
                }}
            >
                <div className='text-left '>
                    <p className="text-white leading-10 w-26 ml-5 md:ml-20">Code, <br /> Create,<br /> Conquer:
                        <p className=" text-white ml-2  text-xl font-bold"> <br /> Journey into Web Development <br />
                            with Alayian Saeed
                        </p>
                    </p>
                    <button
                        className="border text-lg text-white px-4 py-1 rounded-2xl bg-[hsl(294,72%,51%)] hover:text-black hover:bg-white  font-bold ml-7 mt-10 md:ml-20">See
                        More
                    </button>
                </div>
                <div>
                    <img src={bannImg} alt="" className='md:h-[300px] md:w-[200xp] h-[200px] w-[300px] ' />
                </div>

            </div>
            <div class="my-20 bg-[#eccff3] py-10"

            >
                <p class="uppercase w-80 text-center mx-auto text-3xl font-bold text-[#101434] ">Ready to Boost your Business ?
                </p>
                <p class="w-[70%] md:w-[50%] my-10  text-center mx-auto">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quibusdam iusto voluptatem,
                    necessitatibus voluptate, repellat natus laudantium sint praesentium non ratione temporibus
                    eligendi veniam eaque consequatur! Libero sunt illo nulla necessitatibus!</p>
                <div class="py-2 px-2 border rounded-3xl w-[60%] flex justify-between mx-auto bg-[#101434]">
                    <input type="text" placeholder={"Enter your Emial Address"}
                        class="w-[70%] rounded-3xl bg-transparent outline-none text-white   text-lg " />
                    <button class="px-4 py-3 bg-[#CECDDF] rounded-3xl">Get Started</button>
                </div>
            </div>
        </>


    )
}

export default Home
