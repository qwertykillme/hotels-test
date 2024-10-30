import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TripPage from "@pages/trip";
import HomePage from "@pages/home";
import ContactsPage from "@pages/trip/contacts";
import DescriptionPage from "@pages/trip/description";
import RestaurantPage from "@pages/trip/restaurants";
import ServicesPage from "@pages/trip/services";
import AddTripPage from "@pages/add-trip";
import TripHistoryPage from "@pages/trip-history";
import ServicePage from "@pages/trip/services/service";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/> }></Route>
        {/* <Route path="/trip" element={<TripPage/> }></Route> */}
        <Route path="/trip/:id" element={<TripPage/> }></Route>
        <Route path="/trip/:id/contacts" element={<ContactsPage/> }></Route>
        <Route path="/trip/:id/description" element={<DescriptionPage/> }></Route>
        <Route path="/trip/:id/restaurants" element={<RestaurantPage/> }></Route>
        <Route path="/trip/:id/services" element={<ServicesPage/> }></Route>
        <Route path="/trip/:id/services/:id" element={<ServicePage/> }></Route>
        <Route path="/add-trip" element={<AddTripPage/> }></Route>
        <Route path="/trip-history" element={<TripHistoryPage/> }></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
