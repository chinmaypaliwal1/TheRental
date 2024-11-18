import React from "react";
import Link from "next/link"; // Import Link from Next.js

const HeaderMain = () => {
  return (
    <header className="p-4 bg-gray-900 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">
          <Link href="/" className="hover:text-gray-400">TheRental</Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-lg items-center">
          <li><Link href="/about-us" className="hover:text-gray-400 transition">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400 transition">Contact Us</Link></li>
          <li><Link href="/login" className="hover:text-gray-400 transition">Login</Link></li>
          <li>
              <Link 
                href="/contact" 
                className="bg-green-500 text-black font-bold py-2 px-4 rounded-md flex items-center gap-2 transition duration-150 ease-out hover:bg-green-600 hover:duration-300 hover:ease-in"
              >
                <svg className="animate-bounce w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7l4.553 4.553a.75.75 0 010 1.061l-4.553 4.553M4 12h16" />
                </svg>
                Let&apos;s Talk
              </Link>
          </li>
        </ul>

        <button className="md:hidden text-gray-400 hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default HeaderMain;
