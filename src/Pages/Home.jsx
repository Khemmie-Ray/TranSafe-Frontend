import news1 from "../assets/home/train1.svg"
import news2 from "../assets/home/Train2.svg"
import news3 from "../assets/home/Train3.svg"
import coverImg1 from "../assets/home/Bgtwo.svg"
import coverImg2 from "../assets/home/Bgthree.svg"
import coverImg3 from "../assets/home/Bgfour.svg"
import { FiClock } from "react-icons/fi"
import { CiMoneyBill } from "react-icons/ci"
import { FaRecycle } from "react-icons/fa"
import heroImg from "../assets/home/Bgone.svg"
import bottomBg from "../assets/home/Bgnine.svg"
import Reviews from "../components/Reviews"
import FindTrain from "../components/FindTrain"

const Home = () => {
  return (
        <main>
          <section className="lg:flex">
            <div className="text-white lg:w-2/3 bg-cover bg-center lg:h-96 p-8 sm:h-full"
            style={{backgroundImage: `url(${heroImg})`}}>
            <h1 className="text-6xl font-bold my-4 capitalize">Buy tickets With No Hassles</h1>
              <p className="text-xl">Transafe prioritizes your experience in acquiring your train tickets. Thank you for always trusting us.</p>
            </div>
            <div className="lg:w-1/3 p-8">
              <FindTrain />
            </div>
          </section>
          <section>
          <h2 className="font-bold text-4xl text-gray-700 my-12 text-center capitalize">Why choose us</h2>
          <div className="lg:flex w-10/12 mx-auto py-8">
            <div className="lg:w-1/3 w-full lg:mr-12 h-[240px] flex flex-col items-center bg-blue-100 rounded-md text-gray-700 mb-6 p-4">
              <FiClock className="w-12 h-12"/>
              <h3 className="font-semibold text-xl my-4 capitalize">Fast & easy booking</h3>
              <p className="text-xs text-center">Say goodbye to waiting in line or dealing with slow and clunky booking platforms. TranSafe leverages the latest technology to provide a lightning-fast booking experience, enabling you to secure your tickets in a matter of moments.</p>
            </div>
            <div className="lg:w-1/3 w-full lg:mr-12 h-[240px] flex flex-col items-center bg-blue-100 p-4 rounded-md text-gray-700 mb-6">
              <FaRecycle className="w-12 h-12"/>
              <h3 className="font-semibold text-xl my-4 capitalize">24/7 Customer Support</h3>
              <p className="text-xs text-center"> We're here for you around the clock - 24/7 Customer Support, providing peace of mind and assistance whenever you need it. Experience hassle-free journeys with TranSafe's reliable and dedicated customer support team</p>
            </div>
            <div className="lg:w-1/3 w-full h-[240px] flex flex-col items-center bg-blue-100 p-4 rounded-md text-gray-700 mb-4">
              <CiMoneyBill className="w-12 h-12"/>
              <h3 className="font-semibold text-xl my-4 capitalize">instant refund</h3>
              <p className="text-xs text-center">Our  Instant Refund Policy ensures that your travel plans remain flexible and worry-free. If unforeseen circumstances prevent you from embarking on your trip, simply cancel your ticket and receive an instant refund without any hassle.</p>
            </div>
          </div>
          </section>
          <section className="w-[95%] p-6">
          <h2 className="font-bold text-4xl text-gray-700 my-12 text-center capitalize">what our users say</h2>
          <div className="mb-18">
            <Reviews />
          </div>
          </section>
          <section>
            <h2 className="font-bold text-4xl text-gray-700 my-12 text-center capitalize">Where we go</h2>
            <div className="bg-cover bg-center h-96 flex items-center w-[100%]" 
            style={{backgroundImage: `url(${coverImg1})`}}>
              <p className="bg-black bg-opacity-80 text-white p-3 mt-auto rounded-md underline ml-8 mb-8 font-normal">Lagos</p>
            </div>
            <div className="lg:w-11/12 w-[100%] mx-auto lg:flex lg:justify-between mt-12 mb-24">
            <div className="h-96 lg:w-1/2 w-[100%] flex items-center lg:mr-14 mb-8" 
            style={{backgroundImage: `url(${coverImg3})`}}>
              <p className="bg-black bg-opacity-80 text-white p-3 mt-auto rounded-md underline ml-8 mb-8">Abeokuta</p>
            </div>
            <div className="bg-cover bg-center h-96 lg:w-1/2 w-[100%] flex items-center" 
            style={{backgroundImage: `url(${coverImg2})`}}>
              <p className="bg-black bg-opacity-80 text-white p-3 mt-auto rounded-md underline ml-8 mb-8">Ibadan</p>
            </div>
            </div>
          </section>
          <section className="bg-cover bg-center bg-gray-700 bg-blend-overlay lg:h-80 flex h-[auto] py-8 px-2 w-[100%] lg:w-full"
          style={{backgroundImage: `url(${news2})`}}>
            <div className="lg:flex lg:w-10/12 w-[100%] m-auto justify-between">
              <div className="text-white lg:w-2/3 w-[80%] mr-20 p-4">
              <h3 className="text-4xl font-bold my-4 capitalize">Our train journey</h3>
              <p className="text-xl">Book your train tickets for journeys in the 3 train zones in which the train is divided into.</p>
            </div>
            <div className="bg-white rounded-md lg:w-1/3 w-[90%] mx-auto p-4">
              <h4 className="font-bold">Zone 1 - 4</h4>
              <progress max="100" value="50" className="w-full h-1"></progress>
              <ul className="list-square list-inside marker:text-green-700">
                <li className="font-bold">Lagos - Ibadan</li>
              </ul>
              <h4 className="font-bold">Zone 1</h4>
              <progress max="100" value="50" className="w-full h-1"></progress>
              <ul className="list-square list-inside marker:text-green-700">
                <li className="font-bold">Lagos - Abeokuta</li>
              </ul>
              <h4 className="font-bold">Zone 2</h4>
              <progress max="100" value="50" className="w-full h-1"></progress>
              <ul className="list-square list-inside marker:text-green-700">
                <li className="font-bold">Abeokuta - Ibadan</li>
              </ul>
              </div>
            </div>
          </section>
          <section className="w-[100%] p-3">
            <h2 className="text-center text-4xl my-12 font-bold text-gray-700 capitalize" id="newsUpdate">News & updates</h2>
            <div className="lg:w-11/12 w-[100%] mx-auto lg:flex my-12 text-green-700 text-sm ">
              <div className="lg:w-1/3 lg:mr-8 w-[100%]">
                <img src={news2} alt="" className="h-64 w-full object-cover object-center mb-2"/>
                <a href="#">Things you need to know about the new Lagos - Ibadan train</a>
                <p>Jan 2023</p>
              </div>
              <div className="lg:w-1/3 lg:mr-8 w-[100%]">
              <img src={news1} alt="" className="h-64 w-full object-cover object-center mb-2" />
              <a href="#">Buhari flags off full commercial operation at Ebuta Metta station</a>
              <p>Dec 2022</p>
              </div>
              <div className="lg:w-1/3 lg:mr-8 w-[100%]">
              <img src={news3} alt="" className="h-64 w-full object-cover object-center mb-2" />
              <a href="#">FG begins test bookings on railway e-ticketing platform</a>
              <p>Dec 2022</p>
              </div>
            </div>
          </section>
          <section className="bg-cover bg-center lg:h-72 h-[auto] my-24 lg:flex lg:items-center lg:justify-between py-6 px-4"
          style={{backgroundImage: `url(${bottomBg})`}}>
            <div className="lg:flex lg:items-center lg:justify-between lg:mx-20 w-[100%]">
            <div className="text-white lg:w-6/12 w-[100%] lg:mr-20">
              <h3 className="text-4xl font-bold my-4 capitalize">stay in the loop</h3>
              <p className="text-md mb-6">Subscribe to receive the latest news and updates about Transafe. We promise not to spam you!</p>
            </div>
            <div className="lg:w-6/12 w-[100%]">
              <input type="text" placeholder="enter your email address" className=" lg:rounded-tl-md lg:rounded-bl-md px-8 py-2 mb-3 lg:w-4/6 w-[100%]"/>
              <button className="bg-green-700 w-[100%] text-white lg:rounded-tr-md lg:rounded-br-md px-8 py-2 lg:w-2/6">Subscribe</button>
              </div>
            </div>
          </section>
        </main>
  )
}

export default Home