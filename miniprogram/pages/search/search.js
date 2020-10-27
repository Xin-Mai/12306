// pages/search/search.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region1:['湖北省','武汉市','洪山区'],
    region2:['湖北省','武汉市','洪山区'],
    region3:['湖北省','武汉市','洪山区'],
    date: '2020-10-22',
  },

  bindRegionChange1: function (e) {
     this.setData({
      region1 :  e.detail.value
    });
  },

  bindRegionChange2: function(e) {
    this.setData({
      region2: e.detail.value
    });
  },

  bindDateChange:function(e){
    this.setData({
      date:e.detail.value
      }
    )
  },
  change:function(e){
    this.setData({
      region3 : this.data.region2
    });
    this.setData({
      region2 : this.data.region1
    });
    this.setData({
      region1 : this.data.region3
    });
  },
  search:function(e){
    wx.navigateTo({
      url: '../searchRes/searchRes',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var now=new Date();
    console.log(now.toLocaleDateString());
    this.setData({date:now.toLocaleDateString()});
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