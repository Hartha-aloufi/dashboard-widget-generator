import React from 'react';
import Dashboard from './components/Dashboard'
import * as MirageServer from './server/server' 
import 'antd/dist/antd.css';

// run fake server
MirageServer.start()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        I'm a header
      </header>

      <Dashboard />
    </div>
  );
}

export default App;
