// miniprogram/pages/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {value: 'ifSeat', name: '硬座', checked: 'true'},
      {value: 'ifHard', name: '硬卧'},
      {value: 'ifSoft', name: '软卧'},
      {value: 'ifNoSeat', name: '无座'},
    ]
  },
  radioChange(e) {
 
    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
  },
  buyFalse:function(e){
    wx.navigateTo({
      url: '../searchRes/searchRes',
    })
  },
  buySuccess:function(e){
    wx.navigateTo({
      url: '../searchRes/searchRes',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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