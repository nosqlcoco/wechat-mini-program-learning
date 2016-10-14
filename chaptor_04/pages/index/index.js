//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello 小程序',
    userInfo: {},
    progressWith: 0,
    currenduration: 0,
    duration: 0,
    //视频路径
    videoSrc: '../../media/test.mp4',
    intervalId: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //开始播放
  startplay: function(e){
    var $this = this;
    console.log('paly')

    wx.getBackgroundAudioPlayerState({
      success: function(res){
        var s = res.status;
        if(s == 0){
          wx.playVoice()
        }
        $this.setData({duration:Math.ceil(res.duration)});
      }
    })

    wx.playBackgroundAudio({
      dataUrl: 'http://yinyueshiting.baidu.com/data2/music/239833557/739948431476324061128.mp3?xcode=37d73fc57b0c55ac31189f16455400eb',
      title: '悟空',
      coverImgUrl: 'http://musicdata.baidu.com/data2/pic/89838191/89838191.jpg',
      success: function(res){
        var id = $this.setMusicInterval();
        $this.setData({intervalId: id})
      }
    })
  },
  //暂停
  pauseplay: function(e){
     console.log('pause')
     wx.pauseBackgroundAudio()
     clearInterval(this.data.intervalId)
  },
  //停止播放
  stopplay: function(e){
      console.log('stop')
      wx.stopBackgroundAudio()
      this.setData({currenduration:0, progressWith:0})
      clearInterval(this.data.intervalId)
    },
    //快进
    forward: function(e){
      var $this = this;
      wx.getBackgroundAudioPlayerState({
       success: function(res){
        var duration = res.currentPosition;

        if(duration > $this.data.duration + 5){
          duration = $this.data.duration;
        }
        wx.seekBackgroundAudio({
          position: duration
        })
       }
     })
    },
    //快退
    backward: function(e){
      wx.getBackgroundAudioPlayerState({
       success: function(res){
         var currentposition = res.currentPosition;
         if(currentposition <= 5){
           currentposition = 0;
         }else{
           currentposition -= 5;
         }
        wx.seekBackgroundAudio({
          position: currentposition
        })
       }
     })
    },
    setMusicInterval: function(){
      var $this = this;
      var id = setInterval(function(){
          wx.getBackgroundAudioPlayerState({
            success: function(res){
              console.log(res)
              var prog = parseInt(res.currentPosition) / parseInt(res.duration);
              console.log(prog)
              $this.setData({progressWith:prog * 100,currenduration:Math.ceil(res.currentPosition)});
            }
          })
        },1000);
        return id;
    }
})
