import React from "react"
import { IoCallOutline , IoLocationOutline , IoLogoTwitter  } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF , FaPinterest , FaGooglePlusG  } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer:React.FC = () => {
    return (

     <div className="footer container-fluid overflow-hidden px-lg-20">
       <div className='container py-2'>
 
       <div className="footer-gapp row">
       

      
      <div className="col-12 col-md-3">
      <h5 className='py-2'>CONTACT US</h5>
          <IoLocationOutline />
          <strong className="py-2">Address: London Oxford Street, 012 United Kingdom.</strong>
      
        <div className="phone d-flex py-3 align-items-center ">
       
        <IoCallOutline/>
       <h6 className="px-4">Phone : (+032) 3456 7890</h6>
     
      </div>


      <div className="emailfooter d-flex py-1">
      <MdOutlineMail />
        <h6 className="px-4">Email: Botanicalstore@gmail.com</h6>
      </div>
          
      <div className=" d-flex py-3 gap-2">
        <strong className="px-4">Follow us:</strong>
        <div className="">
          
        <FaFacebookF  />
        </div>
        <div>
        <IoLogoTwitter />
       
        </div>
      <div>
      <FaPinterest />
      </div>
       
       <div>
       <FaGooglePlusG />
       </div>

        </div>
       </div>
       
      
          
  
          
         














         <div className="col-12 col-md-2  py-2  information">

<div className="">
<h5>INFORMATION</h5>
 </div>

 <div className="py-3">
 <p>New Products</p>
<p>Top Sellers</p>
<p>Our Blog</p>
<p>About our shop</p>
<p>Privacy Policy</p>
 </div>


</div>

<div className="col-12 col-md-2 py-2  information">

  <h5>MY ACCOUNT</h5>
  <div className="py-3">
  <p>My account</p>
  <p>Discount</p>
  <p>Orders history</p>
  <p>Personal information</p>
  </div>

 
</div>

<div className="col-12  col-md-3 py-2 ">
  <h5>POPULAR TAG</h5>
 
  
    <div className="container d-flex mt-4 gap-3">

    <div className="circle-footer">
<div className='circle-right-side  alignLeft pl-2 '>
  <Link className="text-dark text-decoration-none" to="">
<strong className='d-block mb-1'>Trend</strong>

  </Link>
</div>
</div>



<div className="circle-footer ">
<div className='circle-right-side  alignLeft pl-2'>
<strong className=' d-block mb-1'>Decor</strong>
</div>
</div>
    </div>





    <div className="container d-flex mt-4 gap-3">

<div className="circle-footer">
<div className='circle-right-side  alignLeft pl-2 '>
<strong className='d-block mb-1'>Plant</strong>
</div>
</div>



<div className="circle-footer ">
<div className='circle-right-side  alignLeft pl-2'>
<strong className=' d-block mb-1'>Table tree</strong>
</div>
</div>
</div>




<div className="container d-flex mt-4 gap-3">

<div className="circle-footer">
<div className='circle-right-side  alignLeft pl-2 '>
<strong className='d-block mb-1'>Bedroom tree</strong>
</div>
</div>



<div className="circle-footer  ">
<div className='circle-right-side  alignLeft pl-2'>
<strong className=' d-block mb-1'>Living room</strong>
</div>
</div>
</div>

      </div>






        



         
  
     
     
      
      </div>
     



     
   
     




      <div>
      </div>
      <hr className="liniya-footer" />
      <h6 className="text-center">
<span className="first-half">Coppyright 2019 by </span>
<span className="second-half"> Botanical Store </span>
<span className="first-half"> - All right reserved</span>
      </h6>
     </div>

     </div>
    )
  }
  
  export default Footer