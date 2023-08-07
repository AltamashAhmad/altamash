import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { VscDebugBreakpointFunction } from 'react-icons/vsc'
import Skill from './Skill'
// 73F8AB
const Skills = () => {
  return (
    <div id='skills' className="container md:px-12 px-2 m-auto flex flex-col scroll-m-16">
      <h2 className="font-semibold text-center text-2xl text-[#73F8AB] md:mb-4 my-4 ">Skills</h2>
      <div className="w-full flex gap-2 flex-wrap justify-between p-4 mb-4">
        <Skill title={"HTML"} percent={70} color={'#f06529'}/>
        <Skill title={"CSS"} percent={50} color={'#264de4'}/>
        <Skill title={"Javascript"} percent={40} color={'#f0db4f'}/>
        {/* <Skill title={"NodeJs"} percent={40} color={'#68a063'}/> */}
        <Skill title={"ReactJs"} percent={60} color={'#61dbfb'}/>
        {/* <Skill title={"TailwindCSS"} percent={60} color={'#36B7F0'}/> */}
        <Skill title={"CPP"} percent={70} color={'#044F88'}/>
        {/* <Skill title={"Github"} percent={55} color={'#8F00FF'}/> */}
        <Skill title={"Data Structures"} percent={60} color={'#8F00FF'}/>
        {/* <Skill title={"NextJs"} percent={55} color={'#FF69B4'}/> */}
        <Skill title={"Algorithm"} percent={50} color={'#FF69B4'}/>
      </div>
    </div>
  )
}

export default Skills