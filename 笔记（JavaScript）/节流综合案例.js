const video = document.querySelector('video')

function throttle(fn, t) {
    let timer = null
    
    return function () {
        if (!timer) {
            setTimeout (function () {
                fn()
                timer = null
            }, t)
        }
    }
}

video.addEventListener('timeupdate', throttle(() => {
    localStorage.setItem('currentTime', video.currentTime)
}, 1000))

// 事件监听的另一种写法 以on开头
// video.ontimeupdate = throttle(() => {
//     localStorage.setItem('currentTime', video.currentTime)
// }, 1000)

video.addEventListener('loadeddata', () => {
    video.currentTime = localStorage.getItem('currentTime') || 0
})