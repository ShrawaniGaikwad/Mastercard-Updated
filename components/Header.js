"use client"

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/final.png"
                            alt="Logo"
                            width={60}
                            height={60}
                            className="w-12 h-12 sm:w-15 sm:h-15"
                            priority
                        />
                        <div className="text-xl sm:text-2xl font-bold">
                            <Link href="/home" className="hover:text-green-200 transition duration-300">NGO Name</Link>
                        </div>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        <NavLinks />
                    </nav>

                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-white focus:outline-none hover:text-green-200 transition duration-300"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <nav className="px-4 pt-2 pb-4 space-y-2 bg-green-600">
                    <NavLinks mobile />
                </nav>
            </div>
        </header>
    );
}

function NavLinks({ mobile = false }) {
    const linkClass = mobile
        ? "block text-white hover:bg-green-700 rounded py-2 px-3 transition duration-300"
        : "text-white hover:text-green-200 transition duration-300";

    return (
        <>
            <Link href="/home" className={linkClass}>Home</Link>
            <Link href="/about" className={linkClass}>About Us</Link>
            <Link href="/projects" className={linkClass}>Projects</Link>
            <Link href="/contact" className={linkClass}>Contact</Link>
        </>
    );
}