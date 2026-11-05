

import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

import About from './pages/about'
import Contact from './pages/contact'
import Product from './pages/product'
import Notfound from './pages/Notfound'
import Enquiry from './components/Enquiry'


function App() {


  return (
 <div>
    
       <Enquiry/>
  
      {/* <Routes>         <Route path='/' element={<Home/>}/>
         <Route path='/product' element={<Product/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='*' element={<Notfound/>}/>
       </Routes> */}

    </div> 
    
  )
}

export default App
