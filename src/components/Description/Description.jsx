import css from "./Description.module.scss";
import avatar from "../../assets/avatar.png";
import locationPhoto from "../../assets/location.svg";
import light from "../../assets/light.png";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
import figma from "../../assets/figma.svg";

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
          <a href="#">
            <img src={github} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={figma} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Description;
