import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/HomePage/pages/Landingpage/Landingpage";
import AboutPage from "./pages/HomePage/pages/Aboutpage/AboutPage";
import ProductPage from "./pages/HomePage/pages/ProductPage/ProductPage";
import VlogPage from "./pages/HomePage/pages/VlogPage/VlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/vlog" element={<VlogPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// export function NewComponent() {
//   return (
//     <div>
//       <h2>NEW COMPONENT</h2>
//     </div>
//   );
// }