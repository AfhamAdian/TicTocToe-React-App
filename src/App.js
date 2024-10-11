import React from 'react';

import Board from './components/Board';

const appStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
}

function App() {
  return (
    <div className="App" style={appStyle} >
      <Board />
    </div>
  );
}

export default App;
