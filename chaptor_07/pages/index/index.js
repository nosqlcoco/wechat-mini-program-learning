//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   gridIcons: [
      {icon:'1.png',text:'新手训练营',path:'/column/1',desc:'这是新手上路的专栏，辅助新手0基础开始上路'},
      {icon:'2.jpg',text:'深度思考',path:'/column/2',desc:'小程序深度思考，技术、商业、未来的一切'},
      {icon:'3.png',text:'精品问答',path:'/column/3',desc:'这里汇总了的技术问答问题，看看你的问题能否解决'},
      {icon:'4.png',text:'社区攻略',path:'/column/4',desc:'玩转社区，你需要了解的规则都在这里'},
      {icon:'5.png',text:'填坑系列',path:'/column/5',desc:'toBeMN的填坑之路系列，带你跳过开发中的那些坑'},
      {icon:'6.jpg',text:'JS新手学习',path:'/column/7',desc:'丁小柒JavaScript新手学习系列，带你从零入门快上车'},
      {icon:'7.jpg',text:'小程序基础篇',path:'/column/10',desc:'JeremyLu的高品质基础篇，对生命周期、数据解密、数据绑定等做深度分析'},
      {icon:'8.jpg',text:'框架细节',path:'/column/6',desc:'Roluce 框架细节系列，带你解密那些容易忽略的细节'},
      {icon:'9.png',text:'IDE心得',path:'/column/8',desc:'微信Web开发者工具使用心得，工欲善其事必先利其器'}
   ],
   inputShowed: false,
   inputVal: ""
  },
  onLoad: function () {
    
  },
  showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
    search: function(e){
        wx.navigateTo({
          url: '/pages/article/list?type=search&text=' + this.data.inputVal,
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
    scancode: function(e){
        wx.scanCode({
          success: function(res){
            console.log(res)
            var result = res.result;
            console.log(result)
              var url = result.replace('wa://','').replace('http://','');
              console.log(url)
              wx.navigateTo({
                url: url,
                success: function(res){
                  // success
                }
              })
            
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
