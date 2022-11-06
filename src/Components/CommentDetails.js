import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const CommentDetails = () => {
    const {id} = useParams();
    const {data:feedback, error, isPending}=useFetch('http://localhost:8000/feedback/' +id);
    
    return ( 
        <div className="comment-details">
           {isPending && <div>Loading....</div>}
       {error && <div>{error}</div>}
        {feedback && ( 
            <article>
               <h2>{id}. {feedback.username}</h2> 
               <p>Email: {feedback.supervisor}</p>
               <p>service: {feedback.service}</p> 
               <p>{feedback.subject}</p> 
               <p>{feedback.details}</p> 
               <p>supervised by: {feedback.supervisor}</p> 
            </article>
        )  }
        </div>
        );
}

export default CommentDetails;