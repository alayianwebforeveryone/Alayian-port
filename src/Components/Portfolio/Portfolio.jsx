import React from 'react'
import { Link } from 'react-router-dom'
import portOne from '../../Images/portfolio1.png'
import portTwo from '../../Images/portfolio2.png'
import portThree from '../../Images/Portfolio3.png'
import { motion } from 'framer-motion'
import Title from '../Head of page/Title'

function Portfolio() {
    return (
        <>
           <Title >What we have done ?</Title>
                
            <div>
                {/* //! first portfolio */}
                <Link to="https://alayianwebforeveryone.github.io/Topwritingservices/">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-[50%] shadow-xl rounded-xl lg:rounded-3xl border mx-auto mt-10 cursor-pointer bg-purple-600" >
                        <p className="py-3 text-center text-white font-bold">Top Writing Services</p>
                        <img src={portOne} alt="" className="rounded-xl lg:rounded-3xl" />
                    </motion.div>
                </Link>
                   {/*  //! Second portfolio */}
                <Link to="http://aiwriter.services/">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-[50%] shadow-xl rounded-xl lg:rounded-3xl border mx-auto mt-10 cursor-pointer bg-[#6b49f1]" >
                        <p className="py-3 text-center text-white font-bold">Ai Essay Writer</p>

                        <img src={portTwo} alt="" className="rounded-xl lg:rounded-3xl" />
                    </motion.div>
                </Link>
                    {/* //! Third portfolio */}
                <Link to="https://alayianwebforeveryone.github.io/portfolio/">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-[50%] shadow-xl rounded-xl lg:rounded-3xl border mx-auto mt-10 cursor-pointer bg-[#440d45]" >
                        <p className="py-3 text-center text-white font-bold">S Software Solution</p>

                        <img src={portThree} alt="" className="rounded-xl lg:rounded-3xl " />
                    </motion.div>
                </Link>



            </div>
        </>

    )
}

export default Portfolio
