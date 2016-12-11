// pages/canvas3/canvas3.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    var context = wx.createContext()
    context.rect(15, 15, 100, 100)
    context.fill()
    context.stroke()
    context.clearRect(25, 25, 80, 80)
  
    context.fillText('Text', 40, 40)
    wx.drawCanvas({
        canvasId: 'canvas1',
        actions: context.getActions()
    })

    context.clearActions()

    wx.chooseImage({
      success: function(res) {
        context.drawImage(res.tempFilePaths[0], 0, 0)
        wx.drawCanvas({
          canvasId: 'canvas2',
          actions: context.getActions()
        })
      }
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