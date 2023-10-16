import React from 'react'
import './Countries.css'
import { Link, Route ,Routes} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import CountrySearch from './CountrySearch';
function Countries() {
  return (
    <body>
    <div className='tags'>
          <div className='tags1'>
          <Link to={"/bry"} >
              <button>Home</button>
              </Link>
              <Link to={'/about'}>
              <button>About</button>
            </Link>
            <Link to={'/contact'}>
              <button>Contact</button>
            </Link>
          </div>

          <div className='tags2'>
            <Link to={'/login'}>
              <button>Login</button>
              </Link>
              <Link to={'/signup'}>
              <button>SignUp</button>
              </Link>
          </div>
    </div>
    <div className='con1'>
        <Link to={"/bry"} className='l'>
          <center>
            <div className='con2'> 
              
            </div>
          </center>
        </Link>
        <center>
        <div className='con3'>
          <b>
        A country is a nation, a body of land with one government. Also, rural areas outside cities and towns are called the country. There are many countries in the world: places that have a central government and a common identity. America was once just a bunch of colonies of England.

        </b>
        </div>
        </center>
        
    </div>
    </body>
  )
}

export default Countries
