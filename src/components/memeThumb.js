import React, { useEffect } from 'react';

const MemeThumb = ({ id, title, url, width, height, selectBase }) => {
  const props = {id, title, url, width, height}

  return (
    <div className="meme-thumb" style={{backgroundImage: `url(${url})`}} onClick={()=>selectBase(props)} >
      <p>{title}</p>
    </div>
  )
}

export default MemeThumb;
