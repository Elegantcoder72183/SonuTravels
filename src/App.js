import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Flights from "./Pages/Flights";
import Passport from "./Pages/Passport";
import Tours from "./Pages/Tours";
import Visa from "./Pages/Visa";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/passport" element={<Passport />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/visa" element={<Visa />} />
      </Routes>
    </div>
  );
}

export default App;
