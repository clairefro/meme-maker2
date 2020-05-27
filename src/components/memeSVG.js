import React, {useState, useRef} from 'react';
import {saveSvgAsPng} from 'save-svg-as-png';

const MemeSVG = ({ data, textTop, textBottom, fontSizeTop, fontSizeBottom }) => {
  const aspectRatio = data.width/data.height;
  const [positionTop, setPositionTop] = useState({x: 100, y :200})
  const [positionBottom, setPositionBottom] = useState({x: 100, y :400})
  const refSVG = useRef()

  const trackTop = (e) => {
    setPositionTop({ x: e.offsetX -50, y: e.offsetY + 10 })
  }
  const trackBottom = (e) => {
    setPositionBottom({ x: e.offsetX -50, y: e.offsetY + 10 })
  }

  // for dl
  const options = {
    backgroundColor: '#fff',
  }

  const textStyles = {
    fill: '#fff',
    stroke: '#000',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif'
  }

  const handleMouseDown = (e, pos) => {
    if(pos === 'top') {
      e.target.addEventListener('mousemove', trackTop)
      e.target.addEventListener('mouseup', (e) => {
        e.target.removeEventListener('mousemove',trackTop)
      })
    }
    else if (pos === 'bottom') {
      e.target.addEventListener('mousemove', trackBottom)
      e.target.addEventListener('mouseup', (e) => {
        e.target.removeEventListener('mousemove',trackBottom)
      })
    }
  }

  return (
    <>
    <button onClick={()=>saveSvgAsPng(refSVG.current, "meme.png")}>Save</button>
      <svg
      ref={refSVG}
      width={700}
      height={700}
      >
        <image xlinkHref={data.url} width={700} height={700*aspectRatio} />
        <text x={positionTop.x} y={positionTop.y} onMouseDown={e => handleMouseDown(e, 'top')} style={{fontSize: `${fontSizeTop}px`, ...textStyles }} > {textTop} </text>
        <text x={positionBottom.x} y={positionBottom.y} onMouseDown={e => handleMouseDown(e, 'bottom')} style={{fontSize: `${fontSizeBottom}px`, ...textStyles}}> {textBottom} </text>
      </svg>
    </>

  )
}

export default MemeSVG;

// <div className="meme-image()" style={{backgroundImage: `url(${url})`}}>
// </div>
