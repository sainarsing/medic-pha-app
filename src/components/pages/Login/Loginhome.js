import React, { useContext, useEffect, useState } from "react";
// import Hearder from "../header/hearder";
// import { Loginhearder } from "../header/hearder";
import { logincontext } from "../../../App";
import axios from "axios";
import Loginnav from "../../Navbar/loginnav";
// import styles from "../cssfiles/login.module.css"
import styles from "./Login.module.css"
import { Link } from "react-router-dom";
function Loginpage() {
  const[userdata,setuserdata]=useState([])      //state for getting data from the api
  const checker=useContext(logincontext)          //data from the parent app.js setted to checker
 const [username,setusername]=useState("")       //user data from the form 
  const userhandler=(event)=>{
      setusername(event.target.value)
  }
const [password,setpassword]=useState("")       //user password data from the from
 const passwordhandler=(event)=>{
  setpassword(event.target.value);
 }

 useEffect(()=>{
  axios.get("https://medic-data.onrender.com/api/users").then((res)=>setuserdata(res.data))
 },[])
 


 const submithandler=(event)=>{                   //evaluating the our and api data
  event.preventDefault()
  if(userdata.find((person) => person.username === username)&& userdata.find((person) => person.password === password)){
    checker.setlogin1()
  }
  else{
    alert("plz enter right details")
  }

 }
  return (
<div className={styles.container}>
      <Loginnav />
      <div className={styles.loginContainer}>
      <h2 className={styles.loginHeading}>Login</h2>
        <form className={styles.form} onSubmit={submithandler}>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => userhandler(event)}
            className={styles.inputField}
          />
          <label className={styles.label}>Password</label>
          <input
            type="password"  
            value={password}
            onChange={(event) => passwordhandler(event)}
            className={styles.inputField}
          />
          <input type="submit" className={styles.submitButton} />
        

          <div className={styles.registrationSection}>
            <p className={styles.registerLabel}>Don't have an account?</p>
            <Link to={"/Register"}> <button className={styles.registerButton}>Register</button></Link>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Loginpage;
