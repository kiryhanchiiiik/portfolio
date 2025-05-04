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
        <a href="#">&lt;SH /&gt;</a>
        <button type="button" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? cross : burger}
            alt={isMenuOpen ? "Cross" : "Burger"}
          />
        </button>
      </div>

      <nav className={`${css.menu} ${isMenuOpen ? css.open : ""}`}>
        <ul className={css.list}>
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
