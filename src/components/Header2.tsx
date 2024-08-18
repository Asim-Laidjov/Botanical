import React , {useState} from 'react'

import { FaBars  } from "react-icons/fa";
import { CiHeart , CiSearch  } from "react-icons/ci";
import {  IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header2:React.FC = () => {


    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };



  return (
    <>

     <nav className="navbar navbar-expand-lg bg-white">
    <div className="container-fluid gap-3 mx-5 d-flex flex-wrap" >
   

    

    <Link to="/">
        <img className='headerphoto' src="/public/images/Header/header.svg" alt="" />

          </Link>
                                                
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav py-3 mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className=" nav-link active" aria-current="page" to="/">HOME</Link>
          </li>
        

          <li className="nav-item">
            <Link className="nav-link" to="#">STORE</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link" to="/haqqimizda">ABOUT</Link>
          </li>
       
          <li className="nav-item">
            <Link className="nav-link" to="/bloqlar">BLOG</Link>
          </li>

          <li className="nav-item">
            <Link className="Pages nav-link" to="">PAGES</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link" to="#">CONTACT</Link>
          </li>

        </ul>
       
      
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
        <IoMdContact   size={26} />
          <span className="icon2 icon-badge"></span>
        </div>
      </div>



      </div>




      <div className="navbar-toggle" onClick={toggleMenu}>
   <a className=" navdrop nav-item dropdown">
            <a className="header2-dropdown dropdown nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FaBars />
            </a>
            <ul className="dropdown-menu">
              <li><a  href="#home"></a>Login</li>
              <li><a  href="#about"></a>Registration</li>
              <li><a href="#services"></a>Logout</li>
              
            </ul>
          </a>
   
   </div>







    </div>
  </nav>
    </>
  )
}

export default  Header2