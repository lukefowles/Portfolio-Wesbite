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
            <Github />
            <Linkedin />
            {/* {<div className="logo">Luke Fowles</div>} */}
            <div className="menu">
                <div className="webMenu">
                    <Web />
                </div>
                <div className="mobileMenu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i class="fi fi-sr-apps menu-Icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header
