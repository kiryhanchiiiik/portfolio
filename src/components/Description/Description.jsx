import css from "./Description.module.scss";
import avatar from "../../assets/avatar.png";
import locationPhoto from "../../assets/location.svg";
import light from "../../assets/light.png";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import discord from "../../assets/discord.svg";
import telegram from "../../assets/telegram.svg";

const Description = () => {
  return (
    <div className={css.container}>
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
            <img src={locationPhoto} alt="Location" /> Siauliai, Lithuania
          </p>
          <p>
            <img src={light} alt="light" />
            Available for new projects
          </p>
        </div>
        <div className={css.socials}>
          <a href="https://www.linkedin.com/in/kyryl-shchabelskyi/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/kiryhanchiiiik?tab=repositories">
            <img src={github} alt="" />
          </a>
          <a href="https://discord.com/users/428491636889223189">
            <img src={discord} alt="" />
          </a>
          <a href="https://www.instagram.com/kiryhanchiiiik/">
            <img src={instagram} alt="" />
          </a>
          <a href="https://t.me/shchabelskyii">
            <img src={telegram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Description;
