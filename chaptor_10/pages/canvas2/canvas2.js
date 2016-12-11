// pages/canvas2/canvas2.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    var context = wx.createContext()

    //缩放
    context.rect(5, 5, 30, 30)
    context.stroke()
    context.scale(2,2)
    context.stroke()
    context.scale(2,2)
    context.stroke()
    wx.drawCanvas({
      canvasId: 'canvas_scale',
      actions: context.getActions()
    })
    context.clearActions()

    //旋转
    context.rect(30, 30, 100, 100)
    context.stroke()
    context.rotate(0.15)
    context.stroke()
    wx.drawCanvas({
      canvasId: 'canvas_rotate',
      actions: context.getActions()
    })
    context.clearActions()
    
    //平移
    context.rect(30, 30, 100, 100)
    context.stroke()
    context.translate(10, 10)
    context.stroke()
     wx.drawCanvas({
      canvasId: 'canvas_translate',
      actions: context.getActions()
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})