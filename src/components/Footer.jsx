import logo from "../assets/home/logo.svg"
import { FaFacebook } from "react-icons/fa"
import { RiLinkedinFill } from "react-icons/ri"
import { SiTwitter } from "react-icons/si"
import { AiFillInstagram } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Footer = () => {
const presentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-200 pt-12">
      <div className="lg:flex w-11/12 mx-auto lg:justify-between py-8 px-4">
        <div className="lg:w-4/12 w-[100%] flex flex-col items-center">
          <img src={logo} alt="TranSafe logo" className="w-[100px] h-[100px] mb-4"/>
          <p>Transafe is an E-Ticketing web application to streamline the ticket booking process, enhance the passenger experience, and to improve the efficiency of train companies.</p>
        </div>
        <ul className="lg:w-2/12 w-[100%] mt-4">
          <Link to="/about" className="font-bold mb-5">About Us</Link>
          <li><a href="#">Privacy and policy</a></li>
          <li><a href="#">Terms & conditions</a></li>
          <li><a href="#newsUpdate">News & Updates</a></li>
        </ul>
        <ul className="lg:w-2/12 w-[100%] mt-4">
          <li><a href="#" className="font-bold my-3">Quick Links</a></li>
          <Link to="/" className="block">Home</Link>
          <Link to="/faqs" className="block">FAQs</Link>
          <Link to="/timetable" className="block">Train Timetable</Link>
          <li><a href="">My Bookings</a></li>
          <li><a href="#findTrain">Find a train</a></li>
          <li><a href="#">Lagos - Ibadan</a></li>
          <li><a href="#">Lagos - Abeokuta</a></li>
          <li><a href="#">Abeokuta - Ibadan</a></li>
        </ul>
       <div className="lg:w-3/12 w-[100%] mt-4">
        <h3 className="font-bold">Contact Us</h3>
        <p>5900 Balcones Drive STE 100 Austin, TX 78731, Austin, Texas, United States of America</p>
        <p className="mt-3">&#9742; +234 8124510001</p>
        <p>&#x2709; transafe-logistics@gmail.com</p>
        <div className="flex text-green-700 mt-4"> 
        <FaFacebook className="w-[25px] h-[25px] mr-4" />
        <RiLinkedinFill className=" w-[25px] h-[25px] mr-4" />
        <SiTwitter className="w-[25px] h-[25px] mr-4" />
        <AiFillInstagram className="w-[25px] h-[25px]" />
        </div>
       </div>
      </div>
      <div className="h-16 flex items-center justify-center text-white bg-green-700 px-4 py-10 w-[100%] text-center">
      <p>Copyright &copy; {presentYear} TranSafe. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer