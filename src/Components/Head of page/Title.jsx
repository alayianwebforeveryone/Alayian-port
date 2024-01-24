import React from 'react'

function Title({
      className = '  h-[300px] w-full bg-[#7da2ea]  pt-16 sm:pt-0 bg-gradient-to-r from-purple-900 to-blue-400',
      text = '',
      ...Props
}) {
    return (
        <div className={`${className} `}>
            <h1 className='text-center text-white md:text-5xl text-3xl font-bold py-28' {...Props}></h1>
        </div>
    )
}

export default Title
