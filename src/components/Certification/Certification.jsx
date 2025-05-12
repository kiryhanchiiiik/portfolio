import css from "./Certification.module.scss";
import cert from "../../img/cert.jpg";

const Certification = () => {
  return (
    <section id="certification" className={css.cert}>
      <div className={css.inner}>
        <div className={css.certText}>
          <p>Certification</p>
        </div>
        <p className={css.certTitle}>My Certificates:</p>
        <div className={css.certInner}>
          <a href="https://drive.google.com/file/d/1X-71YbFZA1ZM_3l77Q1wXKGAAEC-VFQS/view?usp=sharing">
            <img src={cert} alt="Certification" />
          </a>
          <p>GoIT School Certificate😎</p>
          <p className={css.ph}>
            GoIT is a modern programming school that has been on the market for
            over 9 years.💯 During this time, they have trained thousands of
            students in Full Stack, Frontend, and Backend development.😁 I
            completed their intensive 10-month Full Stack Development course,
            where I learned HTML, CSS, JavaScript, React, and Node.js, and
            gained hands-on experience through real team projects.🙌
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certification;
