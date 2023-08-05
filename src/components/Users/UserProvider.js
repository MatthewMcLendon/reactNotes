import UserForm from "./UserForm";
import { useNavigate } from "react-router-dom";

export default function UserProvider() {
  const navigate = useNavigate();

  const logInUser = (user) => {
    localStorage.setItem("user", user.id);
    navigate("/");
  };

  const logOutUser = () => {
    localStorage.removeItem("user");
  };

  const getUser = (user) => {
    return fetch(`http://localhost:8088/users/`)
      .then((response) => response.json())
      .then((response) =>
        response.find(
          (element) =>
            element.password === user.password &&
            element.username === user.username
        )
      );
  };

  const addUser = (user) => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(logInUser(user));
  };

  return <UserForm addUser={addUser} getUser={getUser} logInUser={logInUser} />;
}
