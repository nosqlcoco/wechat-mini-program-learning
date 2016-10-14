//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello 小程序',
    userInfo: {},
    progressWith: 0
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
    wx.playBackgroundAudio({
      dataUrl: 'http://120.202.249.204/ich_flag/yinyueshiting.baidu.com/data2/music/42386104/73190311476338461128.mp3?xcode=c6cc0c6d9ee25e5758a651629ec11350',
      title: '朋友',
      coverImgUrl: 'http://musicdata.baidu.com/data2/pic/89838191/89838191.jpg',
      success: function(res){
        console.log('加载成功')
        setInterval(function(){
          wx.getBackgroundAudioPlayerState({
            success: function(res){
              console.log(res)
              /*var prog = parseInt(res.currentPosition) / parseInt(res.duration);
              console.log(prog)
              $this.setData({progressWith:prog});*/
            },
            complete: function(res){
              console.log(res);
            }
          })
        },1000);
      }
    })
  },
  //暂停
  pauseplay: function(e){
     console.log('pause')
     wx.pauseBackgroundAudio()
     wx.getBackgroundAudioPlayerState({
       success: function(res){
        console.log(res)
       }
     })
  },
  //停止播放
  stopplay: function(e){
      console.log('stop')
      wx.stopBackgroundAudio()
      wx.getBackgroundAudioPlayerState({
          success: function(res){
          console.log(res)
        }
      })
    },
    //快进
    forward: function(e){
      wx.getBackgroundAudioPlayerState({
       success: function(res){
        wx.seekBackgroundAudio({
          position: res.currentPosition + 5
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
    }
})
