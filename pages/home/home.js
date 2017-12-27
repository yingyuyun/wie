// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    name: "Name",
    age: 15
  },
  addhero: function () {
    var user = { name: this.data.name, age: this.data.age }
    var tfboys = this.data.tfboys;
    tfboys.push(user);
    this.setData({
      tfboys: tfboys
    })
    this.setData({
      name: "",
      age: ""
    })
  },
  binkinput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  binkinputAge: function (e) {
    this.setData({
      age: e.detail.value
    })
  },
  // deletehero: function (e) {
  //   var index = e.currentTarget.dataset.index;
  //   var tfboys = this.data.tfboys;
  //   tfboys.splice(index, 1);
  //   this.setData({
  //     tfboys: tfboys
  //   })

  // },
  deletehero: function (e) {
    var index = e.currentTarget.dataset.index;
    var movies = this.data.movies;
    movies.splice(index, 1);
    this.setData({
      movies: movies
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that= this;
    wx.request({
      url: "https://movie.douban.com/j/search_subjects",
      method:"GET",
      dataType:"json",
      data:{
        type:"movie",
        tag:"热门",
        page_limit:"10",
        page_start:"0"

      },
      header:{
        "content-type":"application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res)
        that.setData({
          movies:res.data.subjects
        })
      }
    })
  }
})




