//aboutMe.js
//获取应用实例
var app = getApp()
Page({
  data: {
    aboutImg: {
        titleUrl:'../../image/viewd.jpg',
        titleName:'无所畏惧，勇往直前'
    },
    aboutMeMore:'我是XXX，喜欢研究前端新的技术，还喜欢攀岩，旅游，想了解我更多吗？可以通过以下方式联系我哟哟~',
    arryAbout:[
       {
         mesName:'地址',
         message: '深圳市-南山区-高新园-伟杰大厦',
         },{
         mesName:'QQ',
         message: '2696338755'
        },{
         mesName:'联系电话',
         message: '13558116334'
        },
         
         {
         mesName:'邮箱',
         message: '13558116334@163.com'
        }
    ]
  },
  //事件处理函数
  bindViewTapMe: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})

