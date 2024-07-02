import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div className="container">
    <ul>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/movies"}>Movies</NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
