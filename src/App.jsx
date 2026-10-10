import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Gallery from './sections/Gallery.jsx';
import Hero from './sections/Hero.jsx';
import Membership from './sections/Membership.jsx';
import Services from './sections/Services.jsx';

function App() {
  return (
    <div className="min-h-screen bg-premium-black text-premium-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
