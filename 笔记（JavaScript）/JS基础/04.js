// 一. 声明函数

/* function sayHai() {
    alert('Hi!')
} */

/* function getSum() {
    let sum = 0
    for(let i = 1 ; i <= 100 ; i++) {
        sum += i
    }
    console.log(sum)
}
getSum() */

/* function getSum(num1 = 0, num2 = 0) {
    alert(num1 + num2)
}
getSum(1, 3) */

/* function getSum2(num3, num4) {
    alert(`两数之和为${num3 + num4}`)
}
getSum2(+prompt('请输入第一个数'), +prompt('请输入第二个数')) */

/* function getArray(arr = []) {
    let sum = 0
    for(let i = 0 ; i < arr.length ; i++) {
        sum += i
    }
    document.write(sum)
    return arr.length
}
let re = getArray(arr = [])
getArray([1,5,3,7,6,9,8])
console.log(re) */


// 二. 函数返回值

// 返回数组中的最大值和最小值
/* function getArray(arr = []) {
    let max = arr[0]
    let min = arr[0]
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] < arr[i + 1]) {
            max = arr[i + 1]
        }
        if(arr[i] > arr[i + 1]) {
            min = arr[i + 1]
        }
    }
    return [max, min]
}
let re = getArray([1, 7, 89, 46, 2, 76, 3, -1, 123])
document.write(re) */


// 三. 匿名函数

// 函数表达式
/* let fn = function(x, y) {
    console.log(x + y)
}
fn(1, 2) */

// 立即执行函数的第一种写法
/* (function(x, y) {
    console.log(x + y)
})(1, 2); */

// 立即执行函数的第二中写法
/* (function(x, y) {
    console.log(x + y)
} (1, 2)); */


//综合案例

let num = +prompt('输入总的秒速：')
function getTime(t = 0) {
    let h = parseInt(t / 60 / 60 % 24)
    let m = parseInt(t / 60 % 60)
    let s = parseInt(t % 60)
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
    return `${t}s可以转换为${h}小时${m}分${s}秒`
}
let re = getTime(num)
document.write(re)
// 这段代码依旧存在风险：局部变量在没有声明的情况下，被视为全局变量，可被打印出来

let age = 18
console.log(age++)
console.log(age)