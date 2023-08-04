import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserForm({ addUser }) {
  let [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSignUp = async () => {
    console.log("User form submit");

    const newUser = {
      username: document.querySelector("#username").value,
      password: document.querySelector("#password").value,
    };

    let check = await newUsernameCheck(newUser);
    console.log(check);

    if (check) {
      setError();
      console.log(error);
      addUser(newUser);
      resetForm();
      navigate("/");
    } else {
      setError("Username already taken. Please select another.");
      console.log("duplicate username");
    }
  };

  const newUsernameCheck = async (newUser) => {
    let users;
    let result;

    await fetch(`http://localhost:8088/users/`)
      .then((response) => response.json())
      .then((response) => (users = response));

    users.map((user) => {
      if (user.username === newUser.username) {
        return (result = false);
      }
      return (result = true);
    });

    return result;
  };

  const resetForm = () => {
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="hidden" />
        <span>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" required />
        </span>
        <span>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" required />
        </span>
        <span>
          <button onClick={handleSignUp}>Sign up</button>
        </span>
      </form>
      <p>{error}</p>
    </>
  );
}

// continue here. Add user to db, check if valid, save to local storage.
