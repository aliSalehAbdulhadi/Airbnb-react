import Navbar from "./components/navbars/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import SinglePage from "./pages/singlePage/SinglePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home/single" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
