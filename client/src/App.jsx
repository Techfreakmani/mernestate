import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/signin";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import About from "./pages/about";
import Header from "./components/Header";
import PrivateRoute from "./components/privateRoute";
import CreateListing from "./pages/createListing";


export default function App() {
  return (
    <BrowserRouter >
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />} >
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
