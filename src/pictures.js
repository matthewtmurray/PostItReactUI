
import React, { useState } from 'react';
import Picture from './picture';


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
  
  const imageIsLoaded  = (e)=>{
    addPicture(pictures => [...pictures, e.target.result]);
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
