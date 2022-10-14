import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'

const HeaderTest = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-600 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between laptop:w-auto laptop:static laptop:block laptop:justify-start">
                        <Link to='/' className="text-2xl font-bold uppercase text-orange-600">
                            COVID-19 Statistics
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block laptop:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars/>
                        </button>
                    </div>
                    <div
                        className={
                            "laptop:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col laptop:flex-row list-none laptop:ml-auto">
                            <li className="nav-item">
                                <Link to='/'
                                    className="px-3 py-2 flex items-center uppercase text-lg font-bold leading-snug text-gray-200 hover:text-orange-600"
                                >
                                    ANASAYFA
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/country/Turkey'
                                    className="px-3 py-2 flex items-center uppercase text-lg font-bold leading-snug text-gray-200 hover:text-orange-600"
                                >
                                    TÜRKİYE İSTATİSTİK
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/country/Global'
                                    className="px-3 py-2 flex items-center uppercase text-lg font-bold leading-snug text-gray-200 hover:text-orange-600"
                                >
                                    DÜNYA İSTATİSTİK
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default HeaderTest;