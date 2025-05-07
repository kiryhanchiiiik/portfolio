import css from "./Skills.module.scss";
import TechList from "../TechList/TechList";

const Skills = () => {
  return (
    <section id="skills" className={css.skills}>
      <div className={css.inner}>
        <div className={css.skillsText}>
          <p>Skills</p>
        </div>
        <p className={css.ph}>
          The skills, tools and technologies I am really good at:
        </p>
        <TechList />
      </div>
    </section>
  );
};

export default Skills;
