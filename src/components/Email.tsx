import React from 'react';
import Button from './Button';

const Email:React.FC = () => {
 


  return (
   <>

<div className="email-form">
  <div className="container d-flex justify-content-center align-items-center ">
  <section className='FORM '>
         
         <div className="form-group text-center">
   
         <header className='text-center col-12 mb-7 '>
                    <h1 className=' mb-4'>Subscribe Our Newsletter</h1>
                    <img src="/images/BotanicalStore/hbdr.png" className='email-img' alt="" />
                
   </header>
   
   <small  id="emailHelp"
            className="form-text text-muted py-2">
            Enter Your email address to join our mailing list and keep yourself update
           </small>
           <label htmlFor="exampleInputEmail1"></label>





          <form className='emailForm1 mx-auto overflow-hidden d-flex flex-wrap py-2 align-items-center justify-content-center'>
         


<input 
  type="text"
  className="form-control"
  id="exampleInputEmail1"
  aria-describedby="emailHelp"
  placeholder="Enter you email..." 
 
/>

<div className=' fwEbold text-white py-3'><Button/></div>
          </form>
         
          
        </div>
       </section>
  </div>

</div>

  
</>
  );
};

export default Email;
