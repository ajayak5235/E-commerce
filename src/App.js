
import { Container,  Row } from 'react-bootstrap';
import './App.css';
import {productsArr} from './ProductsArr/productsArr';

import CartProvider from './store/CartProvider';

import SingleProduct from './Components/SingleProduct';
import NavBar from './Components/NavBar';
import About from './pages/About';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AppComponents from './Components/AppComponents';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact'
import Movie from './pages/Movie'
import SignUp from './pages/SignUp';
import ProfileForm from './Profile/ProfileForm';
import { useContext } from 'react';
import cartContext from './store/cart-context';

function App() {

  const cartctx= useContext(cartContext)

  console.log('running app components')
  // if(localStorage.getItem('token')!==null && localStorage.getItem('token').length>0){
  //   cartctx.login(localStorage.getItem('token'))
  //   console.log('login by self')
  // }

  return (
    <CartProvider>
      
      <NavBar />
      
      <Routes >
        {/* <Route path='/' element={cartctx.isLoggedIn ? <AppComponents /> : <Navigate to='/login' />}/> */}
        <Route exact path='/' element={<AppComponents />}/>
          
          
      
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/contact' element ={<Contact />} />
        <Route exact path='/movies/:id' element={<Movie />} />

        {!cartctx.isLoggedIn && <Route exact path='/login' element={<Login />} />}
        {!cartctx.isLoggedIn && <Route exact path='/login' element={<Navigate to='/login' />} />}
        <Route exact path='/signup' element={<SignUp />} />

        <Route exact path='/profile' element={<ProfileForm />}/>

        <Route exact path='*' element={<Navigate to='/login' replace />} />
      </Routes>
      
      
    </CartProvider>
  );
}

export default App;
