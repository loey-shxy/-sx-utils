import SocketConnect from './src/websocket'

const url = 'ws://127.0.0.1:8080'
const ws = new SocketConnect(url)

const observer = ws.onObserve((data) => {
    console.log(`output->data`,data)
})

ws.cancelObserve(observer)

ws.send('hello world')
