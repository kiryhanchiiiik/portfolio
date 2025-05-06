import css from "./ProjectList.module.scss";
import picture from "../../img/Picture.png";
import sprite from "../../img/sprite.svg";

const ProjectList = () => {
  return (
    <ul className={css.projList}>
      <li>
        <div className={css.imgContainer}>
          <img src={picture} alt="Photo" />
        </div>
        <div className={css.descContainer}>
          <h4 className={css.descTitle}>Fiskil</h4>
          <p className={css.descPh}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <ul className={css.techList}>
            <li className={css.techListItem}>
              <p>React</p>
            </li>
            <li className={css.techListItem}>
              <p>Next.js</p>
            </li>
            <li className={css.techListItem}>
              <p>TypeScript</p>
            </li>
            <li className={css.techListItem}>
              <p>SCSS</p>
            </li>
            <li className={css.techListItem}>
              <p>Tailwind</p>
            </li>
            <li className={css.techListItem}>
              <p>Git</p>
            </li>
          </ul>
          <a href="#">
            <svg width={24} height={24}>
              <use href={`${sprite}#link`}></use>
            </svg>
          </a>
        </div>
      </li>
      <li>
        <div className={css.imgContainer}>
          <img src={picture} alt="Photo" />
        </div>
        <div className={css.descContainer}>
          <h4 className={css.descTitle}>Fiskil</h4>
          <p className={css.descPh}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <ul className={css.techList}>
            <li className={css.techListItem}>
              <p>React</p>
            </li>
            <li className={css.techListItem}>
              <p>Next.js</p>
            </li>
            <li className={css.techListItem}>
              <p>TypeScript</p>
            </li>
            <li className={css.techListItem}>
              <p>SCSS</p>
            </li>
            <li className={css.techListItem}>
              <p>Tailwind</p>
            </li>
            <li className={css.techListItem}>
              <p>Git</p>
            </li>
          </ul>
          <a href="#">
            <svg width={24} height={24}>
              <use href={`${sprite}#link`}></use>
            </svg>
          </a>
        </div>
      </li>
      <li>
        <div className={css.imgContainer}>
          <img src={picture} alt="Photo" />
        </div>
        <div className={css.descContainer}>
          <h4 className={css.descTitle}>Fiskil</h4>
          <p className={css.descPh}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <ul className={css.techList}>
            <li className={css.techListItem}>
              <p>React</p>
            </li>
            <li className={css.techListItem}>
              <p>Next.js</p>
            </li>
            <li className={css.techListItem}>
              <p>TypeScript</p>
            </li>
            <li className={css.techListItem}>
              <p>SCSS</p>
            </li>
            <li className={css.techListItem}>
              <p>Tailwind</p>
            </li>
            <li className={css.techListItem}>
              <p>Git</p>
            </li>
          </ul>
          <a href="#">
            <svg width={24} height={24}>
              <use href={`${sprite}#link`}></use>
            </svg>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default ProjectList;
