import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <>

      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>


  );
}

export default App;
