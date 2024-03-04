
import { Button, Container, Nav, Navbar, Card, Col, Table, Row, CardHeader } from 'react-bootstrap';

import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import cartContext from '../store/cart-context';
import Cart from './Cart';
import { NavLink } from 'react-router-dom';
const NavBar=(props)=>{

    const [shows,setShows]=useState(false);
  
    const history =useNavigate()
    const ctxContext=useContext(cartContext)
    
    const show=()=>{
      setShows(true);
    }
  
    const onHide=()=>{
      setShows(false)
    }
  
    let q=ctxContext.quantity


    const logoutHandler=()=>{
      // history('/login')
      // localStorage.removeItem('token')
      ctxContext.logout()
      // history('/')
      
    }

   

    return <Navbar sticky="top" bg='black' variant='dark' color='white' >
    <Container  >

      <Nav className='mx-auto'>
        <NavLink to='/home' className="mx-lg-5 mx-sm-3">HOME</NavLink>
        <NavLink to='/store' className="mx-lg-5 mx-sm-3">STORE</NavLink>
        {/* <Nav.Link href='../pages/about' className="mx-lg-5 mx-sm-3">ABOUT</Nav.Link> */}
        
        <NavLink to="/about" className="mx-lg-5 mx-sm-3">ABOUT US</NavLink>
        <NavLink to="/contact" className="mx-lg-5 mx-sm-3">CONTACT US</NavLink>
      </Nav>
      {ctxContext.isLoggedIn && <NavLink to='/profile' className='mx-lg-3 mx-sm-3' style={{textDecoration:'none'}}>Profile</NavLink>}
      {ctxContext.isLoggedIn && <NavLink onClick={logoutHandler} className='mx-lg-3 mx-sm-3'>Logout</NavLink>}
      
      {!ctxContext.isLoggedIn && <NavLink to='/login' className='mx-lg-3 mx-sm-3'>Login</NavLink>}
      {ctxContext.isLoggedIn && <Button onClick={show} >Cart</Button>}
    
      {ctxContext.isLoggedIn && <p style={{ color: 'white', margin: '3px' }}>{q}</p>}
    </Container>
    <Cart shows={shows} onHide={onHide}/>
  </Navbar>

}

export default NavBar