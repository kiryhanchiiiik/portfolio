import React, { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import css from "./App.module.scss";
import Loader from "./components/Loader/Loader"; // обычный импорт

const Header = lazy(() => import("./components/Header/Header"));
const Description = lazy(() => import("./components/Description/Description"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Work = lazy(() => import("./components/Work/Work"));
const Certification = lazy(() =>
  import("./components/Certification/Certification")
);
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <div className={css.scrollWrapper}>
      <div className={css.container}>
        <Suspense fallback={<Loader />}>
          <Header />
          <Description />
          <About />
          <Skills />
          <Work />
          <Certification />
          <Contact />
          <Footer />
        </Suspense>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
}

export default App;
