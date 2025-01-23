import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ContactUS from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import OurProducts from "./pages/OurProducts";
import Carrer from "./pages/Carrer";
import Investor from "./pages/Investor";
import AdminLogin from "./pages/AdminLogin";
import AddAndManageSlider from "./pages/admin/AdminSlider";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/career" element={<Carrer />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/reboots" element={<AdminLogin />} />
        <Route path="/admin/sliders" element={<AddAndManageSlider />} />
      </Routes>
    </>
  );
}

export default App;
