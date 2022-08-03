import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import SinglePage from "./pages/singlePage/SinglePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home/single" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
