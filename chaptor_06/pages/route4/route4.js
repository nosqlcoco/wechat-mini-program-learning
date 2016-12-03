// pages/route4/route4.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.url)
    console.log(options.name)
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  toPage5: function(e){
    wx.navigateTo({
      url: '../route5/route5',
      success: function (res) {
        console.log(res)
      }
    })
  },
  navigateBackPage: function(e){
    wx.navigateBack({
      delta: 2, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      }
    })
  },
  redirectPage: function(e){
    wx.redirectTo({
      url: '../route1/route1',
      success: function(res){
        // success
      }
    })
  },
  navigateToPage: function(e){
    wx.navigateTo({
      url: '../route2/route2',
      success: function(res){
        // success
      }
    })
  }
})