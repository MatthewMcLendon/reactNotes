import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    user ? setIsLoggedIn(true) : logOutUser();

    window.addEventListener("userLogin", () => {
      setIsLoggedIn(true);
    });
  }, []);

  const logOutUser = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  const loggedInView = (
    <>
      <li>
        <Link to={"/notes"}>Notes</Link>
      </li>
      <li>
        <Link to={"/calendar"}>Calendar</Link>
      </li>
      <li>
        <p onClick={logOutUser}>Logout</p>
      </li>
    </>
  );

  return (
    <nav>
      <ul className="flex align-center">
        <li>
          <h2>Planner</h2>
        </li>
        {isLoggedIn ? (
          loggedInView
        ) : (
          <li>
            <Link to={"/users"}>Log In or Sign up</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
