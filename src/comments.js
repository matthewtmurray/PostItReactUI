
import React, { useState, useEffect } from 'react';
import Comment from './comment';
import moment from 'moment';
import $ from 'jquery';


function Comments(props) {

    var [comments, addComment] = useState([]);
    const [input, setInput] = useState('');

    const update = ()=>{
        addCommentToDb(input);
    }

    const removeComment = (e)=>{
        let id = e.target.dataset.id;
        addComment(comments.filter((e)=>(e.id !== id)));
    }

    useEffect(() => {
      $.ajax({
        type:"GET",
        url:"http://localhost:9000/comments?postId=" + props.postId,
        dataType: "json",
        success: function(comments){
            var commentsArray = [];
            comments.forEach(comment => {
              commentsArray.push(comment);
            });
            addComment(commentsArray);
          },
        failure: function(error){alert(error)}
      })
   }, []);

    const addCommentToDb = (comment)=>{
    
      var body = {
          comment: comment,
          postId: props.postId,
          userName: 'Jack'
      };
      $.ajax({
        type:"POST",
        url:"http://localhost:9000/comment",
        data: JSON.stringify(body),
        contentType: "application/json",
        dataType: "json",
        success: function(comment){
          addComment(comments => [...comments, {comment:comment.comment, id:comment.id, dateTime:comment.dateTime, userName: comment.userName, postId: comment.postId}]);
          },
        failure: function(error){alert(error)}
      });
  }
    
  return (
   
    <div>
        <h2>Add comments here</h2>
        <input type="text" id="commentInput" value={input} onInput={e => setInput(e.target.value)}></input>
        <button type="button" className="btn btn-primary" onClick={update}>Add comment</button>

        <div id="commentsDiv">{comments.map((comment, i)=>(
            <Comment message={comment.comment} key={i} entity={comment} removeComment={removeComment}></Comment>
        ))}</div>.

        
    </div>
  );
}

export default Comments;
