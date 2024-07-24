import React from 'react'
import "./nav.css"
import { FaHome } from "react-icons/fa";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { IoBookSharp } from "react-icons/io5";
import { RiSpeakFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";

const Nav = () => {
  return (
    <section className='container nav_container'>
      <nav>
        <ul className='nav-bar'>
          <li className='nav-links'><a href="#header"><FaHome /></a></li>
          <li className='nav-links'><a href="#about"><MdOutlinePermDeviceInformation /></a></li>
          <li className='nav-links'><a href="#experience"><GiAchievement /></a></li>
          <li className='nav-links'><a href="#services"><GrServices /></a></li>
          <li className='nav-links'><a href="#portfolio"><IoBookSharp /></a></li>
          <li className='nav-links'> <a href="#testimonial"><RiSpeakFill /></a></li>
          <li className='nav-links'><a href="#contact"><IoMdContact /></a></li>
        </ul>

      </nav>
    </section>
  )
}

export default Nav
