import { useState } from "react";
import LOGO from '../assets/LOGO.jpg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }


    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <img src={LOGO} alt="M M Logo" className="logo" />
                    <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                        <li className="nav-item">
                            <a href="#home" className="nav-link" onClick={closeMenu}>home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={closeMenu}>about</a>
                        </li>
                        <li className="nav-item">
                            <a href="#work" className="nav-link" onClick={closeMenu}>work</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={closeMenu}>contact</a>
                        </li>
                    </ul>
                    <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu} aria-expanded={isOpen}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;