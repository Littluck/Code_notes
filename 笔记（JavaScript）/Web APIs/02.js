// 一.

/* const btn = document.querySelector('button')
btn.addEventListener('click', function() {
    alert('今天也要开心啊！')
}) */

// 随机抽奖

/* const date = ['刘德华', '林志颖', '黎明', '张学友', '郭富城']
const person = document.querySelector('.main p span')
let i = 0
let timeId
let random
function jsq() {
    timeId = setInterval(function() {
        i++
        random = parseInt(Math.random() * date.length)
        person.innerHTML = `${date[random]}`
        if(i >= 30) {
            end.disabled = false
        }
    }, 35)
    start.disabled = true
}
const start = document.querySelector('.btn button:nth-child(1)')
const end = document.querySelector('.btn button:nth-child(2)')
start.addEventListener('click', jsq)
end.addEventListener('click', function() {
    clearInterval(timeId)
    start.disabled = false
    end.disabled = true
    date.splice(random, 1)
    if(date.length === 0) {
        start.disabled = true
        end.disabled = true
    }
})
 */




// 二.事件效果

// 用户输入字数
const box = document.querySelector('.book')
const input = document.querySelector('.book input')
const cfm = document.querySelector('.book .confirm')
const num = document.querySelector('p')
let words = 0
input.addEventListener('focus', function() {
    box.classList.add('public-after')
    input.classList.add('public-after')
    cfm.classList.add('public-after')
    cfm.style.lineHeight = '100px'
    num.classList.add('num-after')
    num.innerHTML = `${words} / 200字`
})
input.addEventListener('blur', function() {
    box.classList.remove('public-after')
    input.classList.remove('public-after')
    cfm.classList.remove('public-after')
    cfm.style.lineHeight = '60px'
    num.classList.remove('num-after')
})
input.addEventListener('input', function() {
    words = input.value.length
    num.innerHTML = `${words} / 200字`
    document.querySelector('.hid .comment p:nth-child(2)').innerHTML = input.value
})
input.addEventListener('keyup', function(e) {
    if(input.value.trim() !== '') {
        // 进阶写法：if(input.value.trim())不加后面的!==''
        if(e.key === 'Enter') {
            input.value = ''
            words = input.value.length
            num.innerHTML = `${words} / 200字`
            document.querySelector('.hid').style.display = 'block'
        }
    } else {
        if(e.key === 'Enter') {
            input.value = ''
            words = input.value.length
            num.innerHTML = `${words} / 200字`
        }
    }
})
