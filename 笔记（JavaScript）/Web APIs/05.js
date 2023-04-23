// 一.  BOM

window.document.querySelector('div')




// 二.  定时器-延时函数

/* const out = setTimeout(function() {
    document.querySelector('.advertising').style.display = 'none'
}, 3000)
 */



// 三.  location对象

let i =5
document.querySelector('.lwy').innerHTML = `${i}秒后自动跳转页面`
let lwy = setInterval(function() {
    setTimeout(function() {
        clearInterval(lwy)
        location.href = 'https://www.bilibili.com/video/BV19T4y1F7U6/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=5ad82c826e4c32f9e28ec7173f417c46'
    }, 4000)
        i--
        document.querySelector('.lwy').innerHTML = `${i}秒后自动跳转页面`
    }, 1000)
