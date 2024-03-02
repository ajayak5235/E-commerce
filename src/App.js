import './App.css';
import { Button ,Card } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import {Routes , Route , Navigate} from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home';
import { productsArr } from './ProductsArr/ProductArr';
import Movies from './pages/Movies';

function App() {
  return (
    <div>
      <NavBar />
     <Movies></Movies>
      <Routes>
       <Route exact path='/about' element={< About/>} />
       <Route exact path='/Home' element={< Home/>}/> 
      </Routes>
       
      </div>
  
  );
}

export default App;
