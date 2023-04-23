// 一.

/* let num = 1
++num
console.log(num) */


// 二.

/* console.log(3 > 5) */

// console.log(3 = 5)
// 注意：单=是赋值运算符，不能当做比较运算符使用，会导致报错
// 根据得出的现象可知，一行错误的代码会导致整个代码都失效

/* console.log(3 < 5)
console.log(3 >= 5)
console.log(3 <= 5)
console.log(3 == 5)
console.log(3 === 5)
console.log(3 !== 5) */



// 三.

/* let num = 'b'
console.log(num > 5 && num <10)
console.log(num > 'a' || num < 'a')

let words = +prompt('请输入一个数')
alert(words % 4 === 0 && words % 100 !== 0) */


// 四. if分支语句

/* if (3 < 5) {
    console.log('Hellow')
}

let num = +prompt('请输入你的考试成绩')
if (num >= 700) {
    alert('恭喜你考入清华大学！')
} else {
    alert('恭喜你考入原神大学！')
} */

/* let uname = prompt('请输入你的用户名')
let password = prompt('请输入你的密码')
if (uname === '王妍妍' && password === 'wyy520') {
    alert('登录成功')
} else {
    alert('登录失败')
} */

/* let year = +prompt('请输入你想查询的年份：')
if (year % 4 === 0 && year % 100 !== 0 || year % 400 ===0) {
    alert('闰年')
} else {
    alert('平年')
} */

/* let num = +prompt('请输入你的成绩')
if (num > 100) {
    alert('你是真滴牛批！')
} else if (num >= 90) {
    alert('你的成绩为：优秀')
} else if (num < 90 && num >=70) {
    alert('你的成绩为：良好')
} else if (num < 70 && num >= 60) {
    alert('你的成绩为：及格')
} else {
    alert('你的成绩为：不及格')
} */


// 五.

/* let num1 = prompt('请输入第一个数')
let num2 = prompt('请输入第二个数')
let result = num1 > num2 ? num1 : num2
alert(`两数中的最大值为${result}`) */

/* let num = +prompt('请输入一个数')

// num < 10 ? alert(`0${num}`) : alert(num)

num = num < 10 ? '0' + num : num
alert(num) */


// 六. switch循环

/* let num1 = +prompt('请输入第一个数')
let num2 = +prompt('请输入第二个数')
let sym = prompt('请输入 +或 -或 *或 / ')
switch (sym) {
    case '+' :
        alert(num1 + num2)
        break
    case '-' :
        alert(num1 - num2)
        break
    case '*' :
        alert(num1 * num2)
        break
    case '/' :
        alert(num1 / num2)
        break
    default:
        alert('请输入正确的内容')
        break
} */


// 七.

/* let num1 = 1
let num2 = prompt('请输入你想重复的次数')
while (num1 <= num2) {
    document.write('月薪过万 <br>')
    num1++
} */

// 1·100
/* let i = 1
while (i <= 100) {
    document.write(i + '<br>')
    i++
} */

// 1+2+3...+100
/* let m = 1
let result = 0
while (m <= 100) {
    // result = m + result
    result += m

    // document.write(result + '<br>')
    m++
}
alert(result) */

// 1`100偶数和
// 写法一
/* let i = 1
let o = 0
while (i <= 50) {
    o += i * 2
    i++
}
document.write(o) */

// 写法二
/* let i = 1
let o = 0
while (i <= 100) {
    if (i % 2 ===0) {
        o += i
    }
    i++
}
document.write(o) */

// 奇数和
/* let i = 1
let j = 0
while (i <= 100) {
    if ((i + 1) % 2 === 0) {
        j = j + i
    }
    i++
}
document.write(j) */


// 八. 你爱我吗

/* let answer = prompt('你爱我吗' + '<br>' + '请回答“爱”或“不爱”')
while (answer) {
    if (answer === '爱') {
        break
    }
    answer = prompt('你爱我吗' + '<br>' + '请回答“爱”或“不爱”')
} */


// 九.

let yue = 0
while (true) {
    let ans = prompt('请选择你想要进行的操作\n 1.存钱\n 2.取钱\n 3.查看余额\n 4.退出')
    if (ans === '4') {
        break
    }
    switch (ans) {
        case '1':
        let port = +prompt('请输入你想存入的金额：')
        yue = yue + port
        break

        case '2':
        let unport = +prompt('请输入你想取出的金额：')
        if (yue - unport < 0) {
            alert('抱歉，你的余额不足')
        } else {
            yue = yue - unport
        }
        break

        case '3':
        alert(`你的账户余额为：${yue}元`)
        break
    }
    
}