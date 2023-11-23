import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Listing from "./pages/listing/listing";
import Logout from "./pages/logout/logout";
import BusinessData from "./pages/listing/business_data";
function App() {

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="logout" element={<Logout />} />
      <Route path="listing" element={<Listing />} />
      <Route path="listing/data" element={<BusinessData />} />
    </Routes>
  );
}

export default App;
