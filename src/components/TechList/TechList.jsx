import css from "./TechList.module.scss";

import sprite from "../../img/sprite.svg";

const TechList = () => {
  return (
    <ul className={css.techList}>
      <li>
        <svg width={64} height={64}>
          <use href={`${sprite}#javascript`}></use>
        </svg>
        <p className={css.techName}>Javascript</p>
      </li>
      <li>
        <svg width={64} height={64}>
          <use href={`${sprite}#typescript`}></use>
        </svg>
        <p className={css.techName}>Typescript</p>
      </li>
      <li>
        <svg width={64} height={64}>
          <use href={`${sprite}#react`}></use>
        </svg>
        <p className={css.techName}>React</p>
      </li>
      <li>
        <svg width={64} height={64}>
          <use href={`${sprite}#nodejs`}></use>
        </svg>
        <p className={css.techName}>Node.js</p>
      </li>
      <li>
        <svg width={64} height={64}>
          <use href={`${sprite}#express`}></use>
        </svg>
        <p className={css.techName}>Express.js</p>
      </li>
      <li>
        <svg width={64} height={64}>
          <use href={`${sprite}#mongodb`}></use>
        </svg>
        <p className={css.techName}>MongoDB</p>
      </li>
      <li>
        <svg width={64} height={64}>
          <use href={`${sprite}#sass`}></use>
        </svg>
        <p className={css.techName}>Sass/Scss</p>
      </li>
      <li>
        <svg width={75} height={65}>
          <use href={`${sprite}#tailwindcss`}></use>
        </svg>
        <p className={css.techName}>Tailwindcss</p>
      </li>
      <li>
        <svg width={55} height={64}>
          <use href={`${sprite}#figma`}></use>
        </svg>
        <p className={css.techName}>Figma</p>
      </li>
      <li>
        <svg width={64} height={64}>
          <use href={`${sprite}#git`}></use>
        </svg>
        <p className={css.techName}>Git</p>
      </li>
    </ul>
  );
};

export default TechList;
