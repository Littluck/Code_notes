// 一. 日期对象（实例化；日期对象方法）

/* const date = new Date() // 当前时间
alert(date)
const date1 = new Date('2023-05-15 12:00:00') // 指定时间
alert(date1) */

/* function getTime() {
    const date_now = new Date()
    const year = date_now.getFullYear()
    const month = date_now.getMonth() + 1
    const date = date_now.getDate()
    const hours = date_now.getHours()
    const minutes = date_now.getMinutes()
    const seconds = date_now.getSeconds()
    const dates = [year, month, date, hours, minutes, seconds]
    for(let i = 0; i < dates.length; i++) {
        if(dates[i] < 10) {
            dates[i] = '0' + dates[i]
        }
    }
    console.log(`现在是${dates[0]}年${dates[1]}月${dates[2]}日 ${dates[3]}:${dates[4]}:${seconds}`)
    return `现在是${dates[0]}年${dates[1]}月${dates[2]}日 ${dates[3]}:${dates[4]}:${seconds}`
}
    setInterval(getTime, 1000) */


/* const time = document.querySelector('.time')
function getTime() {
    const date_now = new Date()
    const year = date_now.getFullYear()
    const month = date_now.getMonth() + 1
    const date = date_now.getDate()
    let hours = date_now.getHours()
    let minutes = date_now.getMinutes()
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes

    return `现在是${year}年${month}月${date}日 ${hours}:${minutes}`
}
time.innerHTML = getTime() */




// 二. 日期对象（时间戳）

// One.
// const time =new Date()
// time.getTime()
// console.log(time.getTime())
// // Two.
// +new Date()
// console.log(+new Date)
// // Three.
// Date.now()
// console.log(Date.now())

// 倒计时

/* function getCountTime() {
    const now = +new Date()
    const end = +new Date('2023-3-29 24:00:00')
    let i = (end - now) / 1000
    if(i < 0) {
        clearInterval(getEnd)
    }
    h = parseInt(i / 60 / 60 % 24)
    h = h < 10 ? '0' + h : h
    m = parseInt(i / 60 % 60)
    m = m < 10 ? '0' + m : m
    s = parseInt(i % 60)
    s = s < 10 ? '0' + s : s
    document.querySelector('div[data-name=hzy]').innerHTML = h
    document.querySelector('div[data-name=wyy]').innerHTML = m
    document.querySelector('div[data-name=lwy]').innerHTML = s
}
getCountTime()
let getEnd = setInterval(getCountTime, 1000) */

// 标准写法

/* const now = +new Date()
const end = +new Date('2023-3-28 24:00:00')
const between = (end - now) / 1000 */




// 三. 节点操作

// 查找节点

/* const dad = document.querySelector('.father')
const son = document.querySelector('.son')
console.log(son)
console.log(son.parentNode)
console.log(dad.childNodes)
console.log(dad.children)

// 增加节点

const new_div = document.createElement('div')
dad.appendChild(new_div)
const new_p = document.createElement('p')
dad.insertBefore(new_p, new_div)
dad.insertBefore(new_p, document.querySelector('.son'))
const new_new_div = new_div.cloneNode(true)    // 克隆节点
dad.appendChild(new_new_div)

// 删除节点

dad.removeChild(new_div) */




// 四. M端事件

const dad = document.querySelector('.father')
dad.addEventListener('touchstart', function() {
    console.log('别摸了')
})
dad.addEventListener('touchend', function() {
    console.log('别停，好吗')
})
dad.addEventListener('touchmove', function() {
    console.log('雅蠛蝶')
})




