import React from 'react'

function Footer() {
    return (


        <div className=" mt-14 bg-[#0d1130]"
        style={{
            background: "linear-gradient(90deg, rgba(93,176,219,1) 17%, rgba(179,93,219,1) 100%)"}}  
        >
            <div className='flex justify-center md:gap-20 py-10 md:flex-row flex-col items-center gap-10 '>
                <div className="md:w-[30%] w-[60%]">
                    <p className="text-3xl  font-bold mb-5">Logo Name</p>
                    <p className="text-justify text-white leading-6">
                    Cultivating Innovation, Building Excellence. Welcome to a digital realm where creativity meets functionality. We don't just create websites; we craft digital experiences that resonate. Elevate your online presence with us – where every click tells a story, and every pixel paints a masterpiece.
                    </p>
                </div>
                <div className="md:w-[10%]">
                    <p className="text-xl ">About</p>
                    <div className='text-white mt-5'>
                        <ul>
                            <li className="text-sm leading-6"><a href="#">About</a></li>
                            <li className="text-sm leading-6"><a href="#">Our team</a></li>
                            <li className="text-sm leading-6"><a href="#">Feature</a></li>
                            <li className="text-sm leading-6"><a href="#">Career</a></li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-[25%] w-[60%]">
                    <p className="text-xl ">Contact</p>
                    <p className='text-white leading-6 mt-5'>alayiansaeed@gmail.com <br /> +92 3488759075 <br />
                        23 Main Street <br />  Cityville, State Postal Code:
                        12345 Country: United States</p>
                </div>

            </div>
            <div className="text-black bg-[#A0E5EF] py-2">
                <p className="text-center">All right reserved &copy; till 2024 </p>
            </div>
        </div>
    )
}

export default Footer
