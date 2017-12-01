window.onload=function(){
	var MUS=$('#music_bg').get(0);//转化成JQ

	touch.on('#music_btn','tap',function(){
		if(	MUS.paused){

			$("#music_btn").addClass("box");

			MUS.play();	
		}else{

			$("#music_btn").removeClass("box");

			MUS.pause();
	
		}
	})

	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    // loop: true,
	    // effect : 'cube',
	    // cube: {
	       // shadowScale:0.01
	    // },
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	      swiperAnimateCache(swiper); //隐藏动画元素 
	      swiperAnimate(swiper); //初始化完成开始动画
	    }, 
	    onSlideChangeEnd: function(swiper){ 
	      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	    },
	    onTouchEnd: function (swiper) {                 
	            swiperAnimate(swiper);
	            //swiper每页上都有动画，当翻到此页时动画才会显示，但是会遇到翻页翻到一半并没有完全翻过去，导致此页的动画已经隐藏，而下一页的动画还没有执行，所以会出现画面空白的问题。
	    } 
	})

















}
