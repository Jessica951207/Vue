$(function(){
    var slideArray=new Array(), //定义数组保存Slide对象
        cSlide=$('.cSlide'), //Slide窗口
        cSlide_ul=$('.cSlide_ul'), //Slide UL
        slidePoint=$('.item_point'), //Slide焦点
        slideLocation=0,
        touchX,
        touchendX;

    //定义Slide对象
    var Slide=function(bannerWidth,slideDuration,animateDuration,bannerIndex,slideUL,count,isSlide,slidePoint){
        this.bannerWidth=bannerWidth;
        this.slideDuration=slideDuration;
        this.animateDuration=animateDuration;
        this.bannerIndex=bannerIndex;
        this.slideUL=slideUL;
        this.count=count;
        this.isSlide=isSlide;
        this.slidePoint=slidePoint;
    };
    Slide.prototype={
        //定时轮播
        setTimer:function(){
            var _this=this;
            this.setInterval=setInterval(function () {
                ++_this.bannerIndex;
                _this.slide();
            }, _this.slideDuration)
        },
        clearTimer:function(){
            if (this.setInterval){
                clearInterval(this.setInterval);
            }
        },
        resetTimer:function(){
            this.clearTimer();
            this.setTimer();
        },
        //焦点点击
        pointClick:function(pointIndex){
            this.bannerIndex = pointIndex;
            this.slide();
            this.resetTimer();
        },
        //左箭头点击
        doLeft:function(){
            if (this.isSlide)return;
            --this.bannerIndex;
            //console.log(this.bannerIndex);
            this.slide();
            this.resetTimer();
        },
        //右箭头点击
        doRight:function(){
            if (this.isSlide)return;
            ++this.bannerIndex;
            //console.log(this.bannerIndex);
            this.slide();
            this.resetTimer();
        },
        //轮播
        slide:function(){
            if (this.isSlide)return;
            this.isSlide = true;
            var _this=this;

            //console.log(this.bannerIndex);
            this.slideUL.stop(true, true).animate({
                    'margin-left': (_this.bannerIndex + 1) * -_this.bannerWidth
                }, _this.animateDuration,
                function () {
                    //console.log(_this.bannerIndex)
                    if (_this.bannerIndex > _this.count - 1) {
                        _this.slideUL.css({
                            'margin-left': -_this.bannerWidth
                        });
                        _this.bannerIndex = 0;
                    }
                    else if (_this.bannerIndex < 0) {
                        _this.slideUL.css({
                            'margin-left': _this.count * -_this.bannerWidth
                        });
                        _this.bannerIndex = _this.count - 1;
                    }
                    _this.isSlide = false;
                }
            );

            this.slidePoint.find('li').removeClass('isSelected').eq(this.bannerIndex > this.count - 1 ? 0 : this.bannerIndex).addClass("isSelected");
        }
    };

    (function(){
        for(let i=0; i<cSlide.length;i++){
            cSlide.eq(i).addClass('cSlide'+i).attr('data-index',i);
            cSlide_ul.eq(i).addClass('cSlide_ul'+i);
            slidePoint.eq(i).addClass('item_point'+i);

            var slideItem=new Slide($('.cSlide'+i).width(),5000,500,0,$('.cSlide_ul'+i),$('.cSlide_ul'+i+' li').length,false,$('.item_point'+i));

            slideArray.push(slideItem);
            $('.cSlide_ul'+i+' li').last().clone().prependTo($('.cSlide_ul'+i));
            $('.cSlide_ul'+i+' li').eq(1).clone().appendTo($('.cSlide_ul'+i));

            //根据轮播图数量添加焦点
            for (let n = 0; n < slideArray[i].count; n++) {
                $('.item_point'+i).append('<li data-point="'+n+'"></li>')
            }
            $('.item_point'+i+'>li').eq(0).addClass('isSelected').css('margin-left',0);

            setBasicData(i);
            //开始轮播
            slideArray[i].setTimer();
            //console.log(slideArray[i].bannerWidth);
        }
    }());
    $(window).resize(function(){
        for(let i=0; i<cSlide.length;i++){
            slideArray[i].bannerWidth=$('.cSlide'+i).width();
            setBasicData(i);
        }
    });

    //设置轮播区域宽度
    function setBasicData(index){
        $('.cSlide_ul'+index).css({"margin-left":-slideArray[index].bannerWidth});
        cSlide_ul.eq(index).css('width',slideArray[index].bannerWidth*(slideArray[index].count+2));
        cSlide_ul.eq(index).find(".cSlide_item").css('width',slideArray[index].bannerWidth);
    }

    $('.doLeft').click(function(){
        slideLocation=$(this).parents('.cSlide').attr('data-index');
        slideArray[slideLocation].doLeft();
    });
    $('.doRight').click(function(){
        slideLocation=$(this).parents('.cSlide').attr('data-index');
        slideArray[slideLocation].doRight();
    });
    $('.item_point li').click(function(){
        var pointIndex=Number($(this).attr('data-point'));
        //console.log(pointIndex);
        slideLocation=$(this).parents('.cSlide').attr('data-index');
        slideArray[slideLocation].pointClick(pointIndex);
    });
    //手机滑屏
    $('.cSlide_box').on({
        touchstart: function () {
            touchX = touchendX = Number(event.touches[0].clientX);
        },
        touchmove: function () {
            event.preventDefault();
            touchendX = Number(event.touches[0].clientX);
        },
        touchend: function () {
            var moveDistance = touchX - touchendX;
            slideLocation=$(this).find('.cSlide').attr('data-index');
            if (moveDistance < -45) {
                if (slideArray[slideLocation].isSlide)return;
                --slideArray[slideLocation].bannerIndex;
                slideArray[slideLocation].slide();
                slideArray[slideLocation].resetTimer();
            } else if (moveDistance > 45) {
                if (slideArray[slideLocation].isSlide)return;
                ++slideArray[slideLocation].bannerIndex;
                slideArray[slideLocation].slide();
                slideArray[slideLocation].resetTimer();
            }
        }
    });
});