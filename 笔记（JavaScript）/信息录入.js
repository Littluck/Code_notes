// 建立数组
const arr = []

// 获取对象
const uname = document.querySelector('.info input[name=uname]')
const age = document.querySelector('.age')
const gender = document.querySelector('.gender')
const salary = document.querySelector('.salary')
const city = document.querySelector('.city')


// 录入（提交事件）
/* let i = 0   // 使列表的序号数与提交的次数一致，可以保证：在删除数据后再次添加数据时序号数仍然能保持递增顺序 */

const info = document.querySelector('.info')
info.addEventListener('submit', function(e) {
    e.preventDefault()
    const items = document.querySelectorAll('[name]')
    for(let i = 0; i < items.length; i++) {
        if(items[i].value === '') {
            this.reset()
            return alert('请输入完整信息')
        }
    }
    const obj = {
        stuId: arr.length + 1,
        uname: uname.value,
        age: age.value,
        gender: gender.value,
        salary: salary.value,
        city: city.value,
    }
    arr.push(obj)
    this.reset()
    render()
})

// 渲染函数（封装）
function render() {
    document.querySelector('table tbody').innerHTML = ''
    for(let i = 0; i < arr.length; i++) {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${arr[i].stuId}</td>
          <td>${arr[i].uname}</td>
          <td>${arr[i].age}</td>
          <td>${arr[i].gender}</td>
          <td>${arr[i].salary}</td>
          <td>${arr[i].city}</td>
          <td>
            <a href="javascript:" data-id='${i}'>删除</a>
          </td>
          `
        document.querySelector('table tbody').appendChild(tr)
    }
}

// 删除键（使用事件委托）
const tbody = document.querySelector('table tbody')
tbody.addEventListener('click', function(e) {
    if(e.target.tagName === 'A') {
        arr.splice(e.target.dataset.id, 1)

        // 每次删除后都重新计算序号
        for(let i = 0; i < arr.length; i++) {
            arr[i].stuId = i + 1
        }
        render()
    }
})

