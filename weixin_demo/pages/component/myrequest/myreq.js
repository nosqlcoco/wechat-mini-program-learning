var util = require('../../../utils/util');
Page({
  data:{
    // text:"这是一个页面" 
    loadingText: '加载中...',
    loadingHidden: true,
    toastHidden: true
  },
  onPullDownRefresh: function(e){
    console.log( util.getDate())
    var that = this;
    this.setData({"loadingHidden": false});
    wx.setNavigationBarTitle({
        title: '微信小程序Demo'
    });
    wx.showNavigationBarLoading();
    util.request({name:'xiaoqiang'},getApp().globalData.server + '/test',function(res){
      wx.stopPullDownRefresh()
      console.log(res.data)
      that.setData({loadingHidden: true,toastHidden: false});
      wx.hideNavigationBarLoading()
    })
  },
   //完成提示
  toast1Change: function(event){
  	this.setData({toastHidden: true});
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  }
})