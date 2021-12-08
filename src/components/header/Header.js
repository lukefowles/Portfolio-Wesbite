import React, {useState} from 'react';
import './Header.css';
import Web from './headerWeb/Web'
import Mobile from './headerMobile/Mobile'
import Github from '../contactIcons/github';
import Linkedin from '../contactIcons/linkedin';


function Header() {
    //React hook so that app menu only shows when not clicked
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="header">
            <div className="contact-icons">
            <a href="https://github.com/lukefowles">
                <Github />
            </a>
            <a href="https://www.linkedin.com/in/luke-fowles-b66886167/">
                <Linkedin />
            </a>
            </div>
            <div className="menu">
                <div className="webMenu">
                    <Web />
                </div>
                <div className="mobileMenu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        {/* <i class="fi fi-sr-apps menu-Icon"></i> */}
                        <img className= "menu-Icon"  src="../../../../menu.svg" alt="menu icon"></img>
                        {/* <img className= "close-Icon" src="../../../../close-icon.svg" alt="close icon"></img> */}
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header
