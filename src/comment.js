import React from 'react';


function Comment(props) {
  return (
    <div>
    <span className="commentSpan">{props.message}</span><button type="button" className="btn btn-success" onClick={props.removeComment} data-message={props.message}>remove comment</button>
    </div>
  );
}

export default Comment;
