import Head from 'next/head'
import Navbar from 'components/Navbar'
import { MdKeyboardArrowUp } from 'react-icons/md'
import LandingPage from 'components/LandingPage'
import AboutSection from 'components/AboutSection'
import Skills from 'components/Skills'
import ContactSection from 'components/ContactSection'
import Social from 'components/Social'

export default function Home({ name }) {
  return (
    <>
      <Head>
        <title>Altamash Ahmad | Web Developer | Personal & Online Projects</title>
        <meta name="description" content="Web Developer with expertise in creating responsive, user-friendly designs for personal, online projects. Seeking internships. Portfolio available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2D2F33" ></meta>
        <link rel="canonical" href="https://altamash.vercel.app/" />
        <link rel="alternate" href="https://altamash.vercel.app/" hreflang="en-in" />
        {/* facebook open graph  */}
        <meta property="og:title" content="Altamash Ahmad - Web developer" />
        <meta property="og:site_name" content="Altamash Ahmad" />
        <meta property="og:url" content="https://altamash.vercel.app" />
        <meta property="og:description" content="Web Developer, I have worked on personal, online projects. Check out my portfolio to see what I can do for you. Currently seeking internship opportunities." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://altamash.vercel.app/images/usman.png" />
      </Head>
      <Navbar />
      <LandingPage />
      <AboutSection />
      <Skills />
      {/* <Projects /> */}
      <ContactSection />
      <Social />
      <a href="#" className="w-6 h-6 bg-[#73F8AB] rounded-full border hover:border-[#73F8AB] hover:text-[#73F8AB] fixed bottom-3 right-3 flex justify-center items-center hover:bg-transparent cursor-pointer"><MdKeyboardArrowUp className='text-3xl' /></a>
    </>
  )
}
