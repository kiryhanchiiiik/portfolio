import css from "./Certification.module.scss";
import cert from "../../img/cert.jpg";

const Certification = () => {
  return (
    <section className={css.cert}>
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
        </div>
      </div>
    </section>
  );
};

export default Certification;
