import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Gallery from "./sections/Gallery.jsx";
import Hero from "./sections/Hero.jsx";
import Hours from "./sections/Hours.jsx";
import Services from "./sections/Services.jsx";

function App() {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        Kalo te përmbajtja
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
