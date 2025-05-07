import { Toaster } from "react-hot-toast";
import About from "./components/About/About";
import Certification from "./components/Certification/Certification";
import Contact from "./components/Contact/Contact";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import css from "./App.module.scss";

function App() {
  return (
    <div className={css.container}>
      <Header />

      <Description />
      <About />
      <Skills />
      <Work />
      <Certification />
      <Contact />
      <Toaster position="bottom-center" />
      <Footer />
    </div>
  );
}

export default App;
