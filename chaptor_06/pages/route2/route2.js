// pages/route2/route2.js
Page({
  data:{
    total : 0
  },
  onLoad:function(options){
    var that = this
    // 页面初始化 options为页面跳转所带来的参数
    setInterval(function(){

      that.setData({total: that.data.total + 1})
      console.log(that.data.total)
    },1000 )
  },
  onReady:function(){
    // 页面渲染完成
    console.log(this.data.name)
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
  toPage3: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../route4/route4',
      success: function (res) {
        console.log(res)
      }
    })
  },
  backPage: function(e){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})