import React, { useState } from 'react'
import FormGroup from '../component/FormGroup'
import { Link, useNavigate } from "react-router"
import "../style/register.scss"
import { useAuth } from '../hooks/useAuth'


const Register = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");

  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate();
  
  async function handleSubmit(e){
    e.preventDefault();

    await handleRegister({username, password, email});
    navigate("/")

  };



  return (
    <main className='register-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup value={username} onChange={(e) => { setusername(e.target.value) }} label="Name" placeholder="Enter your name"></FormGroup>
          <FormGroup value={email} onChange={(e) => { setEmail(e.target.value) }} label="Email" placeholder="Enter your email"></FormGroup>
          <FormGroup value={password} onChange={(e) => { setPassword(e.target.value) }} label="Password" placeholder="Enter your password"></FormGroup>
          <button className='button'>Register</button>
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </form>
      </div>
    </main>
  )
}

export default Register