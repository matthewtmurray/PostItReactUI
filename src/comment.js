import React from 'react';


function Comment(props) {
  return (
    <div>
    <span className="commentSpan">{props.message + " " + props.entity.userName + " " + props.entity.dateTime}</span><button type="button" className="btn btn-success" onClick={props.removeComment} data-message={props.entity.id}>remove comment</button>
    </div>
  );
}

export default Comment;
