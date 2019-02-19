new Vue({
	el:"#app",
	data:{
		list:[
			{
                id:1,
				name:'iPhone7',
				price:6188,
				count:1,
				choose:false
			},
            {
                id:2,
                name:'iPad Pro',
                price:5888,
                count:1,
                choose:false
            },
            {
                id:3,
                name:'MacBook Pro',
                price:21488,
                count:1,
                choose:false
            }
		]
	},
	computed:{
		totalPrice:function () {
			var total = 0;
			for(var i = 0; i < this.list.length; i++){
				var item = this.list[i];
				if (item.choose){
                    total += item.price * item.count;
				}
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
	},
	methods:{
		handleReduce:function (index) {
			if(this.list[index].count === 1) return;
			this.list[index].count--;
        },
		handleAdd:function (index) {
			this.list[index].count++;
        },
		handleRemove:function (index) {
			this.list.splice(index,1);
        },
		check(index){
		    if(arguments.length == 0){
		        for(var i=0;i<this.list.length;i++){
                    this.list[i].choose = true;
		            document.getElementsByClassName("check1")[i].checked=true;
                }
            }else{
                if(!this.list[index].choose){
                    this.list[index].choose = true;
                    document.getElementsByClassName("check1")[index].checked=true;
                }else {
                    this.list[index].choose = false;
                    document.getElementsByClassName("check1")[index].checked=false;
                }
            }
		}
    }

});


