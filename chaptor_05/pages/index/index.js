//index.js
//获取应用实例
var app = getApp()
var httpclient = require('../../utils/httpclient.js')
Page({
  data: {
    btnType: 'primary',
    btnSize: 'default',
    btnPlain: false,

    nickname: '',
    city: '',
    loginCode: '',

    encryptedData:'',
    iv:'',
    userInfo: {},
    sessionId: '',
    openId: '',
    unionId: '',
    nickname1: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  //登录
  wxlogin: function(e){
    var that = this
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo: userInfo,
        nickname: userInfo.nickName,
        city: userInfo.city,
        loginCode: app.globalData.loginCode,
        encryptedData: app.globalData.encryptedData,
        iv: app.globalData.iv
      })
    })
  },
  // 从服务端获取sessionId
  get3rdSessionId: function(e){
    var that = this;
    //根据code获取sessionsession_key和openid
    wx.showToast({
      title: '正在请求',
      icon: 'loading',
      duration: 10000
    });

    httpclient.req(
      '/wx/getSession',
      {
          apiName: 'WX_CODE',
          code: this.data.loginCode
      },
      'GET', 
      function(result){
        wx.hideToast()
        var sessionId = result.data.data.sessionId;
        that.setData({sessionId: sessionId})
        wx.setStorageSync('sessionId', sessionId)
      },
      function(result){
        console.log(result)
      }
    );
  },
  //解密用户敏感数据
  getUserAllData: function(e){
    var that = this;
    wx.showToast({
      title: '正在请求',
      icon: 'loading',
      duration: 10000
    })
    httpclient.req(
      '/wx/decodeUserInfo',
      {
        apiName: 'WX_DECODE_USERINFO', 
        encryptedData: this.data.encryptedData,
        iv: this.data.iv,
        sessionId: wx.getStorageSync('sessionId')
      },
      'GET', 
      function(result){
        wx.hideToast()
        var data = JSON.parse(result.data.data);
        that.setData({
          openId: data.openId,
          unionId: data.unionId,
          nickname1: data.nickName
        })
      },
      function(result){
        console.log(result)
      }
    );
  }
})
