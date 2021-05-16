import "./App.css";
import Header from "./app/components/Header";
import About from "./app/components/sections/About";
import Contact from "./app/components/sections/Contact";
import Featured from "./app/components/sections/Featured";
import Footer from "./app/components/sections/Footer";
import Gallery from "./app/components/sections/Gallery";
import Map from "./app/components/sections/Map";
import Services from "./app/components/sections/Services";
import VirtualTour from "./app/components/sections/VirtualTour";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Featured />
      <Contact />
      <Services />
      <Gallery />
      <VirtualTour />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
