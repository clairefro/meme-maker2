import React, {useState, useEffect} from 'react';

const MemeSVG = ({ data, text }) => {
  const aspectRatio = data.width/data.height;

  return (

    <svg
    width={500*aspectRatio}
    height={500*aspectRatio}
    >
      <image xlinkHref={data.url}  />
      <text x={0} y={0}> tedfsdsadsxt </text>
    </svg>
  )
}

export default MemeSVG;

// <div className="meme-image" style={{backgroundImage: `url(${url})`}}>
// </div>
