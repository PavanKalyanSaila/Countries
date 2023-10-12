import React from 'react'
import './Food.css'
import { Link, Route ,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Biryani from './Biryani';
function Food() {
  return (
    <body>
    <marquee><h1 className='h' >Countries info</h1></marquee>
    <div className='tags'>
        <div>
          <center>
           <h1>Countries</h1>
           </center>
        </div>
    </div>
    <div className='con1'>
        
       <Link to={"/bry"} className='l'>
        <div className='con2'> 
           
        </div>
        </Link>
    </div>
    </body>
  )
}

export default Food
