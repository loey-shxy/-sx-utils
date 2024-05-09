/**
 * AudioContext 实现音频流实时播放
 * 1. 创建 AudioContext / MediaSource 接口实例
 * 2. MediaSource 实例打开后创建 sourceBuffer，并监听update事件
 * 3. 接收到音频流数据后查看 sourceBuffer 是否空闲
 * 4. 如果 sourceBuffer 处于空闲状态，则将音频流追加到 sourceBuffer 内并开始播放
 * 5. 如果 sourceBuffer 处于工作状态，则将音频流放入缓存数组中待用
 * 6. sourceBuffer 监听到 update 事件后表示 sourceBuffer 空闲，则检测缓存数据是否有音频数据，如有则执行第4步
 */
class AudioPlayer {
    mediaSource: MediaSource // 媒体资源
    audio: HTMLAudioElement // 音频元素
    audioContext: AudioContext // 音频上下文
    sourceBuffer?: SourceBuffer // 音频数据缓冲区
    cacheBuffers: ArrayBuffer[] = [] // 音频数据列表
    pauseTimer: number | null = null // 暂停定时器

    constructor() { 
        const AudioContext = window.AudioContext
        this.audioContext = new AudioContext()

        this.mediaSource = new MediaSource()

        this.audio = new Audio()
        this.audio.src = URL.createObjectURL(this.mediaSource)

        this.audioContextConnect()
        this.listenMediaSource()
    }

    // 连接音频上下文
    private audioContextConnect() {
        // createMediaElementSource() 用于创建一个新的MediaElementAudioSourceNode对象，
        // 输入某个存在的 HTML 或者元素，对应的音频即可被播放或者修改
        const source = this.audioContext.createMediaElementSource(this.audio)
        source.connect(this.audioContext.destination)
    }

    // 监听媒体资源
    private listenMediaSource() {
        this.mediaSource.addEventListener('sourceopen', () => {
            if (this.sourceBuffer) return

            this.sourceBuffer = this.mediaSource.addSourceBuffer('audio/mpeg')

            this.sourceBuffer.addEventListener('update', () => {
                if (this.cacheBuffers.length && !this.sourceBuffer?.updating) {
                    const cacheBuffer = this.cacheBuffers.shift()!
                    this.sourceBuffer?.appendBuffer(cacheBuffer)
                }

                this.pauseAudio()
            })
        })
    }

    // 暂停音频
    private pauseAudio() {
        const neePlayTime = this.sourceBuffer!.timestampOffset - this.audio.currentTime || 0

        this.pauseTimer && clearTimeout(this.pauseTimer)
        // 播放完成5秒后还没有新的音频流过来，则暂停音频播放
        this.pauseTimer = setTimeout(() => this.audio.pause(), neePlayTime * 1000 + 5000);
    }

    private playAudio() {
        // 为防止下一段音频流传输过来时，上一段音频已经播放完毕，造成音频卡顿现象，做了1秒的延时
        setTimeout(() => {
            if (this.audio.paused) {
                try {
                    this.audio.play()
                } catch (e) {
                    this.playAudio()
                }
            }
        }, 1000)
    }

    // 接收音频数据
    public receiveAudioData(audioData: ArrayBuffer) {
        if (!audioData.byteLength) return
        if (this.sourceBuffer?.updating) {
            this.cacheBuffers.push(audioData)
        } else {
            this.sourceBuffer?.appendBuffer(audioData)
        }

        this.playAudio()
    }
}

export default AudioPlayer