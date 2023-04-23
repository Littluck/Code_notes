// ATM存取钱

/* let yue =0
while (true) {
    let ans = +prompt('请输入你想进行的操作\n1.存钱\n2.取钱\n3.查看余额\n4.退出')
    if (ans === 4){
        break
    }
    switch (ans) {
        case 1:
        let inport = +prompt('请输入存入金额：（单位：元）')
        yue += inport
        break

        case 2:
        let port = +prompt('请输入取出金额：（单位：元）')
        if (port > yue) {
            alert('抱歉，你的余额不足')
        } else {
            yue -= port
        }
        break

        case 3:
        alert(`你的余额为${yue}元`)
        break
    }
} */




// 函数查找数组是否存在某个元素

// 自己的方法
/* function some(ele, arr = []){
    let end
    for(let i = 0 ; i < arr.length ; i++) {
        if(ele === arr[i]) {
            end = true
        }
    }
    return Boolean(end || false)
}
let re = some('草莓',['苹果', '香蕉', '橘子', '荔枝' ,'梨子'])
document.write(re) */

// 标准答案
/* function some(ele, arr = []) {
    let flag = false
    for(let i = 0; i < arr.length; i++) {
        if(ele === arr[i]) {
            flag = true
            break
        }
    }
    return flag
}
let re = some('苹果', ['苹果', '香蕉', '橘子', '荔枝', '梨子'])
alert(re)
let re1 = some('草莓', '苹果', '香蕉', '橘子', '荔枝', '梨子')
alert(re1) */




// 函数返回查找元素在数组中的下标||索引号

/* function findIndex(ele, arr = []) {
    let index = -1
    for(let i = 0; i < arr.length; i++) {
        if(ele === arr[i]) {
            index = i
            break
        }
    }
    return index
}
let re = findIndex('橘子', ['苹果', '香蕉', '橘子', '荔枝', '梨子'])
console.log(re) */

/* function findindex(ele, arr = []) {
    let num = '请输入正确的内容'
    for(let i = 0; i < arr.length; i++) {
        if(ele === arr[i]) {
            num = i
            break
        }
    }
    return num
}
let re = findindex(prompt('请输入你要查询的水果'), ['苹果', '香蕉', '橘子', '荔枝', '梨子'])
alert(re)
 */



// 轮播图
const date = [
    {url: './images/1.jpg', title:'努力', color:'blue'},
    {url: './images/2.jpg', title:'坚持', color:'skyblue'},
    {url: './images/3.jpg', title:'加油', color:'pink'},
    {url: './images/4.jpg', title:'拼搏', color:'red'},
    {url: './images/5.jpg', title:'赚钱', color:'yellow'},
]
function getRandom(N, M) {
    return parseInt(Math.random() * (M - N + 1)) + N
}
const main = document.querySelector('.main')
const img = document.querySelector('.main .img img')
const tab = document.querySelector('.tab li')
const p = document.querySelector('.words p')
let i = 0
let timeId = setInterval(function() {
    i++
    if(i >= date.length) {
        i = 0
    }
    img.src = date[i].url
    p.innerHTML = date[i].title
    main.style.backgroundColor = date[i].color
    document.querySelector('.tab li.active').classList.remove('active')
    document.querySelector(`.tab li:nth-child(${i + 1})`).classList.add('active')
}, 1000)
// 左右按键
const after = document.querySelector('.after') 
const next = document.querySelector('.next') 
after.addEventListener('click', function() {
    i--
    if(i < 0) {
        i = date.length - 1
    }
    img.src = date[i].url
        p.innerHTML = date[i].title
        main.style.backgroundColor = date[i].color
        document.querySelector('.tab li.active').classList.remove('active')
        document.querySelector(`.tab li:nth-child(${i + 1})`).classList.add('active')
})
next.addEventListener('click', function() {
    i++
    if(i >= date.length) {
        i = 0
    }
    img.src = date[i].url
        p.innerHTML = date[i].title
        main.style.backgroundColor = date[i].color
        document.querySelector('.tab li.active').classList.remove('active')
        document.querySelector(`.tab li:nth-child(${i + 1})`).classList.add('active')
})
// 鼠标移入移出
main.addEventListener('mouseenter', function() {
    clearInterval(timeId)
})
main.addEventListener('mouseleave', function() {
    clearInterval(timeId)
    timeId = setInterval(function() {
        i++
        if(i >= date.length) {
            i = 0
        }
        img.src = date[i].url
        p.innerHTML = date[i].title
        main.style.backgroundColor = date[i].color
        document.querySelector('.tab li.active').classList.remove('active')
        document.querySelector(`.tab li:nth-child(${i + 1})`).classList.add('active')
    }, 1000)
})




// 关闭广告

/* const btn = document.querySelector('.avt button')
btn.addEventListener('click', function() {
    document.querySelector('.avt').style.display = 'none'
}) */




// 立即执行函数
(function() {}())
(function() {})()
// 两种写法字数一致，唯一的不同是结尾括号的位置