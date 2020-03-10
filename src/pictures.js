
import React, { useState, useEffect } from 'react';
import Picture from './picture';
import $ from 'jquery';


function Pictures() {

    var [pictures, addPicture] = useState([]);

    const fileInput = React.createRef();

    const convertImage = ()=>{

      if (fileInput.current.files && fileInput.current.files[0]) {
        var reader = new FileReader();

        reader.onload = imageIsLoaded;
        reader.readAsDataURL(fileInput.current.files[0]);
      }
     
    }

    useEffect(() => {
      $.ajax({
        type:"GET",
        url:"http://localhost:9000",
        dataType: "json",
        success: function(posts){
            var picturesArray = [];
            posts.forEach(p => {
              picturesArray.push(p.image);
            });
            addPicture(picturesArray);
          },
        failure: function(error){alert(error)}
      })
   }, []);
  
  const imageIsLoaded  = (e)=>{
    addPicture(pictures => [e.target.result, ...pictures]);
    addPostToDb(e.target.result);
  }

  const addPostToDb = (image)=>{
    
    var body = {
        username: "Jack",
        image: image,
        imageTitle: "",
        imageDescritpion:"",
        comments:[],
        likes:0,
        dislikes:0
    };
    $.ajax({
      type:"POST",
      url:"http://localhost:9000",
      data: JSON.stringify(body),
      contentType: "application/json",
      dataType: "json",
      success: function(post){
          
        },
      failure: function(error){alert(error)}
    });
}
    
  return (
   
    <div>
        <h2>Add picture here</h2>
        <input type="file" id="pictureInput"  ref={fileInput}></input>
        <button type="button" className="btn btn-primary" onClick={convertImage}>Add picture</button>

        <div id="commentsDiv">{pictures.map((picture, i)=>(
            <Picture image={picture} key={i}></Picture>
        ))}</div>.

        
    </div>
  );
}

export default Pictures;
