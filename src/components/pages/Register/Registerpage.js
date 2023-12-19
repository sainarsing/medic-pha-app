import React, { useState } from "react";
import Loginnav from "../../Navbar/loginnav";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

function Signuppage() {
  const [email, setemail] = useState("");
  const emailHandler = (event) => {
    setemail(event.target.value);
  };
  const [confirmPassword, setconfirmPassword] = useState("");
  const confirmPasswordHandler = (event) => {
    setconfirmPassword(event.target.value);
  };
  const [username, setusername] = useState("");
  const userhandler = (event) => {
    setusername(event.target.value);
  };
  const [password, setpassword] = useState("");
  const passwordhandler = (event) => {
    setpassword(event.target.value);
  };

  return (
    <>
      <Loginnav></Loginnav>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2 className={styles.heading}>Create an Account</h2>
          <p className={styles.details}>Join us to access exclusive features and services.</p>
          <form
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              const details = {
                id: new Date().getTime(),
                username,
                password,
              };
              console.log(details);
              if (details.username && details.password) {
              const data = JSON.stringify(details);
              fetch("https://medic-data.onrender.com/api/users", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: data,
              });
              alert("Customer added!");
              setusername("");
              setpassword("");
              setemail("");
              setconfirmPassword("");
              
            }
            else {
              alert("Please fill in all details before submitting.");
            }
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(event) => userhandler(event)}
              className={styles.inputField}
            ></input>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => emailHandler(event)}
              className={styles.inputField}
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => passwordhandler(event)}
              className={styles.inputField}
            ></input>
            <input
              type="text"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => confirmPasswordHandler(event)}
              className={styles.inputField}
            ></input>
            <input type="submit" className={styles.submitButton}></input>
          
            <Link to="/" className={styles.goBackLink}>
              Go back to Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signuppage;
