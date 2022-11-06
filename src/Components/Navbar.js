// import { Link } from "react-router-dom";

// import { FaToggleOn } from "react-icons/fa";
// import useLocalStorage from "use-local-storage";



const Navbar = () => {
    // const [theme, setTheme]= useLocalStorage ('theme'? 'dark': 'light')

  
    // const switchTheme=() =>{
    // const newTheme= theme ==='light'? 'dark':'light';
    // setTheme(newTheme)
    // }

    return ( 
       
   
        <nav className ='navbar'   >
            
          
            <h1>G S S</h1>
            <div className='links' >
                
                
                <a href='/'  style={{
                    color: 'white',
                    
                    borderRadius: '8px'
                }}>Home</a>
                <a href='/services'  style={{
                    color: 'white',
                    
                    borderRadius: '8px'
                }} >Services</a>
                <a href='/About'  style={{
                    color: 'white',
                   
                    borderRadius: '8px'  
                }}>About us</a>
                <a href='/contact'  style={{
                    color: 'white',
                    
                    borderRadius: '8px' 
                }}>contact</a> 
                <a href='/feedback '  style={{
                    color: 'white',
                    
                    borderRadius: '8px' 
                }}>Feedback</a>
    

            </div>
            {/* <div className="toggle-theme" >
                    <p  >Change Theme</p>          
                    
<FaToggleOn onClick={switchTheme} size="2em"/>
                </div> */}
         
        </nav>
     );
}
 
export default Navbar;