// pages/article/list.js
var app = getApp()
var httpclient = require('../../utils/httpclient.js')
Page({
  data:{
    pageIdx: 0,
    articles: []
  },
  onLoad:function(options){
    var type = options.type;
    if(type === 'column'){
      var path = options.path;
      this.setData({desc: options.desc})
      this.getColumnArticle(path);
    }else if(type === 'search'){
      this.setData({desc: options.text})
      this.searchArticle(options.text);
    }
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
  },
  getColumnArticle: function(path){
    var that = this;
    httpclient.req(
      '/wxclub' + path + '-' + that.data.pageIdx,
      {
        apiName: 'WX_CLUB_ARTICLES',
      },
      'GET',
      function(res){
        var datalist = [];
        datalist = res.data.data;
        that.setData({articles:datalist})
        
        for(var i = 0; i < datalist.length; i++){
          wx.setStorage({
            key: datalist[i]['id'],
            data: datalist[i]
          });
        }
      },
      function(){

      }
    )
  },
  searchArticle: function(text){
    var that = this;
    httpclient.req(
      '/wxclub/column/search/' + that.data.pageIdx,
      {
        apiName : 'WX_CLUB_SEARCH',
        text: text
      },
      'GET',
      function(res){
        var datalist = [];
        datalist = res.data.data;
        that.setData({articles:datalist})
        
        for(var i = 0; i < datalist.length; i++){
          wx.setStorage({
            key: datalist[i]['id'],
            data: datalist[i]
          });
        }
      },
      function(res){

      }
    )
  }
})