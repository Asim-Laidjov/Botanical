import React from 'react'

const DailyDeal:React.FC = () => {







  return (
    <>
      <div className="Featured-section">
        <header className='text-center col-12 mb-7'>
                 <h1 className=' mb-4'>Daily Deal</h1>
               <span className='d-block mb-md-5 mb-3'><img src="/images/BotanicalStore/hbdr.png" className='img-fluid img-bdr' alt="" /></span>  
                <p  className='nadpis'>There are many variations of passages of lorem ipsum available.</p>
        
</header>
        <div className="dealSlider w-100 px-xl-10 px-lg-5 px-md-2 ">
       <h3 className='cifri text-center'>
        0    :    0    :    0

       </h3>
        </div>

        <div className='vremya1 d-flex flex-wrap justify-content-center gap-5'>
        <h6 className=' vremya '>
        Hours
      </h6>
      <h6 className=' vremya '>
        Minutes
      </h6>
      <h6 className=' vremya '>
        Seconds
      </h6>
      </div>
    </div>

    </>
  )
}

export default DailyDeal