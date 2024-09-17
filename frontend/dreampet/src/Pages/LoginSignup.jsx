import React from 'react'
import './css/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, I Agree to the Terms of Use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}
