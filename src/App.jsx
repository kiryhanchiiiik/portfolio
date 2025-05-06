import css from "./App.module.scss";
import About from "./components/About/About";
import Certification from "./components/Certification/Certification";
import Contact from "./components/Contact/Contact";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

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
    </div>
  );
}

export default App;
