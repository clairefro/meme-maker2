import React, { useState } from 'react';
// import logo from './logo.svg';
import './style/App.scss';

import MemeImageList from './components/memeImageList'
import MemeEditor from './components/memeEditor'

function App() {
  const [selectedBase, setSelectedBase] =useState({})

  const selectBase = (data) => {
    setSelectedBase(data)
  }

  return (
    <div className="App">
      <h1>BUILD-A-MEME</h1>
      <div className="panels">
        <div className="panel-left">
          <h2>CHOOSE A BASE</h2>
          <MemeImageList selectBase={selectBase}/>
        </div>
        <div className="panel-right">
          <MemeEditor data={selectedBase}/>
        </div>
      </div>
    </div>
  );
}

export default App;
