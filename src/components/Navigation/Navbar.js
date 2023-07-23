import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h2>Planner</h2>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/notes"}>Notes</Link>
        </li>
        <li>
          <Link to={"/calendar"}>Calendar</Link>
        </li>
        <li>
          <Link to={"/users"}>Log In</Link>
        </li>
      </ul>
    </div>
  );
}
