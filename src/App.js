
import Navbar from "./components/Navbar"
import { NewsProvider } from "./Context/NewsContext";
import "./index.css"
import Home from "./pages/Home";

function App() {
  return (
    <NewsProvider>
      <div className="main-container">
        <Navbar />
        <Home />
      </div>
    </NewsProvider>
  );
}

export default App;
