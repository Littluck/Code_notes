// 2. 初始化数据
const goodsList = [
    {
      id: '4001172',
      name: '称心如意手摇咖啡磨豆机咖啡豆研磨机',
      price: '289.00',
      picture: 'https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg',
    },
    {
      id: '4001594',
      name: '日式黑陶功夫茶组双侧把茶具礼盒装',
      price: '288.00',
      picture: 'https://yanxuan-item.nosdn.127.net/3346b7b92f9563c7a7e24c7ead883f18.jpg',
    },
    {
      id: '4001009',
      name: '竹制干泡茶盘正方形沥水茶台品茶盘',
      price: '109.00',
      picture: 'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png',
    },
    {
      id: '4001874',
      name: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
      price: '488.00',
      picture: 'https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png',
    },
    {
      id: '4001649',
      name: '大师监制龙泉青瓷茶叶罐',
      price: '139.00',
      picture: 'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png',
    },
    {
      id: '3997185',
      name: '与众不同的口感汝瓷白酒杯套组1壶4杯',
      price: '108.00',
      picture: 'https://yanxuan-item.nosdn.127.net/8e21c794dfd3a4e8573273ddae50bce2.jpg',
    },
    {
      id: '3997403',
      name: '手工吹制更厚实白酒杯壶套装6壶6杯',
      price: '100.00',
      picture: 'https://yanxuan-item.nosdn.127.net/af2371a65f60bce152a61fc22745ff3f.jpg',
    },
    {
      id: '3998274',
      name: '德国百年工艺高端水晶玻璃红酒杯2支装',
      price: '139.00',
      picture: 'https://yanxuan-item.nosdn.127.net/8896b897b3ec6639bbd1134d66b9715c.jpg',
    },
]

/* // 封装渲染函数
function render(arr) {
    let str = ''
    arr.forEach( item => {
        const {name, price, picture} = item
        str += `
        <div class="item">
          <img src="${picture}" alt="">
          <p class="name">${name}</p>
          <p class="price">${price}</p>
        </div>
        `
    })
    document.querySelector('.list').innerHTML = str
}
render(goodsList)

// 筛选价格（filter筛选方法）
document.querySelector('.filter').addEventListener('click', e => {
    const {dataset, tagName} = e.target
    if(tagName === 'A') {
        let arr = goodsList
        if(dataset.index === '1') {
            arr = goodsList.filter(item => item.price > 0 && item.price <= 100)
        } else if(dataset.index === '2') {
            arr = goodsList.filter(item => item.price >= 100 && item.price <= 300)
        } else if(dataset.index === '3') {
            arr = goodsList.filter(item => item.price >= 300)
        }
        render(arr)
    }
}) */




/* // 复习
// 封装渲染函数
function render(arr) {
  let str = ''
  arr.forEach(item => {
    const {name, picture, price} = item
    str += `
      <div class="item">
        <img src="${picture}" alt="">
        <p class="name">${name}</p>
        <p class="price">${price}</p>
      </div>
    `
    document.querySelector('.list').innerHTML = str
  })
}
// 页面打开时渲染一次函数，实现页面初始化
render(goodsList)

// 价格筛选
// 添加时间委托
document.querySelector('.filter').addEventListener('click', e => {
  const {tagName, dataset} = e.target
  if(tagName === 'A') {
    let arr = goodsList
    if(dataset.index === '1') {
      arr = goodsList.filter(item => item.price >= 0 && item.price <= 100)
    } else if(dataset.index === '2') {
      arr = goodsList.filter(item => item.price >= 100 && item.price < 300)
    } else if(dataset.index === '3') {
      arr = goodsList.filter(item => item.price >= 300)
    }
    render(arr)
  }
}) */

// 复习2
function render(arr) {
  let str = ''
  arr.forEach(item => {
    const {name, picture, price} = item
    str += `
      <div class="item">
          <img src="${picture}" alt="">
          <p class="name">${name}</p>
          <p class="price">${price}</p>
      </div>
    `
    document.querySelector('.list').innerHTML = str
  })
}
render(goodsList)

document.querySelector('.filter').addEventListener('click', e => {
  const {tagName, dataset} = e.target
  if(tagName === 'A') {
    let arr = goodsList
    if(dataset.index === '1') {
      arr = arr.filter(item => item.price > 0 && item.price <= 100)
    } else if(dataset.index === '2') {
      arr = arr.filter(item => item.price >= 100 && item.price <= 300)
    } else if(dataset.index === '3') {
      arr = arr.filter(item => item.price >= 300)
    }
    render(arr)
  }
})