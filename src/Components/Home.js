//  import {FaGithub, FaBars} from "react-icons/fa"
// import ServicesList from '../Pages/ServicesList';
// import useFetch from '../useFetch';

// const foodpic = new URL("../Images/food.webp",import.meta.url)
const Home = () => {
 


// const handleDelete = (id)=>{
//    const newService = services.filter(service=>service.id !== id) ;
// setServices(newService); }

// const [name,setName]=useState('Buda');
// useEffect(()=>{
//     console.log('use effect run');
//     console.log(name);
// },[name]);
// const { data:services,isPending, error} = useFetch('http://localhost:8000/services')



    return (
        <div className='Home'>
            <h2>Homepage </h2>
            <div className="description">
            <p>What's the difference between "average" marketing and lovable marketing? It's the difference between creating generic webpages that provide great information, but in a straightforward, black-and-white kind of way — versus creating webpages that provide great information and are infused with color, personality, and stay true to a company's unique brand voice. When you create lovable marketing, you can start a movement of brand evangelists and advocates who will help you grow.

Where does this fit into a company's About Us page? The folks at Bulldog, a men's skincare company that was named for the colloquial "man's best friend" — a dog — could have typed up a few paragraphs about where the brand came from and how it was one of the first in the space to redefine and eliminate stereotypes around men's grooming. But that text alone would have been a bit, well, average.

Instead, the About Us page is pithy, colorful, and leads with an adorable bulldog — fitting the name and the brand. And it states the purpose of the products — to help customers from waking up with the (admittedly adorable) wrinkly face you see when you visit Bulldog's website</p></div>

          {/* { services && <ServicesList services={services} title=
           "ALL SERVICES LIST" handleDelete={handleDelete} /> } */}
       {/* <img  className='pic' src={foodpic} alt='background'/>     */}
           
{/* {error && <div>{error}</div>}
{isPending && <div>Loading....</div>}
{ services && <ServicesList services={services} title=
           "ALL SERVICES LIST"  />  } */}

           {/* {services && <ServicesList services={services.filter((service)=>service.supervisor==='Jembe')} title=
           "Jembes services" />} */}
            {/* <button onClick={()=>setName('Martin')}>Change Name</button> */}
       {/* <p>{name}</p> */}
       
      
        </div> 
      );
}
 
export default Home;