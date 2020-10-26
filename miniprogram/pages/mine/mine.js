// pages/mine/mine.js
Page({

  data: {
    app:getApp(),
    is_login:getApp().globalData.is_login,
    login:null,

  },

  order:function(options){
    wx.navigateTo({
      url: '../order/order',
    })
  },

  ticket:function(options){
    wx.navigateTo({
      url: '../ticket/ticket',
    })
  },

  passenger:function(options){
    wx.navigateTo({
      url: '../passenger/passenger',
    })
  },

  password_change:function(options){
    wx.navigateTo({
      url: '../password_change/password_change',
    })
  },

  loginSuccess:function(state){
    this.setData({is_login:true});
    console.log("trigger"+this.data.is_login);
    if(this.data.is_login){
      this.onLoad();
    }
  },
  account_tied:function(options){
    wx.navigateTo({
      url: '../account_tied/account_tied',
    })
  },

  search_seat:function(options){
    wx.navigateTo({
      url: '../search_seat/search_seat',
    })
  },

  search_more:function(options){
    wx.navigateTo({
      url: '../search_more/search_more',
    })
  },

  more_service:function(options){
    wx.navigateTo({
      url: '../more_service/more_service',
    })
  },



  /**
   * 页面的初始数据
   */
  data: {
    is_login:false,
    app:getApp(),
    login:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.login=this.selectComponent("#login");
    console.log("mine onload");
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
    if(this.is_login!=getApp().globalData.is_login){
      this.setData({is_login:getApp().globalData.is_login});
      this.onLoad();
    }
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