import React , {useState} from 'react';

 const Connectig:React.FC = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
      setOpenSection(openSection === section ? null : section);
    };

        return (

<>

<div className='FON '>
<div className='container '>
    <div className="row">
        <div className='image-section col-12 col-lg-6 mb-lg-0 mb-6 py-5'>
<img className='img-fluid' src="/images/HomeAbout/img81.png" alt="image description" />
        </div>


        <div className='collapsible-section col-12 col-lg-6 py-5'>


      <div className='card mb-2' onClick={() => toggleSection('section1')}>
        <div className="card-headerpx-xl-5 py-xl-3 ">
        <h3 className='mb-0'>CONNECTING PEOPLE</h3>
        </div>
        <div className='card-body px-xl-5 py-0'>
        {openSection === 'section1' && (
          <p>
            To succeed you must believe. When you believe, you will succeed.
            Surround yourself with angels, positive energy, beautiful people,
            beautiful souls, clean heart, angel. Let me be clear, you have to make it
            through the jungle to make it to paradise, that’s the key, Lion! Lion!
          </p>
        )}
        </div>
      </div>
      
     
      <div className='card mb-2' onClick={() => toggleSection('section2')}>
        <div className="card-headerpx-xl-5 py-xl-3 ">
        <h3 className='mb-0'>WE BUILD YOUR DREAM</h3>
        </div>
        <div className='card-body px-xl-5 py-0'>
        {openSection === 'section2' && (
          <p>
            To succeed you must believe. When you believe, you will succeed.
            Surround yourself with angels, positive energy, beautiful people,
            beautiful souls, clean heart, angel. Let me be clear, you have to make it
            through the jungle to make it to paradise, that’s the key, Lion! Lion!
          </p>
        )}
        </div>
      </div>


      <div className='card mb-2' onClick={() => toggleSection('section3')}>
        <div className="card-headerpx-xl-5 py-xl-3 ">
        <h3 className='mb-0'>NOTHING TO FEAR</h3>
        </div>
        <div className='card-body px-xl-5 py-0'>
        {openSection === 'section3' && (
          <p>
            To succeed you must believe. When you believe, you will succeed.
            Surround yourself with angels, positive energy, beautiful people,
            beautiful souls, clean heart, angel. Let me be clear, you have to make it
            through the jungle to make it to paradise, that’s the key, Lion! Lion!
          </p>
        )}
        </div>
      </div>


      <div className='card mb-2' onClick={() => toggleSection('section4')}>
        <div className="card-headerpx-xl-5 py-xl-3 ">
        <h3 className='mb-0'>MAKE THE WORLD BETTER</h3>
        </div>
        <div className='card-body px-xl-5 py-0'>
        {openSection === 'section4' && (
          <p>
            To succeed you must believe. When you believe, you will succeed.
            Surround yourself with angels, positive energy, beautiful people,
            beautiful souls, clean heart, angel. Let me be clear, you have to make it
            through the jungle to make it to paradise, that’s the key, Lion! Lion!
          </p>
        )}
        </div>
      </div>


    </div>

     

    </div>
</div>
</div>









</>
        
        );
      }




export default Connectig