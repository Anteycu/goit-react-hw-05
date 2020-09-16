import React from "react";
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
