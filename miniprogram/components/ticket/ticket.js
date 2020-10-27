// components/ticket.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

        from : String,
        to : String,
        fromTime : String,
        toTime : String,
        Id : String,
        time : String,
        ifSeat : String,
        ifHard : String,
        ifSoft : String,
        ifNoSeat : String
        
  },

  /**
   * 组件的初始数据
   */
  data: {
      
  },

  /**
   * 组件的方法列表
   */
  methods: {
      buy:function(e){
        wx.navigateTo({
          url: '../buy/buy',
        })
      }
  }
})
