import React from 'react'
import { FaTruck , FaSyncAlt } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
const Usluqa:React.FC = () => {
  return (
    <>
  
<div className="USLUQA d-flex justify-content-center align-items-center">
<div className="container">


  <div className="usluqi container  d-flex  overflow-hidden pt-xl-8 pt-lg-10 pt-md-8 pt-4 pb-xl-12 pb-lg-10 pb-md-4 pb-1">
            <div className="row">
<div className='col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0'>

<div className="circle contactListColumn  border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
    <span className='icon1'><FaTruck /></span>
    <div className='circle-right-side  alignLeft pl-2'>
    <strong className='fwEbold d-block mb-1'>Free shipping order</strong>
   <p className='m-0  '>On orders over $100</p>
    </div>

</div>
  </div>



  <div className='col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0'>
  <div className="circle contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
    <span className='icon1'><GoGift/></span>
    
    <div className='circle-right-side  alignLeft pl-2'>
    <strong className='fwEbold d-block mb-1'>Special gift card</strong>
    <p className='m-0'>The perfect gift idea</p>
    </div>
  </div>

    </div>
  


  <div className='col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0'>
  <div className="circle contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex ">
   
   <span className='icon1'><FaSyncAlt/></span>
   <div className="circle-right-side alignLeft pl-2">
   <strong className='fwEbold d-block mb-1'>Return & exchange</strong>
   <p className='m-0'>Free return within 3 days</p>
   </div>
  </div>
    </div>

  <div className='col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0'>
  <div className="circle contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
  <span className='icon1'><IoCallOutline/></span>

  <div className="circle-right-side alignLeft pl-2">
  
        <strong className='fwEbold d-block mb-1'>Support 24 / 7</strong>
        <p className='m-0'>Customer support</p>
      
  </div>
 
      </div>
  </div>
    </div>
            </div>




  <div className=' container overflow-hidden d-flex flex-wrap py-xl-12 py-lg-10 py-md-8 py-5 '>
    <div className='row '>
      
      <div className="fotka-left-side col-12 col-sm-6 mb-sm-0 mb-2 ">
      <img className='img-fluid' src="/images/Featured/ad1.jpg" alt="" />
      </div>
      <div className="fotka-right-side col-12 col-sm-6">
      <img className='img-fluid' src="/images/Featured/ad2.jpg" alt="" />
 </div>

      </div>
    </div>

</div>

</div>

 

        </>
  )
}

export default Usluqa