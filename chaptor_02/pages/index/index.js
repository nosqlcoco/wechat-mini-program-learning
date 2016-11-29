//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    btnWidth: 200,
    touchLog:"",
    lastTapDiffTime: 0,
    startPoint: [0,0]
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
  ////触摸事件，判断单击还是双击
  mytap: function(e){
    var curTime = e.timeStamp;
    var lastTime = this.data.lastTapDiffTime;
    if(lastTime > 0){
      //如果两次单击间隔小于300毫秒，认为是双击
      if(curTime - lastTime < 300){
        console.log(e.timeStamp + '- db tap')
      }else{
        console.log(e.timeStamp + '- tap')
      }
    }else{
      console.log(e.timeStamp + '- first tap')
    }
    this.setData({lastTapDiffTime: curTime});
  },
  //识别长按
  mylongtap: function(e){
    console.log(e.timeStamp + '- long tap')
  },
  //触摸开始
  mytouchstart: function(e){
    console.log(e.timeStamp + '- touch start')
    console.log(e.touches.length);
    this.setData({startPoint: [e.touches[0].pageX, e.touches[0].pageY]});
  },
  //触摸点移动
  mytouchmove: function(e){
    //当前触摸点坐标
    var curPoint = [e.touches[0].pageX,e.touches[0].pageY];
    var startPoint = this.data.startPoint;
    if(curPoint[0] <= this.data.startPoint[0]){
      if(Math.abs(curPoint[0]-startPoint[0])>= Math.abs(curPoint[1]-startPoint[1])){
        console.log(e.timeStamp + '- touch left move')
      }else{
        if(curPoint[1]>= startPoint[1]){
          this.setData({btnWidth: this.data.btnWidth-1})
          console.log(e.timeStamp + '- touch down move')
        }else{
          this.setData({btnWidth: this.data.btnWidth+1})
          console.log(e.timeStamp + '- touch up move')
        }
      }
    }else{
      if(Math.abs(curPoint[0]-startPoint[0])>= Math.abs(curPoint[1]-startPoint[1])){
        console.log(e.timeStamp + '- touch right move')
      }else{
        if(curPoint[1]>= startPoint[1]){
          this.setData({btnWidth: this.data.btnWidth-1})
          console.log(e.timeStamp + '- touch down move')
        }else{
          this.setData({btnWidth: this.data.btnWidth+1})
          console.log(e.timeStamp + '- touch up move')
        }
      }
    }
  },
  //触摸被中断
  mytouchcacel: function(e){
    console.log(e.timeStamp + '- touch cancel')
    
  },
  //触摸结束
  mytouchend: function(e){
    console.log(e.timeStamp + '- touch end')
    
  },
  onPullDownRefresh: function(e){
    console.log('onPullDownRefresh')
  }
})
