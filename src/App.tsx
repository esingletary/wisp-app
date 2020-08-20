import React from 'react';

import './App.css';

import Welcome from './components/welcome'
import TextEditor from './components/text-editor/text-editor';

function App() {
  return (
    <div className="App">
      <Welcome />
      <TextEditor />
    </div>
  );
}

export default App;
