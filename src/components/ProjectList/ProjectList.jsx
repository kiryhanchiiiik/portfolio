import css from "./ProjectList.module.scss";
import rentalCar from "../../img/rentalCar.png";
import waterTracker from "../../img/waterTracker.png";
import phoneBook from "../../img/phoneBook.png";
import learnLingo from "../../img/learn-lingo.png";
import nannyServices from "../../img/nannyServices.jpg";
import gallery from "../../img/gallery.jpg";
import sprite from "../../img/sprite.svg";

const ProjectList = () => {
  return (
    <ul className={css.projList}>
      <li>
        <div className={css.imgContainer}>
          <img className={css.img} src={rentalCar} alt="Photo" />
        </div>
        <div className={css.descContainer}>
          <h4 className={css.descTitle}>Rental Car</h4>
          <p className={css.descPh}>
            Rental Car – a convenient car rental service with a fast booking
            system. Developed a web app using React, Redux Toolkit, Axios,
            Formik, Yup, and Vite. Implemented navigation (React Router), form
            validation, and notifications (React Toastify), ensuring a smooth
            user experience
          </p>
          <ul className={css.techList}>
            <li className={css.techListItem}>
              <p>React</p>
            </li>
            <li className={css.techListItem}>
              <p>Redux Toolkit</p>
            </li>
            <li className={css.techListItem}>
              <p>CSS</p>
            </li>
            <li className={css.techListItem}>
              <p>Axios</p>
            </li>
            <li className={css.techListItem}>
              <p>Formik</p>
            </li>
            <li className={css.techListItem}>
              <p>Vite</p>
            </li>
          </ul>
          <a
            className={css.link}
            href="https://rental-car-hddu.vercel.app/"
            target="_blank"
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#link`}></use>
            </svg>
          </a>
        </div>
      </li>
      <li className={css.projListChangeItem}>
        <div className={`${css.imgContainer} ${css.imgContainerReverse}`}>
          <img className={css.img} src={waterTracker} alt="Photo" />
        </div>
        <div className={`${css.descContainer} ${css.descContainerReverse}`}>
          <h4 className={css.descTitle}>Water Tracker</h4>
          <p className={css.descPh}>
            The project is built with React, Redux, and Redux Toolkit on the
            frontend. As a backend developer, I handled server-side logic, API
            development, and data storage. I focused on securely managing user
            data, tracking water intake, calculating hydration goals, and
            ensuring smooth communication between the frontend and backend
          </p>
          <ul className={css.techList}>
            <li className={css.techListItem}>
              <p>React</p>
            </li>
            <li className={css.techListItem}>
              <p>Redux Toolkit</p>
            </li>
            <li className={css.techListItem}>
              <p>Node.js</p>
            </li>
            <li className={css.techListItem}>
              <p>Express.js</p>
            </li>
            <li className={css.techListItem}>
              <p>CSS</p>
            </li>
            <li className={css.techListItem}>
              <p>Git</p>
            </li>
            <li className={css.techListItem}>
              <p>Figma</p>
            </li>
          </ul>
          <a
            className={css.link}
            href="https://water-tracker-sand.vercel.app/welcome"
            target="_blank"
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#link`}></use>
            </svg>
          </a>
        </div>
      </li>
      <li>
        <div className={css.imgContainer}>
          <img className={css.img} src={phoneBook} alt="Photo" />
        </div>
        <div className={css.descContainer}>
          <h4 className={css.descTitle}>PhoneBook</h4>
          <p className={css.descPh}>
            This project is a dynamic web application built using React, Redux
            Toolkit, JavaScript, offering a smooth and interactive user
            experience. It leverages modern web technologies to manage state
            efficiently and update the UI seamlessly, ensuring a responsive and
            engaging interface across various devices.
          </p>
          <ul className={css.techList}>
            <li className={css.techListItem}>
              <p>React</p>
            </li>
            <li className={css.techListItem}>
              <p>Redux Toolkit</p>
            </li>
            <li className={css.techListItem}>
              <p>CSS</p>
            </li>
            <li className={css.techListItem}>
              <p>Git</p>
            </li>
            <li className={css.techListItem}>
              <p>Figma</p>
            </li>
          </ul>
          <a
            className={css.link}
            href="https://goit-react-hw-08-three-orpin-47.vercel.app/"
            target="_blank"
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#link`}></use>
            </svg>
          </a>
        </div>
      </li>
      <li className={css.projListChangeItem}>
        <div className={`${css.imgContainer} ${css.imgContainerReverse}`}>
          <img className={css.img} src={learnLingo} alt="Photo" />
        </div>
        <div className={`${css.descContainer} ${css.descContainerReverse}`}>
          <h4 className={css.descTitle}>Learn Lingo</h4>
          <p className={css.descPh}>
            Learn Lingo is a modern web application designed to help language
            learners find and book lessons with qualified language teachers. The
            platform allows users to browse through available teachers, filter
            them by language, skill level, and price, mark favorites for easy
            access, and book trial lessons directly through the app.
          </p>
          <ul className={css.techList}>
            <li className={css.techListItem}>
              <p>React</p>
            </li>
            <li className={css.techListItem}>
              <p>TypeScript</p>
            </li>
            <li className={css.techListItem}>
              <p>Redux Toolkit</p>
            </li>
            <li className={css.techListItem}>
              <p>React Toastify</p>
            </li>
            <li className={css.techListItem}>
              <p>SCSS</p>
            </li>
            <li className={css.techListItem}>
              <p>Git</p>
            </li>
            <li className={css.techListItem}>
              <p>Axios</p>
            </li>
            <li className={css.techListItem}>
              <p>Firebase</p>
            </li>
            <li className={css.techListItem}>
              <p>React Router DOM</p>
            </li>
            <li className={css.techListItem}>
              <p>React Hook Form</p>
            </li>
          </ul>
          <a
            className={css.link}
            href="https://learn-lingo-lyart.vercel.app/"
            target="_blank"
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#link`}></use>
            </svg>
          </a>
        </div>
      </li>
      <li>
        <div className={css.imgContainer}>
          <img className={css.img} src={nannyServices} alt="Photo" />
        </div>
        <div className={css.descContainer}>
          <h4 className={css.descTitle}>Nanny Services</h4>
          <p className={css.descPh}>
            Nanny Services is a web application built with TypeScript and React
            using Firebase, allowing parents to find and book professional
            nannies based on filters like experience, price, and location,
            featuring email authentication, editable user profiles, detailed
            nanny pages, a booking system, admin panel, and technologies such as
            Redux Toolkit, SCSS, React Hook Form, and React Router DOM.
          </p>
          <ul className={css.techList}>
            <li className={css.techListItem}>
              <p>React</p>
            </li>
            <li className={css.techListItem}>
              <p>TypeScript</p>
            </li>
            <li className={css.techListItem}>
              <p>Vite</p>
            </li>
            <li className={css.techListItem}>
              <p>Redux Toolkit</p>
            </li>
            <li className={css.techListItem}>
              <p>FireBase</p>
            </li>
            <li className={css.techListItem}>
              <p>React Router DOM</p>
            </li>
            <li className={css.techListItem}>
              <p>React Hook Form</p>
            </li>
            <li className={css.techListItem}>
              <p>SCSS</p>
            </li>
            <li className={css.techListItem}>
              <p>Git</p>
            </li>
            <li className={css.techListItem}>
              <p>Figma</p>
            </li>
          </ul>
          <a
            className={css.link}
            href="https://nanny-services-xi.vercel.app/"
            target="_blank"
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#link`}></use>
            </svg>
          </a>
        </div>
      </li>
      <li className={css.projListChangeItem}>
        <div className={`${css.imgContainer} ${css.imgContainerReverse}`}>
          <img className={css.img} src={gallery} alt="Photo" />
        </div>
        <div className={`${css.descContainer} ${css.descContainerReverse}`}>
          <h4 className={css.descTitle}>Gallery</h4>
          <p className={css.descPh}>
            Gallery is an interactive web application built with React,
            TypeScript, and modern frontend development practices. It features
            image search by keywords with results displayed in a gallery layout.
            Clicking on an image opens it in full-screen mode, with a strong
            focus on user experience (UX).
          </p>
          <ul className={css.techList}>
            <li className={css.techListItem}>
              <p>React</p>
            </li>
            <li className={css.techListItem}>
              <p>TypeScript</p>
            </li>
            <li className={css.techListItem}>
              <p>CSS</p>
            </li>
            <li className={css.techListItem}>
              <p>Git</p>
            </li>
            <li className={css.techListItem}>
              <p>Axios</p>
            </li>
          </ul>
          <a
            className={css.link}
            href="https://goit-typescript-hw-02-azure-two.vercel.app/"
            target="_blank"
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#link`}></use>
            </svg>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default ProjectList;
