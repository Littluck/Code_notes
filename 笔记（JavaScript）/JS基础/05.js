// 一.

/* let obj = {
    uname: 'wyy',
    age: 18,
    gender: 'famale'
}
console.log(typeof obj) */

/* let goods = {
    uname: '小米10青春版',
    num: '100012816024',
    weight: '0.55kg',
    address: '中国大陆'
}
console.log(goods)
document.write(goods) */
 



// 二.

/* let person = {
    uname:'王妍妍',
    age: 18,
    gender:'famale',
    sing: function() {
        console.log('在一起')
    },
    dance: function() {
        console.log('芭蕾')
    },
}
person.love = 'hzy'
person.uname = 'wyy'
person.hobby = 'read'
delete person.hobby
console.log(person.love)
console.log(person['uname'])
console.log(person['age'])
console.log(person['gender'])
console.log(person['hobby'])
person.sing()
person.dance() */




// 三. 遍历对象

/* let person = {
    uname:'王妍妍',
    age: 18,
    gender:'famale',
    sing: function() {
        console.log('在一起')
    },
    dance: function() {
        console.log('芭蕾')
    },
}
for(let k in person) {
    console.log(k)
    console.log(person[k])
} */

/* let students = [
    { name:'Jake', age:18, gender:'male'},
    { name:'Luck', age:18, gender:'famale'},
    { name:'John', age:18, gender:'male'},
    { name:'Alie', age:18, gender:'famale'},
]
for(let i = 0; i < students.length; i++) {
    console.log(students[i])
    document.write(students[i]['name'])
} */

let students = [
    {num: 1, uname: '小明', age: 18, gender: 'male', hometown: '河北省'},
    {num: 2, uname: '小红', age: 19, gender: 'famale', hometown: '河南省'},
    {num: 3, uname: '小刚', age: 17, gender: 'male', hometown: '山西省'},
    {num: 4, uname: '小丽', age: 18, gender: 'famale', hometown: '山东省'},
    {num: 5, uname: '王妍妍', age: 21, gender: 'famale', hometown: '安徽省'},
]
for(let i = 0; i < students.length; i++){
    document.write(`
        <tr>
            <td>${students[i].num}</td>
            <td>${students[i].uname}</td>
            <td>${students[i].age}</td>
            <td>${students[i].gender}</td>
            <td>${students[i].hometown}</td>
        </tr>
    `)
}




// 四.

/* let random = Math.floor(Math.random() * 11)
// alert(random)
function getRandom(N, M) {
    return Math.floor(Math.random() * (M - N + 1)) + N
}
document.write(getRandom(11, 20)) */

// 随机点名

/* function getRandom(arr = []) {
    let random = Math.floor(Math.random() * arr.length)
    document.write(arr[random])
}
getRandom(['打工', '睡觉', '创业', '学习', '旅游']) */

/* let arr = ['打工', '睡觉', '创业', '学习', '旅游']
for(let i = 0; i < arr.length; i++) {
    let random = Math.floor(Math.random() * arr.length)
    document.write(arr[random])
    arr.splice(random, 1)
} */




// 五.

// 猜数字游戏

// let random = Math.floor(Math.random() * 10) + 1
// 不限制次数
/* while(true) {
    let ans = +prompt('系统将在1~10内随机生成一个整数,请你猜猜看是哪个数：')
    if(random === ans) {
        alert('恭喜你猜对了！')
        break
    } else if(random > ans) {
        alert('你猜的数小了')
    } else if(random < ans) {
        alert('你猜的数大了')
    }
} */

// 限制次数 自己的写法
/* for(let i = 1; i <= 3; i++) {
    let ans = +prompt('系统将在1~10内随机生成一个整数,请你猜猜看是哪个数：')
    if(random === ans) {
        alert('恭喜你猜对了！')
        break
    } else if(random > ans) {
        alert('你猜的数小了')
    } else if(random < ans) {
        alert('你猜的数大了')
    }
    if(i === 3) {
        alert('很抱歉，你的次数已用尽')
        break
    }
} */

// 限制次数 标准写法

/* let flag = true // 如果写在for循环里面，就变成局部变量了，导致if(falg)失效
for(let i = 1; i <= 3; i++) {
    let ans = +prompt('系统将在1~10内随机生成一个整数,请你猜猜看是哪个数：')
    if(ans > random){
        alert('你猜的大了')
    } else if(ans < random) {
        alert('你猜的小了')
    } else {
        alert('恭喜你猜对了！')
        flag = false
        break
    }
}
if(flag) {
    alert('很抱歉，你的次数已用尽')
} */
