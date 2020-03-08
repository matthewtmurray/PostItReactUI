
import React, { useState } from 'react';
import Comment from './comment'


function Comments() {

    var [comments, addComment] = useState([]);
    const [input, setInput] = useState('');

    const update = ()=>{
      var comment = input;
        addComment(comments => [...comments, comment]);
    }

    const removeComment = (e)=>{
        let comment = e.target.dataset.message;
        addComment(comments.filter((e)=>(e !== comment)))
    }
    
  return (
   
    <div>
        <h2>Add comments here</h2>
        <input type="text" id="commentInput" value={input} onInput={e => setInput(e.target.value)}></input>
        <button type="button" className="btn btn-primary" onClick={update}>Add comment</button>

        <div id="commentsDiv">{comments.map((comment, i)=>(
            <Comment message={comment} key={i} removeComment={removeComment}></Comment>
        ))}</div>.

        
    </div>
  );
}

export default Comments;
