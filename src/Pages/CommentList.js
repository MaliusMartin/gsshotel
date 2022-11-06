

const CommentList = ({feedback,title}) => {
    return ( 
        <div className="comment">
     
<h2>{title}</h2>
  {feedback.map(  (comment)=> (
           <div className='comment-preview' key={feedback.id}>
           <a href={`/feedback/${comment.id}`}>
           <h2>{comment.id}. {comment.subject}</h2>
            <p>written by {comment.username}</p></a> 
            
           
           {/* <button onClick={()=>handleDelete(comment.id)} >Delete</button> */}
           </div>
            ) )  }
        </div>
      

         );
}
 
export default CommentList;