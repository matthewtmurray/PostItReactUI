
import React, { useState } from 'react';
import Picture from './picture';
import ConvertImage from './imageHandler';


function Pictures() {

    var [pictures, addPicture] = useState([]);
    const [input, setInput] = useState('');

    const update = ()=>{
      var picture = input;
      addPicture(pictures => [...pictures, picture]);
    }

    const convertImage = ()=>{
        var picture = ConvertImage(input);
        addPicture(pictures => [...pictures, picture]);
    }
    
  return (
   
    <div>
        <h2>Add picture here</h2>
        <input type="file" id="pictureInput" value={input} onInput={e => setInput(e.target.value)}></input>
        <button type="button" className="btn btn-primary" onClick={convertImage}>Add picture</button>

        <div id="commentsDiv">{pictures.map((picture, i)=>(
            <Picture image={picture} key={i}></Picture>
        ))}</div>.

        
    </div>
  );
}

export default Pictures;
