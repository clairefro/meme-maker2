import React, {useEffect, useState} from 'react';

import MemeSVG from './memeSVG';

const MemeEditor = ({ data }) => {
  const [textTop, setTextTop] = useState("")
  const [textBottom, setTextBottom] = useState("")
  const [fontsizeTop, setFontsizeTop] = useState(48)
  const [fontsizeBottom, setFontsizeBottom] = useState(48)
  const [theme, setTheme] =useState({ fill: '#fff', stroke: '#000'})
  const { title, url, width, height, id } = data;

  const clearText = () => {
    setTextTop("")
    setTextBottom("")
  }

  const handleTheme = (e) => {
    if (e.target.value === 'white') {
      setTheme({fill: '#fff', stroke: '#000'})
    }
    else if (e.target.value === 'black') {
      setTheme({fill: '#000', stroke: '#fff'})
    }
  }

  return (
    <div className="meme-editor">
      <h2>EDIT MEME</h2>
      <p>{title}</p>
      <div className="meme-editor-sections">
        <div className="text-edit">
          <div className="text-top">
            <label htmlFor="top-text">Text #1 </label>
            <input type="text" name="top-text" onChange={(e)=>(setTextTop(e.target.value))}/>
            <label htmlFor="fontsize-slider">Font size </label>
            <input type="range" min="8" max="90" value="48" name="fontsize-slider" id="fontsize-slider" onChange={(e)=>(setFontsizeTop(e.target.value))} />
          </div>


          <div className="text-bottom">
            <label htmlFor="bottom-text">Text#2 </label>
            <input type="text" name="top-text" onChange={(e)=>(setTextBottom(e.target.value))}/>
            <label htmlFor="fontsize-slider-bottom">Font size </label>
            <input type="range" min="8" max="90" value="48" name="fontsize-slider-bottom" id="fontsize-slider-bottom" onChange={(e)=>(setFontsizeBottom(e.target.value))} />
          </div>

          <div className="theme-select">
            <select name="theme-select" id="theme-select" onChange={handleTheme}>
              <option value="white">white text</option>
              <option value="black">black text</option>
            </select>
          </div>

         </div>

        <button onClick={clearText} style={{width: "100px"}}>Clear text</button>
        <div className="meme-window">
        { Object.keys(data).length === 0 ?
          <p>{"<---"} Click a base meme to start</p>
          :
          <MemeSVG data={data} textTop={textTop} textBottom={textBottom} fontSizeTop={fontsizeTop} fontSizeBottom={fontsizeBottom} theme={theme}/>
        }
        </div>
      </div>
    </div>
  );
}

export default MemeEditor;
