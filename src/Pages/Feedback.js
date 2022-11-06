
import { useState } from "react";
// import { history} from "react-router-dom";

const Feedback = () => {

const [username, setUsername] =useState('');
const [email, setEmail] =useState('');
const [subject, setSubject] =useState('');
const [details, setDetails] =useState('');
const [service, setService] =useState('Room');
const [supervisor, setSupervisor] =useState('Jembe');
const [isPending, setIsPending] = useState(false);
// const history = useHistory();
// const handleClick= () =>{
//   fetch('http://localhost:8000/feedback', 
//   {method:'DISPLAY'}).then(()=>{
//     history.push('/comment')
//   })
// }

const handleSubmit=(e)=>{
e.preventDefault();

const service ={username, email,subject,details,supervisor}
setIsPending(true);

fetch('http://localhost:8000/feedback', {
method:'POST',
headers:{'content-Type':'application/json'},
body: JSON.stringify(service)
}).then(()=>{
console.log('new comment added')


setIsPending(false)

// history.go(-1); 
// history.push('/')
})




}

    return ( 
        <div className="feedback">
           
          
            <h1>Feedback and suggestion</h1>
       <form on onSubmit={handleSubmit}>
       <label> username*</label>
      <input type="text" 
      value={username}
      onChange = {(e)=> setUsername(e.target.value)}
      required></input>
       <label>Email*</label>
      <input type="text" 
       value={email}
       onChange = {(e)=> setEmail(e.target.value)}
      required></input>
       <label> select service</label>
       <select
         value={service}
         onChange = {(e)=> setService(e.target.value)}>
      
        <option>Conference hall</option>
        <option>Photoshoot </option>
        <option> Food and beverages</option>
        <option> Room</option>
        <option> Tourism package</option>
       </select>
      
        <label>  opinions/request/complain subject* </label>
      <input type="text" 
       value={subject}
       onChange = {(e)=> setSubject(e.target.value)}
      required></input>
      <label>provide us details*</label>
       <textarea required 
       value={details}
       onChange = {(e)=> setDetails(e.target.value)}
      >
       </textarea>
       <label> service supervisor</label>
       <select
        value={supervisor}
        onChange = {(e)=> setSupervisor(e.target.value)}>
        <option>Jembe </option>
        <option>Nyundo </option>
        <option>Shoka </option>
        <option>Nyundo </option>
       </select>
      
       {!isPending && <button>Submit</button>}
       {isPending && <button disabled>Submiting...</button>}
       </form>
       <div className="review">
       {/* <button onClick={handleClick} >Review feedback and comments</button> */}
       <button><a href='/comment '  style={{
                    color: 'white',
                    
                    borderRadius: '8px' 
                }}>Review feedback and comments</a></button>
       </div>
       
        </div>
     );
}
 
export default Feedback;