import React, { useEffect } from "react"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Home from "../components/Home"
import Projects from "../components/Projects"
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/navbar/Navbar"

declare global {
    interface Window {
        opera:any;
    }
}

const OneLongPage = ()=>{
    const isInFbApp = ()=> {
        var ua = navigator.userAgent || navigator.vendor || window.opera;
        return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    }
    useEffect(() => {
        AOS.init({ once: true,
            duration: 400,
            disable: isInFbApp(),
            easing: 'ease',
          });
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