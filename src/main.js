import { app, BrowserWindow } from 'electron'

app.on('ready', () => {
  const mainWindows = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindows.loadURL(`file://${__dirname}/index.html`)
  mainWindows.on('close', () => app.quit())
})

app.on('windows-all-closed', () => app.quit())

console.log(`Electron Version ${app.getVersion()}`)
