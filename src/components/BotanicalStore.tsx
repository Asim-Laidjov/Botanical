import React from 'react'
import { PiPottedPlant  } from "react-icons/pi";
import {GiCactusPot } from "react-icons/gi";
const BotanicalStore:React.FC = () => {
  return (
    <>
    <div className="Botanical-Store">
        <div className="chooseUs-sec container pt-xl-22 pt-lg-20 pt-md-16 pt-10 pb-xl-12 pb-md-7 pb-2">
            <div className="row"> 

                <div className="store-left-side col-12 col-lg-6 mb-lg-0 mb-4">
                      <img className='storeimg' src="/images/BotanicalStore/img01.jpg" alt="" />
                </div>


                <div className="store-right-side col-12 col-lg-6 pr-4">
                            <h2 className='Wellcome'>Why choose us ?</h2>
                            < hr className='cernaya-liniya'/>
                          
                           
                            <span className='store-tel py-4 mb-xl-14 mb-lg-10' >Lorem ipsum is simply dummy text of the printing and typesetting industry, lorem <br /> ipsum has been the industry's standard dummy text ever since the 1500s when an <br /> unknown printer took a galley ... </span>
                            <span className='second-half py-4 mb-xl-14 mb-lg-10'>  Learn More</span>
                           
                           
                            <ul className='list-unstyled chooseList'>
                            
                        
                            <li className='d-flex justify-content-start mb-xl-7 mb-lg-5 mb-3'>
                                
                                <span className='icon'><PiPottedPlant/></span>

                                
                                 
                                
                                    <div className="hand d-flex justify-content-start flex-wrap  ">
                                        <h3 className=''>  Hand Planted</h3>
                                        
                                        <p className='store-tel mb-xl-14 mb-lg-10'>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                 </li>
                            




                                







                                 <li className='d-flex justify-content-start mb-xl-7 mb-lg-5 mb-3'>
                                    <span className='icon'><GiCactusPot /></span>
                                    <div className="hand d-flex justify-content-start flex-wrap">
                                        <h3 className=''>Natural Sunlight</h3>
                                        <p className='store-tel'>It is a long established fact that a reader will be distracted by the reable content of a page.</p>
                                    </div>
                                    </li>

                                    <li className='d-flex justify-content-start mb-xl-7 mb-lg-5 mb-3'>
                                    <span  className='icon'><GiCactusPot/> </span>
                                    <div className="hand d-flex justify-content-start flex-wrap">
                                        <h3 className='headingIII fwEbold mb-2'>Clean Air</h3>
                                        <p className='store-tel'>There are many variations of passages of lorem ipsum available, but the majority have suffered.</p>
                                    </div>
                                    </li>
                            </ul>
                            
                      
                                  
                </div>



              


            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default BotanicalStore