import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen font-poppins lg:w-full">
        <Header />
        <Outlet />
        <div className="mt-auto">
        <Footer />
        </div>
    </div>
  )
}

export default MainLayout