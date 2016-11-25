//aboutMe.js
//获取应用实例

var app = getApp()
Page({
  data: {
    
    dataDetail:{}
  },
  //页面渲染
   onLoad: function (data) {
     var dataArry=[];
     var that=this;
     dataArry=[
       {
         id:1,
         title:'非常标题01非常标题01非常标题01非常标题01非常标题',
         contter:"非常标题01为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择“是”，开发者工具会帮助我们在开发目录里生成一个简单的 demo",
         time: '2016-12-11',
         urlImg:'../../image/viewd.jpg'
         }, {
         id:2,
         title:'非常标题02',
         contter:"非常标题02为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择“是”，开发者工具会帮助我们在开发目录里生成一个简单的 demo",
         time: '2016-12-11',
         urlImg:'../../image/viewd02.jpg'
        },
         {
         id:3,
         title:'非常标题03',
         contter:"非常标题03为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择“是”，开发者工具会帮助我们在开发目录里生成一个简单的 demo",
         time: '2016-12-11',
         urlImg:'../../image/viewd03.jpg'
        }, {
         id:4,
         title:'非常标题04',
         contter:"非常标题04为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择“是”，开发者工具会帮助我们在开发目录里生成一个简单的 demo",
         time: '2016-12-11',
         urlImg:'../../image/viewd02.jpg'
        }, {
         id:5,
         title:'非常标题05',
         contter:"非常标题05为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择“是”，开发者工具会帮助我们在开发目录里生成一个简单的 demo",
         time: '2016-12-11',
         urlImg:'../../image/viewd02.jpg'
        }, {
         id:6,
         title:'非常标题06',
         contter:"为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择“是”，开发者工具会帮助我们在开发目录里生成一个简单的 demo",
         time: '2016-12-11',
         urlImg:'../../image/viewd02.jpg'
        }, {
         id:7,
         title:'非常标题07',
         contter:"为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择“是”，开发者工具会帮助我们在开发目录里生成一个简单的 demo",
         time: '2016-12-11',
         urlImg:'../../image/viewd02.jpg'
        }
    ];
      for(var i=0;i<dataArry.length;i++){
        if(dataArry[i].id==data.id){
          //更新数据
          that.setData({
            dataDetail:dataArry[i]
          })
        }
      }
     
  },
  //事件处理函数
  bindViewTapMe: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})


