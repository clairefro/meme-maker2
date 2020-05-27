import React, {useEffect, useState} from 'react';

import MemeSVG from './memeSVG';

const MemeEditor = ({ data }) => {
  const [text, setText] = useState("")
  const { title, url, width, height, id } = data;

  return (
    <div className="meme-editor">
      <h2>EDIT MEME</h2>
      <p>{title}</p>
      <div className="meme-editor-sections">
        <div className="text-edit">
         <input type="text" onChange={(e)=>(setText(e.target.value))}/>
        </div>
        <div className="meme-window">
          <MemeSVG data={data} text={text} />
        </div>

      </div>
    </div>
  );
}

export default MemeEditor;
