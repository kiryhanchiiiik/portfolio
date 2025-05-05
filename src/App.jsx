import css from "./App.module.scss";
import About from "./components/About/About";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={css.container}>
      <Header />
      <Description />
      <About />
    </div>
  );
}

export default App;
