//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  toCanvas1Page: function(e){
    wx.navigateTo({
      url: '../canvas1/canvas1'
    })
  },
  toCanvas2Page: function(e){
    wx.navigateTo({
      url: '../canvas2/canvas2'
    })
  },
  toCanvas3Page: function(e){
    wx.navigateTo({
      url: '../canvas3/canvas3'
    })
  },
  toCanvas4Page: function(e){
    wx.navigateTo({
      url: '../canvas4/canvas4'
    })
  },
  toCanvas5Page: function(e){
    wx.navigateTo({
      url: '../canvas5/canvas5'
    })
  }
})
