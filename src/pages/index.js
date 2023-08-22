import React, {useState}from 'react';
import Navbar from '../components/navBar';
// import HeroSection from '../components/heroSection';
import SideBar from '../components/sideBar';
import Footer from '../components/footer';
import { homeObjX } from '../components/navBar/data';
import { homeObjA } from '../components/footer/data';
import { homeObjY } from '../components/sideBar/data';
// import { SectionAinfo } from '../components/heroSection/data';
// import Projects from '../components/projects';
// import { projectsObjA } from '../components/projects/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='homeWrapper'>
            <SideBar isOpen={isOpen} toggle={toggle} {...homeObjY}/>
            <Navbar toggle={toggle} {...homeObjX}/>
            {/* <HeroSection {...SectionAinfo} />
            <Projects {...projectsObjA}/> */}
            <Footer {...homeObjA}/>

            
        </div>
    )
}

export default Home