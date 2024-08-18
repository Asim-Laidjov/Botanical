import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiHeart , CiSearch  } from "react-icons/ci";
import {  IoMdContact } from "react-icons/io";


const Headerrr2:React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className='container-fluid gap-3 mx-5 d-flex flex-wrap '>
        <Navbar.Brand href="#home"><img className='navlogo' src="/images/Header/header.svg" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto gap-3 py-3 mx-auto mb-2 mb-lg-0 ">
            <Nav.Link className='nav-color' href="/">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <Nav.Link href="/haqqimizda">About</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Pages</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          



      
          

          </Nav>
        </Navbar.Collapse>

        <div className="navbar-links d-flex ">
        <div className="icon-container">
          <CiSearch size={26} />
          <span className="icon2 icon-badge"></span>
        </div>
        <div className="icon-container">
          <CiHeart size={26} />
          <span className="icon2 icon-badge">1</span>
        </div>
        <div className=" icon-container">
        <IoMdContact   size={26} />
          <span className="icon2 icon-badge"></span>
        </div>
      </div>
      </Container>
    </Navbar>
  );
}

export default Headerrr2