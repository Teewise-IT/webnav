/* eslint-disable jsx-a11y/anchor-is-valid */

import {AiOutlineRocket, AiOutlineBars, AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import {RiCloseLine} from 'react-icons/ri';
import './nav.css';

const Nav = ({ showMenu, setShowMenu, showSubmenu, setShowSubmenu }) => {
    
    const handleToggle = () => {
        setShowMenu(!showMenu);
        setShowSubmenu(false);
    }

  return (
    <nav className='navbar'>
        <div className="logo">
            <AiOutlineRocket color="white" size={50} />
            <h1 className='logo-text'>Teewise.<span>com</span></h1>
        </div>
        <menu>
            <div className={showMenu ? "nav-wrapper show-nav-wrapper" : "nav-wrapper"} onClick={handleToggle}></div>
            <ul className='nav-links' id={showMenu ? "mobile-nav-links" : "hide-mobile-nav-links"}>
                <li onClick={handleToggle}><a href="#">Home</a></li>
                <li onClick={handleToggle}><a href="#">About</a></li>
                <li onClick={handleToggle}><a href="#">Services</a></li>
                <li onClick={handleToggle}><a href="#">Subscribe</a></li>
                <li className='submenu-link' onClick={() => setShowSubmenu(true)}><a href="#">Settings</a><AiOutlineArrowRight color="white" size={18} /></li>
                <li onClick={handleToggle} className='nav-btn'><a className='btn-orange' href="#">Get Started</a></li>
            </ul>

            {/* Submenu List */}
            <ul className='nav-links submenu' id={showSubmenu ? "submenu-nav-links" : "hide-submenu-nav-links"}>
                <li className='submenu-link' onClick={() => setShowSubmenu(false)}><AiOutlineArrowLeft color="white" size={18} /><a href="#">Back to Menu</a></li>
                <li onClick={handleToggle}><a href="#">Profile Setting</a></li>
                <li onClick={handleToggle}><a href="#">Account Setting</a></li>
                <li onClick={handleToggle}><a href="#">Logout</a></li>
            </ul> 
            {/* Submenu List End */}

        </menu>
        <div className="menu-icons">
            {showMenu ? (
                <RiCloseLine color="white" size={20} onClick={handleToggle} />
            ) : (
                <AiOutlineBars color="white" size={20} onClick={handleToggle} />
            )}       
        </div>
    </nav>
  )
}

export default Nav