import React from 'react'
import Skill from './Skill'
const Skills = () => {
  return (
    <div id='skills' className="container md:px-12 px-2 m-auto flex flex-col scroll-m-16">
      <h2 className="font-semibold text-center text-2xl text-[#73F8AB] md:mb-4 my-4 ">Skills</h2>
      <div className="w-full flex gap-2 flex-wrap justify-between p-4 mb-4">
        <Skill title={"HTML"} percent={70} color={'#f06529'}/>
        <Skill title={"CSS"} percent={50} color={'#264de4'}/>
        <Skill title={"Javascript"} percent={40} color={'#f0db4f'}/>
        <Skill title={"ReactJs"} percent={60} color={'#61dbfb'}/>
        <Skill title={"CPP"} percent={70} color={'#044F88'}/>
        <Skill title={"Data Structures"} percent={60} color={'#8F00FF'}/>
        <Skill title={"Algorithm"} percent={50} color={'#FF69B4'}/>
      </div>
    </div>
  )
}

export default Skills