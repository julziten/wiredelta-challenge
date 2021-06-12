import React, { useRef } from 'react';
import { VolunteerForm } from './components/VolunteerForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Intro } from './components/Intro';
import { MyMapComponent } from './components/MyMapComponent';
import { About } from './components/About';
import { Divider } from './components/Divider';
import { NavBar } from './components/NavBar';


export const WiredeltaScreen = () => {

    const contactRef = useRef();
    const volunteerRef = useRef();
    const aboutRef = useRef()


    const scrollIntoContact = (e) => {
        e.preventDefault();
        contactRef.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    const scrollIntoForm = (e) => {
        e.preventDefault();
        volunteerRef.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    const scrollIntoAbout = (e) => {
        e.preventDefault();
        aboutRef.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <>

            <NavBar 
                scrollForm={ scrollIntoForm } 
                scrollAbout={scrollIntoAbout } 
                scrollContact={ scrollIntoContact }
            />

            <main>

                <Intro scroll={ scrollIntoForm }/>

                <About ref={ aboutRef }/>

                <Divider title="Apply Here"/>

                <VolunteerForm ref={ volunteerRef }/>

                <Divider title="Contact Us!"/>

                <Contact ref={ contactRef }/>

                <MyMapComponent isMarkerShown/>

            </main>

            <Footer />

        </>
    )
}
