import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { NavbarContainer } from './navbar.styles'

import Image from '../image/image.component';

const NavigationBar = () => {

//   const router = useRouter()
  const itemCount = useSelector(state => state.cart.itemCount);


  return (
    <NavbarContainer>
        <Navbar fixed='top'collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Link to="/">
            <img
                alt="" 
                src="/logo.png"
                width="80"
                height="80"
                className="d-inline-block align-top "
            />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <span className='mr-auto'></span>
            <Nav>
            <Link to='/packages' className='navbar-link-text mr-4'>Buy Premium Picks</Link>
            <Link to='/contact' className='navbar-link-text mr-4'>Contact Us</Link>
            <Link to='/checkout' className='navbar-link-text mr-4'>Cart ( {itemCount} )</Link> 

            </Nav>
            </Navbar.Collapse>
        </Navbar>
            
  </NavbarContainer>

  );

  
}


export default NavigationBar;
