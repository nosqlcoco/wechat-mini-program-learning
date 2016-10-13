//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello 小程序',
    userInfo: {},
    inputValue: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  logintap: function(e){
    wx.redirectTo({
      url: '/pages/chat/chat?user=' + this.data.inputValue
    })
  }
})
