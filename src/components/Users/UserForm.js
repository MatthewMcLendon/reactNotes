import { useState } from "react";

export default function UserForm({ addUser, getUser, logInUser }) {
  let [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleLogIn = async () => {
    const user = getFormData();
    let testUser = await getUser(user);
    if (!testUser) {
      setError("Something went wrong. Please try again.");
      return;
    }
    logInUser(testUser);
  };

  const handleSignUp = async () => {
    const newUser = getFormData();

    let check = await newUsernameCheck(newUser);

    if (check) {
      setError();
      resetForm();
      await addUser(newUser);
      let user = await getUser(newUser);
      logInUser(user);
    } else {
      setError("Username already taken. Please select another.");
    }
  };

  const getFormData = () => {
    const form = {
      username: document.querySelector("#username").value,
      password: document.querySelector("#password").value,
    };
    return form;
  };

  const newUsernameCheck = async (newUser) => {
    let result;

    let users = await fetch(`http://localhost:8088/users/`).then((response) =>
      response.json()
    );

    users.find((user) => user.username === newUser.username)
      ? (result = false)
      : (result = true);

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
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" required />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" required />
        </fieldset>
        <fieldset>
          <button onClick={handleSignUp}>Sign up</button>
          <button onClick={handleLogIn}>Log in</button>
        </fieldset>
      </form>
      <p>{error}</p>
    </>
  );
}
