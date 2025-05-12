import css from "./ProjectList.module.scss";
import rentalCar from "../../img/rentalCar.png";
import waterTracker from "../../img/waterTracker.png";
import phoneBook from "../../img/phoneBook.png";
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
          <a href="https://rental-car-hddu.vercel.app/">
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
          <a href="https://water-tracker-sand.vercel.app/welcome">
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
          <a href="https://goit-react-hw-08-three-orpin-47.vercel.app/">
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
