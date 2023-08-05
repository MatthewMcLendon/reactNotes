import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  // const user = localStorage.getItem("user");

  // useEffect(() => {
  //   if (user) {
  //     setIsLoggedIn(true);
  //   } else {
  //     logOutUser();
  //   }
  // }, [user]);

  // const logOutUser = () => {
  //   localStorage.clear();
  //   setIsLoggedIn(false);
  // };

  return (
    <nav>
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
          {/* {isLoggedIn ? (
            <button onClick={logOutUser}>Logout</button>
          ) : ( */}
          <Link to={"/users"}>Log In or Sign up</Link>
          {/* )} */}
        </li>
      </ul>
    </nav>
  );
}
