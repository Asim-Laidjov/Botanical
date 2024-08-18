import React from 'react'
import { Link } from 'react-router-dom'
const AboutHome:React.FC= () => {
  return (
    <>
<div className="fon4 introBannerHolder d-flex w-100 bgCover py-5 my-3">
<div className="container">
  <div className="row">
	<div className="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
							<h1 className="active2 headingIV fwEbold playfair mb-4">About Us</h1>
							<ul className="list-unstyled breadCrumbs d-flex justify-content-center">
								<h5 className="mr-2"><Link className='active1 nav-link  text-decoration-none' to="/"> Home </Link></h5>
                <li className="mr-2"> / </li>
								<h5 className="active"> About </h5>
							</ul>
						</div>
  </div>
</div>


</div>






<div className='container abtSecHolder pt-xl-24 pb-xl-12 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 pt-10 pb-5'>
<div className="row">
<div className="col-12 col-lg-6 pt-xl-12 pt-lg-8">
						<h2 className="playfair fwEbold position-relative mb-7 pb-5">
							<strong className="d-block">A Minimal Team</strong>
							<strong className="d-block">For a Better World</strong>
              <hr className='aboutliniya py-1' />
						</h2>
						<p className="p-color pr-xl-16 pr-lg-10 mb-lg-0 mb-6">Lorem Khaled Ipsum is a major key to success. The ladies always say <br /> Khaled you smell good, I use no cologne. Cocoa butter is the key. To <br /> succeed you must believe. When you believe, you will succeed. They will <br /> try to close the door on you, just open it. The key is to drink coconut, <br /> fresh coconut, trust me. It’s important to use cocoa butter. It’s the key to <br /> more success, why not live smooth?</p>
					</div>

          <div className="col-12 col-lg-6">
						<img src="/images/HomeAbout/img80.jpg" alt="image description" className="img-fluid"/>
					</div>
</div>

</div>




<div className="stats">
      <div className="stat-item">
        <h2>229</h2>
        <p>Happy Clients</p>
      </div>
      <div className="stat-item">
        <h2>109</h2>
        <p>Completed Projects</p>
      </div>
      <div className="stat-item">
        <h2>22</h2>
        <p>Awesome Staff</p>
      </div>
      <div className="stat-item">
        <h2>11</h2>
        <p>Winning Awards</p>
      </div>
    </div>

    </>
  )
}

export default AboutHome 