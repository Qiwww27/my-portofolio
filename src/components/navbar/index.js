"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Rizky
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
