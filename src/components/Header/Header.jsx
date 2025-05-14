import css from "./Header.module.scss";
import sprite from "../../img/sprite.svg";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isPressBtn, setIsPressBtn] = useState(false);

  // const toggleBtn = () => {
  //   setIsPressBtn(!isPressBtn);
  // };

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

        <nav className={css.desktopNav}>
          <ul className={css.list}>
            <li>
              <Link to="about" smooth offset={-20} duration={600}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth offset={-20} duration={600}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="work" smooth offset={-20} duration={600}>
                Work
              </Link>
            </li>
            <li>
              <Link to="certification" smooth offset={-20} duration={600}>
                Certification
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={600}>
                Contacts
              </Link>
            </li>
            <li>
              <span className={css.span}></span>
            </li>
          </ul>

          <div className={css.btnInnerDesk}>
            {/* <div className={css.themeContainer}>
              <button type="button" onClick={toggleBtn}>
                <svg width={24} height={24}>
                  <use href={`${sprite}#${isPressBtn ? "sun" : "moon"}`}></use>
                </svg>
              </button>
            </div> */}
            <button className={css.cvBtn} type="button">
              <a
                href="https://drive.google.com/file/d/1ELdQ5jl_lZvH8LoJ23Ql1K-gRVHop1Y3/view?usp=sharing"
                download
              >
                Download CV
              </a>
            </button>
          </div>
        </nav>

        <button className={css.openBtn} type="button" onClick={toggleMenu}>
          <svg width={30} height={30}>
            <use href={`${sprite}#${isMenuOpen ? "cross" : "burger"}`} />
          </svg>
        </button>
      </div>

      <nav className={`${css.mobileMenu} ${isMenuOpen ? css.open : ""}`}>
        <ul className={css.list}>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-20}
              duration={600}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              offset={-20}
              duration={600}
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              offset={-20}
              duration={600}
              onClick={closeMenu}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="certification"
              smooth={true}
              offset={-20}
              duration={600}
              onClick={closeMenu}
            >
              Certification
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-20}
              duration={600}
              onClick={closeMenu}
            >
              Contacts
            </Link>
          </li>
        </ul>
        <div className={css.btnInnerMobile}>
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
              href="https://drive.google.com/file/d/1ELdQ5jl_lZvH8LoJ23Ql1K-gRVHop1Y3/view?usp=sharing"
              target="_blank"
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
