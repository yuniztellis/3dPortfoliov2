import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/projects";
import Clients from "./sections/Clients";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <main className="max-w-8xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
