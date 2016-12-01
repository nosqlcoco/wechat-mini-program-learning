var app = getApp();
function req(url, data, method, success, fail){
    var mydata = data || {};
    mydata['appId'] = app.globalData.appId;
    wx.request({
      url: app.globalData.server + url,
      data: mydata,
      method: method,
      success: success,
      fail: fail,
      complete: function() {
        // complete
      }
    })
}
module.exports = {
  req: req
}