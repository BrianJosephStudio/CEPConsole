import { app, BrowserWindow, ipcMain } from 'electron'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import os from 'os'
import pty from 'node-pty'

var shell = os.platform() === "win32" ? 'powershell.exe' : 'bash'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    mainWindow.loadURL(`file://${join(__dirname, '../client/index.html')}`);

    mainWindow.on('closed', () => (mainWindow = null));
}

const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 24,
    ced: process.env.HOME,
    end: process.env
})

ptyProcess.on("data", (data) => {
    mainWindow.webContents.send("terminal.incData", data)
})

ipcMain.on("terminal.toTerm", (event, data) => {
    ptyProcess.write(data)
})

app.on('ready', createWindow)

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})