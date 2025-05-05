import css from "./About.module.scss";
import avatar from "../../img/avatar.png";

const About = () => {
  return (
    <section className={css.about}>
      <div className={css.inner}>
        <div className={css.aboutText}>
          <p>About me</p>
        </div>
        <div className={css.photoContainer}>
          <img className={css.photo} src={avatar} alt="Photo" />
        </div>
        <div className={css.aboutDesc}>
          <h2>Curious about me? Here you have it:</h2>
          <p className={css.ph}>
            I'm 17 years old and currently studying to become a computer
            engineer. I'm passionate about development and specialize in full
            stack development using React.js and Node.js. I care about building
            reliable and user-friendly digital products, and I strive to write
            clean, efficient, and high-performance code.
          </p>
          <p className={css.ph}>
            My interest in web development sparked in 2023, but I didn’t take my
            first real steps until 2024, after completing a course from GoIT.
            Since then, I’ve been focused on developing my skills with modern
            technologies like TypeScript, Node.js, and React. I'm currently
            working on personal projects to strengthen my knowledge and build a
            solid portfolio.
          </p>
          <p className={css.ph}>
            I consider myself a forward-thinking individual and take pleasure in
            working on products from start to finish, spanning ideation through
            to development.
          </p>
          <p className={css.ph}>
            In my free time, I enjoy staying active and spending time with
            friends. I love playing volleyball, which is a great way to stay fit
            and have fun in a team. I also enjoy cycling, as it’s a perfect way
            to explore new places. When I want to unwind, I go for walks with
            friends to chat and relax. And if I'm in the mood for some
            excitement, I dive into a game of CS2 for a bit of competition.
          </p>
          <h3>Lastly, here are a few quick things about me:</h3>
          <div className={css.listContainer}>
            <ul className={css.aboutList}>
              <li>
                <p>Traveler</p>
              </li>
              <li>
                <p>Sportsman</p>
              </li>
            </ul>
            <ul className={css.aboutList}>
              <li>
                <p>Problem-solver</p>
              </li>
              <li>
                <p>Adventurous</p>
              </li>
            </ul>
          </div>
          <p className={css.ph}>
            In a nutshell, I’m someone who thrives on creativity, enjoys
            challenges, and values both personal growth and meaningful
            connections. Always eager to learn and try new things, I’m
            passionate about making the most of every opportunity that comes my
            way. 😝
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
