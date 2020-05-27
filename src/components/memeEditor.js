import React, {useEffect, useState} from 'react';

import MemeSVG from './memeSVG';

const MemeEditor = ({ data }) => {
  const { title, url, width, height, id } = data;

  return (
    <div className="meme-editor">
      <h2>EDIT MEME</h2>
      <p>{title}</p>
      <div className="meme-editor-sections">
        <div className="meme-window">
          <MemeSVG data={data} />
        </div>
        <div className="text-edit">
        </div>
      </div>
    </div>
  );
}

export default MemeEditor;
