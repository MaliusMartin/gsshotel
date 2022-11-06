import { useEffect, useState } from "react";
const useFetch = (url) =>{

    const [isPending,setIsPending] = useState(true);
const [error, setError] = useState(null);
const [data, setData] = useState( null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res=>{
               if(!res.ok){
                throw Error('Could not fetch the data for that resource');
               }
                return res.json();
            })
            .then((data)=>{
                
                setData(data)
            setIsPending(false)
            setError(null)
            } )
         .catch(err=> {
            setIsPending(false)
            setError(err.message)
         })    
        },200)
    
    },[url]);
    return{data, error, isPending}
}
export default useFetch;