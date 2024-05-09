type ObserverType = {
    type: string
    callback: (event: MessageEvent) => void
}

type MessageDataType = object

class SocketConnect {
    private url: string // WebSocket 连接地址
    private ws: WebSocket | undefined // WebSocket 连接对象
    private heartEnabled: boolean // 是否开启心跳
    private heartInterval = 10000 // 心跳间隔时间
    private heartTimeout = 5000 // 心跳超时时间
    private lockReconnect = false // 是否禁止重连
    private heartTimer: NodeJS.Timeout | undefined // 心跳定时器
    private serverTimer: NodeJS.Timeout | undefined // 服务器超时定时器
    private reconnectCount = 0 // 重连次数
    private maxReconnectCount = 5 // 最大重连次数
    private observers: ObserverType[] = [] // 消息订阅者列表
    private waitingMessages: string[] = [] // 待执行命令列表

    constructor(url = 'ws://127.0.0.1:8080', heartEnabled = true) {
        this.url = url

        this.heartEnabled = heartEnabled

        this.connect()
    }

    // WebSocket 连接
    connect() {
        this.ws = new WebSocket(this.url)

        this.ws.onopen = () => {
            this.reconnectCount = 0 // 重置重连次数
            this.heartEnabled && this.start() // 开启心跳

            // 发送所有等待发送的消息
            const len = this.waitingMessages.length
            for (let i = 0; i < len; i++) {
                const message = this.waitingMessages.shift()
                this.send(message)
            }
        }

        this.ws.onclose = (event) => {
            console.log(`WebSocket closed: ${event}`)
            this.reconnect()
        }

        this.ws.onerror = (error) => {
            console.log(`WebSocket error: ${error}`)
            this.reconnect()
        }

        this.ws.onmessage = (event: MessageEvent) => {
            // 收到心跳信息则重置心跳，收到其他信息则触发回调
            if (event.data === 'pong') {
                this.start()
            } else {
                this.observers.forEach((observer) => {
                    observer.callback(event.data)
                })
            }
        }
    }

    // 重连
    reconnect() {
        // 设置lockReconnect 变量避免重复连接
        if (this.lockReconnect || this.reconnectCount >= this.maxReconnectCount) return
        this.lockReconnect = true

        // 重连次数+1
        this.reconnectCount++
        setTimeout(() => {
            this.connect()
            this.lockReconnect = false
        }, 1000 * this.reconnectCount); // 重连次数越多，延时越久
    }

    // 开启心跳
    start() {
        this.reset()

        this.heartTimer = setTimeout(() => {
            this.send('ping')

            // 5秒还没有返回心跳信息，则认为连接断开，关闭WebSocket并重连
            this.serverTimer = setTimeout(() => {
                this.ws?.close()
            }, this.heartTimeout)
        }, this.heartInterval)
    }

    // 重置心跳定时器/服务器超时定时器
    reset() {
        this.heartTimer && clearTimeout(this.heartTimer)

        this.serverTimer && clearTimeout(this.serverTimer)
    }

    send(message?: string) {
        if (message) {
            // 发送消息时若 WebSocket 还未连接，则将信息放入待发送信息中等待连接成功后发送
            if (this.onReady() !== WebSocket.OPEN) {
                this.waitingMessages.push(message)
                return this
            }
            this.ws && this.ws?.send(message)
        }

        return this
    }

    // WebSocket 连接状态
    onReady() {
        return this.ws && this.ws.readyState
    }

    // 订阅WebSocket 信息
    onObserve(callback: (data: MessageDataType) => void, type = 'all') {
        const observer = { type, callback }
        this.observers.push(observer)

        return observer
    }

    // 取消订阅信息
    cancelObserve(cancelObserve: ObserverType) {
        this.observers.forEach((observer, index) => {
            if (cancelObserve === observer) {
                this.observers.splice(index, 1)
            }
        })
    }
}

export default SocketConnect