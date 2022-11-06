import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return ( 
        <div className="footer" style={{
            color: 'white',
            
            
        }}>
<div className="Quick-link">
<p>Quick links</p>

              <p>  <a href='/' style={{
                    color: 'white' 
                }} >Home</a></p>
               <p> <a href='/services' style={{
                    color: 'white' 
                }}  >Services</a></p>
              <p>  <a href='/About'  style={{
                    color: 'white',
                      
                }}>About us</a></p>
              <p>  <a href='/contact'  style={{
                    color: 'white'
                }}>contact</a> </p>
                <p><a href='/feedback '  style={{
                    color: 'white'
                }}>Feedback</a></p></div>



<div className="media">
<p><a href="https://www.tottenhamhotspur.com/" target="blank">WhatsApp <FaWhatsapp/>  </a></p>
<p><a href="https://www.facebook.com/TottenhamHotspur/" target="blank">Facebook<FaFacebook color="blue"/></a></p>
<p><a href="https://www.instagram.com/spursofficial/?hl=en" target="blank">Instagram <FaInstagram/></a></p>
<p><a href="https://twitter.com/SpursOfficial?" target="blank">Twitter <FaTwitter/></a></p>
<p><a href="https://www.tottenhamhotspur.com/the-club/foundation/about-us/" target="blank">Linkedin<FaLinkedin/></a></p>
<p><a href="https://www.tottenhamhotspur.com/" target="blank">Tiktok <FaTiktok/></a></p></div>
                <span style={{paddingLeft: "300px"}}> Copyright © 2022 International Badman Buda</span>
        </div>
     );
}
 
export default Footer;