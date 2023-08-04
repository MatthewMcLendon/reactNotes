import UserForm from "./UserForm";

export default function UserProvider(props) {
  //   Get, post, delete, update routes. Provide to form. Notes and calendar will sort by logged in user.
  //   Logged in user saved to local storage. On logout, clear local storage.

  //   Post route: add new user to database, set local storage logged in.

  const logInUser = (user) => {
    localStorage.setItem("user", user.id);
  };

  const logOutUser = () => {
    localStorage.removeItem("user");
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

  return <UserForm addUser={addUser} />;
}
