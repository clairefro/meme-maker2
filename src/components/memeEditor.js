import React, {useEffect, useState} from 'react';

import MemeSVG from './memeSVG';

const MemeEditor = ({ data }) => {
  const [textTop, setTextTop] = useState("")
  const [textBottom, setTextBottom] = useState("")
  const [fontsize, setFontsize] = useState(48)
  const { title, url, width, height, id } = data;

  return (
    <div className="meme-editor">
      <h2>EDIT MEME</h2>
      <p>{title}</p>
      <div className="meme-editor-sections">
        <div className="text-edit">
        <label htmlFor="top-text">Top text </label>
         <input type="text" name="top-text" onChange={(e)=>(setTextTop(e.target.value))}/>
        <label htmlFor="bottom-text">Bottom text </label>
         <input type="text" name="top-text" onChange={(e)=>(setTextBottom(e.target.value))}/>
        <label htmlFor="fontsize-slider">Font size </label>
         <input type="range" min="8" max="90" value="48" class="slider" name="fontsize-slider" id="fontsize-slider" onChange={(e)=>(setFontsize(e.target.value))} />
        </div>
        <button >Download Meme</button>
        <div className="meme-window">
          <MemeSVG data={data} textTop={textTop} textBottom={textBottom} fontSize={fontsize}/>
        </div>
      </div>
    </div>
  );
}

export default MemeEditor;
