import React, { useState } from 'react'
import './style.css';
export function Content(){
    const [num,setNum]=useState(0)
  return (
    <body className='bd'>
    <div className='d'>
        <center>
      {/* <h1 style={{color:'blue'}}>Count : {num}</h1>
      <button  style={{backgroundColor:'lightgreen' }}onClick={()=>{setNum(num+1)}}>Increment</button>
      <button style={{backgroundColor:'pink' }}onClick={()=>{setNum(num-1)}}>Decrement</button><br></br><br></br> */}
      <h1>Login</h1>
      <form  className='f'style={{color:'red'}}><br></br>
        Enter UserName:&nbsp;&nbsp;&nbsp;<input className='in' type='text'/><br></br><br></br>
        Enter Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className='in'type='text'/><br></br><br></br>
        <button className='bt'>Login</button>
        <button className='bt'>signup</button>
      </form>
      </center>
    </div>
    </body>
  )
}
