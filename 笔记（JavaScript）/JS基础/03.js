// 一.

/* for (let i = 1 ; i <= 3 ; i++) {
    document.write('月薪过万')
} */

/* for (let age = 1 ; age <= 100 ; age++) {
    document.write(`${age} <br>`)
} */

/* let o = 0
for (let i = 1 ; i <= 100 ; i++) {
    if (i % 2 === 0) {
        o = o + i
    }
}
document.write(o) */

/* let arr = ['one' , 'two' , 'three' , 'four' , 'five' ]
for (let i = 0 ; i <= arr.length - 1 ; i++ ) {
    document.write(`${arr[i]} <br>`)
}
for (let i = 0 ; i < arr.length ; i++) {
    document.write(`${arr[i]} <br>`)
} */


// 二.

/* for (i = 1 ; i <= 3 ; i++) {
    document.write(`第${i}天 <br>`)
    for (o = 1 ; o <= 5 ; o++) {
        document.write(`今天记的第${o}个单词 <br>`)
    }
} */

/* let row = +prompt('请输入行数')
let column = +prompt('请输入列数')
for (let i = 1 ; i <= row ; i++) {
    for (let j = 1 ; j <= column ; j++) {
        document.write('★')
    }
    document.write(`<br>`)
} */

/* let o = 1
let row = +prompt('请输入你想打印的行数')
for (i = 1 ; i <= row ; i++) {
    for (j = 1 ; j <= o ; j++) {
        document.write('★')
    }
    o++
    document.write('<br>')
} */

// 九九乘法表

/* for (let i = 1 ; i <= 9 ; i++) {
    for (let j = 1 ; j <= i ; j++){
        document.write(`<div>${j} X ${i} = ${i * j}</div>`)
    }
    document.write(`<br>`)
} */

// 三.

/* let sum = 0
let arr = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0 ; i < arr.length ; i++) {
    sum += arr[i]
}
document.write(sum)
alert(`平局值为${sum / arr.length}`) */


// 四.

/* let arr = [2,7,6,8,4,52,81,67,123,47]
let max = arr[0]
let min = arr[0]
for (let i = 0 ; i < arr.length ; i++) {
    if (max <= arr[i]){
        max = arr[i]
    }
    if (min >= arr[i]) {
        min = arr[i]
    }
}
alert(`最大值为${max}`)
alert(`最小值为${min}`) */


// 五. 操作数组

// 添加元素

/* let arr = ['cnm','早上好','中午好']
arr[0] = '你好'
arr.push('晚上好')
document.write(arr)
document.write(arr.push('晚上好')) */

// 数组筛选

let arr1 = [2,0,6,1,77,0,52,3,25,7]
let arr2 = []
for (let i = 0 ; i < arr1.length ; i++) {
    if (arr1[i] >= 10) {
        arr2.push(arr1[i])
    }
}
document.write(arr1)
document.write('<br>')
document.write(arr2)

// 删除元素

/* let arr = ['你好','早上好','中午好','晚上好','cnm']
arr.pop() //删除最后一个元素
arr.shift() //删除第一个元素
arr.splice(1, 3) //删除指定位置的几个元素
console.log(arr)
console.log(arr.pop())
console.log(arr.shift())
console.log(arr.splice(1, 3)) */


// 综合案例

