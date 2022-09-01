import "./App.css";
import Clients from "./components/clients";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";

function App() {
  ////"build": "react-scripts build",
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
