import React, {useState, useEffect} from 'react';

const MemeSVG = ({ data, text }) => {
  const aspectRatio = data.width/data.height;
  const [topY, setTopY] = useState(200)
  const [topX, setTopX] = useState(100)

  const trackTop = (e) => {
    setTopX(e.offsetX)
    setTopY(e.offsetY)
  }

  const handleMouseDown = (e, pos) => {
    if(pos === 'top') {
      e.target.addEventListener('mousemove', trackTop)
    }
  }

  const handleMouseUp = (e, pos) => {
    if(pos === 'top') {
      e.target.removeEventListener('mousemove', trackTop)
    }
  }


  return (

    <svg
    width={700}
    height={700}
    >
      <image xlinkHref={data.url} width={700} height={700*aspectRatio} />
      <text x={topX} y={topY} onMouseDown={e => handleMouseDown(e, 'top')} onMouseUp={e => handleMouseUp(e, 'top')}> {text} </text>
    </svg>
  )
}

export default MemeSVG;

// <div className="meme-image()" style={{backgroundImage: `url(${url})`}}>
// </div>
