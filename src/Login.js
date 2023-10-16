import React from 'react'
import './Login.css'
function Login() {
  return (
    <>
    <div className='container'>
        <h1 align='center'>Login</h1>
        User Name:<input className='input' type='name' placeholder='Username..'/>
        Password:<input className='input' type='password' placeholder='Password..'/>
      <button className='bt'>
        Login
      </button>
      <a align='center' className='p' href='#'>Forgot Password?</a>
    </div>
    
    </>
  )
}

export default Login
