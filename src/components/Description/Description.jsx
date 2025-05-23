import css from "./Description.module.scss";
import sprite from "../../img/sprite.svg";
import avatar from "../../img/avatar.png";

const Description = () => {
  return (
    <section className={css.description}>
      <div className={css.container}>
        <div className={css.photoContainer}>
          <img className={css.photo} src={avatar} alt="Photo" />
        </div>
        <div className={css.desc}>
          <h1 className={css.greet}>
            Hi, I’m Kyryl<span className={css.wave}>👋</span>
          </h1>

          <p className={css.about}>
            I'm a budding full stack developer (React.js & Node.js) with about a
            year of hands-on learning and practice. I'm passionate about
            building modern, fast, accessible, and responsive web applications.
            Even though I'm still early in my journey, I truly enjoy the process
            of creating user-friendly and visually appealing interfaces, while
            also diving into how things work behind the scenes on the backend.
          </p>
          <div className={css.location}>
            <p>
              <svg width={24} height={24}>
                <use href={`${sprite}#location`}></use>
              </svg>
              Siauliai, Lithuania
            </p>
            <p className={css.status}>
              <span className={css.pingWrapper}>
                <span className={css.ping}></span>
                <svg className={css.svgLight} width={12} height={12}>
                  <use href={`${sprite}#dot`}></use>
                </svg>
              </span>
              Available for new projects
            </p>
          </div>
          <div className={css.socials}>
            <a
              className={css.link}
              href="https://www.linkedin.com/in/kyryl-shchabelskyi/"
              target="_blank"
            >
              <svg className={css.svg} width={24} height={24}>
                <use href={`${sprite}#linkedin`}></use>
              </svg>
            </a>
            <a
              className={css.link}
              href="https://github.com/kiryhanchiiiik?tab=repositories"
              target="_blank"
            >
              <svg className={css.svg} width={24} height={24}>
                <use href={`${sprite}#github`}></use>
              </svg>
            </a>
            <a
              className={css.link}
              href="https://discord.com/users/428491636889223189"
              target="_blank"
            >
              <svg className={css.svg} width={24} height={24}>
                <use href={`${sprite}#discord`}></use>
              </svg>
            </a>
            <a
              className={css.link}
              href="https://www.instagram.com/kiryhanchiiiik/"
              target="_blank"
            >
              <svg className={css.svg} width={24} height={24}>
                <use href={`${sprite}#instagram`}></use>
              </svg>
            </a>
            <a
              className={css.link}
              href="https://t.me/shchabelskyii"
              target="_blank"
            >
              <svg className={css.svg} width={24} height={24}>
                <use href={`${sprite}#telegram`}></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
