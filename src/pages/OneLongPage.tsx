import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/shared/navbar/Navbar"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Home from "../components/Home"
import Projects from "../components/Projects"

//component wrapping all other components in one long page
const OneLongPage = ()=>{

    useEffect(() => {
        AOS.init({ once: true,
            duration: 300,
            disable: "mobile",
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