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
    wx.getStorage({
      key: id,
      success: function(res){
        var data =res.data;
       
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