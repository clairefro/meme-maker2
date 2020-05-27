import React, { useState, useEffect } from 'react';

import MemeThumb from './memeThumb'
const MemeImageList = ({ selectBase }) => {
  const [memeImages, setMemeImages] = useState([])

  useEffect(()=> {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setMemeImages(data.data.memes))
  },[])

  return (
    <div className="meme-image-list">
      <div className="meme-thumb-list">
        { memeImages.length>0 ? memeImages.map(m => (
          <MemeThumb
            key={m.id}
            id={m.id}
            title={m.name}
            url={m.url}
            width={m.width}
            height={m.height}
            selectBase={selectBase}
          />
        )) : <p>Loading meme bases...</p>
        }
      </div>

    </div>
  )
}


export default MemeImageList;
