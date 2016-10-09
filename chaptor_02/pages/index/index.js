//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    touchLog:"",
    lastTapDiffTime: 0,
    startPoint: [0,0],
    endPoint: [0,0]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  mytap: function(e){
    //this.setData({touchLog:this.data.touchLog + "\r" + e.timeStamp + '- tap'});
    var curTime = e.timeStamp;
    var lastTime = this.data.lastTapDiffTime;
    if(lastTime > 0){
      if(curTime - lastTime < 700){
        console.log(e.timeStamp + '- db tap')
      }else{
        console.log(e.timeStamp + '- tap')
      }
    }else{
      console.log(e.timeStamp + '- first tap')
    }
    this.setData({lastTapDiffTime: curTime});
  },
  mylongtap: function(e){
    console.log(e.timeStamp + '- long tap')
  },
  mytouchstart: function(e){
    console.log(e.timeStamp + '- touch start')
    this.setData({startPoint: [e.touches[0].pageX, e.touches[0].pageY]});
  },
  mytouchmove: function(e){
    
    var curPoint = [e.touches[0].pageX,e.touches[0].pageY];
    var startPoint = this.data.startPoint;
    if(curPoint[0] <= this.data.startPoint[0]){
      if(Math.abs(curPoint[0]-startPoint[0])>= Math.abs(curPoint[1]-startPoint[1])){
        console.log(e.timeStamp + '- touch left move')
      }else{
        if(curPoint[1]>= startPoint[1]){
          console.log(e.timeStamp + '- touch down move')
        }else{
          console.log(e.timeStamp + '- touch up move')
        }
      }
    }else{
      if(Math.abs(curPoint[0]-startPoint[0])>= Math.abs(curPoint[1]-startPoint[1])){
        console.log(e.timeStamp + '- touch right move')
      }else{
        if(curPoint[1]>= startPoint[1]){
          console.log(e.timeStamp + '- touch down move')
        }else{
          console.log(e.timeStamp + '- touch up move')
        }
      }
    }
  },
  mytouchcacel: function(e){
    console.log(e.timeStamp + '- touch cancel')
    
  },
  mytouchend: function(e){
    console.log(e.timeStamp + '- touch end')
    
  }
})
