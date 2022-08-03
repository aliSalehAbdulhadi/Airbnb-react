import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import SinglePage from "./pages/singlePage/SinglePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <SinglePage />
    </div>
  );
}

export default App;
