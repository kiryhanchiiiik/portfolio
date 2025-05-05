import css from "./Description.module.scss";
import sprite from "../../img/sprite.svg";
import avatar from "../../img/avatar.png";
import light from "../../img/light.png";

const Description = () => {
  return (
    <section className={css.container}>
      <div className={css.photoContainer}>
        <img className={css.photo} src={avatar} alt="Photo" />
      </div>
      <div className={css.desc}>
        <h1 className={css.greet}>Hi, I’m Kyryl 👋</h1>
        <p className={css.about}>
          I'm a budding full stack developer (React.js & Node.js) with about a
          year of hands-on learning and practice. I'm passionate about building
          modern, fast, accessible, and responsive web applications. Even though
          I'm still early in my journey, I truly enjoy the process of creating
          user-friendly and visually appealing interfaces, while also diving
          into how things work behind the scenes on the backend.
        </p>
        <div className={css.location}>
          <p>
            <svg width={24} height={24}>
              <use href={`${sprite}#location`}></use>
            </svg>
            Siauliai, Lithuania
          </p>
          <p>
            <img src={light} alt="light" />
            Available for new projects
          </p>
        </div>
        <div className={css.socials}>
          <a
            className={css.link}
            href="https://www.linkedin.com/in/kyryl-shchabelskyi/"
          >
            <svg className={css.svg} width={24} height={24}>
              <use href={`${sprite}#linkedin`}></use>
            </svg>
          </a>
          <a
            className={css.link}
            href="https://github.com/kiryhanchiiiik?tab=repositories"
          >
            <svg className={css.svg} width={24} height={24}>
              <use href={`${sprite}#github`}></use>
            </svg>
          </a>
          <a
            className={css.link}
            href="https://discord.com/users/428491636889223189"
          >
            <svg className={css.svg} width={24} height={24}>
              <use href={`${sprite}#discord`}></use>
            </svg>
          </a>
          <a
            className={css.link}
            href="https://www.instagram.com/kiryhanchiiiik/"
          >
            <svg className={css.svg} width={24} height={24}>
              <use href={`${sprite}#instagram`}></use>
            </svg>
          </a>
          <a className={css.link} href="https://t.me/shchabelskyii">
            <svg className={css.svg} width={24} height={24}>
              <use href={`${sprite}#telegram`}></use>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Description;
