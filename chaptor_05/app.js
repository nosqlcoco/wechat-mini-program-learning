//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          that.globalData.loginCode = res.code
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              that.globalData.iv=res.iv
              that.globalData.encryptedData=res.encryptedData
              typeof cb == "function" && cb(that.globalData.userInfo)

            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    loginCode: null,
    encryptedData: null,
    iv: null,
    server: 'https://localhost:8443/weappservice/api/v1',
    appId: 'JWEJIJ345QHWJKENVKF',
    apiNames : ['WX_CODE','WX_CHECK_USER','WX_DECODE_USERINFO']
  }
})