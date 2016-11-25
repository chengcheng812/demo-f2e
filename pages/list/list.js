//list.js
//获取应用实例
var app = getApp()
Page({
  data: {
    arryList:[
       {
         id:1,
         title:'非常标题01非常标题01非常标题01非常标题01非常标题',
         time: '2016-12-11',
         urlImg:'../../image/viewd.jpg'
         }, {
         id:2,
         title:'非常标题02',
         time: '2016-12-11',
         urlImg:'../../image/viewd02.jpg'
        },
         {
         id:3,
         title:'非常标题03',
         time: '2016-12-11',
         urlImg:'../../image/viewd03.jpg'
        }, {
         id:4,
         title:'非常标题04',
         time: '2016-12-11',
         urlImg:'../../image/viewd02.jpg'
        }, {
         id:5,
         title:'非常标题05',
         time: '2016-12-11',
         urlImg:'../../image/viewd02.jpg'
        }, {
         id:6,
         title:'非常标题06',
         time: '2016-12-11',
         urlImg:'../../image/viewd02.jpg'
        }, {
         id:7,
         title:'非常标题07',
         time: '2016-12-11',
         urlImg:'../../image/viewd02.jpg'
        }
    ]
  },
  //事件处理函数
   
  gotoDel: function(event) {
    console.log(event.target.dataset)
    var that=this;
    var listId=event.target.dataset.listid;
    wx.navigateTo({
      url: '../detail/detail?id='+listId,
      success:function(data){
        console.log("success")
        console.log("success",data)
      }
    })
  },
  //页面渲染,接口请求实例
   onLoad: function () {
     var that=this;
     var page={
        pageSize: 10 ,
        currentPage:1
      }
     wx.request({
      url: 'http://test.app.wang-guanjia.com/background-manage/goods/getGoodsManageList', //仅为示例，并非真实的接口地址
      method:'post',
      data: {
        page:page
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
     
  }
})

