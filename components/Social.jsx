import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
const Social = ({name}) => {
  return (
    <div className="container md:px-12 px-2 m-auto  flex flex-col">{name}
      <div className="w-full flex gap-4 flex-wrap justify-between px-8 pb-8 mb-4">
        <div className="flex items-center"><BsLinkedin className='text-xl text-[#73F8AB]' /><a target="_blank" rel="nofollow" href='https://linkedin.com/in/altamash9648' className="ml-1 underline text-gray-300 hover:text-[#73F8AB]">@altamash9648</a></div>
        <div className="flex items-center"><AiFillInstagram className='text-xl text-[#73F8AB]' /><a target="_blank" rel="nofollow" href='https://instagram.com/altamash3189' className="ml-1 underline text-gray-300 hover:text-[#73F8AB]">@altamash3189</a></div>
      </div>
    </div>
  )
}

export default Social