import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Student from "./components/Student";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
      <Student />
      <Footer />
    </>
  );
}

export default App;
