import React , {} from 'react'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'
import Button from './Button';

const Plants:React.FC = () => {


 



  return (
    <>
    

  

    <div className=''>




      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay ={{
          delay:2500,
          disableOnInteraction: false,  
        }}
       
        navigation={true}
        
        modules={[Autoplay ,Navigation]}
      
      
        className="mySwiper"
     
      >
       
       <SwiperSlide>
     <div className="fonn1 align w-100 d-flex align-items-center">
          <div className="container my-7">
            <div className="row ">
              <div className=' col-12 col-xl-7 '>
              <div className=" pr-lg-10">
              
              <h1 className="Gonna">Houseplant <span className="text-break d-block">The Perfect Choice.</span></h1>
              <hr className='liniyaa'/>
                <p className='my-5'>Lorem ipsum is simply dummy text of the printing and typesetting industry <br /> has been the industry's standard. </p>
                <Button />
               
              </div>
               <div className="plant1-right-side col-12 col-md-6 ">
                    <img className='plant1 ' src="/images/Plants/img77.png" alt="" />
               </div>
              </div>
              


            </div>
          </div>
         </div>

     </SwiperSlide>
     

       
        
      
     <SwiperSlide>
     <div className="fon2 align w-100 d-flex align-items-center bgCover">
          <div className="container my-7">
            <div className="row">
              <div className="plant1-left-side col-12 col-xl-7">
              <h3 className='Wellcome d-block '>WELLCOME TO BOTANICAL</h3>
              <h1  className='Gonna' >Plants Gonna Make <br /> People Happy</h1>
                <p className='my-5'>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Button />
              </div>
               <div className="plant2-right-side col-12 col-md-6 ">
                    <img className='plant2 ' src="/images/Plants/plant2.svg" alt="" />
               </div>
            </div>
          </div>
         </div>

     </SwiperSlide> 
     

     <SwiperSlide>
      <div className="">
      <div className="fon2 align w-100 d-flex align-items-center bgCover">
          <div className="container my-7">
            <div className="row">
              <div className="plant1-left-side col-12 col-xl-7">
              <h3 className='Wellcome d-block '>WELLCOME TO BOTANICAL</h3>
              <h1  className='Gonna' >Plants for healthy</h1>
                <p className='my-5'>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className=''>
                <Button/>
                </div>
               
              </div>
               <div className="plant-3-right-side col-12 col-md-6 ">
                    <img className='plant3 ' src="/images/Plants/img79.png" alt="" />
               </div>
            </div>
          </div>
         </div>
      </div>
     

     </SwiperSlide>




      </Swiper>



</div>



  










   
    </>
  );
}

export default Plants;