import { Toaster } from "react-hot-toast";
import SimpleBarReact from "simplebar-react";
import About from "./components/About/About";
import Certification from "./components/Certification/Certification";
import Contact from "./components/Contact/Contact";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import css from "./App.module.scss";
import "simplebar-react/dist/simplebar.min.css";

function App() {
  return (
    <SimpleBarReact
      className={css.scrollbar}
      style={{ maxHeight: "100vh" }}
      autoHide={false}
      forceVisible="y"
    >
      <div className={css.container} data-theme="light">
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
    </SimpleBarReact>
  );
}

export default App;
