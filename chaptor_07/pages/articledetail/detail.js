// pages/articledetail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{
    avatarUrl: '',
    nickName: '',
    remark: ''

  },
  onLoad:function(options){
    var that = this;
    var id = options.id;
    //根据文章ID，从本地缓存中获取文章
    wx.getStorage({
      key: id,
      success: function(res){
        var data =res.data;
       //将标题栏设置为文章标题
        wx.setNavigationBarTitle({
          title: data.title,
          success: function(res) {
            
          }
        })
        that.setData({
          avatarUrl: data.author.headimg,
          nickName: data.author.nickname,
          remark: data.author.remark
          //content: data.content
        })
        //使用wxParse将html转为wxml,请在github上自行参考wxParse
        WxParse.wxParse('content', 'html', data.content, that,5);
      }
    })
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