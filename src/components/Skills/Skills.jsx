import css from "./Skills.module.scss";
import sprite from "../../img/sprite.svg";

const Skills = () => {
  return (
    <section className={css.skills}>
      <div className={css.inner}>
        <div className={css.skillsText}>
          <p>Skills</p>
        </div>
        <p className={css.ph}>
          The skills, tools and technologies I am really good at:
        </p>

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
      </div>
    </section>
  );
};

export default Skills;
