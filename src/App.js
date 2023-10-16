import { Route ,Routes} from 'react-router-dom';
// import './App.css';
// import {Content} from './Content';
// import Home from './Home';
// import About from './About';
//import Paner from './Paner';
import Countries from './Countries';
import CountrySearch from './CountrySearch';
import Noodles from './Noodles';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Routes>
      <Route path='/'element={<Countries/>}/>
      <Route path='/bry'element={<CountrySearch/>}/>
      <Route path='/new'element={<Noodles/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/signup'element={<Signup/>}/>
    </Routes>
  );
}                                                                    

export default App;
