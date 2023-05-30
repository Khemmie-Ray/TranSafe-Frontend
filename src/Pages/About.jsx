import profile1 from "../assets/about/khemmie.jpg"
import profile2 from "../assets/about/ajiboye.jpg"
import profile3 from "../assets/about/rotimi.jpg"
import profile4 from "../assets/about/olusegun.jpg"
import news2 from "../assets/home/Train2.svg"

const About = () => {
  return (
        <main>
            <section className="mb-12 text-white bg-cover bg-center bg-gray-900 bg-blend-overlay h-96 flex items-center h-[auto] px-4 py-8"
            style={{backgroundImage: `url(${news2})`}}>
                <div className="text-center lg:w-2/3 w-[100%] mx-auto">
                <h2 className="font-bold text-4xl mb-2">TranSafe</h2>
                <p className="lg:w-3/6 w-[90%] mx-auto mb-2">TranSafe web application is an efficient and convenient way to book train tickets while doing away with the hassle of queueing up and it saves time.</p>
                <p className="lg:w-3/6 w-[90%] mx-auto mb-2">This application allows you to select your preferred seat so you can travel in style.</p>
                <p>Your comfort is our priority.</p>
                </div>
            </section>
            <section className="bg-green-100 py-16 mb-4 text-gray-600">
                <h2 className="font-bold text-4xl mb-2 text-center">Team Members</h2>
                <section className="lg:w-4/6 w-[90%] mx-auto lg:flex flex-wrap my-12">
                    <div className="lg:w-3/6 w-[100%] text-center">
                        <img src={profile3} alt="" className="rounded-full w-4/6 mx-auto"/>
                        <h3 className="font-bold text-2xl mt-4">Rotimi Owolabi</h3>
                        <p>Backend Developer</p>
                    </div>
                    <div className="lg:w-3/6 w-[100%] text-center mt-12">
                        <img src={profile2} alt="" className="rounded-full w-4/6 mx-auto" />
                        <h3 className="font-bold text-2xl mt-4">Adeleye Pius</h3>
                        <p>Backend Developer</p>
                    </div>
                    <div className="lg:w-3/6 w-[100%] text-center mt-12">
                        <img src={profile1} alt="" className="rounded-full w-4/6 mx-auto "/>
                        <h3 className="font-bold text-2xl mt-4">Oluwakemi Atoyebi</h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="lg:w-3/6 w-[100%] mx-auto text-center mt-12">
                        <img src={profile4} alt="" className="rounded-full w-4/6 mx-auto"/>
                        <h3 className="font-bold text-2xl mt-4">Olusegun Mayungbe</h3>
                        <p>Backend / DevOps Developer</p>
                    </div>
                </section>
            </section>
        </main>
  )
}

export default About