/* function Modal (title = '', content = '') {
    this.banner = document.createElement('div')
    this.banner.className = 'modal'
    this.banner.innerHTML = `
        <div class="header">${title} <i>x</i></div>
        <div class="body">${content}</div>
    `
}

Modal.prototype.open = function () {
    const box = document.querySelector('.modal')
    box && box.remove()
    document.body.append(this.banner)
    this.banner.querySelector('i').addEventListener('click', () => {
        this.close()
    })
}

Modal.prototype.close = function () {
    this.banner.remove()
}

document.querySelector('#delete').addEventListener('click', () => {
    const del = new Modal('你好', '最近过得怎么样')
    del.open()
})

document.querySelector('#login').addEventListener('click', () => {
    const log = new Modal('好久不见', '你现在一切都好吗')
    log.open()
}) */


// 复习
function Modal (title = '', content = '') {
    this.modalBox = document.createElement('div')
    this.modalBox.className = 'modal'
    this.modalBox.innerHTML = `
        <div class="header">${title}<i>x</i></div>
        <div class="body">${content}</div>
    `
}

Modal.prototype.open = function () {
    const box = document.querySelector('.modal')
    box && box.remove()
    document.body.append(this.modalBox)
    this.modalBox.querySelector('i').addEventListener('click', () => this.close())
}

Modal.prototype.close = function () {
    this.modalBox.remove()
}

document.querySelector('#delete').addEventListener('click', function () {
    const del = new Modal('你好', '最近过得怎么样')
    del.open()
})

document.querySelector('#login').addEventListener('click', function () {
    const log = new Modal('好久不见', '你现在一切都好吗')
    log.open()
})