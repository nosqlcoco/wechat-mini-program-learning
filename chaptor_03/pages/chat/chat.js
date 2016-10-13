var socketOpen = false;
Page({
  data:{
    // text:"这是一个页面"
    inputValue: '',
    historyMsgList:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   this.setData({user: options.user})
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  sendtap: function(e){
    var $this = this;
    if(socketOpen){
      console.log(this.data.inputValue)
      wx.sendSocketMessage({
        data: JSON.stringify({
          user: $this.data.user,
          content:$this.data.inputValue
        }),
        success: function(res){
          var arr = $this.data.historyMsgList;
          arr.push('发送消息登录:' + $this.data.inputValue)
          $this.setData({historyMsgList:arr});
        }
      })
    }
  },
  onReady:function(){
    var $this = this;
    var user = this.data.user;
    // 页面渲染完成
    wx.connectSocket({
      url:'ws://localhost:8090/wxchatdemo/webSocket?user=' + user
    })
    wx.onSocketOpen(function(res) {
      socketOpen = true;
    
      var arr = $this.data.historyMsgList;
      arr.push(user + '登录成功')
      $this.setData({historyMsgList:arr});

      console.log('WebSocket连接已打开！')
    })
    wx.onSocketError(function(res){
      console.log('WebSocket连接打开失败，请检查！')
    }),
    wx.onSocketMessage(function(res){
      var data = JSON.parse(res.data);
     // $this.setData.historyMsgList.push('接收到'+data.user+'的消息，Ta说：'+ data.content);

      var arr = $this.data.historyMsgList;
      arr.push('接收到'+data.user+'的消息，Ta说：'+ data.content)
      $this.setData({historyMsgList:arr});
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
  
})