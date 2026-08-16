import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DemoSites from "./components/DemoSites";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <DemoSites />
    </div>
  );
}

export default App;