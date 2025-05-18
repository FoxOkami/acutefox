import "./App.css";
import "./global.css";
import SiteHeader from "./site-header/SiteHeader";
import Captivator from "./captivator/Captivator";
import About from "./about/About";
import Services from "./services/Services";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="App" id="home-landing">
      <SiteHeader />
      <Captivator />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
