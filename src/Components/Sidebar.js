// import { Children } from "react";
import { FaBars, FaCommentAlt, FaLandmark,  FaPhoneAlt, FaRegChartBar, FaSearchLocation, FaShoppingBasket,  FaUserAlt} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { IconContext } from "react-icons";


const menuItem=[
    {
        path:"/",
        name:'Home',
        icon:<FaLandmark/>
    },
    {
        path:"/services",
        name:'Services',
        icon:<FaShoppingBasket/>
    },
 
    {
        path:"/About",
        name:'About',
        icon:<FaUserAlt/>
    },
    {
        path:"/contact",
        name:'Contact',
        icon:<FaPhoneAlt/>
    }, 
    {
        path:"/contact",
        name:'Location',
        icon:<FaSearchLocation/>
    },

    {
        path:"/feedback",
        name:'Feedback',
        icon:<FaRegChartBar/>
    },
    {
        path:"/comment",
        name:'Comments',
        icon:<FaCommentAlt/>
    }


]
const Sidebar = ({Children}) => {
  const [isOpen, setIsOpen]= useState(false);
  const toggle = () => setIsOpen(!isOpen); 
//   const icon = () =>(
//     <IconContext.Provider value={{ color: "White"} }></IconContext.Provider>
//   )
   
    return ( 
        <div className="container">
        <div style={{width: isOpen ? "200px": "50px" }} className="sidebar">
            <div className="top_section">
<h1 style={{display: isOpen ? "block": "none" }}className="logo">Logo</h1>
<div style={{marginLeft: isOpen ? "50px": "0px" }}className="bars">
    <FaBars onClick={toggle} />
</div>
        </div>

        {
            menuItem.map((item,index)=>
            <NavLink to={item.path} key={index} className='link' activeClassName="active">
               <div className="icon">{item.icon}</div>
               <div style={{display: isOpen ? "block": "none" }} className="link_text">{item.name}</div> 
            </NavLink>
            
            )}
            
            
        </div>
        <main>{Children}</main>
        </div>
     );
}
 
export default Sidebar;