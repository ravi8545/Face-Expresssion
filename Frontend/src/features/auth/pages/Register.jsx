import React from 'react'
import FormGroup from '../component/FormGroup'
import { Link } from "react-router"
import "../style/register.scss"
const Register = () => {
  return (
    <main className='register-page'>
      <div className="form-container">
           <h1>Register</h1>
        <form>
          <FormGroup label="Name" placeholder="Enter your name"></FormGroup>
          <FormGroup label="Email" placeholder="Enter your email"></FormGroup>
          <FormGroup label="Password" placeholder="Enter your password"></FormGroup>
          <button className='button'>Register</button>
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </form>
      </div>
    </main>
  )
}

export default Register