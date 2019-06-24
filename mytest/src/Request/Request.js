import axios from 'axios'

export default {
  get:function (table , query, cb) {
    axios.get('http://splash.com?table='+table+'&query='+JSON.stringify(query)).then(function (res) {
      cb(res);
    })
  },
  postbase:function(cb){
    axios.post('https://www.scaniaclub.com.cn/trade_back_exhibition/filter_options',{query:{}}).then(function (res) {
      cb(res);
    }).catch(function (err) {
      //console.log('22222222222222222222',err);
    })
  },
  postcars:function (query, cb) {
    $.ajax({
            type: "post",
            url: "https://www.scaniaclub.com.cn/trade_back_exhibition/filter_result",
            data: query,
            dataType: "json"
        }).then(function (res) {
      //console.log(res);
      cb(res);

    });

    /*axios.post('http://192.168.1.195:83/trade_back_exhibition/filter_result',JSON.stringify(query)).then(function (res) {
      cb(res);
      console.log('333333333333333',res);
    })*/
  },
  postdetail:function (query,cb) {
    $.ajax({
      type: "post",
      url: "https://www.scaniaclub.com.cn/trade_back_exhibition/track_detail",
      data: {id:query},
      dataType: "json"
     /* async:false*/
    }).then(function (res) {
      //console.log(res);
      cb(res);
    });

    /*axios.post('http://192.168.1.195:83/trade_back_exhibition/track_detail',query).then(function (res) {
    cb(res);
    console.log('66666666',res);
  })*/
  }
};


