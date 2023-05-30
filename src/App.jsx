import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import Home from "./Pages/Home"
import Faqs from "./Pages/Faqs";
import About from "./Pages/About";
import Login from "./Pages/Start/Login";
import Layout from "./components/Layout/Layout";
import Dashboard from "./Pages/User/Dashboard/Dashboard";
import SignUp from "./Pages/Start/SignUp";
import Profile from "./Pages/User/Profile/Profile";
import MainLayout from "./components/Layout/MainLayout";
import Timetable from "./Pages/Timetable";
import BookTrain from "./Pages/User/BookTrain/BookTrain";
import TransactionHistory from "./Pages/User/Transaction/TransactionHistory";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route path="/" element={<MainLayout />}>
  <Route index element={<Home />} />
  <Route path="/faqs" element={<Faqs />} />
  <Route path="/about" element={<About />} />
  <Route path="/timetable" element={<Timetable />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
  </Route>

  <Route path="/dashboard" element={<Layout />}>
    <Route index  element={<Dashboard/>} />
    <Route path="profile" element={<Profile />} />
    <Route path="booktrain" element={<BookTrain />} />
    <Route path="transactionhistory" element={<TransactionHistory />} />
  </Route>
  </Route>

))

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
