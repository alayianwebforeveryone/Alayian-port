import React from 'react'
import { Link } from 'react-router-dom'
import portOne from '../../Images/portfolio1.png'
import portTwo from '../../Images/portfolio2.png'
import portThree from '../../Images/Portfolio3.png'

function Portfolio() {
    return (
        <>
            <div class="h-[300px] w-full bg-[#7da2ea] "
                style={{
                    background: "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)"
                }}
            >
                <h2 class="text-center text-white text-5xl font-bold py-28">What we have done</h2>
            </div>
            <div class="mt-10">

                <Link to="https://alayianwebforeveryone.github.io/Topwritingservices/">
                    <div className="w-[70%] shadow-xl rounded-3xl border mx-auto mt-10 cursor-pointer bg-purple-600" >
                        <p className="py-3 text-center text-white font-bold">Top Writing Services</p>

                        <img src={portOne} alt="" className="rounded-3xl" />
                    </div>
                </Link>
                <Link to="http://aiwriter.services/">
                    <div className="w-[70%] shadow-xl rounded-3xl border mx-auto mt-10 cursor-pointer bg-[#6b49f1]" >
                        <p className="py-3 text-center text-white font-bold">Ai Essay Writer</p>

                        <img src={portTwo} alt="" className="rounded-3xl" />
                    </div>
                </Link>
                <Link to="https://alayianwebforeveryone.github.io/portfolio/">
                    <div className="w-[70%] shadow-xl rounded-3xl border mx-auto mt-10 cursor-pointer bg-[#ea6cee]" >
                        <p className="py-3 text-center text-white font-bold">S Software Solution</p>

                        <img src={portThree} alt="" className="rounded-3xl" />
                    </div>
                </Link>



            </div>
        </>

    )
}

export default Portfolio
