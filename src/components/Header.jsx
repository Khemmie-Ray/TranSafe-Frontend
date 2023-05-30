import logo from "../assets/home/logo.svg"
import { NavLink } from "react-router-dom"
import { FaFacebook } from "react-icons/fa"
import { RiLinkedinFill } from "react-icons/ri"
import { SiTwitter } from "react-icons/si"
import { AiFillInstagram } from "react-icons/ai"
import { RxHamburgerMenu } from "react-icons/rx"
import { useRef, useState } from "react"
import { MdCancel } from 'react-icons/md'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const navRef = useRef(null)

  const hideNav = () => {
    navRef.current.style.display = 'none'
  }

  const showNav = () => {
    navRef.current.style.display = 'block'
  }

  function displayMenu() {
    setShowMenu(true)
    showNav('block')
  }

  function closeMenu() {
    setShowMenu(false)
    hideNav('none')
  }

  return (
    <header>
      <div className="lg:flex lg:justify-end lg:mr-16 py-2 text-gray-700 mb-4 text-center">
        <p className="lg:mr-8 pt-2">Contact Support +234 8124510001</p>
        <p className="flex items-center justify-center">Follow us on: 
        <div className="flex text-green-700"> 
        <FaFacebook className="mx-2"/>
        <RiLinkedinFill className="mr-2"/>
        <SiTwitter className="mr-2"/>
        <AiFillInstagram />
        </div></p>
      </div>
      <div className="lg:flex h-24 bg-green-700 justify-between items-center hidden">
        <div className="lg:w-1/3 lg:ml-16 w-[90%] mx-auto px-4 flex justify-between">
      <img src={logo} alt="Transafe logo" className="w-1/6 bg-white opacity-70 rounded-full"/>
      </div>
      <nav className="lg:w-2/3 text-white font-semibold lg:flex lg:justify-end mr-16 items-center px-4 py-8 hidden">
        <NavLink to="/" className="lg:mr-8">Home</NavLink>
        <NavLink to="/about" className="lg:mr-8">About Us</NavLink>
        <NavLink className="lg:mr-8" to="/timetable">Timetable</NavLink>
        <NavLink to="/faqs" className="lg:mr-8">FAQs</NavLink>
        <NavLink to="/login" className="bg-white text-green-700 py-3 px-8 rounded-md">Sign In/Sign Up</NavLink>
      </nav>
      </div>
      <div className="lg:hidden h-24 bg-green-700 flex justify-between items-center">
        <div className="w-[90%] mx-auto px-4 flex justify-between relative">
      <img src={logo} alt="Transafe logo" className="w-1/6 bg-white opacity-70 rounded-full"/>
      <RxHamburgerMenu className="w-[40px] h-[40px] text-white" onClick={displayMenu}/>
      </div>
      <nav className="text-white font-semibold w-[70%] mr-16 items-center px-4 py-8 hidden absolute top-[15%] bg-black rounded-md right-[-50px] h-[70vh] text-center" ref={navRef}>
        <MdCancel className="lg:hidden block text-white w-[40px] h-[40px] mb-[30px] " onClick={closeMenu}/>
        <NavLink to="/" className="lg:mr-8 block mb-4">Home</NavLink>
        <NavLink to="/about" className="lg:mr-8 block mb-4">About Us</NavLink>
        <NavLink className="lg:mr-8 block mb-2" to="/timetable">Timetable</NavLink>
        <NavLink to="/faqs" className="lg:mr-8 block mb-4">FAQs</NavLink>
        <NavLink to="/login" className="bg-white text-green-700 py-3 px-8 rounded-md">Sign In/Sign Up</NavLink>
      </nav>
      </div>
    </header>
  )
}

export default Header