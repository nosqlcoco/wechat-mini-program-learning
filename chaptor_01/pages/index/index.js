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
    console.log('载入页面')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function(){
    console.log('页面首次渲染完成')
  },
  onShow: function () {
    console.log('显示页面')
    //console.log(getApp().globalData.lastStartTime)
  },
  onHide: function () {
    console.log('隐藏页面')
  },
  onUnload: function(){
    console.log('卸载页面')
  },
  onPullDownRefreash: function(){
    console.log('页面下拉刷新')
  }
})
