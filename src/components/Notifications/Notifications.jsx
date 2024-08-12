import s from "./Notifications.module.css";

const Notifications = ({ type, msg }) =>
  type === "error" ? (
    <p className={s.msg}>Something goes wrong: {msg}</p>
  ) : (
    <p className={s.msg}>Information: {msg}</p>
  );

export default Notifications;
