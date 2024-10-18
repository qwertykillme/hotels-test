import AboutPage from "@pages/about";
import HomePage from "../pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactsPage from "@pages/about/contacts";
import DescriptionPage from "@pages/about/description";
import RestaurantPage from "@pages/about/restaurants";
import ServicesPage from "@pages/about/services";
import AddTripPage from "@pages/add-trip";
import TripHistory from "@pages/trip-history";
import SpaPage from "@pages/about/services/spa";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/about/contacts" element={<ContactsPage />}></Route>
        <Route path="/about/description" element={<DescriptionPage />}></Route>
        <Route path="/about/restaurants" element={<RestaurantPage />}></Route>
        <Route path="/about/services" element={<ServicesPage />}></Route>
        <Route path="/about/services/spa" element={<SpaPage />}></Route>

        <Route path="/add-trip" element={<AddTripPage />}></Route>
        <Route path="/trip-history" element={<TripHistory />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
