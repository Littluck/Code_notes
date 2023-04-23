// 一.原型对象 给数组拓展方法
Array.prototype.GetSum1 = function() {
    return this.reduce((prev, item) => prev + item, 0)
}
// 为什么会报错？
// Array.prototype.GetSum = () => this.reduce((prev, item) => prev + item, 0)
// 因为箭头函数不会创建自己的this，而是在作用域链上找到最近的this

Array.prototype.GetSum2 = function() {
    let sum = 0
    for(let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum
}

Array.prototype.GetMax = function() {
    return Math.max(...this)
}

/* const arr = [1, 2, 3, 4, 5]
console.log(arr.GetSum2())
console.log(arr.GetMax())

function Hello(uname, age) {
    this.uname = uname
    this.age = age
} */

// 复习 给数组拓展方法
Array.prototype.getMin = function () {
    let min = this[0]
    for (let i = 0; i < this.length; i++) {
        if (this[i] < min) min = this[i]
    }
    return min
}
/* const arr = [1, 2, 3 ,4 ,6 ,0.5, -1, 0]
console.log(arr.getMin()) */




// 二.原型继承
/* function Human() {
    this.head = 1
    this.eyes = 2
}
function Female() {

}
function Male() {

}
Female.prototype = new Human()
Male.prototype = new Human()

Female.prototype.baby = function() {
    console.log('Mom')
}
Male.prototype.smoking = function() {
    console.log('cyzcxhm,yszaygr')
}
const syy = new Male()
console.log(syy)

console.log(Human instanceof Object) // true
console.log(Object instanceof Human) // false */

// 复习 原型继承

// 需要解决的问题
/* const People = {
    head: 1,
    eyes: 2,
    age: 18,
    action: function () {
        console.log('dance')
    }
}

function Male () {

}
function Female () {
    this.baby = function () {}
}

Male.prototype = People

Male.prototype.constructor = Male

Male.prototype.smoking = function () {
    console.log('sing')
}

Female.prototype = People

Female.prototype.constructor = Female

const man = new Male()
const woman = new Female()

console.log(man)
console.log(woman)
console.log(Male.prototype.constructor) */

// 解决方法
function People () {
    this.head = 1
    this.eyes = 2
    this.sing = function () {}
}

function Male () {

}

function Female () {

}

Male.prototype = new People()
Female.prototype = new People()

Male.prototype.constructor = Male
Female.prototype.constructor = Female

Male.prototype.smoking = function () {}
Female.prototype.baby = function () {}

const man = new Male()
const woman = new Female()

console.log(man)
console.log(woman)



// 三.综合案例
