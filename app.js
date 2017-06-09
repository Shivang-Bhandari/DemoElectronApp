const electron = require('electron')
const {app} = electron
const {BrowserWindow} = require('electron')


app.on('ready', function(){
  let win = new BrowserWindow({width: 800, height: 600})
  win.on('closed', () => {
    win = null
  })

  // Load a remote URL
  win.loadURL('https://github.com')

  // Or load a local HTML file
  win.loadURL(`file://${__dirname}/app/index.html`)
})

// Or use `remote` from the renderer process.
// const {BrowserWindow} = require('electron').remote
