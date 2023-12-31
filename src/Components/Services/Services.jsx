import React from 'react'
import service from '../Images/service.jpg'

function Services() {
    return (
        <div className="w-full  text-white "

        >

            <div class=" w-full bg-[#7da2ea] pb-10 "
                style={{
                    background: "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)"
                }}
            >
                <h2 class="text-center text-white text-4xl font-bold py-28">Our Services</h2>

                <div className="flex justify-center md:gap-48  gap-5 w-full  "  >
                    <div className="pt-16 ">
                        <p className="font-bold text-3xl md:text-4xl ">What we <br /> Offer ?</p>
                    </div>
                    <div className="  w-[40%] pt-16 ">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur eum error
                            recusandae vitae assumenda deserunt at, doloribus delectus sed praesentium sunt earum eius
                            quam culpa. Totam voluptatem expedita error.</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#A0E5EF]  py-10'
                
            >
                
                <div className="flex justify-center gap-10  flex-wrap md:flex-nowrap pb-12"  >
                    <div className="border w-[40%] md:w-[25%] lg:w-[20%] bg-[#edf5f7] text-black rounded-3xl py-5 ">
                        <div className="w-9 mx-auto text-5xl"> <ion-icon name="desktop-outline"></ion-icon></div>
                        <p className="text-center text-[#4C4C95] mt-3">Service Name</p>
                        <p className="text-center text-sm text-black mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sed quo temporibus </p>
                    </div>
                    <div className="border  w-[40%]  md:w-[25%] lg:w-[20%] bg-[#edf5f7] text-black rounded-3xl py-5">
                        <div className="w-9 mx-auto text-5xl"> <ion-icon name="desktop-outline"></ion-icon></div>
                        <p className="text-center text-[#4C4C95] mt-3">Service Name</p>
                        <p className="text-center text-sm text-black mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sed quo temporibus </p>
                    </div>
                    <div className="border w-[40%]  md:w-[25%] lg:w-[20%] bg-[#edf5f7] text-black rounded-3xl py-5">
                        <div className="w-9 mx-auto text-5xl"> <ion-icon name="desktop-outline"></ion-icon></div>
                        <p className="text-center text-[#4C4C95] mt-3">Service Name</p>
                        <p className="text-center text-sm text-black mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sed quo temporibus </p>
                    </div>

                </div>
            </div>


            <div class="flex mt-10 justify-center gap-48 py-24 w-[85%] mx-auto  rounded-3xl shadow-xl"
                style={{
                    background: "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)"
                }}
            >


                <div class="w-[30%] ">
                    <p class="uppercase text-3xl ] font-bold">Why Should you <br /> chose us ?</p>
                    <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime exercitationem quaerat,
                        omnis obcaecati repellat nemo neque reprehenderit ipsam, quibusdam quas fugiat a
                        vitae qui nihil commodi. Aliquam, at ab?</p>
                </div>
                <div class="w-[30%]">
                    <img src={service} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Services