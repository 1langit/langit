"use client";

import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Scrollspy from "react-scrollspy";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className='flex justify-center'>
      <div className='fixed w-full max-w-[1400px] flex justify-between items-center px-4 py-4 bg-white'>
        <div>
          <Link to='home' smooth={true} duration={500} className='flex items-center hover:cursor-pointer'>
            <p className='bg-black text-white px-3 py-1 me-3 rounded'>L</p>
            <p className='hover:border-b-2 border-gray-500'>Langit Lintang Radjendra</p>
          </Link>
        </div>

        {/* menu */}
        <ul>
          <Scrollspy items={sections} currentClassName="font-bold" className='hidden md:flex gap-6'>
            <li className='hover:cursor-pointer hover:border-b-2 border-gray-500'>
              <Link to='home' smooth={true} duration={500} offset={-60}>
                Home
              </Link>
            </li>
            <li className='hover:cursor-pointer hover:border-b-2 border-gray-500'>
              <Link to='about' smooth={true} duration={500} offset={-60}>
                About
              </Link>
            </li>
            <li className='hover:cursor-pointer hover:border-b-2 border-gray-500'>
              <Link to='skills' smooth={true} duration={500} offset={-60}>
                Skills
              </Link>
            </li>
            <li className='hover:cursor-pointer hover:border-b-2 border-gray-500'>
              <Link to='projects' smooth={true} duration={500} offset={-60}>
                Projects
              </Link>
            </li>
            <li className='hover:cursor-pointer hover:border-b-2 border-gray-500'>
              <Link to='contact' smooth={true} duration={500} offset={-60}>
                Contact
              </Link>
            </li>
          </Scrollspy>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'absolute -translate-y-40'
              : 'absolute top-0 left-0 w-full backdrop-blur-xl flex flex-col justify-center items-center transition-all'
          }
        >
          <li className='hover:cursor-pointer hover:border-b-2 border-gray-500 mt-4'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500} offset={-60}>
              Home
            </Link>
          </li>
          <li className='hover:cursor-pointer hover:border-b-2 border-gray-500 mt-4'>
            {' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500} offset={-60}>
              About
            </Link>
          </li>
          <li className='hover:cursor-pointer hover:border-b-2 border-gray-500 mt-4'>
            {' '}
            <Link onClick={handleClick} to='skills' smooth={true} duration={500} offset={-60}>
              Skills
            </Link>
          </li>
          <li className='hover:cursor-pointer hover:border-b-2 border-gray-500 mt-4'>
            {' '}
            <Link onClick={handleClick} to='projects' smooth={true} duration={500} offset={-60}>
              Projects
            </Link>
          </li>
          <li className='hover:cursor-pointer hover:border-b-2 border-gray-500 mt-4'>
            {' '}
            <Link onClick={handleClick} to='contact' smooth={true} duration={500} offset={-60}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a
                className='flex justify-between items-center w-full text-gray-200 ps-2'
                href='https://linkedin.com/in/langit-lintang-r'
                target='_blank'
                rel='noopener noreferrer'
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a
                className='flex justify-between items-center w-full text-gray-200 ps-2'
                href='https://github.com/1langit'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] px-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a
                className='flex justify-between items-center w-full text-gray-200 ps-2'
                href='mailto:langitlintangradjendra@gmail.com'
                target='_top'
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};