// 递归函数 利用setTimeout模拟setInterval效果
/* const time = document.querySelector('body').appendChild(document.createElement('div'))

function getTime() {
    time.innerHTML = new Date().toLocaleString()
    setTimeout(getTime, 1000)
}

getTime() */




// 深浅拷贝

// 浅拷贝 展开符拷贝数组、对象
/* const arr = [1, 2, 3, 4 ,5, 6]
// const arr_test = [...arr]
const arr_test = arr.concat()

arr_test.pop()

console.log(arr)
console.log(arr_test) */

/* const o = {
    uname: 'Hello',
    age: 18,
    action: {
        sing: '',
        dance: '',
    }
}
const o_test = {...o}

o_test.uname = 'Hi'
o_test.action.sing = 'Boby'

console.log(o)
console.log(o_test) */


// 复习 利用递归函数实现深拷贝
/* const o = {
    uname: 'Hello',
    age: 18,
    action: {
        sing: '',
        dance: '',
    }
}
const o_test = {}

function cloneDeep (newObj, oldObj) {
    for (let k in oldObj) {
        if (oldObj instanceof Array) {
            newObj[k] = []
            cloneDeep(newObj[k], oldObj[k])
        } else if (oldObj instanceof Object) {
            newObj[k] = {}
            cloneDeep(newObj[k], oldObj[k])
        } else {
            newObj[k] = oldObj[k]
        }
    }
}

cloneDeep(o_test, o)

console.log(o_test) */


// 求最大/小值的三种方法

    // 一
    /* const arr = [1, 2, 3, 2, 6, 7, 5, 9]
    Array.prototype.getMax = function () {
        let num = 0
        for(let i = 0; i < this.length; i++) {
            if(this[i] >= num) {
                num = this[i]
            }
        }
        return num
    }
    console.log(arr.getMax()) */





// 手写防抖函数
/* let i = 0

function mouseMove () {
    i++
    document.querySelector('.box').innerHTML = i
}

function debounce (fn, t) {
    let timer
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(function () {
            fn()
        }, t)
        // 简化代码：setTImeout(function () {fn()}, t) === setTimeout(fn(), t)
    }
}

document.querySelector('.box').addEventListener('mousemove', debounce(mouseMove, 500)) */

// 手写节流函数
/* let i = 0

function mouseMove () {
    document.querySelector('.box').innerHTML = i
    i++
}

function throttle (fn, t) {
    let timer = null

    return function () {
        // 如果当前没有定时器则开启一个定时器
        if (!timer) {
            // 定时器在t毫秒后执行一次
            timer = setTimeout(function () {
                // 先执行函数fn，将i传入box中
                fn()
                // 执行完fn后关闭定时器
                timer = null
            }, t)
        }
    }
}

document.querySelector('.box').addEventListener('mousemove', throttle(mouseMove, 500))

console.log(typeof null) // object */




// 复习函数递归
/* function getTime () {
    const time = new Date().toLocaleString()

    document.querySelector('.box').innerHTML = time

    // setTimeout(function () {
    //     getTime()
    // }, 1000)
    setTimeout(getTime, 1000)
}

getTime() */




// 深拷贝 递归
/* const o = {
    uname: 'Hello',
    age: 18,
    action: {
        sing: '',
        dance: '',
    }
}
const o_test = {}

function cloneDeep (newObject, oldObject) {
    for (let k in oldObject) {
        if (oldObject[k] instanceof Array) {
            newObject[k] = []
            cloneDeep(newObject[k], oldObject[k])
        } else if (oldObject[k] instanceof Object) {
            newObject[k] = {}
            cloneDeep(newObject[k], oldObject[k])
        } else {
            newObject[k] = oldObject[k]
        }
    }
}

cloneDeep(o_test, o)

o_test.uname = 'Hi'
o_test.action.sing = 'Boby'

console.log(o)
console.log(o_test) */

// 深拷贝 JSON方法
/* const p = {
    uname: 'Hello',
    age: 18,
    action: {
        sing: '',
        dance: '',
    }
}

const p_test = JSON.parse(JSON.stringify(p))

p_test.uname = 'Hi'
p_test.action.sing = 'Boby'

console.log(p)
console.log(p_test)

const op = {
    uname: 'uname',
    action: (() => {console.log(this)})()
}
console.log(op['action']) */




// 复习 手写防抖函数
let i = 0

function mouseMove () {
    i++
    document.querySelector('.box').innerHTML = i
}

function debounce (fn, t) {
    let timer
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout (fn, t)
    }
}

// document.querySelector('.box').addEventListener('mousemove', debounce(mouseMove, 500))

// 复习 手写节流函数
function throttle (fn, t) {
    let timer = null

    return function () {
        // 如果没有定时器则开启一个定时器，并在定时器结束时销毁
        if (!timer) {
            timer = setTimeout (function () {
                fn()
                timer = null
            }, t)
        }
        // 如果有定时器正在开启则无事发生
    }
}

document.querySelector('.box').addEventListener('mousemove', throttle(mouseMove, 500))