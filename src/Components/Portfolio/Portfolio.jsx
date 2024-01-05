import React from 'react'
import { Link } from 'react-router-dom'
import portOne from '../../Images/portfolio1.png'
import portTwo from '../../Images/portfolio2.png'
import portThree from '../../Images/Portfolio3.png'
import { motion } from 'framer-motion'

function Portfolio() {
    return (
        <>
            <div className="h-[300px] w-full bg-[#7da2ea]  pt-14 sm:pt-0 "
                style={{
                    background: "linear-gradient(90deg, rgba(113,8,125,1) 0%, rgba(93,176,219,1) 56%)"
                }}
            >
                <h2 className="text-center text-white md:text-5xl text-3xl font-bold py-28">What we have done</h2>
            </div>
            <div>
                <Link to="https://alayianwebforeveryone.github.io/Topwritingservices/">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-[50%] shadow-xl rounded-3xl border mx-auto mt-10 cursor-pointer bg-purple-600" >
                        <p className="py-3 text-center text-white font-bold">Top Writing Services</p>
                        <img src={portOne} alt="" className="rounded-3xl" />
                    </motion.div>
                </Link>

                <Link to="http://aiwriter.services/">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-[50%] shadow-xl rounded-3xl border mx-auto mt-10 cursor-pointer bg-[#6b49f1]" >
                        <p className="py-3 text-center text-white font-bold">Ai Essay Writer</p>

                        <img src={portTwo} alt="" className="rounded-3xl" />
                    </motion.div>
                </Link>
                <Link to="https://alayianwebforeveryone.github.io/portfolio/">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-[50%] shadow-xl rounded-3xl border mx-auto mt-10 cursor-pointer bg-[#440d45]" >
                        <p className="py-3 text-center text-white font-bold">S Software Solution</p>

                        <img src={portThree} alt="" className="rounded-3xl " />
                    </motion.div>
                </Link>



            </div>
        </>

    )
}

export default Portfolio
