// pages/canvas5/canvas5.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    var context = wx.createContext()

    context.setFillStyle("#FF00FF")
    context.setStrokeStyle("#00FFFF")
    context.setGlobalAlpha(1)
    context.setShadow(10,10,10, '#000000')
    context.setFontSize(18)
    context.setLineWidth(3)
    context.setLineCap('round');
    context.setLineJoin('round')
    context.rect(50, 50, 100, 100)
    context.fill()
    context.stroke()
    wx.drawCanvas({
      canvasId: 'canvas1',
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
  },
  saveas: function(e){
    wx.canvasToTempFilePath({
      canvasId: 'canvas1',
      success: function(res){
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success: function(res){
            wx.getSavedFileList({
              success: function(res){
                console.log(res.fileList)
              },
              fail: function() {
                // fail
              },
              complete: function() {
                // complete
              }
            })
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },
      fail: function() {
        console.log('fail')
      },
      complete: function() {
        // complete
      }
    })
  }
})