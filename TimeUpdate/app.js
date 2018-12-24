http://www.thenewstep.com// JavaScript Document
var padDate = function (value) {
	return value < 10 ? '0' + value : value;
}
new Vue({
	el:"#vue-app",
	data:{
		date:new Date()
	},
	filters:{
		formatDate:function (value) {   //这里的value就是需要过滤的数据
			var date = new Date(value);
			var year = date.getFullYear();
			var month = padDate(date.getMonth() + 1);
			var day = padDate(date.getDate());
			var hours = padDate(date.getHours());
			var minutes = padDate(date.getMinutes());
			var seconds = padDate(date.getSeconds());
			//讲整理好的数据返回出去
			return year + '-'+ month +'-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        }
	},
	mounted:function () {
		var _this = this;   //声明一个变量指向Vue实例this，保证作用于一致
		this.timer = setInterval(function (){
			_this.date = new Date();   //修改数据date
		},1000);
    },
	beforeDestroy:function () {
		if(this.timer){
			clearInterval(this.timer);   //清楚定时器
		}

    }
});