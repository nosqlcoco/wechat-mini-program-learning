function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getDate(){
  return new Date();
}

function myrequest(data,url,callback){
  wx.request({
      url: url,
      data: data,
      method: 'GET',
      fail: function(){

      },
      success: callback
  });
}
module.exports = {
  formatTime: formatTime,
  getDate : getDate,
  request : myrequest
}
