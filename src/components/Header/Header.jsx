import { Link } from 'react-router-dom'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Header.css'

const Header = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
                <Link to='/' className='logo'>
                    COVID-19 Statistics
                </Link>
                <div>
                    <nav ref={navRef}>
                        <Link to='/'>Anasayfa</Link>
                        <Link to='/country/Turkey'>Türkiye İstatistik</Link>
                        <Link to='/country/Global'>Dünya İstatistik</Link>
                        <button
                            className="nav-btn nav-close-btn"
                            onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </nav>
                    <button
                        className="nav-btn"
                        onClick={showNavbar}
                    >
                        <FaBars />
                    </button>
                </div>
            </header>

    )
}

export default Header