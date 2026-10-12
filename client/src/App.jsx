import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadCard from "./components/UploadCard";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div className=" bg-paper">
      <Navbar />
      <Hero />
      <UploadCard />
      <HowItWorks />
    </div>
  );
}

export default App;
