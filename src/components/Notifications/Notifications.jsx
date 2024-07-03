const Notifications = ({ type, msg }) =>
  type === "error" ? (
    <p>Something goes wrong: {msg}</p>
  ) : (
    <p>Information: {msg}</p>
  );

export default Notifications;
