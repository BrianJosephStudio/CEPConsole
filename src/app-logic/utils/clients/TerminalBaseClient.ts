import { ipcRenderer } from 'electron'
import { Terminal } from 'xterm'

export class TerminalBaseClient {
    private terminal: Terminal
    constructor(rootElement: HTMLElement){
        this.terminal = new Terminal()
        this.terminal.open(rootElement)
        this.terminal.write(`Welcome to the CEP Terminal`)
        this.terminal.onData(e => ipcRenderer.send('terminal.toTerm',e))

        ipcRenderer.on('terminal.incData', (event, data) =>  this.terminal.write(data))
    }

    public execute<T>(command: string) {
        //TODO: validate commands?

        ipcRenderer.on('terminal.incData', (event, data) =>  this.terminal.write(data))

        const response = ipcRenderer.send('terminal.toTerm',command)
    }

    public kill() {
        this.terminal.dispose()
    }
}