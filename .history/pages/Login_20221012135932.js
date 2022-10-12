import React, { useState } from "react";
import Header from "../components/Header";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="rounded-md">
            <label>Username </label>
            <input type="text" name="uname" required />
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="rounded-md">
            <label>Password </label>
            <input type="password" name="pass" required />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <div className="rounded-md">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

const database = [
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
];

const errors = {
  uname: "invalid username",
  pass: "invalid password",
};
