import css from "./About.module.scss";
import avatar from "../../assets/avatar.png";
import locationPhoto from "../../assets/location.svg";
import light from "../../assets/light.png";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
import figma from "../../assets/figma.svg";

const About = () => {
  return (
    <div className={css.container}>
      <div className={css.photoContainer}>
        <img className={css.photo} src={avatar} alt="Photo" />
      </div>
      <div className={css.desc}>
        <h1 className={css.greet}>Hi, I’m Kyryl 👋</h1>
        <p className={css.about}>
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
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

export default About;
