import css from "./Header.module.scss";
import sprite from "../../img/sprite.svg";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
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
            <Link to="about" smooth={true} duration={600} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={600} onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={600} onClick={closeMenu}>
              Work
            </Link>
          </li>
          <li>
            <Link
              to="certification"
              smooth={true}
              duration={600}
              onClick={closeMenu}
            >
              Certification
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={600} onClick={closeMenu}>
              Contacts
            </Link>
          </li>
        </ul>
        <div className={css.btnInner}>
          <div className={css.themeContainer}>
            <p>Switch Theme</p>
            <button type="button">
              <svg width={24} height={24}>
                <use href={`${sprite}#moon`}></use>
              </svg>
            </button>
          </div>
          <button className={css.cvBtn} type="button">
            <a
              href="../../../public/cv/Kyryl_Shchabelskyi_FullStackDeveloper.pdf"
              download
            >
              Download CV
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
