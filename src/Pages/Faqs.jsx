import Header from "../components/Header"
import Footer from "../components/Footer"
import bottomBg from "../assets/home/Bgnine.svg"
import iconOne from "../assets/faq/Questions.svg"
import iconTwo from "../assets/faq/questionicon.svg"
import Questions from "../components/Questions"

const Faqs = () => {
  return (
        <main>
            <section className="bg-green-100">
                <div className="w-11/12 flex mx-auto items-center justify-between py-8">
                <div className="w-1/6">
                    <img src={iconTwo} alt="question mark icon" />
                </div>
                <div className="w-4/6 mx-10 text-center flex items-center flex-col text-gray-700 ">
                    <h2 className="text-gray-700 font-bold text-3xl">Do you have any questions?</h2>
                    <p className="mb-4 mt-2 text-md">Search here to get answers to your questions.</p>
                    <div className="lg:w-6/12 w-[100%]">
                    <input type="text" placeholder="Type your question here" className="lg:rounded-tl-md lg:rounded-bl-md px-8 py-2 lg:w-4/6 w-[100%] mb-4"/>
                    <button className="bg-green-700 text-white lg:rounded-tr-md lg:rounded-br-md px-8 py-2 lg:w-2/6 w-[100%]">Search</button>
                    </div>
                </div>
                <div className="w-1/6">
                    <img src={iconOne} alt="" />
                </div>
                </div>
            </section>
            <div>
              <Questions />
            </div>
            <section className="text-center p-4 my-8">
                <h4 className="font-semibold text-xl mt-[100px]">Still have any question?</h4>
                <p className="mb-4">Contact us and we will reply you within 24 hours</p>
                <a href="#" className="bg-green-700 text-white rounded-md px-8 py-2">Contact Us</a>
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

export default Faqs;