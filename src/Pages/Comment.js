import useFetch from "../useFetch";
import CommentList from "./CommentList";

const Comment = () => {

    const { data:feedback,isPending, error} = useFetch('http://localhost:8000/feedback/');


    return ( 

        <div className="comment">
            <h2>Comments page</h2>
            {error && <div>{error}</div>}
{isPending && <div>Loading....</div>}
{ feedback && <CommentList feedback={feedback} title=
           "ALL COMMENTS LIST"  /> }

        </div>
     );
}
 
export default Comment;