import React, {useState, useEffect} from 'react';

const MemeSVG = ({ data, text }) => {
  const aspectRatio = data.width/data.height;

  return (

    <svg
    width={700}
    height={700}
    >
      <image xlinkHref={data.url} width={700} height={700*aspectRatio} />
      <text x={100} y={200}> {text} </text>
    </svg>
  )
}

export default MemeSVG;

// <div className="meme-image" style={{backgroundImage: `url(${url})`}}>
// </div>
