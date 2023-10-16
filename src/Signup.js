import React from 'react'
import './Signup.css'
export default function Signup() {
  return (
    <div className='cont1'>
     <h1 align='center'>SignUp</h1>
        User Name:<input className='input' type='name' placeholder='Username..'/>
        Phone Number:<input className='input' type='number' placeholder='Number..'/>
        Email:<input className='input' type='mail' placeholder='Email..'/>
        Password:<input className='input' type='password' placeholder='Password..'/>
        Confirm Password:<input className='input' type='password' placeholder='Confirm Password..'/>
      <button className='bt'>
        SignUp
      </button>
    </div>
  )
}
