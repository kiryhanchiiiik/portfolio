import ProjectList from "../ProjectList/ProjectList";
import css from "./Work.module.scss";

const Work = () => {
  return (
    <section className={css.work}>
      <div className={css.inner}>
        <div className={css.workText}>
          <p>Work</p>
        </div>
        <p className={css.ph}>Some of the noteworthy projects I have built:</p>
        <ProjectList />
      </div>
    </section>
  );
};

export default Work;
