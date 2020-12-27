const { app, BrowserWindow, protocol } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow()

    mainWindow.loadURL(url.format({
        pathname: 'index.html',
        protocol: 'file',
        slashes: true
    }))

    mainWindow.removeMenu();

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', () => {
    protocol.interceptFileProtocol('file', (request, callback) => {
        const url = request.url.substr(7)
        callback({ path: path.normalize(`${__dirname}/${url}`) })
    }, (err) => {
        if (err) console.error('Failed to register protocol')
    })
    createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})