//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },
  toPage1: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../route1/route1',
      success: function (res) {
        console.log(res)
      }
    })
  }
})
