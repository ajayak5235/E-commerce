
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import Cart from './Cart';
const NavBar = (props) => {
    const [shows , setShows] = useState(false)

    const show=() => {
        setShows(true)
    }

    const onHide = () =>{
        setShows(false)
    }
    return (
        <Navbar sticky="top"   bg='dark'> {/* Use Navbar instead of NavBar */}
            <Container>
                <Nav className='mx-auto' color='white'>
                <NavLink to='/home' className="text-white mx-lg-2 mx-sm-1"  >HOME</NavLink>
                <NavLink to='/store' className="text-white mx-lg-2 mx-sm-1"  >STORE</NavLink>
                <NavLink to='/about' className="text-white mx-lg-2 mx-sm-1"  >ABOUT US</NavLink>
                <NavLink to='/contact' className="text-white mx-lg-2 mx-sm-1"  >CONTACT US</NavLink>

                </Nav>
             {
                <Button variant='light' onClick={show}>Cart</Button>
             }
            </Container>
            <Cart shows={shows} onHide={onHide}/>
        </Navbar>
    );
};

export default NavBar;
