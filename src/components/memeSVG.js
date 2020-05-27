import React, {useState, useEffect} from 'react';

const MemeSVG = ({ data, textTop, textBottom }) => {
  const aspectRatio = data.width/data.height;
  const [positionTop, setPositionTop] = useState({x: 100, y :200})
  const [positionBottom, setPositionBottom] = useState({x: 100, y :400})


  const trackTop = (e) => {
    setPositionTop({ x: e.offsetX -50, y: e.offsetY + 10 })
  }
  const trackBottom = (e) => {
    setPositionBottom({ x: e.offsetX -50, y: e.offsetY + 10 })
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
    <svg
    width={700}
    height={700}
    >
      <image xlinkHref={data.url} width={700} height={700*aspectRatio} />
      <text x={positionTop.x} y={positionTop.y} onMouseDown={e => handleMouseDown(e, 'top')} > {textTop} </text>
      <text x={positionBottom.x} y={positionBottom.y} onMouseDown={e => handleMouseDown(e, 'bottom')} > {textBottom} </text>
    </svg>
  )
}

export default MemeSVG;

// <div className="meme-image()" style={{backgroundImage: `url(${url})`}}>
// </div>
