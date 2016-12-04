//index.js
var local = require('../../utils/localStorage')
//获取应用实例
var app = getApp()
Page({
  data: {
    storageKey: '',
    storageValue: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
      
  },
  keyIpt: function(e){
    this.setData({
      storageKey: e.detail.value
    })
  },
  valueIpt: function(e){
    this.setData({
      storageValue: e.detail.value
    })
  },

  save: function(e){
    console.log('开始保存')
    wx.setStorageSync(this.data.storageKey + '2', this.data.storageValue)
    console.log('同步保存成功')
    wx.setStorage({
      key: this.data.storageKey + '1',
      data: this.data.storageValue,
      success: function(res){
        console.log('异步保存成功')
      }
    })
    
  },
  getData: function(e){
    //异步获取
    wx.getStorage({
      key: this.data.storageKey + '1',
      success: function(res){
       console.log('我是异步获取的内容: ' + res.data)
      }
    })
    //同步获取
    var valueData = wx.getStorageSync(this.data.storageKey + '1');
    console.log('我是同步获取的内容: ' + valueData);
  },
  getDataInfo: function(e){
    //异步获取
    var storageInfo = wx.getStorageInfoSync();
    console.log("异步获取缓存信息")
    console.log(storageInfo)
    //同步获取
    wx.getStorageInfo({
      success: function(res){
        console.log("同步获取缓存信息")
        console.log(res)
      }
    })
  },
  removeData: function(e){
    //异步删除
    wx.removeStorageSync('String');
    //同步删除
    wx.removeStorage({
      key: 'String',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  clearData: function(e){
    //异步删除
    wx.clearStorageSync()
    //同步删除
    wx.clearStorage({
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
