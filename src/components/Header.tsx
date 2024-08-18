import React , {useState} from 'react'


import { CiHeart , CiSearch , CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header:React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

 

  return (
    
    <>
    
    <nav className="navbar navbar-expand-lg bg-white">
    <div className="container-fluid gap-3 mx-3" >
   <div className="navbar-toggle" onClick={toggleMenu}>

   <a className=" navdrop nav-item dropdown">
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
            <ul className="dropdown-menu">
              <li><a  href="#home"></a>Login</li>
              <li><a  href="#about"></a>Registration</li>
              <li><a href="#services"></a>Logout</li>
              
            </ul>
          </a>
   
   </div>

    <a className="navdrop nav-item dropdown">
            <a className="dropdown nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ENG
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">English</a></li>
              <li><a className="dropdown-item" href="#">Vietnamse</a></li>
          
              <li><a className="dropdown-item" href="#">French</a></li>
            </ul>
          </a>

          <a className="navdrop nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              USD
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">USD</a></li>
              <li><a className="dropdown-item" href="#">VND</a></li>
              
              <li><a className="dropdown-item" href="#">EURO</a></li>
            </ul>
          </a>

      
                                                
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav py-3 mx-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link className="teta nav-link active" aria-current="page" to="/">HOME</Link>
          </li>
        
     







          <li className="nav-item">
            <Link className="nav-link" to="#">STORE</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link" to="/haqqimizda">ABOUT</Link>
          </li>
          <a className='navbar-brand' href="">
          <Link to="/">
        <img className='headerphoto' src="/public/images/Header/header.svg" alt="" />

          </Link>
          </a>
        
       
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
          <CiShoppingCart  size={26} />
          <span className="icon2 icon-badge">2</span>
        </div>
      </div>



      </div>
    </div>
  </nav>
    
    </>


     
  
  )
}

export default Header