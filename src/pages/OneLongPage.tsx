import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/navbar/Navbar"
import AboutMe from "../components/subpages/AboutMe"
import Contact from "../components/subpages/Contact"
import Home from "../components/subpages/Home"
import Projects from "../components/subpages/Projects"

declare global {
    interface Window {
        opera:any;
    }
}
//component wrapping all other components in one long page
const OneLongPage = ()=>{
    //function returning true if user browses the page in messenger/facebook built-in browser 
    // const isInFbApp = ()=> {
    //     var ua = navigator.userAgent || navigator.vendor || window.opera;
    //     return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    // }
    
    useEffect(() => {
        AOS.init({ once: true,
            duration: 300,
            disable: "mobile", //disable animations on scroll depending on returned value (they were laggy and glitchy inside in-app browser)
            easing: 'ease-out',
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