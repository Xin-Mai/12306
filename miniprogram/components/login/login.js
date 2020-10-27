Component({
  options:{
    multipleSlots:true
  },
  data:{
    app:getApp(),
    login:false,
    warn:true,
    message:"",
    message1:"请输入正确用户名",
    message2:"密码错误",
    message3:"请输入身份证后4位",
    usrName:"",
    usrPw:"",
    usrId:-1,

  },
  methods:{
    login:function(event) {
      if(this.checkName()&&this.checkPassword()&&this.checkID())
      {
        this.data.app.setLogin(true);
        this.login=getApp().globalData.is_login;
        wx.showToast({
          //title:this.login.toString()
          title:"登录成功"
        })
        this.triggerEvent("loginSuccess",true);
      }
    },
    checkName:function() {
      return true;
    },
    checkPassword(){
      return true;
    },
    checkID(){
      console.log(this.data.usrId);
      if(this.data.usrId>999&&this.usrId<10000)
        return true;
      else{
        this.setData({message:this.data.message3});
        this.setData({warn:false});
      }
      return false;
    },
    usrNameInput(e){

    },
    usrPwInput(e){
      this.setData({usrPw:e.detail.value});
    },
    usrIdInput(e){
      
      this.setData({usrId:e.detail.value});
    }
  }
})