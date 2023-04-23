// 一. 事件流

/* const fa = document.querySelector('.fa')
const son = document.querySelector('.son')
document.addEventListener('click', function() {
    alert('grandfather')
})
fa.addEventListener('click', function() {
    alert('father')
})
son.addEventListener('click', function() {
    alert('son')
})
// 阻止冒泡
son.addEventListener('click', function(e) {
    alert('son')
    e.stopPropagation()
}) */




// 二. 事件委托

const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')
let flag = true
ul.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        if(flag === true) {
            e.target.classList.add('active')
            flag = false
        } else {
            e.target.classList.remove('active')
            flag = true
        }
    }
})