// 获取元素
const uname = document.querySelector('.uname')
const age = document.querySelector('.age')
const gender = document.querySelector('.gender')
const salary = document.querySelector('.salary')
const city = document.querySelector('.city')
const time = document.querySelector('.time')

const tbody = document.querySelector('table tbody')

// 建立数组（注意建立的方式：用JSON方法从本地储存提取数据，若本地没有数据，则用逻辑中断得到空数组）
const arr = JSON.parse(localStorage.getItem('data')) || []
render()

// 添加提交事件
const info = document.querySelector('.info')
info.addEventListener('submit', function(e) {
    // 清除默认样式
    e.preventDefault()

    // 防止输入为空（写法一）
    /* const items = document.querySelectorAll('[name]')
    for(let i = 0; i < items.length; i++) {
        if(items[i].value === '') {
            this.reset()
            alert('请输入完整信息')
            // return
            break
        }
    } */

    // 防止输入为空（写法二）
    if(!uname.value || !age.value || !salary.value) {
        this.reset()
        return alert('请输入完整信息')
    }

    // 导入数据
    const obj = {
        stuId: arr.length + 1,
        uname: uname.value,
        age: age.value,
        gender: gender.value,
        salary: salary.value,
        city: city.value,
        time: new Date().toLocaleString(),
    }
    
    arr.push(obj)
    localStorage.setItem('data', JSON.stringify(arr) || [])
    render()

    // 重置内容
    this.reset()
})

// 封装渲染函数
function render() {
    const newArr = arr.map(function(ele, index) {
        return `
        <tr>
            <td>${ele.stuId}</td>
            <td>${ele.uname}</td>
            <td>${ele.age}</td>
            <td>${ele.gender}</td>
            <td>${ele.salary}</td>
            <td>${ele.city}</td>
            <td>${ele.time}</td>
            <td>
            <a href="javascript:" data-id='${index}'>
                <i class="iconfont icon-shanchu"></i>
                删除
            </a>
            </td>
        </tr>
        `
    })
    tbody.innerHTML = newArr.join('')
    document.querySelector('.title span').innerHTML = arr.length
}

// 删除按键（事件委托）
tbody.addEventListener('click', function(e) {
    if(e.target.tagName === 'A') {
       if(confirm('你确定要删除吗')) {
        arr.splice(e.target.dataset.id, 1)

        localStorage.setItem('data', JSON.stringify(arr))

        // 重新计算序号
        for(let i = 0; i < arr.length; i++) {
            arr[i].stuId = i + 1
        }

        render()
       }
    }
})