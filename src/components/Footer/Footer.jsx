import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.logoContainer}>
        <a href="#">&lt;kiryhanchik /&gt;</a>
        <p>Be always kind ❤</p>
      </div>
    </footer>
  );
};

export default Footer;
