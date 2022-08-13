import HomePage from "./pages/homePage/HomePage";
import SinglePage from "./pages/singlePage/SinglePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App outline-none">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
