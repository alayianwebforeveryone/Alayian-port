import {motion} from 'framer-motion'

function CustomButton({
    type= "text",
    className= "py-2 px-2 mx-auto rounded-2xl  hover:bg-purple-100 hover:text-black hover:border hover:border-purple-700 bg-[#c465d5]   mt-9 text-white",
    
    ...props
}) {
    return (
        <motion.div
        whileHover={{scale: 1.1}}
        className='md:w-[30%]  mx-auto'>
       <button type={type} className={`${className} font-light text-lg  mx-auto`} {...props}></button>
        </motion.div>
    )
}

export default CustomButton
