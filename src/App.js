import { Route ,Routes} from 'react-router-dom';
// import './App.css';
// import {Content} from './Content';
import Home from './Home';
import About from './About';
import Food from './Food';
import Biryani from './Biryani';
import Noodles from './Noodles';
import Paner from './Paner';
function App() {
  return (
    <Routes>
      <Route path='/'element={<Food/>}/>
      <Route path='/bry'element={<Biryani/>}/>
    </Routes>
  );
}                                                                    

export default App;
