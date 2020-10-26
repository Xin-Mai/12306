//app.js
App({
  //全局变量
  globalData:{
    is_login:false
  },
  onLaunch: function () {
    
  },
  setLogin:function(state){
    this.globalData.is_login=state;
    /*wx.showToast({
      title: state.toString(),
    })*/
  }
})
