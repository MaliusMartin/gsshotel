

const ServicesList = ({services,title,handleDelete}  ) => {
//  const services = props.services;
//    const title = props.title; 



  
    return ( 
        <div className="services-list">
<h2>{title}</h2>
  {services.map((service)=> (
           <div className='service-preview' key={services.id}>
           <a href={`/services/${service.id}`}>
           <h2>{service.id}. {service.title}</h2>
            <p>supervised by {service.supervisor}</p></a> 
            
           
           {/* <button onClick={()=>handleDelete(service.id)} >Book now</button> */}
           </div>
            ))}
        </div>
          
     );
}
 
export default ServicesList;