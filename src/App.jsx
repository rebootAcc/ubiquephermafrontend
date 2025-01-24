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
import AddAndManageProducts from "./pages/admin/AddAndManageProducts";
import AddAndManagePopup from "./pages/admin/AddAndManagePopup";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import AddAndManageCategory from "./pages/admin/AddAndManageCategory";
import AddAndManageMolecule from "./pages/admin/AddAndManageMolecule";
import AddAndManageStrength from "./pages/admin/AddAndManageStrength";
import AddAndManagePackagingSize from "./pages/admin/AddAndManagePackageingSize";

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
        {/* admin */}
        <Route path="/reboots" element={<AdminLogin />} />
        <Route path="/admin/sliders" element={<AddAndManageSlider />} />
        <Route path="/admin/products" element={<AddAndManageProducts />} />
        <Route path="/admin/popup" element={<AddAndManagePopup />} />
        <Route path="/admin/dashboard" element={<AdminDashBoard />} />
        <Route path="/admin/category" element={<AddAndManageCategory />} />
        <Route path="/admin/molecule" element={<AddAndManageMolecule />} />
        <Route path="/admin/strength" element={<AddAndManageStrength />} />
        <Route
          path="/admin/packagingsize"
          element={<AddAndManagePackagingSize />}
        />
      </Routes>
    </>
  );
}

export default App;
