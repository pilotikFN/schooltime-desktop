const { ipcRenderer, contextBridge } = require("electron")

const API = {
    window: {
        close: () => ipcRenderer.send("app/close"),
        minimize: () => ipcRenderer.send("app/minimize"),
        maximize: () => ipcRenderer.send("app/maximize"),
        unmaximize: () => ipcRenderer.send("app/unmaximize"),
        isMaximized: () => ipcRenderer.send("app/isMaximazed"),
    }
}

contextBridge.exposeInMainWorld("app", API);