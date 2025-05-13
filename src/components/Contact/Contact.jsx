import { toast } from "react-hot-toast";
import css from "./Contact.module.scss";
import sprite from "../../img/sprite.svg";

const Contact = () => {
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Copy to clipboard"));
  };

  return (
    <section id="contact" className={css.contact}>
      <div className={css.inner}>
        <div className={css.contactText}>
          <p>Get in touch</p>
        </div>
        <p className={css.contactDesc}>
          My contacts – I'm always open to job opportunities and new
          collaborations.
        </p>
        <address className={css.contacts}>
          <div className={css.contactsLinks}>
            <svg width={24} height={24}>
              <use href={`${sprite}#post`}></use>
            </svg>
            <p className={css.contactLink}>kirillsabelkijk@gmail.com</p>
            <button
              className={css.copyBtn}
              onClick={() => handleCopy("kirillsabelkijk@gmail.com")}
            >
              <svg width={24} height={24}>
                <use href={`${sprite}#copy`}></use>
              </svg>
            </button>
          </div>

          <div className={css.contactsLinks}>
            <svg width={24} height={24}>
              <use href={`${sprite}#phone`}></use>
            </svg>
            <p className={css.contactLink}> +370 684 25 972</p>
            <button
              className={css.copyBtn}
              onClick={() => handleCopy("+370 684 25 972")}
            >
              <svg width={24} height={24}>
                <use href={`${sprite}#copy`}></use>
              </svg>
            </button>
          </div>
        </address>

        <p>You may also find me on these platforms!</p>
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

export default Contact;
