require("dotenv").config()
import { ipcRenderer } from 'electron'
import { Terminal } from 'xterm'
import { spawn } from 'child_process';

export class TerminalBaseClient {
    private readonly isDevMode: boolean
    private readonly terminal: Terminal
    private readonly childProcess: any;

    constructor(rootElement: HTMLElement) {
        this.terminal = new Terminal()
        this.terminal.open(rootElement)
        this.terminal.write(`Welcome to the CEP Terminal`)

        if (
            !process.env.DEV_MODE || (
                process.env.DEV_MODE !== 'true' &&
                process.env.DEV_MODE !== 'false'
            )
        ) {
            throw new Error("DEV_MMODE is not properly defined or does not exist in .env") //TODO: Deal with this rrror
        }
        this.isDevMode = eval(process.env.DEV_MODE)

        if (this.isDevMode) {
            ipcRenderer.on('terminal.incData', (event, data) => this.terminal.write(data))
            this.terminal.onData(e => ipcRenderer.send('terminal.toTerm', e))
        } else {
            this.childProcess = spawn('your_command_here', ['optional_arguments_here']);
            this.childProcess.stdout.on('data', (data: any) => this.terminal.write(data));
            this.childProcess.stderr.on('data', (data: any) => this.terminal.write(data));
            this.terminal.onData((e: string) => this.childProcess.stdin.write(e));
        }
    }

    public execute(command: string): void {
        //TODO: validate commands?
        if (this.isDevMode) {
            ipcRenderer.on('terminal.incData', (event, data) => this.terminal.write(data))
            ipcRenderer.send('terminal.toTerm', command)
            return
        }
        this.childProcess.stdin.write(command);
    }

    public kill() {
        this.terminal.dispose()
    }
}