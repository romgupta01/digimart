import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
/*import HomePage from "./pages/HomePage/HomePage";*/

import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
     /
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