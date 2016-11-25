var componentpath = "/pages/component";
Page({
  data:{
    btnType: 'primary',
    btnSize: 'default',
    loading: true,
    btnPlain: false,
    btnHidden: true,
    loadingHidden: true,
    toastHidden: true,
    loadingText: '加载中...',
    textHidden: false
  },
  //容器布局
  openFlexPage: function(event){
    wx.navigateTo({
      url: componentpath + '/flex/myflex'
    });
  },
  //按钮
  openBtnPage: function(event){
  	wx.navigateTo({
      url: componentpath + '/button/buttons'
    });
  },
  //完成提示
  toast1Change: function(event){
  	this.setData({toastHidden: true});
  },
  //开关
  redirectToPage: function(event){
    
  },
  //获取网络数据
  getAjaxData: function(event){
    wx.navigateTo({
      url: componentpath + '/myrequest/myreq'
    });


  },
  //跳转标签页面
  toLabelPage: function(event){
    wx.navigateTo({
      url: componentpath + '/labels/labels'
    });
  },
  //跳转地图页面
  toMapPage: function(event){
    /*wx.getLocation({
      type: 'wgs84',
      success:function(res){
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })*/
    wx.navigateTo({
      url: componentpath + '/map/map'
    });
  },
  toUploadFilePage: function(){
    wx.navigateTo({
      url: componentpath + '/uploadfile/uploadfile'
    });
  },
  onPullDownRefresh: function(e){
    console.log("onPullDownRefresh")
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