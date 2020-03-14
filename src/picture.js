import React from 'react';
import Comments from './comments';


function Picture(props) {
  return (
    <div>
    <img src={props.image} alt="a p=nice picure"/>
    <div className="commentsDiv">
        <Comments postId={props.postId}/>
    </div>
    </div>
  );
}

export default Picture;
