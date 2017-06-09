const electron = require('electron')
const {app} = electron
const {BrowserWindow} = require('electron')



app.on('ready', function(){
  let win = new BrowserWindow({width: 1280, height: 800})
  win.on('closed', () => {
    win = null
  })
  // Or load a local HTML file
  win.loadURL(`file://${__dirname}/index.html`)
})
