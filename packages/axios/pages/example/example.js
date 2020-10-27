// pages/example/example.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onGET() {
    wx.axios.get('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2128793678,3531069644&fm=26&gp=0.jpg').then(res => {
      console.log(res)
    })
  },
  onPOST() {
    wx.axios.post('http://api/post', { a: 1 }).then(res => {
      console.log(res)
    })
  },
  api1() {
    return wx.axios.get('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2128793678,3531069644&fm=26&gp=0.jpg')
  },
  all() {
    wx.axios.all([this.api1(), this.api1()]).then(([res1, res2]) => {
      console.log(res1, res2)
    })
  },
  race() {
    wx.axios.all([this.api1(), this.api1()]).then(wx.axios.spread((res => {
      console.log(res)
    })))
  }
})