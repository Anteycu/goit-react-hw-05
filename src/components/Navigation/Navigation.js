import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import "./Navigation.css";

export function Navigation() {
  return (
    <>
      <span>Welcome on Navigation component</span>
      <ul className={"Navigation-list"}>
        <li>
          <NavLink className={"Navigation"} exact to={routes.home}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={"Navigation"} to={routes.moviesPage}>
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
}

// export function NavigationMovieDetails() {
//   return (
//     <ul>
//       <li>
//         <NavLink exact to={routes.cast}>
//           Cast
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to={routes.reviews}>Reviews</NavLink>
//       </li>
//     </ul>
//   );
// }

// Button.propTypes = {
//   handleFetch: PropTypes.func,
// };
