// pages/article/list.js
var app = getApp()
var httpclient = require('../../utils/httpclient.js')
Page({
  data:{
    //分页当前页
    pageIdx: 0,
    //文章列表
    articles: []
  },
  onLoad:function(options){
    //传入类型
    var type = options.type;
    //专栏文章
    if(type === 'column'){
      var path = options.path;
      this.setData({desc: options.desc})
      //查询数据
      this.getColumnArticle(path);
    }else if(type === 'search'){//搜索文章
      this.setData({desc: options.text})
      //查询数据
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
  //根据专栏路径查询
  getColumnArticle: function(path){
    var that = this;
    httpclient.req(
      '/wxclub' + path + '/' + that.data.pageIdx,
      {
        apiName: 'WX_CLUB_ARTICLES',
      },
      'GET',
      function(res){
        var datalist = res.data.data || [];
        that.setData({articles: datalist})
        
        for(var i = 0; i < datalist.length; i++){
          //将文章放到本地缓存
          wx.setStorage({
            key: datalist[i]['id'],
            data: datalist[i]
          });
        }
      }
    )
  },
  //根据文章标题查询
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
        var datalist = res.data.data || [];
        that.setData({articles: datalist})
        
        for(var i = 0; i < datalist.length; i++){
          //将文章放到本地缓存
          wx.setStorage({
            key: datalist[i]['id'],
            data: datalist[i]
          });
        }
      }
    )
  }
})