<template>
  <div id="out_box">
    <div class="box">
    <router-view/>
    <div class="mask"></div>
    <!--手机头部-->
    <div class="top mb_show">
      <div class="top_item" data-show="basic_item_one">
        <span>生产时间</span>
        <img src="../images/used_car_09.png" alt="" class="top_icon1 top_icon">
        <img src="../images/used_car_10.png" alt="" class="top_icon1 red_icon">
      </div>
      <div class="top_item" data-show="basic_item_three">
        <span>规格</span>
        <img src="../images/used_car_09.png" alt="" class="top_icon2 top_icon">
        <img src="../images/used_car_10.png" alt="" class="top_icon2 red_icon">
      </div>
      <div class="top_item" data-show="basic_item_four">
        <span>排放标准</span>
        <img src="../images/used_car_09.png" alt="" class="top_icon3 top_icon">
        <img src="../images/used_car_10.png" alt="" class="top_icon3 red_icon">
      </div>
      <div class="top_item" data-show="basic_item_two">
        <span>更多</span>
        <img src="../images/used_car_09.png" alt="" class="top_icon4 top_icon">
        <img src="../images/used_car_10.png" alt="" class="top_icon4 red_icon">
      </div>
    </div>

    <img src="../images/used_car_01.jpg" alt="" class="pc_show">
    <div class="content">
      <!--PC头部-->
      <img src="../images/used_car_02.png" alt="" class="pc_show">
      <!--form表格-->
      <form id="data_form" action="">
        <div class="basic_area">
          <div class="basic">
            <div class="basic_info basic_item_one">
              <label class="basic_item ">
                <span class="basic_title one_title">生产时间：</span>
                <select @change="getData()" name="time1" id="time1" class="item_data item_select" data-missing="最早生产年份"
                        v-model="selectedNum">
                  <option value="" hidden>最早生产年份</option>
                  <option value="0">所有生产时间</option>
                  <option v-for="item in FproductArr" :value="item.value">{{item.text}}</option>
                </select>
                <img src="../images/used_car_13.png" alt="" class="line">
                <select @change="getData()" name="time2" id="time2" class="item_data item_select" data-missing="最晚生产年份"
                        v-model="selectedLastNum">
                  <option value="" hidden>最晚生产年份</option>
                  <option value="0">所有生产时间</option>
                  <option v-for="item in LproductArr" :value="item.value">{{item.text}}</option>
                </select>
                <div :class="{'blue':FirstBlue,'button':isButton,}" @click="SubBtn();">确认</div>
              </label>
            </div>
            <div class="basic_info basic_item_two">
              <label class="basic_item ">
                <span class="basic_title one_title first_title">首次上牌时间：</span>
                <div class="item_right">
                  <select @change="getData()" name="time3" id="time3" class="item_data item_select"
                          data-missing="最早上牌时间" v-model="selectTime">
                    <option value="" hidden>最早上牌时间</option>
                    <option value="0">所有首次上牌时间</option>
                    <option v-for="item in FplateArr" :value="item.value">{{item.text}}</option>
                  </select>
                  <img src="../images/used_car_13.png" alt="" class="line">
                  <select @change="getData()" name="time4" id="time4" class="item_data item_select"
                          data-missing="最晚上牌时间" v-model="selectLastTime">
                    <option value="" hidden>最晚上牌时间</option>
                    <option value="0">所有首次上牌时间</option>
                    <option v-for="item in LplateArr" :value="item.value">{{item.text}}</option>
                  </select>
                </div>
              </label>
            </div>
            <div class="basic_info basic_item_three">
              <label class="basic_item ">
                <div class="basic_title">规格：</div>
                <div class="basic_right">
                  <div class="spec_item" v-for="item in specArr">
                    <span class="mb_show specific">{{item.text}}</span>
                    <input @change="getData()" type="radio" name="spec" class="item_radio" :value="item.value"
                           v-model="specifica"/>
                    <span class="pc_show">{{item.text}}</span>
                  </div>
                </div>
                <div class="clear"></div>
                <div :class="{'blue':FirstBlue,'button':isButton,}" @click="SubBtn();">确认</div>
              </label>
            </div>
            <div class="basic_info basic_item_four">
              <label class="basic_item ">
                <div class="basic_title">排放标准 ：</div>
                <div class="basic_right">
                  <div class="spec_item" v-for="item in emissionArr">
                    <span class="mb_show specific">{{item.text}}</span>
                    <input @change="getData()" type="radio" name="emission" class="item_radio" :value="item.value"
                           v-model="emission"/>
                    <span class="pc_show">{{item.text}}</span>
                  </div>
                </div>
                <div class="clear"></div>
                <div :class="{'blue':FirstBlue,'button':isButton,}" @click="SubBtn();">确认</div>
              </label>
            </div>
            <div class="basic_info basic_item_two">
              <label class="basic_item border_none">
                <div class="basic_title first_title">经销商地区 ：</div>
                <div class="basic_right">
                  <div class="area_item" v-for="item in areaArr">
                    <input @change="getData();changeStatus()" type="radio" name="dealer" class="item_radio area_radio"
                           :value="item.value"
                           v-model="area"/>
                    <span>{{item.text}}</span>
                    <img src="../images/used_car_18.png" alt="" class="radio_pic">
                  </div>
                </div>
                <div class="clear"></div>
                <div :class="{'blue':FirstBlue,'button':isButton,}" @click="SubBtn();">确认</div>
              </label>
            </div>

          </div>
        </div>
      </form>

      <!--车型-->
      <div class="brand_box">
        <div class="brand" v-for="item in readData" @click="clickItem(item)">
          <div class="brand_imgs">
            <img :src="a+item.img" class="brand_pic">
            <img v-if="item.hot" src="../images/used_car_04.png" class="hot_icon">
          </div>
          <div class="brand_info">
            <p class="brand_title">{{item.mod}} </p>
            <p class="brand_mile">{{item.prodtime}}/{{item.drivekm }} <br>{{item.spec}}/{{item.stand}}</p>
            <div  v-if="item.cert"  class="identify">
              <img src="../images/used_car_05.png" class="brand_icon">
              <span class="brand_iden">scania认证</span>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>

      <p class="emptyst" v-if="empty">当前没有对应的二手车</p>

      <!--页码-->
      <div class="page">
        <div class="page_info">
          <el-pagination
            class="pageNum"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            :pager-count="5"
            layout="prev, pager, next"
            :total="pageTotal">
          </el-pagination>
          <a href="#out_box">返回顶部</a>
          <!--<img src="../images/used_car_07.png" @click="preData" alt="" class="page_pic">
          <span v-for="item in pageData" @click="changeData(item-1)">{{item}}</span>
          <img src="../images/used_car_06.png" @click="nextData" alt="" class="page_pic">-->
        </div>
      </div>
    </div>
    </div>

    <div class="footer pc_show">
      <div class="box">
        <div class="footer_left">
          <img src="../images/logo3.png" alt="" class="footer_logo">
          <p>中国北京朝阳区霄云路36号国航大厦2001室</p>
          <p>电话：+86 10 8447 5892</p>
          <p>传真：+86 10 8447 5891</p>
          <p class="ICPnum">© 斯堪尼亚版权所有2018 京ICP备11044648号-1</p>
        </div>
        <div class="footer_right">
          <div class="scan">
            <img src="../images/qrcode_wechat.jpg" alt=""  class="scan_img">
            <p>斯堪尼亚中国微博</p>
          </div>
          <div class="scan">
            <img src="../images/qrcode_weibo.jpg" alt="" class="scan_img">
            <p>斯堪尼亚中国微信</p>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import Requset from '../Request/Request'

  export default {
    name: 'secondhand',
    data() {
      return {
        testData: [
          {
            id:'1',
            mod: 'Scania G410',
            img: require('../images/used_car_03.png'),
            prodtime:'2018年2月',
            drivekm : '25万公里',
            spec:'国五',
            stand : '4x2',
            hot: true,
            cert:true
          },
          {
            id:'2',
            mod: 'Scania G410',
            img: require('../images/used_car_03.png'),
            prodtime:'2018年2月',
            drivekm : '20万公里',
            spec:'国五',
            stand : '4x2',
            hot: true,
            cert:true
          },
        ],
        usedData: [],
        FproductArr: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
        LproductArr: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        FplateArr: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
        LplateArr: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        specArr: [
          {text: '所有规格', value: '0'},
          {text: '4x2', value: '4x2'},
          {text: '6x2', value: '6x2'},
          {text: '6x4', value: '6x4'},
        ],
        emissionArr: [
          {text: '所有排放标准', value: '0'},
          {text: '国四', value: '国四'},
          {text: '国五', value: '国五'},
          {text: '国六', value: '国六'},
        ],
        areaArr: [
          {text: '所有地区', value: '0'},
          {text: 'XXX', value: 'XXX'},
        ],
        selectedNum: '0',
        selectedLastNum: '0',
        selectTime: '0',
        selectLastTime: '0',
        specifica: '0',
        emission: '0',
        area: '0',
        nowread: 0,
        readData: [],
        pageData: [],
        isButton: true,
        submit: false,
        FirstBlue: false,
        SecondBlue: false,
        ThirdBlue: false,
        FourthBlue: false,
        receiveArr: {},
        currentPage: 1,
        pageSize: 8,
        pageTotal:1,
        empty:false,
        a:'https://www.scaniaclub.com.cn'

      }
    },
    mounted() {
      this.requestBase();
      this.assignment();
      this.getData();
      this.loadData();
      this.requestCars();
      this.$nextTick(function () {
        this.changeStatus();
      });
    },
    methods: {
      requestBase() {
        Requset.postbase(this.receiveBase);
      },
      receiveBase(data){
        data.data.spec.splice(0,0,{"text":'所有',"value":0});
        data.data.stand.splice(0,0,{"text":'所有',"value":0});
        data.data.area.splice(0,0,{"text":'所有',"value":0});
        this.FproductArr = data.data.prodtime;
        this.LproductArr = data.data.prodtime;
        this.FplateArr = data.data.licensetime;
        this.LplateArr = data.data.licensetime;
        this.specArr = data.data.spec;
        this.emissionArr = data.data.stand;
        this.areaArr = data.data.area;
      },
      receiveData(data) {
        this.testData = data;
      },
      IsPC(){
        /*判断是否为PC*/
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      },
      changeStatus(){
        if(!this.IsPC()){
          $('.area_item').click(function () {
            $('.area_item').css('background','#f1f1f1').find('.radio_pic').hide();
            $('.area_item span').css('color', '#808080');
            $(this).css('background', '#ccd3df').find('.radio_pic').show();
            $(this).find('span').css('color', '#00235f');
          });
        }
      },
      loadData() {
        $.fn.setEqualHeight = function (ele) {
          var maxHeight = 0, maxElement = null;
          $(ele).css({
            "height": "auto"
          });
          $(ele).each(function () {
            if (($(this).height() + parseInt($(this).css("padding-bottom")) + parseInt($(this).css("padding-top"))) > maxHeight) {
              maxHeight = $(this).height() + parseInt($(this).css("padding-top")) + parseInt($(this).css("padding-bottom"));
              maxElement = this;
            }
          });
          $(ele).not($(maxElement)).each(function () {
            $(this).height(maxHeight - parseInt($(this).css("padding-top")) - parseInt($(this).css("padding-bottom")))
          });
        };

        $(".brand").each(function () {
          $("body").setEqualHeight($(".brand_title", this));
        });
        $(".brand").each(function () {
          $("body").setEqualHeight($(".brand_mile", this));
        });

        /*手机效果*/
        if (!this.IsPC()) {
          $('.brand_mile br').hide();
          $('.footer').hide();
          $('.basic_title ').hide();
          $('.top_item').click(function () {
            var ele = $(this).data('show');
            $('.basic_info').hide();
            $('.top_item').find('span').css('color', '#4d4d4d');
            $('.red_icon').hide();
            $('.top_icon').show();
            $('.' + ele).show();
            $(this).find('span').css('color', '#cf0037');
            $(this).find('.red_icon').show();
            $(this).find('.top_icon').hide();
            $('.mask').show();
          });
          $('.mask').click(function () {
            $('.basic_info').hide();
            $('.mask').hide();
            $('.top_item').find('span').css('color', '#4d4d4d');
            $('.top_item').show();
            $('.red_icon').hide();
            $('.top_icon').show();
          });
          $('.button').click(function () {
            $('.basic_info').hide();
            $('.mask').hide();
            $('.top_item').find('span').css('color', '#4d4d4d');
            $('.red_icon').hide();
            $('.top_icon').show();
          });
        }
      },
      requestCars() {
        Requset.postcars({
          min_prodtime:this.selectedNum,
          max_prodtime :this.selectedLastNum,
          min_licensetime:this.selectTime,
          max_licensetime :this.selectLastTime,
          spec:this.specifica,
          stand :this.emission,
          area:this.area,
          page:this.currentPage,
        },this.receiveCars);
      },
      receiveCars(data){
        this.testData = data.data.result;
        this.readData = data.data.result;
        this.pageTotal = data.data.count;
        if (this.readData == ''){
          this.empty = true;
        }else {
          this.empty = false;
        }

        //console.log('123123123',data)

        /*车辆八个一组*/
     /*   for (var i = 0; i < this.testData.length; i += 8) {
              this.usedData.push(this.testData.slice(i, i + 8))
            }
            this.readData = this.usedData[this.nowread];
            this.readData = this.readData;
            this.pageData = this.usedData.reduce(function (pre, cur, index) {
              pre.push(index + 1)
              return pre
        }, [])*/
      },
      getData() {
        this.requestCars();
        var nav = this.selectedNum + '-' + this.selectedLastNum + '-' + this.selectTime + '-' + this.selectLastTime + '-' + this.specifica + '-' + this.emission + '-' + this.area + '-' + this.currentPage;
        this.$router.push({path: '/', query: {navinfo: nav}});
        //console.log(this.$route.query.navinfo);

        this.submit = false;
        this.FirstBlue = false;
        this.SecondBlue = false;
        this.ThirdBlue = false;
        this.FourthBlue = false;
        if (this.selectedNum != '' && this.selectedLastNum != '') {
          this.submit = true;
          this.FirstBlue = true;
        }
        if (this.specifica != '') {
          this.submit = true;
          this.SecondBlue = true;
        }
        if (this.emission != '') {
          this.submit = true;
          this.ThirdBlue = true;
        }
        if (this.area != '' || (this.selectTime != '' && this.selectLastTime != '')) {
          this.submit = true;
          this.FourthBlue = true;
        }
      },
      assignment() {
        if(this.$route.query.navinfo){
          var assignArr = this.$route.query.navinfo.split('-');
          this.selectedNum = assignArr[0];
          this.selectedLastNum = assignArr[1];
          this.selectTime = assignArr[2];
          this.selectLastTime = assignArr[3];
          this.specifica = assignArr[4];
          this.emission = assignArr[5];
          this.area = assignArr[6];
          this.currentPage = assignArr[7];
          //console.log('8888888888',assignArr);
        }
      },
      handleSizeChange(size) {
        this.pageSize = size;
        //console.log('123', this.pageSize);
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        this.readData = this.usedData[currentPage - 1];
        this.getData();
        this.requestCars();
      },


      /*changeData(index) {
        this.nowread = index;
        this.readData = this.usedData[index]
      },
      nextData() {
        this.nowread = this.nowread + 1;
        if (this.nowread >= this.usedData.length) {
          this.nowread = this.usedData.length - 1
        }
        this.readData = this.usedData[this.nowread]
      },
      preData() {
        this.nowread = this.nowread - 1;
        if (this.nowread <= 0) {
          this.nowread = 0
        }
        this.readData = this.usedData[this.nowread]
      },*/

      clickItem(item) {
        //console.log('我打印的item',item);
        this.$router.push({
          path: '/car',
          query: {id: item.id}
        })
      },


    }
  }
</script>


<style scoped>
  /*  @import "../css/test.css";*/
  /*  @import "../less/global.less";*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  font,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    margin: 0;
    padding: 0;
  }

  article,
  aside,
  canvas,
  figure,
  figure img,
  figcaption,
  hgroup,
  footer,
  header,
  nav,
  section,
  audio,
  video {
    display: block;
  }

  ul,
  li,
  ol {
    list-style: none;
    background: transparent;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    clear: both;
  }

  a,
  a:hover {
    text-decoration: none;
  }

  blockquote {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input[type="submit"]:focus,
  input[type="button"]:focus {
    outline: none;
  }

  :focus {
    outline: 0;
  }

  a img,
  input[type="submit"]::-moz-focus-inner,
  input[type="button"]::-moz-focus-inner {
    border: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: Arial, Microsoft YaHei, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  .clear {
    background: none;
    border: 0;
    clear: both;
    display: block;
    float: none;
    font-size: 0;
    overflow: hidden;
    visibility: hidden;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }

  input,
  a {
    outline: none;
  }

  .clear {
    clear: both;
  }

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  img {
    display: block;
    width: 100%;
    border: none;
  }

  .setbox {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  [v-cloak] {
    display: none;
  }

  /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
  select::-ms-expand {
    display: none;
  }

  html {
    font-size: 16px;
    background: #f7f7f7;
  }

  .mb_show {
    display: none;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Microsoft YaHei, sans-serif;
  }

  img {
    display: block;
    border: none;
  }

  a {
    text-decoration: none;
    color: #4d4d4d;
  }

  .clear {
    clear: both;
  }

  .emptyst{padding: 3%;}

  #out_box{
    width: 100%;
    background: #f7f7f7;
  }
  .box {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    color: #4d4d4d;
  }

  .content {
    width: 78%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .content #data_form {
    position: relative;
    margin-top: -1.5rem;
  }

  .content #data_form .basic_area {
    width: 94%;
    margin: 0 auto;
    z-index: 1;
    background: #FFFfff;
    box-shadow: 0.1px 10px 10px -1px #e5e5e5, 0.1px 10px 10px -1px #e5e5e5;
    margin-bottom: 3%;
  }

  .content #data_form .basic_area .basic {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    padding: 3% 0;
  }

  .content #data_form .basic_area .basic .border_none {
    border-bottom: none !important;
  }

  .content #data_form .basic_area .basic .basic_item {
    display: block;
    padding: 2% 0;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
  }

  .content #data_form .basic_area .basic .basic_item .button {
    display: none;
  }

  .content #data_form .basic_area .basic .basic_item .one_title {
    padding-top: 1%;
  }

  .content #data_form .basic_area .basic .basic_item .basic_title {
    display: inline-block;
    width: 18%;
    font-size: 0.8rem;
    font-weight: bold;
    float: left;
  }

  .content #data_form .basic_area .basic .basic_item .basic_right {
    float: left;
    width: 80%;
  }

  .content #data_form .basic_area .basic .basic_item .basic_right .item_radio {
    margin: 2% 0;
  }

  .content #data_form .basic_area .basic .basic_item .basic_right .spec_item {
    display: inline-block;
    width: 18%;
  }

  .content #data_form .basic_area .basic .basic_item .basic_right .area_item {
    display: inline-block;
    width: 18%;
    margin: 1% 0;
  }

  .content #data_form .basic_area .basic .basic_item .basic_right .area_item .radio_pic {
    display: none;
  }

  .content #data_form .basic_area .basic .basic_item .line {
    width: 3%;
    display: inline-block;
    padding-bottom: 4px;
  }

  .content #data_form .basic_area .basic .basic_item .item_data {
    width: 18%;
    height: 2rem;
    font-size: 0.8rem;
    line-height: 2rem;
    border: 1px solid #dfdfe0;
    margin-top: 0.2rem;
    padding: 0 0.4rem;
  }

  .content #data_form .basic_area .basic .basic_item .item_select {
    /*很关键：将默认的select选择框样式清除*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: #f4f4f5;
  }

  /*.content #data_form .basic_area .basic .basic_item select[disabled] {
    background: #f2f2f2 url("../images/icon.png") no-repeat 96% 50%;
    color: #a0a0a0;
  }*/
  .content #data_form .basic_area .basic .basic_item input[disabled] {
    background: #f2f2f2;
    color: #a0a0a0;
  }

  .content #data_form .basic_area .basic .basic_item input[disabled]::-webkit-input-placeholder {
    color: #a0a0a0;
  }

  .content #data_form .basic_area .basic .basic_item .item_input {
    background: #f4f4f5;
  }

  .content #data_form .basic_area .basic .basic_item .unit {
    font-size: 0.8rem;
    position: absolute;
    right: 0.4rem;
    bottom: 0.5rem;
    color: #adadad;
  }

  .content .brand_box {
    width: 94%;
    margin: 0 auto;
    margin-bottom: 2%;
  }

  .content .brand_box .brand {
    width: 24%;
    margin-left: 1.3%;
    float: left;
    position: relative;
    margin-bottom: 2%;
  }

  .content .brand_box .brand:nth-child(4n+1) {
    margin-left: 0;
  }

  .content .brand_box .brand .hot_icon {
    position: absolute;
    width: 30%;
    top: -2px;
    right: -2px;
  }

  .content .brand_box .brand .brand_info {
    height:100px;
    padding-left: 4%;
    padding-bottom: 6%;
    box-shadow: -2px 3px 10px -1px #e5e5e5, 2px 3px 10px -1px #e5e5e5;
  }

  .content .brand_box .brand .brand_info .brand_title {
    color: #000000;
    font-size: 1rem;
    font-weight: bold;
    margin: 3% 0;
  }
  .content .brand_box .brand .brand_info .brand_mile{
    margin-bottom: 4%;
  }

  .content .brand_box .brand .brand_info .identify .brand_icon {
    display: inline-block;
    width: 10%;
  }

  .content .brand_box .brand .brand_info .identify .brand_iden {
    color: #d5b345;
    font-size: 0.8rem;
    vertical-align: super;
  }

  .content .page {
    width: 94%;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 3%;
    margin-bottom: 5%;
  }

  .content .page .page_info {
    cursor: pointer;
    float: right;
  }

  .content .page .page_info .pageNum {
    float: left;
  }

  .content .page .page_info .page_pic {
    width: auto;
    display: inline-block;
  }

  .footer {
    width: 100%;
    background: #FFFfff;
  }


  @media screen and (max-width: 750px) {
    .pc_show {
      display: none;
    }

    .mb_show {
      display: block;
    }

    html {
      font-size: 3.75vw;
    }

    img {
      width: 100%;
    }

    .mask {
      display: none;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 1;
    }

    .top {
      position: relative;
      z-index: 99;
      background: #FFFfff;
      padding: 3% 0;
      font-size: 1rem;
      font-weight: bold;
      width: 100%;
      margin: 0 auto;
      display: flex !important;
      justify-content: space-between;
    }

    .top .top_item {
      width: 25%;
      text-align: center;
      position: relative;
    }

    .top .top_item .red_icon {
      display: none;
    }

    .top_icon1, .top_icon2, .top_icon3, .top_icon4 {
      width: auto;
      position: absolute;
      top: 8px;
      right: -3px;
    }

    .top .top_item .top_icon2 {
      right: 12px;
    }

    .top .top_item .top_icon3 {
      right: -4px;
    }

    .top .top_item .top_icon4 {
      right: 13px;
    }

    .content {
      width: 100%;
    }

    .content #data_form {
      color: #808080;
      position: absolute;
      padding-top: 2%;
      z-index: 99;
      width: 100%;
    }

    .content #data_form .basic_area {
      width: 100%;
      box-shadow: none;
    }

    .content #data_form .basic_area .basic {
      width: 90%;
      margin: 0 auto;
      padding: 0;
    }

    .content #data_form .basic_area .basic .basic_item_one,
    .content #data_form .basic_area .basic .basic_item_two,
    .content #data_form .basic_area .basic .basic_item_three,
    .content #data_form .basic_area .basic .basic_item_four {
      padding-top: 10%;
      display: none;
    }

    .content #data_form .basic_area .basic .basic_item_two {
      border-bottom: 1px solid #f2f2f2;
      padding-top: 0;
    }

    .content #data_form .basic_area .basic .basic_item {
      border-bottom: none;
      text-align: center;
    }

    .content #data_form .basic_area .basic .basic_item .first_title {
      display: block !important;
      width: 100%;
      font-size: 1rem;
      text-align: left;
      color: #808080;
      margin-bottom: 2%;
    }

    .content #data_form .basic_area .basic .basic_item .basic_right {
      width: 100%;
    }

    .content #data_form .basic_area .basic .basic_item .basic_right .area_item {
      width: 25%;
      margin-left: 5%;
      background: #f1f1f1;
      border-radius: 4px;
      text-align: center;
      position: relative;
      padding: 2% 0;
    }

    .content #data_form .basic_area .basic .basic_item .basic_right .area_item .area_radio {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .content #data_form .basic_area .basic .basic_item .basic_right .area_item .radio_pic {
      display: none;
      position: absolute;
      top: 12px;
      left: 7px;
      width: 16%;
    }

    .content #data_form .basic_area .basic .basic_item .basic_right .spec_item {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f2f2f2;
      width: 100%;
      padding-top: 3% !important;
      /*.specific{
                    display: inline-block;
                  }*/
    }

    .content #data_form .basic_area .basic .basic_item .basic_right .spec_item .item_radio {
      float: right;
    }

    .content #data_form .basic_area .basic .basic_item .line {
      width: 7%;
    }

    .content #data_form .basic_area .basic .basic_item .item_select {
      display: inline-block;
    }

    .content #data_form .basic_area .basic .basic_item .item_data {
      width: 40%;
      height: 2.7rem;
      font-size: 1rem;
    }

    .content #data_form .basic_area .basic .basic_item .button {
      margin: 0 auto;
      margin-top: 12%;
      margin-bottom: 8%;
      background: #999999;
      padding: 3%;
      text-align: center;
      color: #FFFfff;
      display: block;
    }

    .content #data_form .basic_area .basic .basic_item .blue {
      background: #273d5d;
    }

    .content #data_form .basic_area .basic .border_none {
      text-align: left;
    }

    .content .brand_box {
      float: none;
      width: 100%;
    }

    .content .brand_box .brand {
      background: #FFFfff;
      padding: 3%;
      width: 92%;
    }

    .content .brand_box .brand:nth-child(4n+1) {
      margin-left: 1.3%;
    }

    .content .brand_box .brand .brand_imgs {
      width: 45%;
      float: left;
    }

    .content .brand_box .brand .brand_imgs .brand_pic {

    }

    .content .brand_box .brand .brand_info {
      width: 50%;
      float: left;
      box-shadow: none;
    }

    .content .brand_box .brand .brand_title {
      font-size: 1.2rem;
    }

    .content .brand_box .brand .hot_icon {
      width: 10%;
      left: 8.1rem;
      top: 0.65rem;
    }
  }

  .footer{padding: 3% 0;}
  .footer p{line-height: 1.5rem;font-size: 0.8rem;}
  .footer_left{float: left;margin-left: 20%;}
  .footer_right{float: left;margin-left:17%;width: 20%}
  .footer_logo{margin-bottom: 3%;}
  .footer img{width: auto}
  .ICPnum{margin-top: 3%;}
  .scan{margin-left: 3%;width: 45%;float: left}
  .scan p{text-align: center;}
  .scan_img{width: 83%;margin:0 auto}
  /*# sourceMappingURL=global.css.map */

</style>
