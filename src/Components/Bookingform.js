import React from 'react';
// import { useState } from 'react';



// const [firstname, setFirstname] = useState('');
// const [secondname, setSecondname] = useState('');
// const [sirname, setSirname] = useState('');
// const [email, setEmail] = useState('');
// const [phone, setPhone] = useState('');
// const [days, setDays] = useState('');
// const [date, setDate] = useState('');
// const [isPending, setIsPending] = useState(false);


// const handleSubmit = (e) =>{
//   e.preventDefault();

//   const booking = {firstname, secondname, sirname, email,phone, days, date,}
// isPending(true);
// }


function Bookingform(props) {
  return (props.trigger)? (
    <div className='popup'>
    

<div className='popup-inner'>
    <button className='close-btn' onClick={() => props.setTrigger(false)} >close X</button>
{props.children}
</div>

    </div>
  ): "";
}

export default Bookingform