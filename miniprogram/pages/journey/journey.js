// pages/journey/journey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    app:getApp(),
    is_login:getApp().globalData.is_login,
    login:null,

  },

  scan:function(){
    wx.scanCode({
      onlyFromCamera: true,
    })
  },

  loginSuccess:function(state){
    this.setData({is_login:true});
    console.log("trigger"+this.data.is_login);
    if(this.data.is_login){
      this.onLoad();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    //this.is_login=getApp().globalData.is_login;
    this.login=this.selectComponent("#login");
    //wx.hideHomeButton();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if(this.data.is_login!=getApp().globalData.is_login)
      this.setData({is_login:getApp().globalData.is_login});
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})