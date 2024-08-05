
import React from 'react';
import css from './NavBar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo1 from '../img/logo (1).png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import img1 from '../img/photo-gallery-01.jpg'
import img2 from '../img/photo-gallery-02.jpg'
import img3 from '../img/photo-gallery-03.jpg'
import img4 from '../img/photo-gallery-04.jpg'
import img5 from '../img/photo-gallery-05.jpg'
import img6 from '../img/photo-gallery-06.jpg'
import img7 from '../img/photo-gallery-07.jpg'
import img8 from '../img/photo-gallery-08.jpg'
import img9 from '../img/photo-gallery-09.jpg'




const NavBar = () => {
    return (
      <div className={css.NavBar} >
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3 ">
          <Container fluid>
            <Navbar.Brand href="#"><img src={logo1} alt="" /></Navbar.Brand>
            <div className={css.Links}>
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">MENU</Nav.Link>
            <Nav.Link href="#action1">RESERVATION</Nav.Link>
            <Nav.Link href="#action2">GALLERY</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            <Nav.Link href="#action2">BLOG</Nav.Link>
            <Nav.Link href="#action2">CONTACT</Nav.Link>
            </div>
            <div className={css.icons}>
            <Nav.Link href="#action2"><FaTripadvisor  /></Nav.Link>
            <Nav.Link href="#action2"><FaTwitter /></Nav.Link>
            <Nav.Link href="#action2"><FaFacebookF /></Nav.Link>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header  closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className={css.Link}>
                <Nav.Link href="#action1">HOME</Nav.Link>
                <Nav.Link href="#action2">MENU</Nav.Link>
                <Nav.Link href="#action1">RESERVATION</Nav.Link>
                <Nav.Link href="#action2">GALLERY</Nav.Link>
                <Nav.Link href="#action2">ABOUT</Nav.Link>
                <Nav.Link href="#action2">BLOG</Nav.Link>
                <Nav.Link href="#action2">CONTACT</Nav.Link>
                </div>
                <div className={css.gallery}>
                  <h2>GALLERY</h2>
                  <div className={css.imggallery}>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                  </div>
                  <div className={css.imggallery}>
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                  </div>
                  <div className={css.imggallery}>
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                  </div>
                </div>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
    );
}

export default NavBar;
