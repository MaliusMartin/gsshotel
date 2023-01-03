import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Bookingform from "./Bookingform";
import { useState } from "react";
// import { useHistory } from "react-router-dom";



const ServicesDetails = () => {

    const [firstname, setFirstname] = useState('');
    const [secondname, setSecondname] = useState('');
    const [sirname, setSirname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [days, setDays] = useState('');
    const [date, setDate] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) =>{
        // e.preventDefault();
      
        const booking = {firstname, secondname, sirname, email,phone, days, date,}
      isPending(true);
      fetch('http://localhost:8000/booking', {
        method:'POST',
        headers:{'content-Type':'application/json'},
        body: JSON.stringify(booking)
        }).then(()=>{
        console.log('new comment added')


setIsPending(false)

// history.go(-1);
// history.push('/')
})

      }
      

    const {id} = useParams();
    const {data:service, error}=useFetch('http://localhost:8000/services/' +id);
    // const handleClick = () =>{
    //    fetch('http://localhost:8000/services',+service.id, {
    //     method: 'SUBMIT'
    //    }) 
    // }

const [buttonPopup, setButtonPopup]= useState(false);


    return ( 
        
        <div className="service-details">
           {isPending && <div>Loading....</div>}
       {error && <div>{error}</div>}
        {service && ( 
            <article>
               <h2>{id}. {service.title}</h2> 
               <p>supervised by {service.supervisor}</p>
               <p>{service.body}</p> 
               {/* <button onClick={()=>handleClick(service.id)} >Book now</button>   */}
            </article>
        )  }
        <main>
            <button onClick={() => setButtonPopup(true)}>Book Now</button>
        </main>
        
        <Bookingform trigger={buttonPopup} setTrigger={setButtonPopup}>

        <p>To book the service fill this form and Submit</p>

        <div className="booking-info">

        <form on onSubmit={ handleSubmit}>

        <label>first name</label>
        <input type="text"
        value={firstname}
        onChange={(e)=> setFirstname(e.target.value)}
        required></input>

        <label>second name</label>
        <input type="text"
        value={secondname}
         onChange={(e)=> setSecondname(e.target.value)}
        required></input>

        <label>sir name</label>
        <input type="text"
        value={sirname}
         onChange={(e)=> setSirname(e.target.value)}
        required></input>

        <label>active email</label>
        <input type="email"
        value={email}
         onChange={(e)=> setEmail(e.target.value)}
        required></input>

        <label>phone number</label>
        <input type="text"
        value={phone}
         onChange={(e)=> setPhone(e.target.value)}
        required></input>

        <label>number of days you will spend</label>
        <input type="number"
        value={days}
         onChange={(e)=> setDays(e.target.value)}
        required></input>

        <label>select date</label>
        <input type="date"
        value={date}
         onChange={(e)=> setDate(e.target.value)}
        required></input>
        {!isPending && <button  >Submit</button>}
        {isPending && <button disabled >Submiting....</button>}
        </form></div>
        </Bookingform></div>
     
     

     
        );
}
 
export default ServicesDetails ;