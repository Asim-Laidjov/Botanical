import React from 'react'
import Email from './Email'
const MeetTeam:React.FC = () => {
  return (
    <>
    <div className='teamSec pt-xl-12 pb-xl-21 pt-lg-10 pb-lg-20 pt-md-8 pb-md-16 pt-0 pb-4'>
        <div className='container'>
            <div className='row'>
            <header className='col-12 mainHeader mb-9 text-center'>
                 <h1 className='headingIV playfair fwEblod mb-4 '>Meet Our Team</h1> 
                 <span className="headerBorder d-block mb-5"><img src="/images/BotanicalStore/hbdr.png" alt="Header Border" className="img-fluid img-bdr"/></span>
       </header>
            </div>
      
<div className="row">
<div className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-6">
							<article className=" overflow-hidden">
								<div className="team-img-container  position-relative d-block w-100 mb-4">
									<img src="/images/HomeAbout/img82.jpg" className="img-team img-fluid" alt="image description"/>
								</div>
								<div className=" w-100 text-center">
									<h3>
										<strong className="text-uppercase d-block fwEbold  mb-2 text-dark text-decoration-none"> REDIKEIL</strong>
										<h5 className="text-capitalize d-block ">Co - Founder & CEO</h5>
									</h3>
								</div>
							</article>
</div>


<div className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-6">
							<article className=" overflow-hidden">
								<span className="  position-relative d-block w-100 mb-4">
									<img src="/images/HomeAbout/img83.jpg" className="img-team img-fluid" alt="image description"/>
								</span>
								<div className=" w-100 text-center">
									<h3>
										<strong className="text-uppercase d-block fwEbold  mb-2 text-dark text-decoration-none"> ANGELA</strong>
										<h5 className="text-capitalize d-block ">Chief of Marketing Team</h5>
									</h3>
								</div>
							</article>
</div>


<div className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-6">
							<article className=" overflow-hidden">
								<span className=" position-relative d-block w-100 mb-4">
									<img src="/images/HomeAbout/img84.jpg" className="img-team img-fluid" alt="image description"/>
								</span>
								<div className=" w-100 text-center">
									<h3>
										<strong className="text-uppercase d-block fwEbold  mb-2 text-dark text-decoration-none"> KEVIN LEE</strong>
										<h5 className="text-capitalize d-block ">Art Director</h5>
									</h3>
								</div>
							</article>
</div>

</div>

        </div>
    </div>



<Email />


    
    </>
  )
}

export default MeetTeam