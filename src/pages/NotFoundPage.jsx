import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <p>Page with this address not found</p>
    <Link to={"/"}>Home Page</Link>
  </div>
);
export default NotFoundPage;
