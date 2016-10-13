Page({
  data:{
    // text:"这是一个页面"
    inputValue: '',
    socketOpen: false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.user)
    wx.connectSocket({
      url:'ws://localhost:8090/wxchatdemo/webSocket',
      data: {
        'user': options.user
      },
      header:{ 
        'content-type': 'application/json'
      },
      method:"GET"
    })
    wx.onSocketOpen(function(res) {
      this.setData({socketOpen: true})
      console.log('WebSocket连接已打开！')
    })
    wx.onSocketError(function(res){
      console.log('WebSocket连接打开失败，请检查！')
    })
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  sendtap: function(e){

    if(this.data.socketOpen){
      console.log(this.data.inputValue)
      wx.sendSocketMessage({
        data:this.data.inputValue
    })
    }
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
  
})