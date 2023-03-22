import './App.css';
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PhonePage from "./pages/PhonePage/PhonePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/phones/:id" element={<PhonePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
