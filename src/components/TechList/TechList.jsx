import css from "./TechList.module.scss";

import sprite from "../../img/sprite.svg";

const TechList = () => {
  return (
    <ul className={css.techList}>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
          <svg width={64} height={64}>
            <use href={`${sprite}#javascript`}></use>
          </svg>
        </a>
        <p className={css.techName}>Javascript</p>
      </li>
      <li>
        <a
          href="https://www.w3schools.com/typescript/typescript_intro.php"
          target="_blank"
        >
          <svg width={64} height={64}>
            <use href={`${sprite}#typescript`}></use>
          </svg>
        </a>
        <p className={css.techName}>Typescript</p>
      </li>
      <li>
        <a href="https://react.dev/" target="_blank">
          <svg width={64} height={64}>
            <use href={`${sprite}#react`}></use>
          </svg>
        </a>
        <p className={css.techName}>React</p>
      </li>
      <li>
        <a href="https://nodejs.org/en" target="_blank">
          <svg width={64} height={64}>
            <use href={`${sprite}#nodejs`}></use>
          </svg>
        </a>
        <p className={css.techName}>Node.js</p>
      </li>
      <li>
        <a href="https://expressjs.com/" target="_blank">
          <svg width={64} height={64}>
            <use href={`${sprite}#express`}></use>
          </svg>
        </a>
        <p className={css.techName}>Express.js</p>
      </li>
      <li>
        <a href="https://www.mongodb.com/" target="_blank">
          <svg width={64} height={64}>
            <use href={`${sprite}#mongodb`}></use>
          </svg>
        </a>
        <p className={css.techName}>MongoDB</p>
      </li>
      <li>
        <a href="https://sass-lang.com/" target="_blank">
          <svg width={64} height={64}>
            <use href={`${sprite}#sass`}></use>
          </svg>
        </a>
        <p className={css.techName}>Sass/Scss</p>
      </li>
      <li>
        <a href="https://tailwindcss.com/" target="_blank">
          <svg width={75} height={65}>
            <use href={`${sprite}#tailwindcss`}></use>
          </svg>
        </a>
        <p className={css.techName}>Tailwindcss</p>
      </li>
      <li>
        <a href="https://www.figma.com/" target="_blank">
          <svg width={55} height={64}>
            <use href={`${sprite}#figma`}></use>
          </svg>
        </a>
        <p className={css.techName}>Figma</p>
      </li>
      <li>
        <a href="https://git-scm.com/" target="_blank">
          <svg width={64} height={64}>
            <use href={`${sprite}#git`}></use>
          </svg>
        </a>
        <p className={css.techName}>Git</p>
      </li>
    </ul>
  );
};

export default TechList;
