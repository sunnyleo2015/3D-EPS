/**
 * Created by Administrator on 2017/7/3.
 */
const {app, BrowserWindow} = require('electron');
let _window;
const createWindow = ()=>{
  _window = new BrowserWindow({
    width: 1280,
    height: 800,
    show: false,
  });
  _window.loadURL(`file://${__dirname}/dist/index.html`);
  _window.webContents.openDevTools();
  _window.on('closed',()=>{
    _window = null
  });
  _window.on('ready-to-show', ()=>{
    _window.show();
    _window.focus();
  });
};

app.on('ready', _=> createWindow());
app.on('window-all-closed',_=> process.platform !== 'darwin' && app.quit());
app.on('activate', _ => _window === null && createWindow());
