import React , {} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'react-router-dom'

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


const Timer:React.FC = () => {
  return (
    <>
    
    
    <Swiper 
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination ={{
          clickable: true,
        }}
        modules={[Autoplay ,FreeMode, Pagination]}
		breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}

        className="mySwiper"
      >
        <SwiperSlide>
      <div className='col-12 p-0 overflow-hidden d-flex flex-wrap pt-5'>



      <div className="featureCol px-3 mb-6">
						<div className="">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="/images/DailyDeal/img12.jpg" alt="image description" className="img-fluid w-100"/>
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className=" vniz text-center py-2 py-xl-5 py-sm-4 px-xl-2 px-1 ">
								<span  className=" d-block mb-2"><a href="shop-detail.html " className='nadpis'>Sint Incidunt Utlabore</a></span>
								<span className="cena"><del>75.00 $</del>  60.50 $</span>
							</div>
						</div>
					</div>

      </div>
        </SwiperSlide>



  <SwiperSlide>
      <div className='col-12 p-0 overflow-hidden d-flex flex-wrap pt-5'>



      <div className="featureCol px-3 mb-6">
						<div className="">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="/images/DailyDeal/img13.jpg" alt="image description" className="img-fluid w-100"/>
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className=" vniz text-center py-2 py-xl-5 py-sm-4 px-xl-2 px-1 ">
								<span  className=" d-block mb-2"><a href="shop-detail.html " className='nadpis'>Aliquam Quaerat Voluptem</a></span>
								<span className="cena">  58.00 $</span>
							</div>
						</div>
					</div>

      </div>
        </SwiperSlide>



        <SwiperSlide>
      <div className='col-12 p-0 overflow-hidden d-flex flex-wrap pt-5'>



      <div className="featureCol px-3 mb-6">
						<div className="">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="/images/DailyDeal/img14.jpg" alt="image description" className="img-fluid w-100"/>
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className=" vniz text-center py-2 py-xl-5 py-sm-4 px-xl-2 px-1 ">
								<span  className=" d-block mb-2"><a href="shop-detail.html " className='nadpis'>Neque Porro Quisquam</a></span>
								<span className="cena"> <del>60.00 $</del>48.00 $</span>
							</div>
						</div>
					</div>

      </div>
        </SwiperSlide>




        <SwiperSlide>
      <div className='col-12 p-0 overflow-hidden d-flex flex-wrap pt-5'>



      <div className="featureCol px-3 mb-6">
						<div className="">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="/images/DailyDeal/img15.jpg" alt="image description" className="img-fluid w-100"/>
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className=" vniz text-center py-2 py-xl-5 py-sm-4 px-xl-2 px-1 ">
								<span  className=" d-block mb-2"><a href="shop-detail.html " className='nadpis'>Sit voluptatem</a></span>
								<span className="cena"> 65.00 $</span>
							</div>
						</div>
					</div>

      </div>
        </SwiperSlide>




        <SwiperSlide>
      <div className='col-12 p-0 overflow-hidden d-flex flex-wrap pt-5'>



      <div className="featureCol px-3 mb-6">
						<div className="">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="/images/DailyDeal/img16.jpg" alt="image description" className="img-fluid w-100"/>
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className=" vniz text-center py-2 py-xl-5 py-sm-4 px-xl-2 px-1 ">
								<span  className=" d-block mb-2"><a href="shop-detail.html " className='nadpis'>Aliquam Quaerat Voluptatem</a></span>
								<span className="cena">80.00 $</span>
							</div>
						</div>
					</div>

      </div>
        </SwiperSlide>



        <SwiperSlide>
      <div className='col-12 p-0 overflow-hidden d-flex flex-wrap pt-5'>



      <div className="featureCol px-3 mb-6">
						<div className="">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="/images/DailyDeal/img15.jpg" alt="image description" className="img-fluid w-100"/>
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className=" vniz text-center py-2 py-xl-5 py-sm-4 px-xl-2 px-1 ">
								<span  className=" d-block mb-2"><a href="shop-detail.html " className='nadpis'>Sit voluptatem</a></span>
								<span className="cena"> 65.00 $</span>
							</div>
						</div>
					</div>

      </div>
        </SwiperSlide>
       



        <SwiperSlide>
      <div className='col-12 p-0 overflow-hidden d-flex flex-wrap pt-5'>



      <div className="featureCol px-3 mb-6">
						<div className="">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="/images/DailyDeal/img13.jpg" alt="image description" className="img-fluid w-100"/>
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className=" vniz text-center py-2 py-xl-5 py-sm-4 px-xl-2 px-1 ">
								<span  className=" d-block mb-2"><a href="shop-detail.html " className='nadpis'>Aliquam Quaerat Voluptem</a></span>
								<span className="cena">  58.00 $</span>
							</div>
						</div>
					</div>

      </div>
        </SwiperSlide>



        <SwiperSlide>
      <div className='col-12 p-0 overflow-hidden d-flex flex-wrap pt-5'>



      <div className="featureCol px-3 mb-6">
						<div className="">
							<div className="imgHolder position-relative w-100 overflow-hidden">
								<img src="/images/DailyDeal/img14.jpg" alt="image description" className="img-fluid w-100"/>
								<ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
									<li className="mr-2 overflow-hidden"><a href="" className="icon-heart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-cart d-block"></a></li>
									<li className="mr-2 overflow-hidden"><a href="" className="icon-eye d-block"></a></li>
									<li className="overflow-hidden"><a href="" className="icon-arrow d-block"></a></li>
								</ul>
							</div>
							<div className=" vniz text-center py-2 py-xl-5 py-sm-4 px-xl-2 px-1 ">
								<span  className=" d-block mb-2"><a href="shop-detail.html " className='nadpis'>Neque Porro Quisquam</a></span>
								<span className="cena"> <del>60.00 $</del>48.00 $</span>
							</div>
						</div>
					</div>

      </div>
        </SwiperSlide>


      </Swiper>
    
    








    


    </>
  )
}

export default Timer
