import React , {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBars  } from "react-icons/fa";
import { CiHeart , CiSearch , CiShoppingCart } from "react-icons/ci";


const Headerrr1:React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (


    
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
      <div className="navbar-toggle" onClick={toggleMenu}>
   <a className=" nav-drop nav-item dropdown">
            <a className="header-dropdown dropdown nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FaBars />
            </a>
            <ul className="dropdown-menu">
              <li><a  href="#home"></a>Login</li>
              <li><a  href="#about"></a>Registration</li>
              <li><a href="#services"></a>Logout</li>
              
            </ul>
          </a>
   
   </div>
      <NavDropdown className='nav-drop' title="USD" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Vietnamse</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">French</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className='nav-drop' title="USD" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">USD</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">VND</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">EURO</NavDropdown.Item>
            </NavDropdown>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="h basic-navbar-nav">
          <Nav className="home-navv me-auto">
            <Nav.Link className='nav-color' href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">STORE</Nav.Link>
            <Nav.Link href="/haqqimizda">ABOUT</Nav.Link>
   
            </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home"><img className='navlogo' src="/images/Header/header.svg" alt="" /></Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="home-navv2 me-auto">
            <Nav.Link href="/">BLOG</Nav.Link>
            <Nav.Link href="#link">PAGES</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>

        <div className="navbar-links d-flex gap-3">
        <div className="icon-container">
          <CiSearch size={26} />
          <span className="icon2 icon-badge"></span>
        </div>
        <div className="icon-container">
          <CiHeart size={26} />
          <span className="icon2 icon-badge">1</span>
        </div>
        <div className=" icon-container">
          <CiShoppingCart  size={26} />
          <span className="icon2 icon-badge">2</span>
        </div>
      </div>


      </Container>
    </Navbar>





  );
}

export default Headerrr1