// 一.闭包
/* function outer() {
    const a = 10
    function fn() {
        console.log(a)
    }
    return fn()
}

outer() */

/* function outer() {
    const a = 10
    function fn() {
        console.log(a)
    }
    return fn
}

const fun = outer()
fun() */




// 二.函数提升
/* render()
const fn = function render() {
    console.log('Hello')
} */




// 三.动态参数、剩余参数

// 求和函数（动态参数写法）
/* function getSum() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(getSum(1, 2, 3, 4)) */

// 剩余参数写法
/* function getSum2(a = 0, b = 0, ...arr) {
    let sum2 = a + b
    for(let i = 0; i < arr.length; i++) {
        sum2 += arr[i]
    }
    return sum2
}
console.log(getSum2(1)) */

// 展开运算符
/* const arr = [1, 2, 3, 4, 5]
console.log(...arr)
const arr1 = [6, 7, 8, 9, 10]
console.log([...arr, ...arr1])
console.log(Math.max(...arr))
console.log(Math.min(...arr1)) */

// 箭头函数

/* // 普通写法
const fn = function(e) {
    e.preventDefault()
}

// 箭头函数写法
const fn_arrows = (e) => {
    e.preventDefault()
}
// 箭头函数简化写法一（只有当存在一个形参时才能省略小括号）
const fn_arrows1 = e => {
    e.preventDefault()
}
// 箭头函数简化写法二（函数只有单行代码时可以省略大括号）
const fn_arrows2 = e => e.preventDefault()
// 箭头函数简化写法三（单行代码也表示返回值）
const fn_arrows3 = (x, y) => x + y
    // 对比
    const compare = function(x, y) {
        return x + y
    } */

// 箭头函数写求和函数
/* const getSum = (...arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(getSum(2, 4, 100, 55)) */




// 箭头函数this
/* console.log(this)   // Window
const obj = {
    uname: 'Hello',
    sayHi: () => {
        console.log(this)   // Window
    }
}

const obj1 = {
    unmae: 'Hi',
    sayHi: function() {
        console.log(this)   // obj1
    }
}

btn = document.querySelector('button')
btn.addEventListener('click', () => {
    console.log(this)   // Window
})

const test = function sayHello() {
    console.log(this)   // Window
    const test1 = () => {
        console.log(this)   // test
    }
    test1()
} */




// 解构赋值

// 数组解构
/* const arr = [1, 2, 3, 4]
const [a, b, c, d] = arr
console.log(a)

let Hello = 1
let Hi = 2
;[Hello, Hi] = [Hi, Hello]
console.log(Hello)

const [hr, lx, mi, fz] = ['海尔', '联想', '小米', '方正']

function getValue() {
    return [100, 60]
}
const [max, min] =getValue()
console.log(max)
console.log(min)

const arr_test = [5, 2, 0, [13, 14]]
const[i, love, you, [life, world]] = arr_test
console.log(life)
console.log(`${i}${love}${you}${life}${world}`)

const pig = {
    uname: '佩奇',
    age: 18,
}
// const {uname, age} = pig
// console.log(uname, age)

const {uname: op, age} = pig
console.log(op, age) */

// 从小到大排列
/* const arr = [2, 5, 1, 9, 7, 6]
for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
        if(arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}
console.log(arr) */

// 多级对象解构
/* const people = [
    {
        uname: '佩奇',
        family: {
            mother: '妈妈',
            father: '爸爸',
            brother: '哥哥',
        },
        age: 6,
}]
// 解构
const [{uname, family: {mother, father, brother}, age}] = people
console.log(mother) */

// 
/* const msg = {
    name: 'Hello',
    age: 18,
    data: [
        {
            id: 1,
            count: 11,
        },
        {
            id: 2,
            count: 22,
        },
        {
            id: 3,
            count: 33,
        }
    ]
}
function fn({data}) {
    console.log(data)
}
fn(msg) */




// filter数组筛选方法
const arr = [1, 2, 3, 4, 5]
const arrNew = arr.filter(item => item >= 3)
// console.log(arrNew)
// arrNew.pop()
arrNew.shift()
console.log(arrNew)