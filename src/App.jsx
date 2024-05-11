import "./App.css";
import About from "./Blocks/About";
import Contactme from "./Blocks/ContactMe";
import Experience from "./Blocks/Experience";
import Footer from "./Blocks/Footer";
import Proyects from "./Blocks/Proyects";
import Skills from "./Blocks/Skills";
import Welcome from "./Blocks/Welcome";

function App() {

  return (
    <>
      <Welcome />
      <About />
      <Proyects />
      <Skills />
      <Experience />
      {/* <Contactme /> */}
      <Footer />
    </>
  );
}

export default App;
