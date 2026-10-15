import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadCard from "./components/UploadCard";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-paper">
      <Navbar />
      <Hero />
      <UploadCard />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
