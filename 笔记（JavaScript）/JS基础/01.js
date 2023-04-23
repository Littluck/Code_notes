// 一.

/* alert('Hi!')
document.write('Hello')
console.log('你好')
prompt("What's your name") */


// 二.

/* let uname = prompt("What's your name?")
let age = prompt("How old are you?")
let gender = prompt("What's your gender?")
document.write(uname,age,gender) */


// 三.

/* let day = ['Monday', 'Tuesday', 'Wednesdau', 'Thursday', 'Friday', 'Sateday', 'Sunday']
console.log(day[6])
const words = '今天是'
document.write(words + day[6])
console.log(day.length) */


// 四.

/* let r = prompt("请输入圆的半径")
let S = 3.14 * r * r
document.write(S) */


// 五.

/* let uname = prompt('请输入你的姓名')
let age = prompt('请输入你的年龄')
document.write(`我叫${uname}，今年${age}岁了`) */


// 六.

/* let one = -prompt('请输入第一个数字')
let two = prompt('请输入第二个数字')
// let result = Number(one) + Number(two)
let result = +one + +two
alert(`两数相加的结果为${result}`) */


// 综合案例

let uname = prompt('请输入你购买的商品名称')
let price = prompt('请输入你购买商品的价格')
let num = prompt('请输入你购买商品的数量')
let address = prompt('请输入你的收货地址')
let total = price * num
document.write(`
<table class="main_table">
            <tr class="top">
                <td>商品名称</td>
                <td>商品价格</td>
                <td>商品数量</td>
                <td>总价</td>
                <td>收货地址</td>
            </tr>
            <tr>
                <td>${uname}</td>
                <td>${price}</td>
                <td>${num}￥</td>
                <td>${total}￥</td>
                <td>${address}</td>
            </tr>
        </table>
`)