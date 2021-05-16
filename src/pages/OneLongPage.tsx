import React, { useEffect } from "react"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Home from "../components/Home"
import Projects from "../components/Projects"
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/Navbar"


const OneLongPage = ()=>{
    useEffect(() => {
        AOS.init({ once: true,
            duration: 300,
            easing: 'ease-out-quart',
          disable: window.innerWidth < 960});
      }, []);
    return(
        <>
        <NavBar />
        <Home/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        </>
    )
}

export default OneLongPage