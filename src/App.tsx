import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-icons'
import './App.css'
// Komponentler

import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'



function App() {

  return (
    <>
 <BrowserRouter>

 
 <Routes> 
<Route path='/' element={<Home/>}/>
<Route path='/haqqimizda' element={<About/>}/>
<Route path='/' element={<About/>}/>
<Route path='/' element={<About/>}/>
<Route path='/' element={<About/>}/>


 </Routes>
 
<Footer/>

 </BrowserRouter>



   
    </>
  )
}


export default App
