// import logo from './logo.svg';
// import './App.css';

import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes} from 'react-router-dom';
import Contact from "./Pages/Contact";
import ServicesDetails from "./Components/ServicesDetails";
import About from "./Pages/About";
import Feedback from "./Pages/Feedback";
import Booking from "./Pages/Booking";
import Comment from "./Pages/Comment";
import CommentDetails from "./Components/CommentDetails";
import Sidebar from "./Components/Sidebar";
import useLocalStorage from "use-local-storage";
import { FaToggleOn } from "react-icons/fa";

function App() {
 
  const [theme, setTheme]= useLocalStorage ('theme'? 'dark': 'light')

  
const switchTheme=() =>{
const newTheme= theme ==='light'? 'dark':'light';
setTheme(newTheme)
}
    
    
      return (
    
<div className="app" data-theme={theme} >

  
      <div className="top"><Navbar/>
      
      <div className="toggle-theme" >
                    <p  >Change Theme</p>          
                    
<FaToggleOn onClick={switchTheme} size="2em"/>
                </div></div>
                


     <div className="container">
     <Sidebar/>
      <div className='content'>
      
        <Routes>
          <Route exact path='/' element={<Home/>}>
          
          </Route>


          <Route  path='/contact' element={<Contact/>}>
          
          </Route>
          <Route  path='/about' element={<About/>}>

          </Route>
          <Route exact path='/services' element={<Booking/>}>
          
          </Route>

          <Route  path='/services/:id' element ={<ServicesDetails/>}>
          
          </Route>

          <Route exact path='/feedback' element ={<Feedback/>}>
        
          </Route>
          <Route  path='/feedback/:id' element={<CommentDetails/>}>
          
          </Route>
          <Route  path='/comment' element={<Comment/>}>
         
          </Route>
          
          </Routes>
    </div>
    
    </div>
    <Footer/>
    </div>
  
  
  );
}

export default App;
