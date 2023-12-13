import React from 'react'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
export const Componente1 = () => {
    const [scrolled, setScrolled]= useState(false);
    const [activeLink, setActiveLink] = useState('home');
    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(true);
            }
        }
        window.addEventListener("scroll", onScroll)
        return ()=>window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={'logo'} alt="Logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#project" className={activeLink === 'project'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <div className="social-icons">
                <a href="#"><img src={navIcon1} alt=""></img></a>
                <a href="#"><img src={navIcon2} alt=""></img></a>
                <a href="#"><img src={navIcon3} alt=""></img></a>
            </div>
            <button className="vdd" onClick={()=>console.log('Conectado')}><span>Iniciar Secion</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
