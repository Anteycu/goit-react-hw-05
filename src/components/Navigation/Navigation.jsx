import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const navLinkClassBuilder = ({ isActive }) => {
  return clsx(s.navLink, isActive && s.active);
};

const Navigation = () => (
  <nav className={s.nav}>
    <div className="container">
      <ul className={s.navList}>
        <li>
          <NavLink to={"/"} className={navLinkClassBuilder}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/movies"} className={navLinkClassBuilder}>
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
