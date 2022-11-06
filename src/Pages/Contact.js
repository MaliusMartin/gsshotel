

import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";



const Contact = () => {
    return (
        <div className="contact">
<article><h2>Contact us</h2>
<p> Telephone +255988300400</p>
<p> WhatsApp +255988300400</p>
<p>Email: <a href="https://www.gmail.com/gss@gmail" target="blank">  gss@gmail.com</a></p>
<h2 > social media</h2>
<div className="media">
<p><a href="https://wa.me/255658985845" target="blank">WhatsApp <FaWhatsapp/>  </a></p>
<p><a href="https://www.facebook.com/TottenhamHotspur/" target="blank">Facebook<FaFacebook color="blue"/></a></p>
<p><a href="https://www.instagram.com/spursofficial/?hl=en" target="blank">Instagram <FaInstagram/></a></p>
<p><a href="https://twitter.com/SpursOfficial?" target="blank">Twitter <FaTwitter/></a></p>
<p><a href="https://www.tottenhamhotspur.com/the-club/foundation/about-us/" target="blank">Linkedin<FaLinkedin/></a></p>
<p><a href="https://www.tottenhamhotspur.com/" target="blank">Tiktok <FaTiktok/></a></p></div>
</article>

<div className="location">
    <h2>Location</h2>
    {/* <iframe style={{width: "600px", height: "500px", justifyContent: "center"}} id="gmap_canvas" src="https://maps.google.com/maps?q=Gss%20hotel%20karagwe&t=k&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
     */}
</div>
        </div>
        




    );
}
 
export default Contact;