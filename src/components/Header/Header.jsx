import css from "./Header.module.scss";
import burger from "../../assets/burger.svg";
import cross from "../../assets/cross.svg";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <a className={css.logo} href="#">
          &lt;kiryhanchik /&gt;
        </a>
        <button type="button" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? cross : burger}
            alt={isMenuOpen ? "Cross" : "Burger"}
          />
        </button>
      </div>

      <nav className={`${css.menu} ${isMenuOpen ? css.open : ""}`}>
        <ul className={css.list}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
