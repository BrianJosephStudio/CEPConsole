import { ipcRenderer } from 'electron'
import React, { useRef, useEffect } from 'react';
import { Terminal } from 'xterm'


const App: React.FC = () => {
  const terminalRef = useRef(null)

  useEffect(() => {
    const terminal = new Terminal()

    terminal.open(terminalRef.current!)

    terminal.write(`Welcome to the CEP Terminal`)

    terminal.onData(e => ipcRenderer.send('terminal.toTerm',e))

    ipcRenderer.on('terminal.incData', (event, data) =>  terminal.write(data))

    return () => {
      terminal.dispose();
    };
  }, [])

  return (
    <div>
      <div ref={terminalRef} style={{backgroundColor: 'black'}} ></div>
    </div>
  );
};

export default App;
