// 一.构造函数
/* function Pig(uname, age) {
    this.uname = uname
    this.age = age
}
const op = new Pig('John', 18)
console.log(op) */

// 练习构造函数
/* function Goods(name, price, num) {
    this.name = name
    this.price = price
    this.num = num
}
const goods1 = new Goods('小米', 1999, 20)
const goods2 = new Goods('华为', 3999, 59)
const goods3 = new Goods('vivo', 1888, 100)
const arr = [goods1, goods2, goods3]
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
for(let k in arr) {
    console.log(arr[k])
} */

// 内置构造函数 Object方法
/* const op = new Object({name: 'op', age: 18})
document.querySelector('.box').innerHTML = Object.values(op).join('/') */

/* function fn() {
    return Array.from(arguments).splice(1, 1)
}
console.log(fn(1, 2, 3)) */

// Array.reduce
const arr = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9]
const sum = arr.reduce((prev, item) => prev + item, 0)
console.log(sum)

// 员工涨薪计算成本
const person = [
    {
        name: '小伊',
        salary: 10000,
    },
    {
        name: '小尔',
        salary: 10000,
    },
    {
        name: '小散',
        salary: 10000,
    }
]
const cost = person.reduce((prev, item) => prev + item.salary, 0)
const cost_new = person.reduce((prev, item) => prev + item.salary * 0.3, cost)
console.log(`员工涨薪后的总成本为${cost_new}元`)