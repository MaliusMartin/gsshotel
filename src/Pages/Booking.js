import ServicesList from '../Pages/ServicesList';
import useFetch from '../useFetch';



const Booking = () => {
    const { data:services,isPending, error} = useFetch('http://localhost:8000/services');

    return ( 
        <div className="booking">
            <h1 >ALL SERVICES</h1>
            <div className="content">
            
            {error && <div>{error}</div>}
{isPending && <div>Loading....</div>}
{ services && <ServicesList services={services} title=
           "SERVICES LIST"  /> }

           {/* {services && <ServicesList services={services.filter((service)=>service.supervisor==='Jembe')} title=
           "Jembes services" />} */}


            </div>
        </div>
     );
}
 
export default Booking;