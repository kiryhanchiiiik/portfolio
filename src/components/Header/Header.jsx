import css from "./Header.module.scss";
import sprite from "../../img/sprite.svg";
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
          <svg width={30} height={30}>
            <use href={`${sprite}#${isMenuOpen ? "cross" : "burger"}`} />
          </svg>
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
