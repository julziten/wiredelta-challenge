import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

export const NavBar = ( { scrollForm , scrollAbout, scrollContact } ) => {

    const [isOpen, setMenu] = useState(false);

    return (
            <header className="navbar__container">
                <div className="navbar__menu">
                    <a href="/home" className="navbar__logo">
                        Breathe Your Soul
                    </a>
                    <Hamburger toggled={isOpen} toggle={setMenu} />
                </div>

                <nav className={ isOpen ? 'navbar___active' : undefined }>
                    <ul className="navbar__list">
                        <li>
                            <a href="/">Home </a>
                        </li>
                        <li>
                            <a href="/" onClick={ scrollAbout }>About Us </a>
                        </li>
                        <li>
                            <a href="/" onClick={ scrollForm }>Volunteer </a>
                        </li>
                        <li>
                            <a href="/" onClick={ scrollContact } >Contact </a>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}
