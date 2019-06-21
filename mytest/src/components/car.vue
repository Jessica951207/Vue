<template>
  <div id="out_box">
    <img src="../images/used_car_01.jpg" alt="" class="pc_show">
    <div class="content">
      <div class="back mb_show">
        <img src="../images/used_car_14.png" alt="" class="back_img">
        <span @click="clickBack">返回</span>
      </div>
      <!--轮播-->
      <div class="con_left">
        <div class="slideContent">
          <!--Swiper-->
          <img v-if="infomation.carDetail.hot" src="../images/used_car_04.png" class="hot_icon">
          <div class="swiper-container gallery-top">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in infomation.carDetail.img">
                <img :src="a+item">
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination mb_show"></div>
          </div>


          <div class="box">
            <div class="slide_item">
              <div class="swiper-container gallery-thumbs">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="item in infomation.carDetail.img">
                    <img :src="a+item" class="slide_pic">
                  </div>
                </div>
                <!-- Add Arrows -->
                <div v-if="arrows" class="swiper-button-prev"></div>
                <div v-if="arrows" class="swiper-button-next"></div>

              </div>
            </div>

            <div class="contact pc_show">
              <div class="contact_left">
                <p class="contact_title">销售联络人</p>
                <p>姓名：{{infomation.sale.name}}</p>
                <p>手机号码：{{infomation.sale.tel}}</p>
                <p class="email">邮箱：{{infomation.sale.email}}</p>
              </div>
              <div class="contact_right">
                <p class="contact_title">经销商信息</p>
                <p>姓名：{{infomation.agency.name}}</p>
                <p>手机号码：{{infomation.agency.tel}}</p>
                <p class="email">地址：{{infomation.agency.address}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="con_right">
        <div class="bgm">
          <div class="top">
            <div class="top_one">
              <p class="top_title">{{infomation.carDetail.mod}}</p>
              <div v-if="infomation.carDetail.cert" class="identify">
                <img src="../images/used_car_05.png" alt="" class="brand_icon">
                <span class="ident">scania认证</span>
              </div>
              <div class="clear"></div>
            </div>
            <div class="top_two pc_show">
              <div class="item_info">
                <p class="top_title">{{infomation.carDetail.spec}}</p>
                <p class="top_info">规格</p>
              </div>
              <div class="item_info">
                <p class="top_title">{{infomation.carDetail.stand}}</p>
                <p class="top_info">排放标准</p>
              </div>
              <div class="item_info">
                <p class="top_title">{{infomation.carDetail.prodtime}}</p>
                <p class="top_info">生产时间</p>
              </div>
            </div>
            <div class="top_two mb_show">
              <div class="item_info">
                <p class="top_info">规格 &nbsp;{{infomation.carDetail.spec}}</p>
              </div>
              <div class="item_info">
                <p class="top_info">排放标准 &nbsp {{infomation.carDetail.stand}}</p>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>

        <div class="bgm">
          <div class="tab">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td><span class="mb_show">生产时间</span></td>
                <td><span class="mb_show">{{infomation.carDetail.prodtime}}</span></td>
              </tr>
              <tr>
                <td>行驶公里</td>
                <td>{{infomation.carDetail.drivekm}}</td>
              </tr>
              <tr>
                <td>应用类型</td>
                <td>{{infomation.carDetail.apptype}}</td>
              </tr>
              <tr>
                <td>首次上牌时间</td>
                <td>{{infomation.carDetail.licensetime}}</td>
              </tr>
              <tr>
                <td>当前落户城市</td>
                <td>{{infomation.carDetail.city}}</td>
              </tr>
              <tr>
                <td>驾驶室</td>
                <td>{{infomation.carDetail.cab}}</td>
              </tr>
              <tr>
                <td>液力缓速器</td>
                <td>{{infomation.carDetail.retarder}}</td>
              </tr>
              <tr>
                <td>轴距</td>
                <td>{{infomation.carDetail.wheelbase}}</td>
              </tr>
              <tr>
                <td>底盘号</td>
                <td>{{infomation.carDetail.chanum}}</td>
              </tr>
              <tr>
                <td>发动机型号</td>
                <td>{{infomation.carDetail.engmod}}</td>
              </tr>
              <tr>
                <td>最大马力</td>
                <td>{{infomation.carDetail.maxpow}}</td>
              </tr>
              <tr>
                <td>速比</td>
                <td>{{infomation.carDetail.rearaxlerate}}</td>
              </tr>
              <tr>
                <td>制动类型</td>
                <td>{{infomation.carDetail.brakes}}</td>
              </tr>
              <tr>
                <td>备注</td>
                <td>{{infomation.carDetail.remark}}</td>
              </tr>
            </table>
          </div>
        </div>

        <!--mb联络人-->
        <div class="bgm mb_show">
          <div class="tab">
            <div class="contact">
              <p class="contact_title">销售联络人</p>
              <p>姓名：{{infomation.sale.name}}</p>
              <p>手机号码：{{infomation.sale.tel}}</p>
              <p>邮箱：{{infomation.sale.email}}</p>
            </div>
          </div>
        </div>
        <div class="bgm mb_show">
          <div class="tab">
            <div class="contact">
              <p class="contact_title">销售联络人</p>
              <p>姓名：{{infomation.agency.name}}</p>
              <p>手机号码：{{infomation.agency.tel}}</p>
              <p>地址：{{infomation.agency.address}}</p>
            </div>
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
    import Request from '../Request/Request';
    import Swiper from 'swiper';
    export default {
      name: "car",
      data(){
          return{
            infomation:{
              sale:{
                name:'xxx',
                tel:'xxxxxxxxxx',
                email:'XXXX@XXXX.com'
              },
              agency:{
                name:'xxx',
                tel:'xxxxxxxxxx',
                address :'xxxxxxxxxx'
              },
              carDetail:{
                  mod:'Scania G410',
                  spec:'4x2',
                  stand:'国五',
                  img:[

                  ],
                  prodtime:'XXXXX',
                  drivekm:'XXXXXX',
                  apptype:'XXXXXXXXXXXX',
                  licensetime:	'XXXXXXXXXXXXXX',
                  city:	'XXXXXXXXXXXXXX',
                  cab:'XXXXXXXXXXX',
                  retarder:'XXXXXXXXXXX',
                  wheelbase:'XXXXXXXXXXX',
                  chanum:'XXXXXXXXXXX',
                  engmod:'XXXXXXXXXXX',
                  maxpow:'XXXXXXXXXXX',
                  rearaxlerate:'XXXXXXXXXXX',
                  brakes:'XXXXXXXXXXX',
                  remark:'XXXXXXXXXXX',
                  hot:true,
                  cert:true
              },

            },
            infoData:{},
            arrows:true,
            a:'http://www.scaniaclub.com.cn'
          }
      },
      mounted() {
        this.requestdatail();
        //console.log('我打印的img',this.infomation.carDetail.img);
        //console.log('我传过来的的数据是',this.$route.query);



      },
      methods:{
        requestdatail(){
          Request.postdetail(this.$route.query.id,this.receiveDetail);
          //console.log('我打印的东西',this.$route.query.id);
        },
        receiveDetail(data){
          this.infomation.carDetail = data.data.detail;
          this.infomation.sale = data.data.sale;
          this.infomation.agency = data.data.dealer;
          this.$nextTick(function () {
            this.createSwiper();
            this.isShowsArrows();
          })
        },
        getData(data){
          this.infoData = data;
        },
        createSwiper(){
          var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            observer:true,
            observeParents:true,
            autoplay:true,

          });
          var galleryTop = new Swiper('.gallery-top', {
            loopedSlides: 5, //looped slides should be the same
            observer:true,
            observeParents:true,
            autoplay:true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            thumbs: {
              swiper: galleryThumbs,
            },
            pagination: {
              el: '.swiper-pagination'
            }
          });

        },
        clickBack(){
            this.$router.back(-1);
        },
        isShowsArrows(){
          if (this.infomation.carDetail.img.length < 3) {
            this.arrows = false;
          }else {
            this.arrows = true;
          }
        }

      }
    }
</script>

<style scoped>
  @import "../../node_modules/swiper/dist/css/swiper.css";
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
  }
  .clear {
    clear: both;
  }
  .mb_show {
    display: none!important;
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
  #out_box {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    color: #4d4d4d;
  }
  .content {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 3%;
  }
  .content .con_left {
    width: 48%;
    position: relative;
  }
  .content .con_left .slideContent {
    /*  .gallery-top {
            height: 80%;
            width: 100%;
          */
  }
  .content .con_left .slideContent .hot_icon{
    position: absolute;
    width: 16%;
    z-index: 9;
    top: -1px;
    right: -2px;
  }
  .content .con_left .slideContent .swiper-container {
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .content .con_left .slideContent .swiper-container .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .content .con_left .slideContent .box .slide_item .gallery-thumbs .swiper-slide-thumb-active{opacity: 1!important;}

  .content .con_left .slideContent .swiper-container .swiper-button-prev {
    background: url('../images/used_car_14.png') no-repeat;
    width: 11px;
    height: 18px;
    margin-top: -8px;
    left: 0;
  }
  .content .con_left .slideContent .swiper-container .swiper-button-next {
    background: url('../images/used_car_15.png') no-repeat;
    width: 11px;
    height: 18px;
    margin-top: -8px;
    right: 0;
  }
  .content .con_left .slideContent .box {
    width: 100%;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    border-top: none;
    padding-bottom: 5% ;
  }
  .content .con_left .slideContent .box .slide_item {
    width: 90%;
    margin: 0 auto;
  }
  .content .con_left .slideContent .box .slide_item .gallery-thumbs {
    box-sizing: border-box;
    padding: 10px 0;
  }
  .content .con_left .slideContent .box .slide_item .gallery-thumbs .swiper-slide {

    height: auto;
    opacity: 0.4;
  }
 /* .content .con_left .slideContent .box .slide_item .gallery-thumbs .swiper-slide  img{
    width: 20%;
  }*/
  .content .con_left .slideContent .contact {
    display: flex;
    width: 86%;
    margin: 0 auto;
    margin-top: 5%;
  }
  .content .con_left .slideContent .contact .contact_left,
  .content .con_left .slideContent .contact .contact_right {
    width: 50%;
    font-size: 0.9rem;
  }
  .content .con_left .slideContent .contact  .email{
    word-break: break-all;
  }
  .content .con_left .slideContent .contact  .contact_title {
    color: #000000;
    font-size: 1rem;
    font-weight: bold;
  }
  .content .con_right {
    width: 48%;
  }
  .content .con_right .top {
    padding-top: 5%;
  }
  .content .con_right .top .top_one {
    margin-bottom: 4%;
  }
  .content .con_right .top .top_one .top_title {
    float: left;
    width: 50%;
    color: #000000;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .content .con_right .top .top_one .identify {
    float: right;
  }
  .content .con_right .top .top_one .identify .brand_icon {
    display: inline-block;
    width: 20%;
  }
  .content .con_right .top .top_one .identify .ident {
    color: #d5b345;
    font-size: 1rem;
    vertical-align: super;
  }
  .content .con_right .top .top_two {
    display: flex;
    justify-content: space-between;
  }
  .content .con_right .top .top_two .item_info {
    width: 33.3%;
    text-align: center;
  }
  .content .con_right .top .top_two .item_info:nth-child(1) {
    text-align: left;
  }
  .content .con_right .top .top_two .item_info .top_title {
    color: #000000;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .content .con_right .top .top_two .item_info .top_info {
    color: #b2b2b2;
    font-size: 0.9rem;
  }
  .content .con_right table tr:nth-child(even) {
    background: #f7f7f7;
  }
  .content .con_right table tr:nth-child(1) {
    background: #FFFfff;
  }
  .content .con_right table tr td {
    color: #8a8a8a;
    height: 2rem;
    vertical-align: middle;
  }
  .content .con_right table tr td:nth-child(odd) {
    padding-left: 5%;
  }
  .content .con_right table tr td:nth-child(even){
    padding: 0 5%;
  }



  @media screen and (max-width: 750px) {
    .pc_show {
      display: none!important;
    }
    .mb_show {
      display: block!important;
    }
    html {
      font-size: 3.75vw;
    }
    img {
      width: 100%;
    }

    span.swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
      background: #000;
      opacity: .2;
      margin-left: 5px;
    }
    span.swiper-pagination-bullet-active{background: #ffffff;}

    .content {
      width: 100%;
      display: block;
    }
    .content .back {
      width: 16%;
      padding-left: 1%;
      margin-bottom: 2%;
    }
    .content .back .back_img {
      display: inline-block;
      width: 12%;
    }
    .content .con_left {
      width: 100%;
    }
    .content .con_left .slideContent .box {
      opacity: 0;
      height: 0;
      padding-bottom: 0;
    }
    .content .con_right {
      width: 100%;
      background: #f1f1f1;
    }
    .content .con_right .bgm {
      width: 100%;
      background: #fff;
      margin-top: 2%;
    }
    .content .con_right .bgm .tab {
      width: 90%;
      margin: 0 auto;
      color: #808080;
      padding: 3% 0;
    }
    .content .con_right .bgm .tab .contact {
      width: 90%;
      margin: 0 auto;
    }
    .content .con_right .bgm .tab .contact .contact_title {
      font-size: 1.1rem;
      color: #00235f;
      margin-bottom: 3%;
    }
    .content .con_right .bgm .tab .contact p {
      line-height: 1.5rem;
    }
    .content .con_right .top {
      width: 90%;
      margin: 0 auto;
      padding: 5% 0;
    }
    .content .con_right .top .top_two {
      justify-content: start;
    }
    .content .con_right .top .top_two .item_info {
      float: left;
      background: #f1f1f1;
      border-radius: 4px;
      padding: 3% ;
      margin-left: 3%;
    }
    .content .con_right .top .top_two .item_info .top_info {
      font-size: 1rem;
      color: #b2b2b2;
      text-align: center;
    }
    .content table tr:nth-child(odd) {
      background: #fff !important;
    }
    .content table tr .content .con_right table tr td:nth-child(odd) {
      padding-left: 0;
    }
  }

  .footer{padding: 10% 0 3% 0;}
  .footer p{line-height: 1.5rem;font-size: 0.8rem;}
  .footer_left{float: left;margin-left: 20%;}
  .footer_right{float: left;margin-left:17%;width: 20%}
  .footer_logo{margin-bottom: 3%;}
  .footer img{width: auto}
  .ICPnum{margin-top: 3%;}
  .scan{margin-left: 3%;width: 45%;float: left}
  .scan p{text-align: center;}
  .scan_img{width: 83%;margin:0 auto}
  /*# sourceMappingURL=detail.css.map */

</style>
