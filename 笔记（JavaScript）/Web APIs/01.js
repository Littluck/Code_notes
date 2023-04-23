// 一.

/* console.log(document.querySelector('ul li:nth-child(1)'))
console.log(document.querySelector('ul li:nth-child(2)'))
console.log(document.querySelector('ul li:nth-child(3)'))
console.log(document.querySelectorAll('.nav li'))

const nav = document.querySelector('.nav')
console.log(nav.innerHTML) */


// 二. 随机抽奖

/* const arr = ['刘德华', '张学友', '黎明', '林志颖' ,'子远']
const main1 = document.querySelector('.main h1 span')
const main2 = document.querySelector('.main h2 span')
const main3 = document.querySelector('.main h3 span')
let random = Math.floor(Math.random() * arr.length)
main1.innerHTML = arr[random]
arr.splice(random, 1)
random = Math.floor(Math.random() * arr.length)
main2.innerHTML = arr[random]
arr.splice(random, 1)
random = Math.floor(Math.random() * arr.length)
main3.innerHTML = arr[random] */




// 三.

// 通过 style属性操作 CSS
// function color(N, M) {
//     // 多此一举的写法
//     /* let random = Math.floor(Math.random() * (M - N + 1)) + N
//     return random */

//     // 专业写法
//     return Math.floor(Math.random() * (M - N +)) + N
// }
// let random1 = color(0, 255)
// let random2 = color(0, 255)
// let random3 = color(0, 255)
// const main = document.querySelector('.main')
// main.style.width = '100%'
// main.style.height = '500px'
// main.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`

// 操作类型（className）操作CSS

/* const box = document.querySelector('.main')
box.className = 'active'
// 如果想保留原来的类名，则写法如下
box.className = 'active main' */

// 通过 classList操作类控制 CSS

/* const box = document.querySelector('.main')
box.classList.add('active')
box.classList.remove('main')
box.classList.toggle('Hello')
box.classList.toggle('active') */




// 四. 定时器-间歇函数

// 用户协议

const btn = document.querySelector('button')
let i = 5
function key() {
    i--
    btn.innerHTML = `我已阅读用户协议(${i})`
    if(i === 0) {
        clearInterval(t)
        btn.innerHTML = '我已阅读用户协议'
        btn.disabled = false
    }
}
let t = setInterval(key, 1000)
