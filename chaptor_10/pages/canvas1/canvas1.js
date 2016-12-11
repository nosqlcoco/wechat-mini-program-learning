// pages/canvas1/canvas1.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成

    var context = wx.createContext();
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
  mytouchstart: function(e){
    console.log('touchstart in canvas')
  },
  mytouchmove: function(e){
    console.log('touchmove in canvas')
  },
  mytouchend: function(e){
    console.log('touchend')
  }
})