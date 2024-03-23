import React, { useRef, useEffect } from 'react';
import { TerminalBaseClient } from './app-logic/utils/clients/TerminalBaseClient';

const App: React.FC = () => {
  const terminalRef = useRef(null)

  useEffect(() => {
    if(!terminalRef.current){
      return //TODO: Deal with this error
    }
    const terminal = new TerminalBaseClient(terminalRef.current)

    return () => {
      terminal.kill();
    };
  }, [])

  return (
    <div>
      <div ref={terminalRef} style={{backgroundColor: 'black'}} ></div>
    </div>
  );
};

export default App;
