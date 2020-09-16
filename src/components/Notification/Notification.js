import React from "react";
import PropTypes from "prop-types";
import "./Notification.css";

export function Notification({ message }) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  return (
    <>
      <div className="Container">
        <h1 className="Notification">{message}</h1>
      </div>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};
