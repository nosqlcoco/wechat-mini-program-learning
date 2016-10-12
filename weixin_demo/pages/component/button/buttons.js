Page({
  data:{
    btnType: 'primary',
    defaultSize: 'default',
    miniSize: 'mini',
    warnSize: 'default',
    btnPlain: true,
    btnHidden: true,
    disabled: true,
    loading: true,
    formreset: 'reset',
    toastHidden: true
  },
  clickMe: function(){
      this.setData({toastHidden: false});
  },
  toastChange: function(){
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
  },
  onPullDownRefresh: function(e){
    console.log('onPullDownRefresh')
  }
})