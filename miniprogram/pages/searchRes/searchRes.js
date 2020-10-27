// pages/searchRes/searchRes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticket:[{
      from : '北京',
      to : '上海',
      fromTime : '21:21',
      toTime : '09:21',
      Id : 'D705',
      time : '12小时0分钟',
      ifSeat : '14张',
      ifHard : '30张',
      ifSoft : '6张',
      ifNoSeat : '7张'
    },
    {
      from : '北京',
      to : '上海',
      fromTime : '22:21',
      toTime : '10:21',
      Id : 'D706',
      time : '12小时0分钟',
      ifSeat : '20张',
      ifHard : '15张',
      ifSoft : '17张',
      ifNoSeat : '6张'
    },
    {
      from : '北京',
      to : '上海',
      fromTime : '23:21',
      toTime : '11:21',
      Id : 'D707',
      time : '12小时0分钟',
      ifSeat : '16张',
      ifHard : '30张',
      ifSoft : '5张',
      ifNoSeat : '35张'
    }
  ]
  },
  buy: function(e){
    
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